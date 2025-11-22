"use client";

import { motion } from "framer-motion";
import Footer from "@/components/ui/footer";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function CareersForm() {
    const searchParams = useSearchParams();
    const positionParam = searchParams.get("position");
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        position: "",
        resume: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    useEffect(() => {
        if (positionParam) {
            setFormData(prev => ({
                ...prev,
                position: decodeURIComponent(positionParam),
            }));
        }
    }, [positionParam]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/careers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Application submitted successfully!' });
                setFormData({ name: '', email: '', position: '', resume: '' });
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit application' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Failed to submit application. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="relative z-10 px-6 md:px-12 pb-24">
            <div className="max-w-3xl">
                <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
                    <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-xl md:text-3xl focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-xl md:text-3xl focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">Position</label>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-xl md:text-3xl focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                            placeholder="Senior Product Designer"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">Resume / Portfolio Link</label>
                        <input
                            type="text"
                            name="resume"
                            value={formData.resume}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-xl md:text-3xl focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                            placeholder="https://..."
                        />
                    </div>

                    {submitStatus.type && (
                        <div className={`text-sm md:text-base ${submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                            {submitStatus.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 md:px-8 py-3 md:py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors text-base md:text-lg mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default function CareersPage() {
    return (
        <main className="min-h-screen text-foreground pt-32">
            <section className="relative z-10 px-6 md:px-12 mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-8"
                >
                    APPLY NOW
                </motion.h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                    Join our team of visionaries, creators, and engineers.
                </p>
            </section>

            <Suspense fallback={<div className="px-6 md:px-12 pb-24">Loading...</div>}>
                <CareersForm />
            </Suspense>

            <Footer />
        </main>
    );
}
