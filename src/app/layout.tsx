import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rob Sciglimpaglia — Building the infrastructure for machine teams",
  description:
    "Rob Sciglimpaglia creates multi-agent AI systems that go from prototype to production. Creator of the A.L.I.C.E. framework. Acqui-hired by OpenAI at NVIDIA GTC 2026.",
  keywords: [
    "multi-agent AI framework",
    "AI agent orchestration",
    "AI infrastructure",
    "A.L.I.C.E. framework",
    "OpenAI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text font-sans">
        {children}
      </body>
    </html>
  );
}
