import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail } from "react-icons/hi";

export const config = {
    developer: {
        name: "Anas",
    },
    social: {
        github: "anasHammaoui",
        discord: "928057859323871302"
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
            image: "/portfolio/devconnect/1.png",
            technologies: ["Laravel", "Blade", "Livewire", "TailwindCSS", "JavaScript", "Ajax", "Pusher"],
            github: "https://github.com/anasHammaoui/laravel-DevConnect",
        },
        {
            id: 2,
            title: "Gym Minder",
            description: "A comprehensive SaaS platform for gym owners to manage members, track subscriptions, handle payments, and monitor gym analytics. Features dashboard analytics with Chart.js and integrated payment processing with Stripe.",
            image: "/portfolio/gymminder/1.png",
            technologies: ["Laravel", "Blade", "Chart.js", "TailwindCSS", "HTML", "Stripe"],
            github: "https://github.com/anasHammaoui/GymMinder-SaaS"
        },
        {
            id: 3,
            title: "OpenSNZ Attendance System",
            description: "A comprehensive employee attendance management system built for OpenSNZ company. Features front office for employee check-in/check-out and pause tracking, plus back office for HR and admin to monitor employee status, generate reports, and manage settings.",
            image: "/portfolio/opensnz/1.png",
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
                { name: "React", level: "Advanced", hot: true },
                { name: "TypeScript", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert" },
                { name: "JavaScript", level: "Advanced" },
                { name: "Livewire", level: "Intermediate", hot: true }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Laravel", level: "Advanced", hot: true },
                { name: "PHP", level: "Advanced" },
                { name: "MySQL", level: "Advanced" },
                { name: "Laravel API", level: "Advanced", hot: true }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Docker", level: "Intermediate", hot: true },
                { name: "GitLab CI/CD", level: "Intermediate" },
                { name: "VS Code", level: "Expert" },
                { name: "Git", level: "Advanced" }
            ]
        }
    ],
    contactInfo: [
        {
            icon: <FaDiscord className="w-5 h-5" />,
            label: "Discord",
            value: "ahammaoui",
            link: `https://discord.com/users/928057859323871302`
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@anasHammaoui",
            link: `https://github.com/anasHammaoui`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "anashammaoui07@gmail.com",
            link: "mailto:anashammaoui07@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Morocco",
            link: null
        }
    ]
}