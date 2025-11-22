"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface CareerApplication {
    _id: string;
    name: string;
    email: string;
    position: string;
    resume: string;
    createdAt: string;
}

interface ProjectRequest {
    _id: string;
    name: string;
    email: string;
    projectDetails: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const [careerApplications, setCareerApplications] = useState<CareerApplication[]>([]);
    const [projectRequests, setProjectRequests] = useState<ProjectRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'careers' | 'projects'>('careers');
    const router = useRouter();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [careersRes, projectsRes] = await Promise.all([
                fetch('/api/admin/careers', { credentials: 'include' }),
                fetch('/api/admin/projects', { credentials: 'include' }),
            ]);

            if (careersRes.status === 401 || projectsRes.status === 401) {
                router.push('/admin/login');
                return;
            }

            if (careersRes.ok) {
                const careersData = await careersRes.json();
                setCareerApplications(careersData);
            }

            if (projectsRes.ok) {
                const projectsData = await projectsRes.json();
                setProjectRequests(projectsData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' });
            router.push('/admin/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    if (loading) {
        return (
            <main className="min-h-screen text-foreground flex items-center justify-center">
                <div className="text-xl">Loading...</div>
            </main>
        );
    }

    return (
        <main className="min-h-screen text-foreground pt-24 pb-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 md:mb-0"
                    >
                        ADMIN DASHBOARD
                    </motion.h1>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors text-sm md:text-base"
                    >
                        Logout
                    </button>
                </div>

                <div className="flex gap-4 mb-8 border-b border-white/10">
                    <button
                        onClick={() => setActiveTab('careers')}
                        className={`pb-4 px-2 text-sm md:text-base font-bold uppercase tracking-widest transition-colors ${
                            activeTab === 'careers'
                                ? 'border-b-2 border-white'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        Career Applications ({careerApplications.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`pb-4 px-2 text-sm md:text-base font-bold uppercase tracking-widest transition-colors ${
                            activeTab === 'projects'
                                ? 'border-b-2 border-white'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        Project Requests ({projectRequests.length})
                    </button>
                </div>

                {activeTab === 'careers' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {careerApplications.length === 0 ? (
                            <div className="text-muted-foreground text-center py-12">
                                No career applications yet.
                            </div>
                        ) : (
                            careerApplications.map((app) => (
                                <div
                                    key={app._id}
                                    className="border border-white/10 p-6 md:p-8 hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{app.name}</h3>
                                            <p className="text-muted-foreground text-sm md:text-base">{app.email}</p>
                                        </div>
                                        <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
                                            {formatDate(app.createdAt)}
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <div>
                                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                                Position:
                                            </span>
                                            <p className="text-base md:text-lg mt-1">{app.position}</p>
                                        </div>
                                        {app.resume && (
                                            <div>
                                                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                                    Resume/Portfolio:
                                                </span>
                                                <p className="text-base md:text-lg mt-1 break-all">
                                                    <a
                                                        href={app.resume}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white hover:underline"
                                                    >
                                                        {app.resume}
                                                    </a>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </motion.div>
                )}

                {activeTab === 'projects' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {projectRequests.length === 0 ? (
                            <div className="text-muted-foreground text-center py-12">
                                No project requests yet.
                            </div>
                        ) : (
                            projectRequests.map((project) => (
                                <div
                                    key={project._id}
                                    className="border border-white/10 p-6 md:p-8 hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.name}</h3>
                                            <p className="text-muted-foreground text-sm md:text-base">{project.email}</p>
                                        </div>
                                        <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
                                            {formatDate(project.createdAt)}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                            Project Details:
                                        </span>
                                        <p className="text-base md:text-lg mt-2 whitespace-pre-wrap">{project.projectDetails}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </motion.div>
                )}
            </div>
        </main>
    );
}

