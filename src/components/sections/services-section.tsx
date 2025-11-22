"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CardSpotlight from "@/components/ui/card-spotlight";
import TextReveal from "@/components/ui/text-reveal";

const services = [
    // {
    //     title: "Brand Strategy",
    //     description: "We define your brand's voice, visual identity, and market positioning to create a lasting impact.",
    //     tags: ["Identity", "Positioning", "Voice"],
    // },
    {
        title: "Web Development",
        description: "Building robust, scalable, and high-performance websites using the latest technologies.",
        tags: ["Next.js", "React", "WebGL"],
    },
    {
        title: "Application Development",
        description: "Building custom applications to meet your unique business needs.",
        tags: ["Custom", "Applications", "Development"],
    },
    {
        title: "UI/UX Design",
        description: "Crafting intuitive and visually stunning interfaces that drive user engagement and conversion.",
        tags: ["Web", "Mobile", "Design Systems"],
    },
    {
        title: "AI Solutions",
        description: "Integrating AI into your workflows to enhance efficiency and automation.",
        tags: ["AI", "Integration", "Automation"],
    },
];

export default function ServicesSection() {
    return (
        <section className="min-h-screen w-full py-24 px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <TextReveal className="text-6xl md:text-9xl font-bold tracking-tighter mb-20">
                    SERVICES
                </TextReveal>

                <div className="grid grid-cols-1 gap-6">
                    {services.map((service, i) => (
                        <CardSpotlight key={i} className="p-12 md:p-16">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 relative z-10">
                                <div className="space-y-6 max-w-2xl">
                                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="flex gap-4">
                                        {service.tags.map((tag, j) => (
                                            <span key={j} className="text-xs font-mono uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowUpRight className="w-12 h-12 text-white" />
                                </div>
                            </div>
                        </CardSpotlight>
                    ))}
                </div>
            </div>
        </section>
    );
}
