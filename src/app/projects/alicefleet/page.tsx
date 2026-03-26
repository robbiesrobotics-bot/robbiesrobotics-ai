"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { AlicefleetFleet } from "@/components/svg/alicefleet-fleet";
import { Server, Lock, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Self-Hosted Control",
    description:
      "Run A.L.I.C.E. entirely on your own infrastructure. No cloud dependencies.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description:
      "Your data never leaves your network. Full sovereignty over agent interactions.",
  },
  {
    icon: Zap,
    title: "Edge Deployment",
    description:
      "Deploy to Raspberry Pi clusters, local servers, or private clouds seamlessly.",
  },
  {
    icon: Globe,
    title: "Fleet Management",
    description:
      "Manage multiple nodes from a single control plane. Monitor and update at scale.",
  },
];

export default function AlicefleetProjectPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          eyebrow="§ AliceFleet"
          title="OpenClaw, distributed."
          subtitle="Deploy A.L.I.C.E. agents across a fleet of machines with a single command."
        >
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button variant="secondary" asChild href="/contact">
              <Link href="/contact">Join Waitlist</Link>
            </Button>
            <Button variant="ghost" asChild href="/projects">
              <Link href="/projects">All Projects</Link>
            </Button>
          </div>
        </PageHero>

        {/* Fleet diagram */}
        <section className="py-16 px-6 bg-surface">
          <div className="max-w-4xl mx-auto">
            <AlicefleetFleet />
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 bg-bg">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="§ Features"
              title="Enterprise-grade, self-hosted"
              subtitle="All the power of A.L.I.C.E. with the privacy and control you need."
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
                  <feature.icon size={24} className="text-primary-2 flex-shrink-0 mt-1" />
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

        {/* Architecture */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="§ Architecture"
              title="Built on OpenClaw"
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
                AliceFleet is a distribution of the A.L.I.C.E. multi-agent
                framework built on OpenClaw — the open-source agent runtime
                that provides the underlying orchestration primitives.
              </p>
              <p>
                If you want OpenClaw with an A.L.I.C.E.-native agent layer,
                AliceFleet is the path. It&apos;s designed for teams that need
                the power of multi-agent AI without ceding their data to a
                third party.
              </p>
              <p>
                Ships as an extension of the OpenClaw platform, with
                additional fleet management, distributed inference, and
                edge-optimized agents.
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
              AliceFleet is currently in development. Join the waitlist to get
              early access and shape the roadmap.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button asChild href="/contact">
                <Link href="/contact">Join Waitlist</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
