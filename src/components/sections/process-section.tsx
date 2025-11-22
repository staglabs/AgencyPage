"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        icon: <Search className="w-8 h-8" />,
        title: "Discovery",
        description: "We dive deep into your brand, audience, and goals to build a solid foundation.",
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        title: "Design",
        description: "Crafting pixel-perfect interfaces that blend aesthetics with intuitive functionality.",
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        title: "Development",
        description: "Writing clean, scalable code to bring the design to life with high performance.",
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Launch",
        description: "Deploying your product to the world and ensuring a smooth takeoff.",
    },
];

export default function ProcessSection() {
    return (
        <section className="w-full py-24 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-16">
                    Our Process
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-none blur-xl" />
                            <div className="relative space-y-6 p-6 border border-white/10 bg-black hover:border-white/30 transition-colors h-full">
                                <div className="w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                                <div className="absolute top-6 right-6 text-4xl font-bold text-white/5 select-none">
                                    0{i + 1}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
