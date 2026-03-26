"use client";

import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 rounded bg-muted text-text-2 font-mono text-[11px] transition-colors duration-200",
        "hover:bg-primary-2/10 hover:text-primary-2",
        className
      )}
    >
      {children}
    </span>
  );
}
