"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  asChild?: boolean;
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-bg hover:bg-primary-2 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] active:scale-[0.97]",
  secondary:
    "bg-transparent border border-border-2 text-text-2 hover:border-primary-2 hover:text-text active:scale-[0.97]",
  ghost:
    "bg-transparent text-text-2 hover:text-text active:scale-[0.97]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, asChild, href, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (asChild && href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
