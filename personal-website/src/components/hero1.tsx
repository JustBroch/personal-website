import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

interface Hero1Props {
    badge?: string;
    heading: string;
    description: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
    image: {
        src: string;
        alt: string;
    };
}

const Hero1 = ({
    badge = "✨ Coffee?",
    heading = "Blocks Built With Shadcn & Tailwind",
    description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
    buttons = {
        primary: {
            text: "Discover all components",
            url: "https://www.shadcnblocks.com",
        },
        secondary: {
            text: "View on GitHub",
            url: "https://www.shadcnblocks.com",
        },
    },
    image = {
        src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
        alt: "Hero section demo image showing interface components",
    },
}: Hero1Props) => {
    return (
        <section className="py-32">
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        {badge && (
                            <FadeIn>
                                <Badge
                                    variant="outline"
                                    className="hover:scale-105 transition-transform duration-200"
                                >
                                    {badge}
                                    <ArrowUpRight className="ml-2 size-4" />
                                </Badge>
                            </FadeIn>
                        )}

                        <FadeIn delay={0.2}>
                            <h1 className="my-6 text-5xl font-bold text-pretty lg:text-7xl">
                                {heading}
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                                {description}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                                {buttons.primary && (
                                    <Button
                                        asChild
                                        className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 group"
                                    >
                                        <a href={buttons.primary.url}>
                                            {buttons.primary.text}
                                        </a>
                                    </Button>
                                )}
                                {buttons.secondary && (
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 group"
                                    >
                                        <a href={buttons.secondary.url}>
                                            {buttons.secondary.text}
                                            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.8} direction="right">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="max-h-96 w-full rounded-md object-cover hover:scale-105 transition-transform duration-500 shadow-lg"
                        />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export { Hero1 };
