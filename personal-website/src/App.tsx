import "./App.css";
import { Hero1 } from "./components/hero1";
import { Navbar1 } from "./components/navbar1";
import { Footer2 } from "./components/footer2";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Careers4 } from "./components/careers4";

import Strand from "./assets/Strand.jpg";
import { Linkedin, Github } from "lucide-react";

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
    location: "Trondheim/Oslo, Norway",
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
        title: "Chef de Cuisine",
        description:
            "Full-stack recipe app built with React, Flask, and PostgreSQL. Deployed to AWS using Docker and Terraform with focus on scalability and availability.",
        technologies: [
            "React",
            "Flask",
            "PostgreSQL",
            "AWS",
            "Docker",
            "Terraform",
        ],
        github: "https://github.com/yourusername/chef-de-cuisine",
        featured: true,
    },
    {
        title: "VervMeg",
        description:
            "Developed a React and TypeScript website showcasing student society positions. Pitched to jury in a final competition, focusing on scalability and financial viability.",
        technologies: [
            "React",
            "TypeScript",
            "Student Societies",
            "Competition",
        ],
        github: "https://github.com/yourusername/vervmeg",
    },
];

const contactData = {
    contact: {
        email: "just1998@live.no",
        location: "Trondheim/Oslo, Norway",
    },
    socials: [
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/justbroch",
            icon: <Linkedin className="w-4 h-4" />,
        },
        {
            platform: "GitHub",
            url: "https://github.com/yourusername",
            icon: <Github className="w-4 h-4" />,
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
                        description="Enthusiast and computer science student. Based in Trondheim/Oslo, Norway. Always open for coffee and exciting projects."
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
