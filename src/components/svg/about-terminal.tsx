"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { type: "command", text: "$ whoami" },
  { type: "output", text: "> rob.sanchez" },
  { type: "command", text: "$ cat expertise.txt" },
  { type: "output", text: "> multi-agent orchestration" },
  { type: "output", text: "> ai infrastructure" },
  { type: "output", text: "> developer tools" },
  { type: "command", text: "$ cat status.txt" },
  { type: "output", text: "> OPEN_TO_COLLABORATION ✓" },
];

const asciiPortrait = `
    ██████████████
  ██            ██
 █  ░░░░░░░░░░░░░  █
█   ░░██    ██░░░   █
█   ░░  ██  ░░░░   █
█   ░░      ░░░░   █
 █  ░░░░░░░░░░░░  █
  ██            ██
    ██████████████
`;

export function AboutTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="bg-surface border border-border-2 rounded-lg overflow-hidden w-[320px]">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-2 bg-muted border-b border-border">
          <span className="w-3 h-3 rounded-full bg-text-3/40" />
          <span className="w-3 h-3 rounded-full bg-text-3/40" />
          <span className="w-3 h-3 rounded-full bg-text-3/40" />
          <span className="ml-2 font-mono text-[11px] text-text-3">
            rob@terminal
          </span>
        </div>

        {/* Terminal content */}
        <div className="p-4 font-mono text-[13px]">
          {/* ASCII Portrait */}
          <pre className="text-primary-2 text-[8px] leading-[1.2] mb-4 overflow-hidden">
            {asciiPortrait}
          </pre>

          {/* Terminal lines */}
          <div className="space-y-1">
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={
                  line.type === "command"
                    ? "text-text-2"
                    : "text-text"
                }
              >
                {line.text}
              </motion.div>
            ))}
            {visibleLines < terminalLines.length && (
              <span
                className={`text-primary-2 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              >
                ▋
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
