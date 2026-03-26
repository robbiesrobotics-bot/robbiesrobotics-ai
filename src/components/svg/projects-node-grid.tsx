"use client";

import { motion } from "framer-motion";

const gridSquares = [
  { x: 10, y: 10, active: true },
  { x: 30, y: 10, active: false },
  { x: 50, y: 10, active: false },
  { x: 10, y: 30, active: false },
  { x: 30, y: 30, active: true },
  { x: 50, y: 30, active: true },
  { x: 10, y: 50, active: false },
  { x: 30, y: 50, active: true },
  { x: 50, y: 50, active: false },
];

const traces = [
  { x1: 14, y1: 14, x2: 26, y2: 14 },
  { x1: 34, y1: 14, x2: 46, y2: 14 },
  { x1: 14, y1: 34, x2: 26, y2: 34 },
  { x1: 34, y1: 34, x2: 46, y2: 34 },
  { x1: 14, y1: 54, x2: 26, y2: 54 },
  { x1: 34, y1: 54, x2: 46, y2: 54 },
];

export function ProjectsNodeGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40">
      <svg
        viewBox="0 0 70 70"
        className="w-full h-full"
        style={{ transform: "perspective(500px) rotateX(10deg)" }}
      >
        <defs>
          <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Traces */}
        {traces.map((t, i) => (
          <motion.line
            key={i}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke="#34d399"
            strokeWidth="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}

        {/* Grid squares */}
        {gridSquares.map((sq, i) => (
          <motion.rect
            key={i}
            x={sq.x}
            y={sq.y}
            width="8"
            height="8"
            rx="1"
            fill={sq.active ? "#34d399" : "#27272a"}
            stroke={sq.active ? "#34d399" : "#3f3f46"}
            strokeWidth="0.3"
            filter={sq.active ? "url(#node-glow)" : undefined}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          />
        ))}
      </svg>
    </div>
  );
}
