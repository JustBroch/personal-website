import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/fade-in";
import {
    Calendar,
    MapPin,
    Building2,
    ArrowRight,
    ExternalLink,
} from "lucide-react";

// Import company logos
import NBIMLogo from "../assets/NBIM_logo.svg";
import ForsvaretLogo from "../assets/forsvaret-norge-seeklogo.png";
import EYDLogo from "../assets/EYD_logo.png";

interface WorkExperience {
    title: string;
    company: string;
    location: string;
    period: string;
    details: string[];
    logo?: string;
    website?: string;
    technologies?: string[];
}

const experiences: WorkExperience[] = [
    {
        title: "Summer Intern, Foreign Exchange and Quantitative Trading",
        company: "Norges Bank Investment Management (NBIM)",
        location: "Oslo, Norway",
        period: "June 2025 – Present",
        details: [
            "Working on optimal trading strategies for currencies, interest rates, and equity indices using regime-aware models in Python.",
            "Collaborating with FX and Quant teams to generalize and apply results across asset classes.",
            "Developing and implementing quantitative models for portfolio optimization.",
        ],
        technologies: [
            "Python",
            "Quantitative Finance",
            "Machine Learning",
            "Trading Systems",
        ],
        logo: NBIMLogo,
    },
    {
        title: "Business Developer",
        company: "EYD",
        location: "Trondheim, Norway",
        period: "June 2023 – July 2024",
        details: [
            "Contributed to privacy vocabulary development for language models.",
            "Built and maintained website in Hubspot, supported CRM and marketing efforts.",
            "Led business development initiatives and client relationship management.",
        ],
        technologies: ["HubSpot", "CRM", "Marketing", "Business Development"],
        logo: EYDLogo,
    },
    {
        title: "Private (Grenadier)",
        company: "Norwegian Army, Artillery Battalion",
        location: "Setermoen, Norway",
        period: "Jan 2019 – July 2019",
        details: [
            "Challenged collaboration skills under highly demanding conditions.",
            "Developed leadership and teamwork abilities in high-pressure environments.",
            "Gained experience in strategic planning and operational execution.",
        ],
        technologies: [
            "Leadership",
            "Teamwork",
            "Strategic Planning",
            "Operations",
        ],
        logo: ForsvaretLogo,
    },
];

interface Careers4Props {
    heading?: string;
    experiences?: WorkExperience[];
}

const Careers4 = ({
    heading = "Work Experience",
    experiences: customExperiences = experiences,
}: Careers4Props) => {
    return (
        <section className="py-32">
            <div className="container max-w-4xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold md:text-4xl mb-4">
                            {heading}
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            My professional journey and the experiences that
                            have shaped my career
                        </p>
                    </div>
                </FadeIn>

                <div className="space-y-8">
                    {customExperiences.map((exp, index) => (
                        <FadeIn key={exp.title} delay={index * 0.1}>
                            <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-l-4 border-l-blue-500">
                                <CardHeader className="pb-4">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                                                    {exp.logo ? (
                                                        <img
                                                            src={exp.logo}
                                                            alt={`${exp.company} logo`}
                                                            className="w-12 h-12 object-contain"
                                                        />
                                                    ) : (
                                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                                            {exp.company
                                                                .split(" ")
                                                                .map(
                                                                    (word) =>
                                                                        word[0]
                                                                )
                                                                .join("")
                                                                .slice(0, 2)}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                        {exp.title}
                                                    </CardTitle>
                                                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                                                        <div className="flex items-center gap-1">
                                                            <Building2 className="w-4 h-4" />
                                                            <span className="font-medium">
                                                                {exp.company}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="w-4 h-4" />
                                                            <span>
                                                                {exp.location}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            <span>
                                                                {exp.period}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <Badge
                                                variant="secondary"
                                                className="w-fit hover:scale-105 transition-transform duration-200"
                                            >
                                                {exp.period}
                                            </Badge>
                                            {exp.website && (
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                    className="hover:scale-105 transition-transform duration-200"
                                                >
                                                    <a
                                                        href={exp.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Visit
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold text-lg mb-3 text-foreground">
                                                Key Responsibilities &
                                                Achievements
                                            </h3>
                                            <ul className="space-y-2">
                                                {exp.details.map(
                                                    (detail, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-3 text-muted-foreground"
                                                        >
                                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                            <span className="leading-relaxed">
                                                                {detail}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        {exp.technologies && (
                                            <div>
                                                <h3 className="font-semibold text-lg mb-3 text-foreground">
                                                    Technologies & Skills
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map(
                                                        (tech, techIndex) => (
                                                            <Badge
                                                                key={techIndex}
                                                                variant="outline"
                                                                className="hover:scale-105 transition-transform duration-200 cursor-default"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.5}>
                    <div className="text-center mt-12">
                        <Button
                            asChild
                            variant="outline"
                            className="hover:scale-105 transition-transform duration-200 group"
                        >
                            <a href="/contact">
                                Let's work together
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </a>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export { Careers4 };
