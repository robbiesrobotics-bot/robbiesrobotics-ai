"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fleetNodes = [
  { id: "us-east", x: 15, y: 50, label: "node-us-east", active: true },
  { id: "eu", x: 30, y: 20, label: "node-eu", active: false },
  { id: "ap", x: 30, y: 80, label: "node-ap", active: true },
  { id: "edge-1", x: 50, y: 35, label: "edge-01", active: false },
  { id: "edge-2", x: 50, y: 65, label: "edge-02", active: false },
  { id: "namibia", x: 70, y: 50, label: "namibia", active: true },
];

export function AlicefleetFleet() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto" style={{ height: "300px" }}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="fleet-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines from hub to nodes */}
        {fleetNodes.map((node, i) => (
          <motion.line
            key={`line-${node.id}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="#34d399"
            strokeWidth="0.3"
            strokeDasharray="2,1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={mounted ? { pathLength: 1, opacity: 0.5 } : {}}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
          />
        ))}

        {/* Central OpenClaw Hub */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={mounted ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          filter="url(#fleet-glow)"
          style={{ transformOrigin: "50px 50px" }}
        >
          <polygon
            points="50,40 60,45 60,55 50,60 40,55 40,45"
            fill="#18181b"
            stroke="#34d399"
            strokeWidth="0.6"
          />
          <text
            x="50"
            y="51"
            textAnchor="middle"
            fill="#34d399"
            fontSize="2.5"
            fontFamily="var(--font-jetbrains)"
            fontWeight="bold"
          >
            OpenClaw
          </text>
        </motion.g>

        {/* Pulse ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke="#34d399"
          strokeWidth="0.3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={mounted ? { opacity: [0.6, 0], scale: [1, 2] } : {}}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
        />

        {/* Fleet nodes */}
        {fleetNodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={mounted ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.3 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            <polygon
              points={`${node.x},${node.y - 4} ${node.x + 4},${node.y} ${node.x},${node.y + 4} ${node.x - 4},${node.y}`}
              fill="#27272a"
              stroke={node.active ? "#34d399" : "#3f3f46"}
              strokeWidth="0.3"
            />
            {node.active && (
              <>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="1.5"
                  fill="#34d399"
                />
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="0.3"
                  animate={{ opacity: [0.5, 0], scale: [1, 1.8] }}
                  transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                />
              </>
            )}
            <text
              x={node.x}
              y={node.y + 8}
              textAnchor="middle"
              fill="#71717a"
              fontSize="2"
              fontFamily="var(--font-jetbrains)"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
