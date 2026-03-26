"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const agentBranches = [
  { id: 1, label: "Agent-1" },
  { id: 2, label: "Agent-2" },
  { id: 3, label: "Agent-N" },
];

export function AliceNeuralFlow() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full" style={{ height: "400px" }}>
      <svg
        viewBox="0 0 800 320"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="flow-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#34d399" />
          </marker>
        </defs>

        {/* Grid background */}
        <pattern id="neural-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#27272a" strokeWidth="0.5" />
        </pattern>
        <rect width="800" height="320" fill="url(#neural-grid)" opacity="0.3" />

        {/* Input node */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <rect
            x="40"
            y="130"
            width="100"
            height="60"
            rx="8"
            fill="#34d399"
            filter="url(#flow-glow)"
          />
          <text
            x="90"
            y="165"
            textAnchor="middle"
            fill="#09090b"
            fontSize="14"
            fontFamily="var(--font-jetbrains)"
            fontWeight="bold"
          >
            User
          </text>
          <text
            x="90"
            y="180"
            textAnchor="middle"
            fill="#09090b"
            fontSize="12"
            fontFamily="var(--font-jetbrains)"
          >
            Prompt
          </text>
        </motion.g>

        {/* Arrow from input to orchestrator */}
        <motion.line
          x1="140"
          y1="160"
          x2="220"
          y2="160"
          stroke="#34d399"
          strokeWidth="2"
          strokeDasharray="8,4"
          markerEnd="url(#arrowhead)"
          initial={{ pathLength: 0 }}
          animate={mounted ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Orchestrator (central hexagon) */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          filter="url(#flow-glow)"
        >
          <polygon
            points="320,130 370,160 370,200 320,230 270,200 270,160"
            fill="#18181b"
            stroke="#34d399"
            strokeWidth="3"
          />
          <text
            x="320"
            y="175"
            textAnchor="middle"
            fill="#34d399"
            fontSize="16"
            fontFamily="var(--font-jetbrains)"
            fontWeight="bold"
          >
            A.L.I.C.E.
          </text>
          <text
            x="320"
            y="195"
            textAnchor="middle"
            fill="#a1a1aa"
            fontSize="12"
            fontFamily="var(--font-jetbrains)"
          >
            Orchestrator
          </text>
        </motion.g>

        {/* Arrows from orchestrator to agents */}
        {[0, 1, 2].map((i) => (
          <motion.line
            key={i}
            x1="370"
            y1={160 + i * 40}
            x2="460"
            y2={100 + i * 60}
            stroke="#34d399"
            strokeWidth="2"
            strokeDasharray="8,4"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={mounted ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
          />
        ))}

        {/* Agent branches */}
        {agentBranches.map((agent, i) => (
          <motion.g
            key={agent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
          >
            <rect
              x="460"
              y={60 + i * 60}
              width="120"
              height="50"
              rx="6"
              fill="#27272a"
              stroke="#8b5cf6"
              strokeWidth="2"
            />
            <rect
              x="460"
              y={60 + i * 60}
              width="120"
              height="16"
              rx="6"
              fill="#8b5cf6"
            />
            <text
              x="520"
              y={72 + i * 60}
              textAnchor="middle"
              fill="#09090b"
              fontSize="11"
              fontFamily="var(--font-jetbrains)"
              fontWeight="bold"
            >
              {agent.label}
            </text>
            <text
              x="520"
              y={95 + i * 60}
              textAnchor="middle"
              fill="#a1a1aa"
              fontSize="10"
              fontFamily="var(--font-jetbrains)"
            >
              Processing...
            </text>
          </motion.g>
        ))}

        {/* Arrows from agents to output */}
        {[0, 1, 2].map((i) => (
          <motion.line
            key={i}
            x1="580"
            y1={85 + i * 60}
            x2="660"
            y2="160"
            stroke="#34d399"
            strokeWidth="2"
            strokeDasharray="8,4"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={mounted ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 + i * 0.15 }}
          />
        ))}

        {/* Output node */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <rect
            x="660"
            y="130"
            width="100"
            height="60"
            rx="8"
            fill="#34d399"
            filter="url(#flow-glow)"
          />
          <text
            x="710"
            y="165"
            textAnchor="middle"
            fill="#09090b"
            fontSize="14"
            fontFamily="var(--font-jetbrains)"
            fontWeight="bold"
          >
            Output
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
