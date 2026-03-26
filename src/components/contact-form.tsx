"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");

    // Simulate form submission (mailto fallback)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Create mailto link
    const subject = encodeURIComponent(
      `[Contact] ${data.projectType} - ${data.name}`
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.projectType}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:contact@robbiesrobotics.ai?subject=${subject}&body=${body}`;

    setStatus("success");
    reset();

    // Reset after showing success
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary-2/20 flex items-center justify-center mb-4">
              <Check size={32} className="text-primary-2" />
            </div>
            <h3 className="text-xl font-semibold text-text mb-2">
              Message sent!
            </h3>
            <p className="text-text-2">
              I&apos;ll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm text-text-2 mb-2">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className={cn(
                  "w-full bg-bg border rounded-lg px-4 py-3 text-text placeholder:text-text-3",
                  "focus:outline-none focus:border-primary-2 focus:ring-2 focus:ring-primary-2/10",
                  "transition-all duration-200",
                  errors.name ? "border-red-500" : "border-border-2"
                )}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-text-2 mb-2">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={cn(
                  "w-full bg-bg border rounded-lg px-4 py-3 text-text placeholder:text-text-3",
                  "focus:outline-none focus:border-primary-2 focus:ring-2 focus:ring-primary-2/10",
                  "transition-all duration-200",
                  errors.email ? "border-red-500" : "border-border-2"
                )}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm text-text-2 mb-2">
                What&apos;s this about?
              </label>
              <select
                {...register("projectType", {
                  required: "Please select an option",
                })}
                className={cn(
                  "w-full bg-bg border rounded-lg px-4 py-3 text-text",
                  "focus:outline-none focus:border-primary-2 focus:ring-2 focus:ring-primary-2/10",
                  "transition-all duration-200",
                  errors.projectType ? "border-red-500" : "border-border-2"
                )}
              >
                <option value="">Select an option</option>
                <option value="Just saying hi">Just saying hi</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Contract work">Contract work</option>
                <option value="A.L.I.C.E. integration">
                  A.L.I.C.E. integration
                </option>
                <option value="Other">Other</option>
              </select>
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.projectType.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-text-2 mb-2">
                Message
              </label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                rows={4}
                className={cn(
                  "w-full bg-bg border rounded-lg px-4 py-3 text-text placeholder:text-text-3 resize-none",
                  "focus:outline-none focus:border-primary-2 focus:ring-2 focus:ring-primary-2/10",
                  "transition-all duration-200",
                  errors.message ? "border-red-500" : "border-border-2"
                )}
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    Sending
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  >
                   ...
                  </motion.span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={16} />
                  Send Message
                </span>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
