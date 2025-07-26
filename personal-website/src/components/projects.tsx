import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    image?: {
        src: string;
        alt: string;
    };
    github?: string;
    live?: string;
    featured?: boolean;
}

interface ProjectsProps {
    heading?: string;
    description?: string;
    projects: Project[];
}

const Projects = ({
    heading = "Projects",
    description = "Some of the projects I've worked on",
    projects,
}: ProjectsProps) => {
    return (
        <section className="py-32">
            <div className="container max-w-6xl mx-auto px-6">
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

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border-0 shadow-lg">
                                {project.image && (
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image.src}
                                            alt={project.image.alt}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {project.featured && (
                                            <Badge className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 animate-pulse">
                                                Featured
                                            </Badge>
                                        )}
                                    </div>
                                )}
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    variant="secondary"
                                                    className="text-xs hover:scale-105 transition-transform duration-200"
                                                >
                                                    {tech}
                                                </Badge>
                                            )
                                        )}
                                    </div>

                                    <div className="flex gap-2">
                                        {project.github && (
                                            <Button
                                                asChild
                                                variant="outline"
                                                size="sm"
                                                className="flex-1 hover:scale-105 transition-transform duration-200 group/btn"
                                            >
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                                                    GitHub
                                                </a>
                                            </Button>
                                        )}
                                        {project.live && (
                                            <Button
                                                asChild
                                                size="sm"
                                                className="flex-1 hover:scale-105 transition-transform duration-200 group/btn"
                                            >
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Projects };
