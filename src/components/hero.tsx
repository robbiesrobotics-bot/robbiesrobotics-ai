"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroOrchestration } from "@/components/svg/hero-orchestration";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 bg-bg overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-surface/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-text-3 uppercase tracking-[0.15em] mb-6 block"
        >
          Developer · Builder · Creator
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-bold text-text leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Building the infrastructure for machine teams.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-2 text-lg md:text-xl md:text-2xl max-w-[560px] mx-auto mb-8 leading-relaxed"
        >
          Rob Sanchez builds multi-agent AI systems that go from prototype to
          production. Creator of the A.L.I.C.E. framework — built on NemoClaw
          and OpenClaw.
        </motion.p>

        {/* Social proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-3 text-sm mb-8"
        >
          From Namibia&apos;s national AI backbone to distributed edge deployments
          — real infrastructure, real systems, real scale.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" asChild href="/projects">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild href="/about">
            <Link href="/about">About Rob</Link>
          </Button>
        </motion.div>
      </div>

      {/* Hero illustration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 w-full max-w-4xl mt-16"
      >
        <HeroOrchestration />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-text-3" />
        </motion.div>
      </motion.div>
    </section>
  );
}
