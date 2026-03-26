"use client";

import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-bold text-[32px] text-primary-2 leading-none">
        {value}
      </span>
      <span className="font-sans text-[12px] text-text-2 uppercase tracking-[0.1em]">
        {label}
      </span>
    </div>
  );
}
