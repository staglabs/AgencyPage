"use client";

import { motion } from "framer-motion";

export default function AboutSection({ id }: { id?: string }) {
    return (
        <section id={id} className="min-h-screen w-full py-24 px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-20"
                >
                    ABOUT
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    <div>
                        <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">The Agency</h3>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                            STAGLABS is a digital product studio at the intersection of design and technology. We build brands, websites, and applications that define the future.
                        </p>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            We believe in the power of minimalism and precision. Our work is characterized by sharp edges, bold typography, and a relentless focus on user experience. We don't just build websites; we create digital environments.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">Services</h3>
                            <ul className="space-y-4 text-lg md:text-xl text-muted-foreground">
                                {/* <li className="border-b border-white/10 pb-2">Brand Strategy</li> */}
                                <li className="border-b border-white/10 pb-2">Web Development</li>
                                <li className="border-b border-white/10 pb-2">Application Development</li>
                                <li className="border-b border-white/10 pb-2">UI/UX Design</li>
                                <li className="border-b border-white/10 pb-2">AI Solutions</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">Clients</h3>
                            <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                                <span>Xpress Prints</span>
                                <span>Globex</span>
                                <span>Soylent</span>
                                <span>Cyberdyne</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
