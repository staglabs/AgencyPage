import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full px-6 py-20 md:px-12 md:py-32 text-foreground border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 dither-bg pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
                            STAGLABS
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-md">
                            Forging the future of digital experiences with precision and edge.
                        </p>
                    </div>
                    <div className="mt-12 md:mt-0">
                        <p className="text-sm text-muted-foreground uppercase tracking-widest">
                            © {new Date().getFullYear()} StagLabs Agency
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
                            Sitemap
                        </h3>
                        <Link href="/work" className="text-lg hover:text-muted-foreground transition-colors">Work</Link>
                        <Link href="/about" className="text-lg hover:text-muted-foreground transition-colors">About</Link>
                        <Link href="/updates" className="text-lg hover:text-muted-foreground transition-colors">Updates</Link>
                        <Link href="/careers" className="text-lg hover:text-muted-foreground transition-colors">Careers</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
                            Socials
                        </h3>
                        <Link href="https://x.com/staglabz" className="text-lg hover:text-muted-foreground transition-colors">Twitter</Link>
                        {/* <Link href="#" className="text-lg hover:text-muted-foreground transition-colors">Instagram</Link> */}
                        {/* <Link href="#" className="text-lg hover:text-muted-foreground transition-colors">LinkedIn</Link> */}
                        <Link href="https://github.com/staglabs" className="text-lg hover:text-muted-foreground transition-colors">GitHub</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
