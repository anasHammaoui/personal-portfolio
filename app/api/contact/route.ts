import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// HTML email template
function createEmailHTML(name, email, subject, message) {
 return `
     <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Message</title>
        <style>
            /* Reset and Body Styles */
            body, html {
                margin: 0;
                padding: 0;
                width: 100%;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                background-color: #F4F7F6;
                color: #586574;
            }

            /* Main Container */
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #FFFFFF;
                border: 1px solid #E0E7ED;
                border-radius: 8px;
                overflow: hidden;
            }

            /* Header */
            .header {
                background-color: #334257;
                color: #FFFFFF;
                padding: 30px;
                text-align: center;
            }

            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 500;
            }

            /* Content Area */
            .content {
                padding: 35px;
            }
            
            .content h2 {
                color: #334257;
                font-size: 20px;
                margin-top: 0;
                margin-bottom: 20px;
            }

            /* Information Table */
            .info-table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 30px;
            }
            
            .info-table td {
                padding: 12px 0;
                vertical-align: top;
            }
            
            .info-table .label {
                font-weight: bold;
                color: #334257;
                width: 100px;
            }

            .info-table a {
                color: #4A90E2;
                text-decoration: none;
            }
            
            .info-table a:hover {
                text-decoration: underline;
            }
            
            /* Message Section */
            .message-box {
                background-color: #F8F9FA;
                border: 1px solid #E0E7ED;
                border-radius: 6px;
                padding: 20px;
                line-height: 1.6;
                white-space: pre-wrap;
            }

            /* Call to Action */
            .cta-section {
                text-align: center;
                margin-top: 35px;
            }
            
            .cta-button {
                display: inline-block;
                background-color: #4A90E2;
                color: #FFFFFF;
                text-decoration: none;
                padding: 15px 30px;
                border-radius: 5px;
                font-weight: bold;
                font-size: 16px;
            }
            
            /* Footer */
            .footer {
                background-color: #F4F7F6;
                text-align: center;
                padding: 25px;
                font-size: 13px;
                color: #8896A7;
            }

            .footer p {
                margin: 5px 0;
            }

            /* Responsive Styles */
            @media screen and (max-width: 600px) {
                .container {
                    width: 100% !important;
                    margin: 0;
                    border-radius: 0;
                }
                .content {
                    padding: 25px;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Inquiry Received</h1>
            </div>
            
            <div class="content">
                <h2>Message Details</h2>
                
                <table class="info-table">
                    <tr>
                        <td class="label">From:</td>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <td class="label">Email:</td>
                        <td><a href="mailto:${email}">${email}</a></td>
                    </tr>
                    <tr>
                        <td class="label">Subject:</td>
                        <td>${subject}</td>
                    </tr>
                </table>

                <h2>Message Content</h2>
                <div class="message-box">
                    <p>${message}</p>
                </div>
                
                <div class="cta-section">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" class="cta-button">
                        Respond Now
                    </a>
                </div>
            </div>
            
            <div class="footer">
                <p>This email was sent from your website's contact form.</p>
                <p>&copy; Anas Hammaoui - All Rights Reserved</p>
            </div>
        </div>
    </body>
    </html>
 `;
}

export async function POST(req) {  
  try {
    // Parse request body
    const body = await req.json();    
    const { firstName, lastName, email, subject, message, website } = body;

    // Validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ 
        ok: false, 
        error: "Missing required fields" 
      }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        ok: false, 
        error: "Invalid email address" 
      }, { status: 400 });
    }

    // Honeypot check (for bots)
    if (website) {
      return NextResponse.json({ ok: true }); // Pretend success to bot
    }

    // Combine first and last name
    const name = `${firstName} ${lastName}`;

    // Check environment variables
    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL || !process.env.CONTACT_TO) {
      console.error("Missing environment variables");
      return NextResponse.json({ 
        ok: false, 
        error: "Server configuration error" 
      }, { status: 500 });
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: `Portfolio Contact <${process.env.FROM_EMAIL}>`,
      to: [process.env.CONTACT_TO],
      subject: `💼 ${subject} - from ${name}`,
      html: createEmailHTML(name, email, subject, message),
      replyTo: [email],
    });
    if (data.error) {
      return NextResponse.json({ 
        ok: false, 
        error: `Email service error: ${data.error}` 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      ok: true, 
      message: "Email sent successfully" 
    });

  } catch (error) {
    return NextResponse.json({ 
      ok: false, 
      error: "Internal server error" 
    }, { status: 500 });
  }
}

