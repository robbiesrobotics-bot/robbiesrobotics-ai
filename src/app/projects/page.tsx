"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { PageHero } from "@/components/ui/page-hero";
import { ProjectCard } from "@/components/project-card";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

type FilterType = "all" | "live" | "building" | "planned";

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

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Live", value: "live" },
  { label: "Building", value: "building" },
  { label: "Planned", value: "planned" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <>
      <Navigation />
      <main>
        <PageHero
          eyebrow="§ Projects"
          title="Selected work"
          subtitle="From national AI infrastructure to distributed agent systems."
        />

        {/* Filter bar */}
        <section className="py-8 px-6 bg-bg sticky top-[72px] z-40 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    filter === f.value
                      ? "bg-primary-2 text-bg"
                      : "bg-surface text-text-2 hover:text-text border border-border"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-12 px-6 bg-bg">
          <div className="max-w-6xl mx-auto">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12 text-text-2">
                No projects match this filter.
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-surface">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold text-2xl text-text mb-4">
              Want to collaborate?
            </h2>
            <p className="text-text-2 mb-6">
              I&apos;m available for consulting on AI infrastructure, agent
              systems, and interesting collaborations.
            </p>
            <Button asChild href="/contact">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
