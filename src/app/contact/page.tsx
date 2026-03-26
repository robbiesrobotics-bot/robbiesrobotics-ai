"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from "@/components/ui/social-icons";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Page hero */}
        <section className="pt-32 pb-16 px-6 bg-bg">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs text-primary-2 uppercase tracking-[0.2em] mb-4 block"
            >
              § Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-bold text-4xl md:text-5xl text-text mb-4"
            >
              Let&apos;s talk.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-2 text-lg max-w-xl mx-auto"
            >
              I&apos;m available for AI infrastructure consulting, interesting
              collaborations, and conversations about what&apos;s actually hard
              in production AI.
            </motion.p>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-16 px-6 bg-bg">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left column - info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-2"
              >
                <h2 className="font-semibold text-xl text-text mb-4">
                  What I&apos;m available for
                </h2>
                <ul className="space-y-3 text-text-2 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-2 mt-1">→</span>
                    <span>AI infrastructure consulting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-2 mt-1">→</span>
                    <span>Multi-agent system architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-2 mt-1">→</span>
                    <span>Edge AI deployments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-2 mt-1">→</span>
                    <span>Interesting collaborations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-2 mt-1">→</span>
                    <span>Conference speaking</span>
                  </li>
                </ul>

                <div className="border-t border-border pt-8">
                  <h3 className="font-semibold text-text mb-3">Direct email</h3>
                  <a
                    href="mailto:contact@robbiesrobotics.ai"
                    className="inline-flex items-center gap-2 text-primary-2 hover:text-primary transition-colors mb-6"
                  >
                    <MailIcon size={16} />
                    contact@robbiesrobotics.ai
                  </a>

                  <h3 className="font-semibold text-text mb-3">Find me</h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/robbiesrobotics"
                      className="text-text-3 hover:text-primary-2 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={20} />
                    </Link>
                    <Link
                      href="https://twitter.com/robbiesrobotics"
                      className="text-text-3 hover:text-primary-2 transition-colors"
                      aria-label="Twitter"
                    >
                      <TwitterIcon size={20} />
                    </Link>
                    <Link
                      href="https://linkedin.com/in/robbiesrobotics"
                      className="text-text-3 hover:text-primary-2 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Right column - form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="lg:col-span-3"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
