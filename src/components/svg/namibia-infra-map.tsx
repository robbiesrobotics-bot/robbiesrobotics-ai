"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";

const nodes = [
  { id: "windhoek", x: 280, y: 180, label: "WINDHOEK", status: "live" },
  { id: "swa-pool", x: 180, y: 140, label: "SWA-POOL-01", status: "live" },
  { id: "edge-02", x: 340, y: 220, label: "EDGE-02", status: "planned" },
  { id: "edge-03", x: 240, y: 240, label: "EDGE-03", status: "planned" },
];

export function NamibiaInfraMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto" style={{ height: "350px" }}>
      <svg
        viewBox="0 0 500 300"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="infra-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="compute-overlay" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Compute capacity overlay */}
        <circle
          cx="260"
          cy="190"
          r="120"
          fill="url(#compute-overlay)"
        />

        {/* Abstract continent outline (Southern Africa) */}
        <motion.path
          d="M 200 80 L 320 70 L 380 120 L 420 180 L 400 250 L 340 290 L 280 280 L 220 260 L 160 220 L 140 160 L 160 100 Z"
          fill="none"
          stroke="#3f3f46"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={mounted ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        />

        {/* Namibia region highlight */}
        <motion.path
          d="M 180 140 L 300 130 L 350 180 L 320 240 L 240 250 L 180 210 Z"
          fill="none"
          stroke="#34d399"
          strokeWidth="0.8"
          strokeDasharray="4,2"
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 0.6 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Connection lines */}
        {nodes.slice(0, 3).map((node, i) => (
          <motion.line
            key={`line-${node.id}`}
            x1="280"
            y1="180"
            x2={node.x}
            y2={node.y}
            stroke="#34d399"
            strokeWidth={node.status === "live" ? "1.5" : "1"}
            strokeDasharray={node.status === "planned" ? "4,4" : "none"}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={mounted ? { pathLength: 1, opacity: node.status === "live" ? 0.8 : 0.4 } : {}}
            transition={{ duration: 0.8, delay: 0.6 + i * 0.2 }}
          />
        ))}

        {/* Data flow particles */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={280}
            cy={180}
            r="3"
            fill="#34d399"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              cx: [280, 230],
              cy: [180, 160],
            }}
            transition={{
              duration: 2,
              delay: i * 0.7,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Compute nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={mounted ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.4 + i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="14"
              fill="#18181b"
              stroke={node.status === "live" ? "#34d399" : "#3f3f46"}
              strokeWidth="2"
              filter={node.status === "live" ? "url(#infra-glow)" : undefined}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill={node.status === "live" ? "#34d399" : "#3f3f46"}
            />
            <text
              x={node.x}
              y={node.y + 28}
              textAnchor="middle"
              fill="#71717a"
              fontSize="9"
              fontFamily="var(--font-jetbrains)"
            >
              {node.label}
            </text>
            {node.status === "live" && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="18"
                fill="none"
                stroke="#34d399"
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0.6, 0],
                  scale: [1, 1.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              />
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
