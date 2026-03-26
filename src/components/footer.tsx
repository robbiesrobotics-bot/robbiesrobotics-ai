"use client";

import Link from "next/link";
import { FooterLogo } from "@/components/svg/footer-logo";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/social-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <FooterLogo />

          <nav className="flex flex-wrap gap-6">
            {["Projects", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Projects" ? "/projects" : `/${item.toLowerCase()}`}
                className="text-sm text-text-3 hover:text-text transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/robbiesrobotics"
              className="text-text-3 hover:text-primary-2 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </Link>
            <Link
              href="https://twitter.com/robbiesrobotics"
              className="text-text-3 hover:text-primary-2 transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon size={18} />
            </Link>
            <Link
              href="https://linkedin.com/in/robbiesrobotics"
              className="text-text-3 hover:text-primary-2 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-text-3">
            © {currentYear} Rob Sanchez
          </p>
          <Link
            href="https://alice-agents.ai"
            className="text-[12px] text-text-3 hover:text-primary-2 transition-colors flex items-center gap-1"
          >
            Built with A.L.I.C.E.
            <svg width="12" height="12" viewBox="0 0 12 12">
              <polygon
                points="6,1 11,4 11,8 6,11 1,8 1,4"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
