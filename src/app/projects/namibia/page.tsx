"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { NamibiaInfraMap } from "@/components/svg/namibia-infra-map";

export default function NamibiaProjectPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          eyebrow="§ Namibia"
          title="Building Africa's AI compute backbone"
          subtitle="Distributed GPU clusters in Southern Africa. A complete national AI infrastructure stack."
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

        {/* Infrastructure map */}
        <section className="py-16 px-6 bg-surface">
          <div className="max-w-4xl mx-auto min-h-[256px]">
            <NamibiaInfraMap />
          </div>
        </section>

        {/* Mission statement */}
        <section className="py-24 px-6 bg-bg">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="§ Mission"
              title="Not a cloud vendor demo"
              align="left"
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-text-2 leading-relaxed text-lg"
            >
              <p>
                Rob led the design and deployment of Namibia&apos;s national AI
                infrastructure — a complete stack spanning LLMs, agent
                frameworks, and edge deployment — purpose-built for a
                developing nation&apos;s connectivity constraints and data
                sovereignty requirements.
              </p>
              <p>
                This wasn&apos;t a cloud vendor demo. This was a real country,
                real infrastructure, real constraints. The project is now
                operational and expanding.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technical architecture */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="§ Architecture"
              title="Built for real constraints"
              align="left"
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-text-2 leading-relaxed"
            >
              <div className="bg-bg border border-border rounded-xl p-6">
                <h3 className="font-semibold text-text mb-3">
                  Connectivity-Aware Design
                </h3>
                <p>
                  Edge nodes operate with intermittent connectivity. The system
                  gracefully handles offline operation with local inference
                  fallback and intelligent sync when connections resume.
                </p>
              </div>

              <div className="bg-bg border border-border rounded-xl p-6">
                <h3 className="font-semibold text-text mb-3">
                  Data Sovereignty
                </h3>
                <p>
                  All processing happens within national boundaries. No data
                  leaves the country. A.L.I.C.E. orchestrates workloads across
                  the distributed infrastructure while respecting these
                  constraints.
                </p>
              </div>

              <div className="bg-bg border border-border rounded-xl p-6">
                <h3 className="font-semibold text-text mb-3">
                  Scalable Foundation
                </h3>
                <p>
                  Built on NemoClaw and OpenClaw for enterprise-grade
                  reliability. The same orchestration patterns that work for
                  national infrastructure scale down to single-developer
                  deployments.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 bg-bg">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-12">
              <StatCard value="3" label="Nodes Live" />
              <StatCard value="40+" label="TFLOPS Capacity" />
              <StatCard value="1" label="Country Operational" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-3xl text-text mb-4"
            >
              Interested in similar infrastructure?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-2 mb-8"
            >
              I consult on AI infrastructure for governments and enterprises
              looking to build sovereign AI capabilities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button asChild href="/contact">
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
