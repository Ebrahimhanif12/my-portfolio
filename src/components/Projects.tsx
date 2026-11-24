"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileText, X } from "lucide-react";

interface CaseStudyDetail {
  overview: string;
  problem: string;
  architecture: string[];
  capabilities: string[];
}

interface ProjectItem {
  index: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  domainLabel: string;
  liveUrl?: string;
  caseStudy?: CaseStudyDetail;
}

const projects: ProjectItem[] = [
  {
    index: "01",
    title: "Algodemy",
    category: "EdTech Platform",
    description:
      "Full-stack coding and Data Structures & Algorithms learning platform designed for structured problem-solving and student progression.",
    stack: ["Next.js", "TypeScript", "Prisma", "Clerk", "Tailwind CSS"],
    domainLabel: "algodemy.net",
    liveUrl: "https://www.algodemy.net",
  },
  {
    index: "02",
    title: "Kuchraai",
    category: "AI Micro-SaaS",
    description:
      "Pay-per-credit AI utility platform built for accessible local usage, featuring AI content detection, text humanization, and tiered image generation.",
    stack: ["Next.js", "Supabase", "Google OAuth", "AI APIs"],
    domainLabel: "Private Architecture",
    caseStudy: {
      overview:
        "Kuchraai is a pay-per-credit AI micro-SaaS engineered to give local students, writers, and creators reliable access to multi-modal AI tools without recurring foreign-currency subscription barriers.",
      problem:
        "Most mainstream AI platforms require recurring USD credit-card billing, locking out everyday local users who only need occasional bursts of content analysis, rewriting, or visual generation.",
      capabilities: [
        "AI Content Detection: Structured scoring pipeline analyzing prose patterns and token predictability.",
        "Text Humanization: Controlled rewriting workflows preserving technical accuracy while improving natural cadence.",
        "Tiered Image Generation: Multi-tier quality/cost routing so users balance credit spend against output fidelity.",
      ],
      architecture: [
        "Next.js App Router backend orchestrating external AI API providers with strict server-side key isolation.",
        "Supabase PostgreSQL ledger tracking atomic per-request credit deductions, top-ups, and usage audit logs.",
        "Google OAuth onboarding for frictionless sign-in with role-scoped Row Level Security policies.",
      ],
    },
  },
  {
    index: "03",
    title: "Graph Interior & Architecture",
    category: "Corporate Platform",
    description:
      "High-performance corporate portfolio and project showcase engineered for SEO, speed, and editorial visual presentation.",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "GSAP"],
    domainLabel: "graphinbd.com",
    liveUrl: "https://www.graphinbd.com",
  },
  {
    index: "04",
    title: "IEEE AIUB Student Branch",
    category: "Organizational Platform",
    description:
      "Official web platform managing events, team directories, announcements, and registrations for one of the largest IEEE student branches.",
    stack: ["Next.js", "Tailwind CSS", "CMS"],
    domainLabel: "ieeeaiubsb.com",
    liveUrl: "https://ieeeaiubsb.com/",
  },
];

export default function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!activeCaseStudy) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCaseStudy(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeCaseStudy]);

  return (
    <section
      id="work"
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
            <span className="text-sky-400/90">02</span>
            <span
              className="h-px w-8 bg-gradient-to-r from-sky-400/60 to-[#222225]"
              aria-hidden="true"
            />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]">
            Selected Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Production platforms architected for reliability, clean data flows,
            and measurable real-world utility.
          </p>
        </motion.div>

        {/* 2x2 Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: idx * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col justify-between surface-card border border-[#222225] rounded-lg p-6 sm:p-7 overflow-hidden"
            >
              {/* Subtle top-edge accent sheen on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-[#71717A] group-hover:text-sky-400/90 transition-colors duration-300">
                    {project.index}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA] bg-[#09090B]/90 border border-[#222225] group-hover:border-[#3F3F46] px-2.5 py-1 rounded-md transition-colors duration-300">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#FAFAFA] group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#09090B]/90 border border-[#222225] text-[#A1A1AA] group-hover:border-zinc-700/80 group-hover:text-zinc-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-7 pt-5 border-t border-[#222225] flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#71717A] group-hover:text-[#A1A1AA] transition-colors truncate">
                  {project.domainLabel}
                </span>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#FAFAFA] text-[#09090B] hover:bg-white text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(255,255,255,0.4)] active:scale-[0.97] shrink-0"
                  >
                    Live Site
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveCaseStudy(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#18181B] text-[#FAFAFA] border border-[#222225] hover:border-zinc-500 hover:bg-[#222225] text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer shrink-0"
                  >
                    <FileText size={13} strokeWidth={1.5} />
                    Case Study
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeCaseStudy && activeCaseStudy.caseStudy && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveCaseStudy(null)}
            className="fixed inset-0 z-50 bg-[#09090B]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#111113] border border-[#27272A] shadow-2xl rounded-lg"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#111113]/95 backdrop-blur-md px-6 py-4 border-b border-[#222225] flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-sky-400/90">
                    Case Study · {activeCaseStudy.category}
                  </p>
                  <h3
                    id="case-study-title"
                    className="text-lg font-semibold tracking-tight text-[#FAFAFA] mt-0.5"
                  >
                    {activeCaseStudy.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCaseStudy(null)}
                  aria-label="Close case study"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#09090B] border border-[#222225] text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#3F3F46] transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#71717A]">
                    Overview
                  </h4>
                  <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                    {activeCaseStudy.caseStudy.overview}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#222225]">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#71717A]">
                    Problem Context
                  </h4>
                  <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                    {activeCaseStudy.caseStudy.problem}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#222225]">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#71717A]">
                    Core Capabilities
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-sm text-[#A1A1AA]">
                    {activeCaseStudy.caseStudy.capabilities.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-2 w-1.5 h-px bg-sky-400/70 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-[#222225]">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#71717A]">
                    System Architecture
                  </h4>
                  <ul className="mt-3 space-y-2.5 text-sm text-[#A1A1AA]">
                    {activeCaseStudy.caseStudy.architecture.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-2 w-1.5 h-px bg-sky-400/70 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-[#222225] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {activeCaseStudy.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#09090B] border border-[#222225] text-[#A1A1AA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCaseStudy(null)}
                    className="px-4 py-2 rounded-md bg-[#FAFAFA] text-[#09090B] hover:bg-white text-xs font-medium transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
