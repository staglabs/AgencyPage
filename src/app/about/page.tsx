"use client";

import { motion } from "framer-motion";
import Footer from "@/components/ui/footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen text-foreground pt-32">


            <section className="relative z-10 px-6 md:px-12 mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-8"
                >
                    ABOUT
                </motion.h1>
            </section>

            <section className="relative z-10 px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                <div>
                    <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">The Agency</h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                        STAGLABS is a digital product studio at the intersection of design and technology. We build brands, websites, and applications that define the future.
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        We believe in the power of minimalism and precision. Our work is characterized by sharp edges, bold typography, and a relentless focus on user experience. We don't just build websites; we create digital environments.
                    </p>
                </div>

                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">Services</h2>
                        <ul className="space-y-4 text-lg md:text-xl text-muted-foreground">
                            <li className="border-b border-white/10 pb-2">Web Development</li>
                            <li className="border-b border-white/10 pb-2">Application Development</li>
                            <li className="border-b border-white/10 pb-2">UI/UX Design</li>
                            <li className="border-b border-white/10 pb-2">AI Solutions</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">Clients</h2>
                        <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                            <span>Placement Predictor</span>
                            <span>Xpress Prints</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
