"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ProjectsNodeGrid } from "@/components/svg/projects-node-grid";

const projects = [
  {
    title: "A.L.I.C.E.",
    description:
      "The framework that learned to orchestrate itself. A multi-agent orchestration system for coordinated AI agent teams.",
    tags: ["Open Source", "Multi-Agent", "Python", "NemoClaw", "OpenClaw"],
    href: "/projects/alice",
    status: "live" as const,
  },
  {
    title: "Namibia AI Infrastructure",
    description:
      "Building a country's AI backbone from scratch. National AI infrastructure deployment for the Republic of Namibia.",
    tags: ["Government", "AI Infrastructure", "Edge AI", "International"],
    href: "/projects/namibia",
    status: "live" as const,
  },
  {
    title: "AliceFleet",
    description:
      "Multi-agent orchestration, distributed to the edge. Self-hosted A.L.I.C.E. for teams that need power without the cloud.",
    tags: ["Open Source", "Self-Hosted", "Edge AI", "Private"],
    href: "/projects/alicefleet",
    status: "building" as const,
  },
  {
    title: "Mission Control",
    description:
      "A dashboard for your AI agents. Real-time observability for A.L.I.C.E. agent teams.",
    tags: ["Developer Tools", "Observability", "Open Source"],
    href: "/projects/mission-control",
    status: "building" as const,
  },
];

export function ProjectsShowcase() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <ProjectsNodeGrid />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="§ Projects"
          title="What I'm Building"
          subtitle="From national AI infrastructure to distributed agent systems — selected work that pushes what's possible."
          align="left"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
