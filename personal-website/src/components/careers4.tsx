import { Button } from "@/components/ui/button";

interface WorkExperience {
    title: string;
    company: string;
    location: string;
    period: string;
    details: string[];
}

const experiences: WorkExperience[] = [
    {
        title: "Summer Intern, Foreign Exchange and Quantitative Trading",
        company: "Norges Bank Investment Management (NBIM)",
        location: "Oslo",
        period: "June 2025 –",
        details: [
            "Working on optimal trading strategies for currencies, interest rates, and equity indices using regime-aware models in Python.",
            "Collaborating with FX and Quant teams to generalize and apply results across asset classes.",
        ],
    },
    {
        title: "Business Developer",
        company: "EYD",
        location: "Trondheim",
        period: "June 2023 – July 2024",
        details: [
            "Contributed to privacy vocabulary development for language models.",
            "Built and maintained website in Hubspot, supported CRM and marketing efforts.",
        ],
    },
    {
        title: "Private (Grenadier)",
        company: "Norwegian Army, Artillery Battalion",
        location: "Setermoen",
        period: "Jan 2019 – July 2019",
        details: [
            "Challenged collaboration skills under highly demanding conditions.",
        ],
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
            <div className="container max-w-3xl mx-auto px-6">
                <div className="text-center lg:text-left mb-12">
                    <h1 className="text-left text-3xl font-medium md:text-4xl">
                        {heading}
                    </h1>
                </div>

                <div className="flex flex-col gap-12">
                    {customExperiences.map((exp) => (
                        <div key={exp.title} className="grid">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4">
                                <div>
                                    <h2 className="text-xl font-semibold">
                                        {exp.title}
                                    </h2>
                                    <p className="text-muted-foreground">
                                        {exp.company} — {exp.location}
                                    </p>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-2 w-fit md:mt-0 rounded-full pointer-events-none"
                                >
                                    {exp.period}
                                </Button>
                            </div>
                            <ul className="list-disc list-inside mt-4 space-y-1 text-muted-foreground">
                                {exp.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Careers4 };
