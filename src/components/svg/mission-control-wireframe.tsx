"use client";

import { motion } from "framer-motion";

export function MissionControlWireframe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="bg-surface border border-border-2 rounded-lg overflow-hidden shadow-2xl shadow-black/50 max-w-2xl mx-auto">
        {/* Browser chrome */}
        <div className="flex items-center justify-between px-4 py-3 bg-muted border-b border-border">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-text-3/40" />
            <span className="w-3 h-3 rounded-full bg-text-3/40" />
            <span className="w-3 h-3 rounded-full bg-text-3/40" />
          </div>
          <span className="font-mono text-[11px] text-text-3">Mission Control</span>
          <div className="w-16" />
        </div>

        {/* Dashboard content */}
        <div className="flex h-[320px]">
          {/* Sidebar */}
          <div className="w-16 bg-muted/50 border-r border-border p-3 flex flex-col gap-3">
            {["dashboard", "agents", "logs", "settings"].map((item, i) => (
              <div
                key={item}
                className={`w-10 h-10 rounded flex items-center justify-center ${
                  i === 1 ? "bg-primary-2/20 border border-primary-2" : ""
                }`}
              >
                <div className={`w-5 h-5 rounded-sm ${i === 1 ? "bg-primary-2" : "bg-text-3/30"}`} />
              </div>
            ))}
          </div>

          {/* Main area */}
          <div className="flex-1 p-4 flex flex-col gap-4">
            {/* Top bar */}
            <div className="flex items-center gap-4">
              <div className="h-8 flex-1 bg-muted rounded" />
              <div className="h-8 w-24 bg-muted rounded" />
            </div>

            {/* Cards row */}
            <div className="flex gap-4 flex-1">
              {/* Card 1 - Agent status */}
              <div className="flex-1 bg-muted/50 border border-border rounded-lg p-3">
                <div className="text-[10px] font-mono text-text-3 mb-2">AGENT STATUS</div>
                <div className="space-y-2">
                  {["Alice", "Bob", "Carol"].map((name) => (
                    <div key={name} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-2" />
                      <span className="text-[11px] text-text-2 font-mono">{name}</span>
                      <span className="text-[10px] text-text-3 ml-auto">active</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2 - Chart */}
              <div className="flex-1 bg-muted/50 border border-border rounded-lg p-3">
                <div className="text-[10px] font-mono text-text-3 mb-2">THROUGHPUT</div>
                <svg viewBox="0 0 100 50" className="w-full h-20">
                  <line x1="0" y1="45" x2="100" y2="45" stroke="#27272a" strokeWidth="0.5" />
                  <line x1="0" y1="30" x2="100" y2="30" stroke="#27272a" strokeWidth="0.5" />
                  <line x1="0" y1="15" x2="100" y2="15" stroke="#27272a" strokeWidth="0.5" />
                  <polyline
                    points="0,40 15,35 30,38 45,25 60,30 75,15 90,20 100,10"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Card 3 - Queue */}
              <div className="flex-1 bg-muted/50 border border-border rounded-lg p-3">
                <div className="text-[10px] font-mono text-text-3 mb-2">QUEUE</div>
                <div className="space-y-2">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-6 bg-muted rounded w-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal strip */}
            <div className="h-20 bg-bg border border-border rounded p-2 font-mono text-[10px]">
              <div className="text-text-3 mb-1">$ alice logs --tail 5</div>
              <div className="text-text-2/70">[12:04:32] Alice: Task completed in 1.2s</div>
              <div className="text-text-2/70">[12:04:33] Bob: Delegating subtask to Carol</div>
              <div className="text-primary-2">[12:04:34] System: All agents nominal</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3 font-mono text-[11px] text-text-3">
        MISSION CONTROL
      </div>
    </motion.div>
  );
}
