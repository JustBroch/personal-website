import "./App.css";
import { Hero1 } from "./components/hero1";
import { Navbar1 } from "./components/navbar1";
import { Footer2 } from "./components/footer2";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Careers4 } from "./components/careers4";

import Strand from "./assets/Strand.jpg";
import { Linkedin, Github, Mail } from "lucide-react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Sample data for the components
const aboutData = {
    name: "Just",
    title: "Computer Science Student & Enthusiast",
    description:
        "I'm a computer science student at NTNU who is passionate about technology and innovation. Currently on exchange in Brisbane, Australia, where I'm exploring new perspectives and learning about different cultures. I believe technology can be used to solve real problems and create positive change in the world.",
    image: {
        src: Strand,
        alt: "Photo of me at the beach",
    },
    location: "Brisbane, Australia",
    education: "NTNU - Computer Science",
    interests: ["Coffee", "Travel", "Photography", "Technology", "Innovation"],
    cta: {
        text: "View my experience",
        url: "/careers",
    },
};

const projectsData = [
    {
        title: "Personal Website",
        description:
            "A modern website built with React, TypeScript and shadcn/ui. Responsive design with focus on user experience.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        github: "https://github.com/yourusername/personal-website",
        live: "https://yourwebsite.com",
        featured: true,
    },
    {
        title: "Trading Bot",
        description:
            "An algorithmic trading bot that uses machine learning to analyze market data and make automated trades.",
        technologies: ["Python", "Machine Learning", "Pandas", "NumPy"],
        github: "https://github.com/yourusername/trading-bot",
        featured: true,
    },
    {
        title: "E-commerce Platform",
        description:
            "A fullstack e-commerce solution with user management, payment integration and admin panel.",
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
        github: "https://github.com/yourusername/ecommerce",
    },
];

const contactData = {
    contact: {
        email: "just@example.com",
        location: "Brisbane, Australia",
        phone: "+47 123 45 678",
    },
    socials: [
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/yourusername",
            icon: <Linkedin className="w-4 h-4" />,
        },
        {
            platform: "GitHub",
            url: "https://github.com/yourusername",
            icon: <Github className="w-4 h-4" />,
        },
        {
            platform: "Email",
            url: "mailto:just@example.com",
            icon: <Mail className="w-4 h-4" />,
        },
    ],
    cta: {
        text: "Download CV",
        url: "/cv.pdf",
    },
};

function HomePage() {
    return (
        <>
            <Navbar1 />
            <main>
                <section>
                    <Hero1
                        badge="✨ Coffee?"
                        heading="Hi! I'm Just"
                        description="Enthusiast and computer science student. Currently on exchange in Brisbane, Australia. Always open for coffee and exciting projects."
                        buttons={{
                            primary: {
                                text: "View projects",
                                url: "/projects",
                            },
                            secondary: {
                                text: "Contact me",
                                url: "/contact",
                            },
                        }}
                        image={{
                            src: Strand,
                            alt: "Photo of me at the beach",
                        }}
                    />
                </section>

                <section id="about">
                    <About {...aboutData} />
                </section>

                <section id="projects">
                    <Projects projects={projectsData} />
                </section>

                <section id="contact">
                    <Contact {...contactData} />
                </section>
            </main>
            <Footer2 />
        </>
    );
}

function ProjectsPage() {
    return (
        <>
            <Navbar1 />
            <main>
                <Projects projects={projectsData} />
            </main>
            <Footer2 />
        </>
    );
}

function ContactPage() {
    return (
        <>
            <Navbar1 />
            <main>
                <Contact {...contactData} />
            </main>
            <Footer2 />
        </>
    );
}

function CareersPage() {
    return (
        <>
            <Navbar1 />
            <main>
                <Careers4 />
            </main>
            <Footer2 />
        </>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/careers" element={<CareersPage />} />
            </Routes>
        </Router>
    );
}

export default App;
