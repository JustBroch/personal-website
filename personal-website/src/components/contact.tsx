import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Mail,
    Linkedin,
    Github,
    MapPin,
    ExternalLink,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

interface ContactInfo {
    email: string;
    location: string;
}

interface SocialLink {
    platform: string;
    url: string;
    icon: React.ReactNode;
}

interface ContactProps {
    heading?: string;
    description?: string;
    contact: ContactInfo;
    socials: SocialLink[];
    cta?: {
        text: string;
        url: string;
    };
}

const Contact = ({
    heading = "Contact",
    description = "Let's have a chat! I'm always open for new opportunities and exciting projects.",
    contact,
    socials,
    cta,
}: ContactProps) => {
    return (
        <section className="py-32">
            <div className="container max-w-4xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold md:text-4xl mb-4">
                            {heading}
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            {description}
                        </p>
                    </div>
                </FadeIn>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Contact Information */}
                    <FadeIn delay={0.2}>
                        <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    Contact Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                                    <Mail className="w-4 h-4 text-muted-foreground" />
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="text-blue-600 hover:text-blue-700 transition-colors"
                                    >
                                        {contact.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                                    <MapPin className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-muted-foreground">
                                        {contact.location}
                                    </span>
                                </div>
                                {cta && (
                                    <Button
                                        asChild
                                        className="w-full mt-4 hover:scale-105 transition-transform duration-200"
                                    >
                                        <a
                                            href={cta.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {cta.text}
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    </FadeIn>

                    {/* Social Links */}
                    <FadeIn delay={0.4}>
                        <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                            <CardHeader>
                                <CardTitle>Social Media</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-3">
                                    {socials.map((social, index) => (
                                        <Button
                                            key={index}
                                            asChild
                                            variant="outline"
                                            className="justify-start h-auto p-3 hover:scale-105 transition-transform duration-200 group"
                                        >
                                            <a
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3"
                                            >
                                                <div className="group-hover:rotate-12 transition-transform duration-200">
                                                    {social.icon}
                                                </div>
                                                <span>{social.platform}</span>
                                                <ExternalLink className="ml-auto w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                            </a>
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export { Contact };
