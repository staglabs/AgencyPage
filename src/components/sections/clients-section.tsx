"use client";

import { motion } from "framer-motion";

const clients = [
 "Globex", "Soylent", "Cyberdyne", "Initech", "Hooli", "Veidt", "Tyrell", "Xpress Prints"
];

export default function ClientsSection() {
    return (
        <section className="w-full py-12 border-y border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 md:gap-24 mx-6 md:mx-12">
                        {clients.map((client, j) => (
                            <span key={j} className="text-2xl md:text-4xl font-bold tracking-tighter text-muted-foreground/50 uppercase">
                                {client}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
