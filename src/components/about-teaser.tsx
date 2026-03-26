"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AboutTerminal } from "@/components/svg/about-terminal";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";

export function AboutTeaser() {
  return (
    <section className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <AboutTerminal />
          </motion.div>

          {/* Text content */}
          <div className="order-1 md:order-2">
            <SectionHeading
              eyebrow="§ About"
              title="I build things that think in parallel."
              align="left"
              className="mb-6"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-text-2 leading-relaxed mb-8"
            >
              <p>
                Developer, open-source author, and AI infrastructure tinkerer. I
                created A.L.I.C.E. because I wanted my AI agents to work
                together like a real team — and nothing on the market did that
                right.
              </p>
              <p>
                Today I split my time between advancing the A.L.I.C.E.
                ecosystem, consulting on AI infrastructure, and building
                AliceFleet — a distribution that brings multi-agent
                orchestration to anyone running their own stack.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-8 mb-8"
            >
              <StatCard value="10+" label="Years Building" />
              <StatCard value="5+" label="Countries" />
              <StatCard value="1" label="Framework That Scales" />
            </motion.div>

            {/* Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="ghost" asChild href="/about">
                <Link href="/about" className="group">
                  Full story
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
