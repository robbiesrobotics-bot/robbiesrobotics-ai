"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ContactSignal } from "@/components/svg/contact-signal";
import { SectionDivider } from "@/components/svg/section-divider";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="py-24 md:py-32 px-6 bg-bg">
      <div className="max-w-2xl mx-auto text-center">
        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="my-12"
        >
          <ContactSignal />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-bold text-3xl md:text-4xl lg:text-5xl text-text mb-4"
        >
          Let&apos;s work together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-2 text-base md:text-lg max-w-[480px] mx-auto mb-8 leading-relaxed"
        >
          Building something ambitious? I collaborate with teams working on AI
          infrastructure, agent systems, and developer tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" asChild href="/contact">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>

        <div className="mt-12">
          <SectionDivider />
        </div>
      </div>
    </section>
  );
}
