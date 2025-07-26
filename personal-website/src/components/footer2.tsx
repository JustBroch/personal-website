import JB from "../assets/jb_logo_black.png";

interface MenuItem {
    title: string;
    links: {
        text: string;
        url: string;
    }[];
}

interface Footer2Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
        text: string;
        url: string;
    }[];
}

const Footer2 = ({
    logo = {
        src: JB,
        alt: "JB Logo",
        title: "Just Broch",
        url: "/",
    },
    tagline = "Coffee?",
    menuItems = [
        {
            title: "",
            links: [
                { text: "About", url: "/#about" },
                { text: "Projects", url: "/projects" },
                { text: "Experience", url: "/careers" },
            ],
        },
        {
            title: "",
            links: [{ text: "Get in touch", url: "/contact" }],
        },
        {
            title: "",
            links: [
                {
                    text: "LinkedIn",
                    url: "https://www.linkedin.com/in/justbroch",
                },
                { text: "GitHub", url: "https://github.com/JustBroch" },
            ],
        },
    ],
    copyright = "© 2025 Just Broch. All rights reserved.",
}: Footer2Props) => {
    return (
        <section className="py-32 bg-muted/30">
            <div className="container">
                <footer>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Logo and tagline section */}
                        <div className="md:col-span-2 lg:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <a href={logo.url} className="flex-shrink-0">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        title={logo.title}
                                        className="h-8 w-auto"
                                    />
                                </a>
                                <span className="text-xl font-semibold">
                                    {logo.title}
                                </span>
                            </div>
                            <p className="text-lg font-medium text-muted-foreground">
                                {tagline}
                            </p>
                        </div>

                        {/* Menu sections */}
                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                {section.title && (
                                    <h3 className="mb-4 font-semibold text-foreground">
                                        {section.title}
                                    </h3>
                                )}
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <a
                                                href={link.url}
                                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                                            >
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Copyright section */}
                    <div className="mt-16 pt-8 border-t border-border">
                        <p className="text-center text-sm text-muted-foreground">
                            {copyright}
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export { Footer2 };
