"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const projects = [
    {
        title: "Placement Predictor",
        description: "A predictive model for placement of students in colleges based on their academic performance and preferences.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 relative overflow-hidden group-hover:border-white/20 transition-colors">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>,
    },
    {
        title: "Xpress Prints",
        description: "A website of xpress prints for printing and binding documents.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-gradient-to-br from-black to-neutral-900 border border-white/5 relative overflow-hidden group-hover:border-white/20 transition-colors">
            <div className="absolute inset-0 bg-grid-white/[0.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>,
    },
    // {
    //     title: "Repple Gym App",
    //     description: "A mobile application for a gym to manage their members and bookings.",
    //     header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-neutral-900 border border-white/5 relative overflow-hidden group-hover:border-white/20 transition-colors">
    //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
    //     </div>,
    // },
    // {
    //     title: "SaaS Landing Page",
    //     description: "High-conversion landing page for a B2B software.",
    //     header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-gradient-to-br from-neutral-900 to-black border border-white/5 relative overflow-hidden group-hover:border-white/20 transition-colors">
    //         <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
    //     </div>,
    // },
    // {
    //     title: "AI Research Lab",
    //     description: "Brand identity and website for an AI startup.",
    //     header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-neutral-900 border border-white/5 relative overflow-hidden group-hover:border-white/20 transition-colors">
    //         <div className="absolute inset-0 bg-dot-white/[0.2]" />
    //         <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    //     </div>,
    // },
    // {
    //     title: "Art Gallery Portfolio",
    //     description: "Minimalist portfolio for a contemporary art gallery.",
    //     header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-gradient-to-br from-neutral-800 to-black border border-white/5 relative overflow-hidden group-hover:border-white/20 transition-colors">
    //         <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
    //     </div>,
    // },
];

export default function WorkSection({ id }: { id?: string }) {
    return (
        <section id={id} className="min-h-screen w-full py-24 px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8">
                        WORK
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                        A selection of our recent projects, showcasing our commitment to precision, aesthetics, and performance.
                    </p>
                </motion.div>

                <BentoGrid className="max-w-7xl mx-auto">
                    {projects.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={i % 3 === 0 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
