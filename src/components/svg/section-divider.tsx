"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative h-10 flex items-center justify-center">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="absolute inset-x-0 top-1/2 h-px bg-border-2"
        style={{ transformOrigin: "center" }}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative z-10 bg-bg p-2"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-border-2">
          <polygon
            points="8,1 15,5 15,11 8,15 1,11 1,5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute top-1/2 left-0 w-[calc(50%-40px)] h-px bg-primary-2"
        style={{ transformOrigin: "right" }}
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute top-1/2 right-0 w-[calc(50%-40px)] h-px bg-primary-2"
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}
