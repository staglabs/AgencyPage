"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectDetails: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: 'Project request submitted successfully!' });
                setFormData({ name: '', email: '', projectDetails: '' });
            } else {
                setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit request' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Failed to submit request. Please try again.' });
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
        <section className="min-h-screen w-full py-24 px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-20"
                >
                    START A PROJECT
                </motion.h2>

                <div className="max-w-3xl">
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Project Details</label>
                            <textarea
                                rows={4}
                                name="projectDetails"
                                value={formData.projectDetails}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-white/10 resize-none"
                                placeholder="Tell us about your project..."
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
                            className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors sharp-edge text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Request'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
