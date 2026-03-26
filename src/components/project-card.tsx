"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Tag } from "@/components/ui/tag";

type ProjectStatus = "live" | "building" | "planned";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  status: ProjectStatus;
  className?: string;
}

const statusStyles: Record<ProjectStatus, { label: string; className: string }> = {
  live: { label: "LIVE", className: "bg-primary-2/20 text-primary-2" },
  building: { label: "BUILDING", className: "bg-secondary/20 text-secondary" },
  planned: { label: "PLANNED", className: "bg-text-3/20 text-text-3" },
};

export function ProjectCard({
  title,
  description,
  tags,
  href,
  status,
  className,
}: ProjectCardProps) {
  const statusStyle = statusStyles[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Link
        href={href}
        className={cn(
          "block bg-surface border border-border rounded-xl p-6 transition-all duration-200",
          "hover:border-primary-2 hover:shadow-lg hover:shadow-primary-2/5",
          className
        )}
      >
        {/* Status badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-1 rounded-full",
              statusStyle.className
            )}
          >
            {statusStyle.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-xl text-text mb-2">{title}</h3>

        {/* Description */}
        <p className="text-text-2 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
