"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const jobs = [
    {
        title: "Full Stack Developer",
        location: "Remote",
        type: "Flexible",
    },
    {
        title: "Frontend Developer (Creative)",
        location: "Remote",
        type: "Flexible",
    },
    {
        title: "Backend Developer",
        location: "Remote",
        type: "Flexible",
    },
];

export default function CareersSection({ id }: { id?: string }) {
    return (
        <section id={id} className="min-h-screen w-full py-24 px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8">
                        CAREERS
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                        Join our team of visionaries, creators, and engineers. We are always looking for talent that pushes boundaries.
                    </p>
                </motion.div>

                <div className="max-w-4xl">
                    {jobs.map((job, i) => (
                        <div key={i} className="border-t border-white/10 py-12 flex flex-col md:flex-row md:items-center justify-between group hover:bg-white/5 transition-colors px-4 -mx-4">
                            <div>
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">{job.title}</h3>
                                <div className="flex gap-4 text-sm text-muted-foreground uppercase tracking-widest">
                                    <span>{job.location}</span>
                                    <span>•</span>
                                    <span>{job.type}</span>
                                </div>
                            </div>
                            <Link
                                href={`/careers?position=${encodeURIComponent(job.title)}`}
                                className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                            >
                                <span className="text-lg font-medium border-b border-white">Apply Now</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
