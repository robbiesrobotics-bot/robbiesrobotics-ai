"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

const satellites = [
  { id: "namibia", x: 15, y: 30, label: "namibia" },
  { id: "mission-ctrl", x: 30, y: 70, label: "mission-ctrl" },
  { id: "alicefleet", x: 70, y: 75, label: "alicefleet" },
  { id: "agents", x: 85, y: 40, label: "agents" },
  { id: "openai", x: 75, y: 15, label: "openai" },
];

const PARTICLE_COUNT = 8;

export function HeroOrchestration() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Refs for the 8 floating particle circles — used to set cx/cy via setAttribute
  // with null guards to prevent Framer Motion lifecycle console errors
  const particleRefs = useRef<(SVGCircleElement | null)[]>([]);
  particleRefs.current = [];

  const setParticleRef = useCallback((i: number) => (el: SVGCircleElement | null) => {
    particleRefs.current[i] = el;
    if (el) {
      const cx = 10 + i * 12;
      const cy = 20 + (i % 3) * 25;
      if (cx != null) el.setAttribute("cx", String(cx));
      if (cy != null) el.setAttribute("cy", String(cy));
    }
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto" style={{ height: "500px" }}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid background */}
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="#27272a"
            strokeWidth="0.1"
          />
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" opacity="0.5" />

        {/* Connection lines */}
        {satellites.map((sat, i) => (
          <motion.line
            key={sat.id}
            x1="50"
            y1="50"
            x2={sat.x}
            y2={sat.y}
            stroke="#34d399"
            strokeWidth="0.3"
            strokeDasharray="2,1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={mounted ? { pathLength: 1, opacity: 0.6 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
          />
        ))}

        {/* Central A.L.I.C.E. Core - Hexagon */}
        <motion.g
          filter="url(#glow-strong)"
          initial={{ scale: 0, opacity: 0 }}
          animate={mounted ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "50px 50px" }}
        >
          <polygon
            points="50,42 58,46 58,54 50,58 42,54 42,46"
            fill="#09090b"
            stroke="#34d399"
            strokeWidth="0.5"
          />
          <text
            x="50"
            y="51"
            textAnchor="middle"
            fill="#34d399"
            fontSize="3"
            fontFamily="var(--font-jetbrains)"
            fontWeight="bold"
          >
            A.L.I.C.E
          </text>
        </motion.g>

        {/* Satellite nodes */}
        {satellites.map((sat, i) => (
          <motion.g
            key={sat.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={mounted ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.4 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: `${sat.x}px ${sat.y}px` }}
            className="cursor-pointer"
          >
            <circle
              cx={sat.x}
              cy={sat.y}
              r="4"
              fill="#18181b"
              stroke="#3f3f46"
              strokeWidth="0.4"
              className="transition-all duration-200 hover:stroke-primary-2"
            />
            <text
              x={sat.x}
              y={sat.y + 7}
              textAnchor="middle"
              fill="#a1a1aa"
              fontSize="2.5"
              fontFamily="var(--font-jetbrains)"
            >
              {sat.label}
            </text>
          </motion.g>
        ))}

        {/* Floating particles — 8 ambient dots animated via CSS y-transform */}
        {Array.from({ length: PARTICLE_COUNT }, (_, i) => {
          const cx = 10 + i * 12;
          const cy = 20 + (i % 3) * 25;
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="0.4"
              fill="#34d399"
              ref={setParticleRef(i)}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [cy, cy - 5, cy],
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
