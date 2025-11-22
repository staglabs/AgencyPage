"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (response.ok) {
                router.push('/admin');
            } else {
                setError(data.error || 'Invalid password');
            }
        } catch (error) {
            setError('Login failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen text-foreground flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-center">
                    ADMIN LOGIN
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-xl md:text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                            placeholder="Enter password"
                        />
                    </div>

                    {error && (
                        <div className="text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </motion.div>
        </main>
    );
}

