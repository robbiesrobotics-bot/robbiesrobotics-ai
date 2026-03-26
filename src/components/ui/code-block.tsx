"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

const customStyle = {
  ...oneDark,
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: "#18181b",
    margin: 0,
    padding: "16px",
    fontSize: "13px",
    lineHeight: "1.5",
  },
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    background: "transparent",
    fontFamily: "var(--font-jetbrains), Menlo, monospace",
  },
};

export function CodeBlock({
  code,
  language = "yaml",
  filename,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative rounded-lg border border-muted overflow-hidden bg-surface",
        className
      )}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-text-3/40" />
          <span className="w-3 h-3 rounded-full bg-text-3/40" />
          <span className="w-3 h-3 rounded-full bg-text-3/40" />
        </div>
        {filename && (
          <span className="font-mono text-[11px] text-text-3">{filename}</span>
        )}
        <button
          onClick={handleCopy}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded text-text-3 hover:text-primary-2 transition-colors opacity-0 group-hover:opacity-100"
          style={{ opacity: 1 }}
          aria-label="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <div className="relative group">
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 p-1.5 rounded bg-muted text-text-3 hover:text-primary-2 transition-colors z-10"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
        <SyntaxHighlighter
          language={language}
          style={customStyle}
          customStyle={{ margin: 0 }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
