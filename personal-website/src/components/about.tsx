import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Coffee, MapPin, GraduationCap } from "lucide-react";

interface AboutProps {
    name: string;
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
    };
    location: string;
    education: string;
    interests: string[];
    cta?: {
        text: string;
        url: string;
    };
}

const About = ({
    name,
    title,
    description,
    image,
    location,
    education,
    interests,
    cta,
}: AboutProps) => {
    return (
        <section className="py-32">
            <div className="container max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold md:text-4xl mb-4">
                        About me
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Let me tell you a bit about myself
                    </p>
                </div>

                <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <Avatar className="w-24 h-24 md:w-32 md:h-32">
                                <AvatarImage src={image.src} alt={image.alt} />
                                <AvatarFallback className="text-2xl font-bold">
                                    {name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div className="text-center md:text-left">
                                <CardTitle className="text-2xl md:text-3xl mb-2">
                                    {name}
                                </CardTitle>
                                <p className="text-muted-foreground text-lg mb-4">
                                    {title}
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                    <Badge
                                        variant="secondary"
                                        className="flex items-center gap-1"
                                    >
                                        <MapPin className="w-3 h-3" />
                                        {location}
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="flex items-center gap-1"
                                    >
                                        <GraduationCap className="w-3 h-3" />
                                        {education}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">
                                    About me
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {description}
                                </p>
                                {cta && (
                                    <Button asChild>
                                        <a href={cta.url}>
                                            {cta.text}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                )}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <Coffee className="w-5 h-5" />
                                    Interests
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {interests.map((interest, index) => (
                                        <Badge key={index} variant="outline">
                                            {interest}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export { About };
