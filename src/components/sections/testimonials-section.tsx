"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "StagLabs transformed our digital presence. The attention to detail and design precision is unmatched.",
        author: "Anmol Singh",
        role: "Lead Developer, Cyberdyne",
    },
    {
        quote: "A true partner in innovation. They understood our vision and executed it with flawless technical expertise.",
        author: "Siddharth Sharma",
        role: "Founder, Xpress Prints",
    },
    {
        quote: "The best we've worked with. Minimalist, efficient, and incredibly talented team.",
        author: "Aniket Mishra",
        role: "Founder, Repple Gym",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="w-full py-24 px-6 md:px-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-16">
                    What Clients Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((item, i) => (
                        <div key={i} className="space-y-8">
                            <p className="text-2xl md:text-3xl font-medium leading-tight">
                                "{item.quote}"
                            </p>
                            <div>
                                <p className="text-lg font-bold">{item.author}</p>
                                <p className="text-sm text-muted-foreground uppercase tracking-widest">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
