"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { CodeBlock } from "@/components/ui/code-block";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { AliceNeuralFlow } from "@/components/svg/alice-neural-flow";
import { Zap, MemoryStick, Settings, Eye, RefreshCw, Shield } from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Parallel Agent Execution",
    description:
      "Run multiple agents simultaneously with intelligent task decomposition.",
  },
  {
    icon: MemoryStick,
    title: "Shared Memory Bus",
    description:
      "Agents share context through a unified memory layer for coherent collaboration.",
  },
  {
    icon: Settings,
    title: "Configurable Orchestration",
    description:
      "Define custom delegation strategies, priority rules, and convergence logic.",
  },
  {
    icon: Eye,
    title: "OpenTelemetry Observability",
    description:
      "Built-in tracing and metrics for every agent decision and handoff.",
  },
  {
    icon: Zap,
    title: "Hot-Reload Configs",
    description:
      "Update agent behaviors without restarting the system.",
  },
  {
    icon: Shield,
    title: "Zero-Vendor Lock-in",
    description:
      "Runs on any LLM provider. Switch backends without changing your agent code.",
  },
];

const quickStartYaml = `# alice.config.yaml
agents:
  - name: planner
    model: gpt-4
    role: task decomposition
  
  - name: executor  
    model: gpt-4
    role: action execution
    
  - name: reviewer
    model: gpt-4
    role: quality assurance

orchestration:
  strategy: sequential_with_feedback
  max_iterations: 5
  convergence_threshold: 0.95`;

export default function AliceProjectPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          eyebrow="§ A.L.I.C.E."
          title="Multi-Agent Orchestration Framework"
          subtitle="The open-source framework for coordinating multiple AI agents at production scale."
        >
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button asChild href="https://github.com/robbiesrobotics/alice-agents">
              <Link href="https://github.com/robbiesrobotics/alice-agents">View on GitHub</Link>
            </Button>
            <Button variant="secondary" asChild href="/projects">
              <Link href="/projects">All Projects</Link>
            </Button>
          </div>
        </PageHero>

        {/* Neural flow diagram */}
        <section className="py-16 px-6 bg-surface">
          <div className="max-w-5xl mx-auto">
            <AliceNeuralFlow />
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 bg-bg">
          <div className="max-w-6xl mx-auto">
            <SectionHeading
              eyebrow="§ Features"
              title="Built for production"
              subtitle="Everything you need to coordinate agent teams at scale."
              align="center"
              className="mb-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-surface border border-border rounded-xl p-6"
                >
                  <feature.icon
                    size={24}
                    className="text-primary-2 mb-4"
                  />
                  <h3 className="font-semibold text-lg text-text mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-2 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code example */}
        <section className="py-24 px-6 bg-surface">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="§ Quick Start"
              title="Get running in minutes"
              align="left"
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CodeBlock
                code={quickStartYaml}
                language="yaml"
                filename="alice.config.yaml"
              />
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
              className="font-bold text-3xl md:text-4xl text-text mb-4"
            >
              Ready to orchestrate?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-2 mb-8"
            >
              Start with A.L.I.C.E. today. Built on NemoClaw and OpenClaw for
              enterprise-grade reliability.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button asChild href="https://github.com/robbiesrobotics/alice-agents">
                <Link href="https://github.com/robbiesrobotics/alice-agents">Get Started</Link>
              </Button>
              <Button variant="secondary" asChild href="/contact">
                <Link href="/contact">Talk to Rob</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
