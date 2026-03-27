"use client";

import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/social-icons";
import Link from "next/link";

export function FooterLogo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <polygon
            points="12,2 22,7 22,17 12,22 2,17 2,7"
            fill="none"
            stroke="#34d399"
            strokeWidth="1.5"
          />
          <text
            x="12"
            y="15"
            textAnchor="middle"
            fill="#fafafa"
            fontSize="8"
            fontFamily="var(--font-jetbrains)"
            fontWeight="bold"
            letterSpacing="0.5px"
          >
            RR
          </text>
        </svg>
        <span className="font-sans text-[12px] text-text-3">
          robbiesrobotics
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="https://github.com/robbiesrobotics"
          className="text-text-3 hover:text-primary-2 transition-colors"
          aria-label="GitHub"
        >
          <GithubIcon size={16} />
        </Link>
        <Link
          href="https://twitter.com/robbiesrobotics"
          className="text-text-3 hover:text-primary-2 transition-colors"
          aria-label="Twitter"
        >
          <TwitterIcon size={16} />
        </Link>
        <Link
          href="https://linkedin.com/in/robbiesrobotics"
          className="text-text-3 hover:text-primary-2 transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={16} />
        </Link>
      </div>
    </div>
  );
}
