"use client";

import { motion } from "framer-motion";
import { Award, GitPullRequest, Terminal } from "lucide-react";

const leadershipRoles = [
  {
    role: "Chapter Chairperson",
    period: "2025 — 2026",
    organization: "IEEE MTT-S AIUB Student Branch Chapter",
    note: "Progressed from Chapter Volunteer & Website Team Lead",
    icon: Award,
    featured: true,
  },
  {
    role: "Technical Team Lead",
    period: "Community",
    organization: "Cox's Bazar Students Forum, AIUB (Palongkee)",
    note: "Leading technical operations, platform engineering, and digital infrastructure for the student forum.",
    icon: Terminal,
    featured: false,
  },
  {
    role: "Open Source Contributor & Campus Ambassador",
    period: "Ongoing",
    organization:
      "GitHub OSS & International Congress of Recent Computer Science Trends",
    note: "Contributing to open-source repositories while representing international computer science initiatives on campus.",
    icon: GitPullRequest,
    featured: false,
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
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
            <span className="text-sky-400/90">05</span>
            <span
              className="h-px w-8 bg-gradient-to-r from-sky-400/60 to-[#222225]"
              aria-hidden="true"
            />
            <span>LEADERSHIP &amp; COMMUNITY</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]">
            Leadership &amp; Community
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Technical stewardship and community building across IEEE chapters,
            student engineering groups, and open-source ecosystems.
          </p>
        </motion.div>

        {/* Clean 2-Column Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipRoles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative surface-card border border-[#222225] rounded-lg p-6 overflow-hidden ${
                  item.featured ? "md:col-span-2" : ""
                }`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#09090B] border border-[#222225] text-[#A1A1AA] group-hover:text-sky-400 group-hover:border-sky-400/30 transition-colors duration-300">
                    <Icon size={15} strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-xs text-[#71717A] bg-[#09090B] border border-[#222225] px-2.5 py-1 rounded-md">
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-semibold tracking-tight text-[#FAFAFA] group-hover:text-white transition-colors">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-[#A1A1AA] font-medium">
                  {item.organization}
                </p>
                <p className="mt-3 text-sm text-[#71717A] group-hover:text-[#A1A1AA] leading-relaxed transition-colors duration-300">
                  {item.note}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
