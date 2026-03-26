"use client";

import { motion } from "framer-motion";

const barHeights = [40, 70, 100, 70, 40];

export function ContactSignal() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-end gap-2 h-24">
        {barHeights.map((height, i) => (
          <motion.div
            key={i}
            className="w-8 bg-primary-2 rounded-t"
            style={{ height: `${height}%` }}
            animate={{
              scaleY: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <span className="font-mono text-[12px] text-text-3 uppercase tracking-[0.2em]">
        Let&apos;s Talk
      </span>
    </div>
  );
}
