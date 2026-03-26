"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { AboutTerminal } from "@/components/svg/about-terminal";

const timeline = [
  {
    year: "2018",
    title: "First multi-agent experiment",
    description:
      "Started exploring how multiple AI agents could collaborate on complex tasks.",
  },
  {
    year: "2022",
    title: "A.L.I.C.E. framework begins",
    description:
      "Began building A.L.I.C.E. as a personal project to solve real workflow problems.",
  },
  {
    year: "2024",
    title: "Namibia project launches",
    description:
      "Led the design and deployment of Namibia's national AI infrastructure.",
  },
  {
    year: "2025",
    title: "AliceFleet & Mission Control",
    description:
      "Expanded the ecosystem with self-hosted distribution and observability tools.",
  },
  {
    year: "2026",
    title: "OpenClaw integration",
    description:
      "A.L.I.C.E. built on NemoClaw and OpenClaw — enterprise-grade foundations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          eyebrow="§ About"
          title="The story behind the builder"
          subtitle="I build things that think in parallel."
        />

        {/* Bio section */}
        <section className="py-24 px-6 bg-bg">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-text-2 leading-relaxed text-lg"
            >
              <p>
                I&apos;m Rob Sanchez. I&apos;ve been building software for over a
                decade, working across developer tools, distributed systems, and
                AI infrastructure. A.L.I.C.E. started as a personal project to
                solve my own workflow problem and became a multi-agent
                orchestration framework used by developers building real AI
                products — running on NemoClaw and OpenClaw.
              </p>
              <p>
                Today I split my time between advancing the A.L.I.C.E.
                ecosystem, consulting on AI infrastructure for governments and
                enterprises, and building AliceFleet — a distribution that
                brings multi-agent orchestration to anyone running their own
                stack.
              </p>
              <p>
                The Namibia national AI infrastructure project is the work
                I&apos;m proudest of: a complete AI stack purpose-built for real
                connectivity constraints and data sovereignty requirements. Not
                a cloud vendor demo — a real country, real infrastructure, real
                scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 bg-surface">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-12">
              <StatCard value="10+" label="Years Building" />
              <StatCard value="5+" label="Countries" />
              <StatCard value="1" label="Framework That Scales" />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-6 bg-bg">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="§ Timeline"
              title="The journey"
              align="center"
              className="mb-16"
            />

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border-2" />

              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-start gap-8 mb-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 pl-12 md:pl-0">
                    <span className="font-mono text-sm text-primary-2 mb-1 block">
                      {item.year}
                    </span>
                    <h3 className="font-semibold text-xl text-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-2 border-2 border-bg" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition / Namibia highlight */}
        <section className="py-16 px-6 bg-surface">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="§ Recognition"
              title="Namibia's national AI infrastructure"
              subtitle="The anchor credibility signal — a real country, real infrastructure, real scale."
              align="center"
              className="mb-8"
            />
            <p className="text-text-2 leading-relaxed mb-8">
              No other AI infrastructure builder has a live national government
              deployment in a developing market with real connectivity
              constraints. This is the real-world stress test that proves
              A.L.I.C.E. works where others just demo.
            </p>
            <Button asChild href="/projects/namibia">
              <Link href="/projects/namibia">Learn More</Link>
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-bg">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-3xl md:text-4xl text-text mb-4"
            >
              Ready to see the work?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-2 mb-8"
            >
              From A.L.I.C.E. to Namibia to AliceFleet — explore the projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button asChild href="/projects">
                <Link href="/projects">See the Projects</Link>
              </Button>
              <Button variant="secondary" asChild href="/contact">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
