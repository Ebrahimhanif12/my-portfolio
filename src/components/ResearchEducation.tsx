"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, GraduationCap } from "lucide-react";

const researchItems = [
  {
    status: "Ongoing",
    label: "Undergraduate Thesis",
    description:
      "Exploring the intersection of Software Engineering, software security, AI agents, and ontological modeling.",
    tags: ["Software Security", "AI Agents", "Ontological Modeling"],
    icon: BookOpen,
  },
  {
    status: "2026",
    label: "Machine Learning Research Paper",
    description:
      "Detecting Bengali deepfake videos under compression using audio-visual and facial geometry features.",
    tags: ["Deepfake Detection", "Audio-Visual ML", "Facial Geometry"],
    icon: FileText,
  },
];

const secondaryEducation = [
  {
    credential: "Higher Secondary Certificate (HSC)",
    institution: "Cox's Bazar City College",
    year: "2020",
    score: "GPA 5.00",
  },
  {
    credential: "Secondary School Certificate (SSC)",
    institution: "Naya Para Al-Haj Nabi Hossain High School, Teknaf",
    year: "2018",
    score: "GPA 4.56",
  },
];

export default function ResearchEducation() {
  return (
    <section
      id="research"
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
            <span className="text-sky-400/90">04</span>
            <span
              className="h-px w-8 bg-gradient-to-r from-sky-400/60 to-[#222225]"
              aria-hidden="true"
            />
            <span>RESEARCH &amp; EDUCATION</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]">
            Research &amp; Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Academic inquiry spanning software security, autonomous AI systems,
            and applied machine learning.
          </p>
        </motion.div>

        {/* Subsection 1: Research & Academic Focus */}
        <div className="mt-12">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[#71717A] mb-5">
            Research &amp; Academic Focus
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative surface-card border border-[#222225] rounded-lg p-6 flex flex-col justify-between overflow-hidden"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#09090B] border border-[#222225] text-[#A1A1AA] group-hover:text-sky-400 group-hover:border-sky-400/30 transition-colors duration-300">
                        <Icon size={15} strokeWidth={1.5} />
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#A1A1AA] bg-[#09090B] border border-[#222225] px-2.5 py-1 rounded-md">
                        {item.status}
                      </span>
                    </div>

                    <h4 className="mt-5 text-lg font-semibold tracking-tight text-[#FAFAFA] group-hover:text-white transition-colors">
                      {item.label}
                    </h4>
                    <p className="mt-2.5 text-sm text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#222225] flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#09090B] border border-[#222225] text-[#71717A] group-hover:text-[#A1A1AA] group-hover:border-zinc-700/80 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Subsection 2: Education */}
        <div className="mt-14">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[#71717A] mb-5">
            Education
          </h3>

          {/* Primary Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="group relative surface-card border border-[#222225] rounded-lg p-6 sm:p-7 overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#71717A]">
                2023 — Present
              </span>
              <span className="font-mono text-xs text-[#FAFAFA] bg-[#09090B] border border-[#222225] group-hover:border-sky-400/30 px-2.5 py-1 rounded-md transition-colors duration-300">
                CGPA: 3.61 / 4.00
              </span>
            </div>

            <h4 className="mt-4 text-xl font-semibold tracking-tight text-[#FAFAFA]">
              BSc in Computer Science &amp; Engineering
            </h4>
            <p className="mt-1 text-sm text-[#A1A1AA]">
              Major in Software Engineering
            </p>

            <div className="mt-4 pt-4 border-t border-[#222225] flex items-center gap-2 text-sm text-[#71717A] group-hover:text-[#A1A1AA] transition-colors">
              <GraduationCap
                size={15}
                strokeWidth={1.5}
                className="shrink-0 group-hover:text-sky-400 transition-colors"
              />
              <span>American International University-Bangladesh (AIUB)</span>
            </div>
          </motion.div>

          {/* Compact Secondary Row */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryEducation.map((edu, idx) => (
              <motion.div
                key={edu.credential}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="surface-card border border-[#222225] rounded-lg px-5 py-4 flex items-start justify-between gap-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#FAFAFA]">
                    {edu.credential}
                  </p>
                  <p className="mt-1 text-xs text-[#A1A1AA] leading-relaxed">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right shrink-0 font-mono">
                  <p className="text-xs text-[#FAFAFA]">{edu.score}</p>
                  <p className="mt-1 text-[11px] text-[#71717A]">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
