"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Projects Delivered", value: 30, suffix: "+" },
    { label: "Clients Served", value: 20, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <span ref={ref} className="flex items-baseline">
            {isInView && (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {value}
                </motion.span>
            )}
            {suffix}
        </span>
    );
}

export default function StatsSection() {
    return (
        <section className="w-full py-24 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-start">
                        <div className="text-6xl md:text-8xl font-bold tracking-tighter mb-2 flex items-baseline">
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <p className="text-sm md:text-base uppercase tracking-widest text-muted-foreground">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
