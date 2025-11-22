"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MagneticButton from "@/components/ui/magnetic-button";

const navItems = [
    // { name: "Work", href: "/work", sectionId: "work" },
    { name: "About", href: "/about", sectionId: "about" },
    { name: "Updates", href: "/updates", sectionId: "updates" },
    { name: "Careers", href: "/careers", sectionId: "careers" },
];

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
        if (isHomePage) {
            e.preventDefault();
            const element = document.getElementById(item.sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white pointer-events-none"
        >
            <Link href="/" className="pointer-events-auto">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <Image
                        src="/logo.png"
                        alt="STAGLABS"
                        fill
                        className="object-contain invert"
                        priority
                    />
                </div>
            </Link>

            <div className="flex items-center gap-6 md:gap-10 pointer-events-auto">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className={cn(
                            "text-sm md:text-base font-medium tracking-tight hover:opacity-70 transition-opacity uppercase",
                            pathname === item.href ? "opacity-100" : "opacity-60"
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
                <MagneticButton>
                    <Link
                        href="/contact"
                        className="hidden md:block px-5 py-2 border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-colors sharp-edge"
                    >
                        Start Project
                    </Link>
                </MagneticButton>
            </div>
        </motion.nav>
    );
}
