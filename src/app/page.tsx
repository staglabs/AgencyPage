"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/ui/footer";
import WorkSection from "@/components/sections/work-section";
import AboutSection from "@/components/sections/about-section";
import UpdatesSection from "@/components/sections/updates-section";
import CareersSection from "@/components/sections/careers-section";
import ContactSection from "@/components/sections/contact-section";
import StatsSection from "@/components/sections/stats-section";
import ClientsSection from "@/components/sections/clients-section";
import ServicesSection from "@/components/sections/services-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ProcessSection from "@/components/sections/process-section";
import FAQSection from "@/components/sections/faq-section";
import CTASection from "@/components/sections/cta-section";
import FloatingShapes from "@/components/ui/floating-shapes";
import Spotlight from "@/components/ui/spotlight";

function SectionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen text-foreground overflow-hidden relative">
      <FloatingShapes />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center z-10 px-6 overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center relative z-10"
        >
          <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter mb-4 mix-blend-difference">
            STAGLABS
          </h1>
          <p className="text-xl md:text-2xl uppercase tracking-[0.2em] text-muted-foreground">
            Digital Experience Agency
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-6 md:left-12 text-xs md:text-sm uppercase tracking-widest text-muted-foreground"
        >
          Scroll to Explore
        </motion.div>
      </section>

      <StatsSection />

      <ClientsSection />

      {/* Sections with Scroll Animation */}
      <SectionWrapper>
        <ServicesSection />
      </SectionWrapper>

      {/* <SectionWrapper>
        <WorkSection id="work" />
      </SectionWrapper> */}

      <SectionWrapper>
        <ProcessSection />
      </SectionWrapper>

      <TestimonialsSection />

      <SectionWrapper>
        <AboutSection id="about" />
      </SectionWrapper>

      <SectionWrapper>
        <UpdatesSection id="updates" />
      </SectionWrapper>

      <SectionWrapper>
        <FAQSection />
      </SectionWrapper>

      <SectionWrapper>
        <CareersSection id="careers" />
      </SectionWrapper>

      <CTASection />

      <SectionWrapper>
        <ContactSection />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
