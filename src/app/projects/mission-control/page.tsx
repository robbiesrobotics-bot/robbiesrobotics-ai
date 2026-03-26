"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { MissionControlWireframe } from "@/components/svg/mission-control-wireframe";
import { Activity, Pause, Play, Search, GitBranch } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "See what every agent is doing, live. Track task progress, token usage, and latency.",
  },
  {
    icon: GitBranch,
    title: "Task Delegation Tracing",
    description:
      "Visualize how tasks decompose and flow through your agent team.",
  },
  {
    icon: Search,
    title: "Output Inspection",
    description:
      "Deep-dive into any agent's reasoning and output. Understand, don't guess.",
  },
  {
    icon: Pause,
    title: "Runtime Control",
    description:
      "Pause and resume agent runs. Kill stuck tasks. Take control when needed.",
  },
];

export default function MissionControlProjectPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          eyebrow="§ Mission Control"
          title="Agent observability, reimagined."
          subtitle="Real-time dashboard for A.L.I.C.E. agent fleets. See everything, control everything."
        >
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button variant="secondary" asChild href="/contact">
              <Link href="/contact">Request Access</Link>
            </Button>
            <Button variant="ghost" asChild href="/projects">
              <Link href="/projects">All Projects</Link>
            </Button>
          </div>
        </PageHero>

        {/* Dashboard wireframe */}
        <section className="py-16 px-6 bg-surface">
          <div className="max-w-4xl mx-auto">
            <MissionControlWireframe />
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 bg-bg">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="§ Features"
              title="Debug at scale"
              subtitle="When you have ten agents working in parallel, you need more than logs."
              align="center"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-surface border border-border rounded-xl p-6 flex gap-4"
                >
                  <feature.icon
                    size={24}
                    className="text-primary-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-text mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-2 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="§ Why it matters"
              title="Logs aren't enough"
              align="left"
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-text-2 leading-relaxed"
            >
              <p>
                When you have ten agents working in parallel, you need more
                than logs. You need to understand the delegation chain — who
                delegated what to whom, why, and what came back.
              </p>
              <p>
                Mission Control gives you that visibility. It&apos;s the
                difference between hoping your agents are doing the right
                thing and knowing they are.
              </p>
              <p>
                Built for teams running A.L.I.C.E. in production. Because
                debugging a ten-agent parallel workflow without this is a
                nightmare.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-bg">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-3xl text-text mb-4"
            >
              Want early access?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-2 mb-8"
            >
              Mission Control is currently in development. Request access to be
              among the first to use it.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button asChild href="/contact">
                <Link href="/contact">Request Access</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
