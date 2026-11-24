"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "Present",
    role: "Software Lead & Web Developer",
    organization: "Frolinno",
    domain: "frolinno.com",
    url: "https://www.frolinno.com",
    highlights: [
      "Architecting and maintaining full-stack web platforms and enterprise software systems for commercial clients.",
      "Leading security-first code audits, database schema design, and production deployments.",
    ],
  },
  {
    period: "2025 — Present",
    role: "Lead Full-Stack Engineer",
    organization: "Graph Interior & Architecture",
    domain: "graphinbd.com",
    url: "https://www.graphinbd.com",
    highlights: [
      "Designed and delivered the corporate web platform with a focus on performance, SEO, and modern visual architecture.",
      "Mentored an engineering intern across a 4-month hybrid production cycle.",
    ],
  },
];

const stackColumns = [
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "REST APIs",
      "MongoDB",
    ],
  },
  {
    title: "Auth, Payments & Infra",
    items: [
      "Clerk",
      "Google OAuth",
      "SSLCommerz",
      "Vercel",
      "Git/GitHub",
      "Linux (WSL)",
    ],
  },
  {
    title: "Foundations & AI",
    items: [
      "C++",
      "Data Structures & Algorithms",
      "App Security",
      "AI Integration",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-[#222225]/80 py-20 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-[#71717A] uppercase">
            <span className="text-sky-400/90">03</span>
            <span
              className="h-px w-8 bg-gradient-to-r from-sky-400/60 to-[#222225]"
              aria-hidden="true"
            />
            <span>EXPERIENCE &amp; STACK</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]">
            Experience &amp; Engineering Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Production leadership across full-stack web architecture, commercial
            delivery, and security-minded software systems.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="mt-12 border-y border-[#222225] divide-y divide-[#222225]">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.organization}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative py-8 px-3 -mx-3 rounded-lg hover:bg-white/[0.02] transition-colors duration-300 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
            >
              {/* Left: Date Range in Mono */}
              <div className="md:col-span-4 flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-sky-400 transition-colors duration-300 shrink-0"
                />
                <span className="font-mono text-xs uppercase tracking-wider text-[#71717A] group-hover:text-zinc-300 transition-colors">
                  {exp.period}
                </span>
              </div>

              {/* Right: Role, Org, Bullet Points */}
              <div className="md:col-span-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#FAFAFA] group-hover:text-white transition-colors">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 font-mono text-xs text-[#71717A] hover:text-sky-400 transition-colors"
                  >
                    {exp.domain}
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.5}
                      className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>

                <p className="mt-1 text-sm text-[#A1A1AA] font-medium">
                  {exp.organization}
                </p>

                <ul className="mt-4 space-y-2.5 text-sm text-[#A1A1AA]">
                  {exp.highlights.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="mt-2.5 w-2 h-px bg-[#3F3F46] group-hover:bg-sky-400/70 transition-colors duration-300 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Stack Matrix */}
        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[#71717A] mb-5">
            Technical Stack Matrix
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#222225] border border-[#222225] rounded-lg overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
            {stackColumns.map((column, colIdx) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: colIdx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group bg-[#111113] hover:bg-[#141418] p-6 transition-colors duration-300"
              >
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#FAFAFA] pb-3 border-b border-[#222225] group-hover:border-sky-400/30 transition-colors duration-300">
                  {column.title}
                </h4>
                <ul className="mt-4 space-y-2">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] flex items-center gap-2.5 transition-all duration-200 hover:translate-x-1"
                    >
                      <span
                        className="w-1 h-1 rounded-sm bg-[#3F3F46] group-hover:bg-sky-400/70 transition-colors duration-300 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
