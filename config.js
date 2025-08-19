import { FaDiscord, FaGithub, FaLinkedin, FaLinkedinIn, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiPhone } from "react-icons/hi";

export const config = {
    developer: {
        name: "Anas",
        last_name: "Hammaoui"
    },
    social: {
        github: "anasHammaoui",
        linkedin: "anashammaoui"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    projects: [
        {
            id: 1,
            title: "DevConnect",
            description: "A social media platform for developers to connect, share code, and collaborate. Features real-time notifications, user profiles, and interactive community features. Built with Laravel and enhanced with Livewire for dynamic user interactions.",
            image: "/portfolio/devconnect/0.png",
            images: [
                "/portfolio/devconnect/0.png",
                "/portfolio/devconnect/1.png",
                "/portfolio/devconnect/2.png",
                "/portfolio/devconnect/3.png",
                "/portfolio/devconnect/4.png",
                "/portfolio/devconnect/5.png",
                "/portfolio/devconnect/6.png",
                "/portfolio/devconnect/7.png"
            ],
            technologies: ["Laravel", "Blade", "Livewire", "TailwindCSS", "JavaScript", "Ajax", "Pusher"],
            github: "https://github.com/anasHammaoui/laravel-DevConnect",
        },
        {
            id: 2,
            title: "Gym Minder",
            description: "A comprehensive SaaS platform for gym owners to manage members, track subscriptions, handle payments, and monitor gym analytics. Features dashboard analytics with Chart.js and integrated payment processing with Stripe.",
            image: "/portfolio/gymminder/0.png",
            images: [
                "/portfolio/gymminder/0.png",
                "/portfolio/gymminder/1.png",
                "/portfolio/gymminder/2.png",
                "/portfolio/gymminder/3.png",
                "/portfolio/gymminder/4.png",
                "/portfolio/gymminder/5.png",
                "/portfolio/gymminder/6.png",
                "/portfolio/gymminder/7.png",
                "/portfolio/gymminder/8.png",
                "/portfolio/gymminder/9.png",
                "/portfolio/gymminder/10.png",
                "/portfolio/gymminder/11.png"
            ],
            technologies: ["Laravel", "Blade", "Chart.js", "TailwindCSS", "HTML", "Stripe"],
            github: "https://github.com/anasHammaoui/GymMinder-SaaS"
        },
        {
            id: 4,
            title: "Global Tex Store",
            description: "An eCommerce store for cash on delivery for garments, built with Next.js, TypeScript, shadcn/ui, i18n, and TailwindCSS.",
            image: "/portfolio/texstore/0.png",
            images: [
                "/portfolio/texstore/0.png",
                "/portfolio/texstore/1.png",
                "/portfolio/texstore/2.png",
                "/portfolio/texstore/3.png",
                "/portfolio/texstore/4.png"
            ],
            technologies: ["Next.js", "TypeScript", "shadcn/ui", "i18n", "TailwindCSS", "AOS Animations"],
        },
        {
            id: 3,
            title: "OpenSNZ Attendance System",
            description: "A comprehensive employee attendance management system built for OpenSNZ company. Features front office for employee check-in/check-out and pause tracking, plus back office for HR and admin to monitor employee status, generate reports, manage settings and pwa support.",
            image: "/portfolio/opensnz/1.png",
            images: [
                "/portfolio/opensnz/1.png",
                "/portfolio/opensnz/2.png",
                "/portfolio/opensnz/3.png",
                "/portfolio/opensnz/4.png",
                "/portfolio/opensnz/5.png",
                "/portfolio/opensnz/6.png"
            ],
            technologies: ["React", "TypeScript", "TailwindCSS", "Laravel API", "PHPSpreadsheet", "Docker", "GitLab CI/CD"],
        }
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "HTML CSS", level: "Advanced" },
                { name: "Bootstrap", level: "Intermediate" },
                { name: "TailwindCSS", level: "Advanced" },
                { name: "JavaScript", level: "Advanced" },
                { name: "TypeScript", level: "Intermediate" },
                { name: "React.js", level: "Advanced", hot: true },
                { name: "Next.js", level: "Advanced", hot: true },
                { name: "Material-UI", level: "Intermediate" },
                { name: "Shadcn", level: "Intermediate" },
                { name: "Livewire", level: "Intermediate" },
                { name: "Blade", level: "Advanced" }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "PHP", level: "Advanced" },
                { name: "Laravel", level: "Advanced", hot: true },
                { name: "REST API", level: "Advanced", hot: true },
                { name: "C", level: "Intermediate" },
                { name: "MySQL", level: "Advanced" },
                { name: "PostgreSQL", level: "Advanced" }
            ]
        },
        {
            title: "Tools & Methodologies",
            icon: <HiCube />,
            description: "Development & Project Management",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Docker", level: "Intermediate", hot: true },
                { name: "Git", level: "Advanced" },
                { name: "GitHub", level: "Advanced", hot: true },
                { name: "GitLab", level: "Advanced" },
                { name: "Jira", level: "Advanced", hot: true },
                { name: "UML", level: "Intermediate" },
                { name: "Figma", level: "Advanced", hot: true },
                { name: "Scrum", level: "Intermediate" }
            ]
        }
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@anasHammaoui",
            link: `https://github.com/anasHammaoui`
        },
        {
            icon: <FaLinkedinIn className="w-5 h-5" />,
            label: "LinkedIn",
            value: "anashammaoui",
            link: "https://www.linkedin.com/in/anas-hammaoui"
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "anashammaoui.dev@gmail.com",
            link: "mailto:anashammaoui.dev@gmail.com"
        },
        {
            icon: <HiPhone className="w-5 h-5" />,
            label: "Phone",
            value: "+212691939918",
            link: "tel:+212691939918"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Morocco",
            link: null
        }
    ]
}