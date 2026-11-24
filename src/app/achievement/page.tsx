"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Award, BookOpen, CheckCircle2 } from "lucide-react";

const academicAchievements = [
  {
    title: "BSc in Computer Science & Engineering",
    issuer: "American International University-Bangladesh (AIUB)",
    year: "2023 — Present",
    meta: "CGPA 3.61 / 4.00",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    issuer: "Cox's Bazar City College",
    year: "2020",
    meta: "GPA 5.00",
  },
  {
    title: "Secondary School Certificate (SSC)",
    issuer: "Naya Para Al-Haj Nabi Hossain High School, Teknaf",
    year: "2018",
    meta: "GPA 4.56",
  },
];

const leadershipAndTech = [
  {
    title: "Chapter Chairperson",
    issuer: "IEEE MTT-S AIUB Student Branch Chapter",
    year: "2025 — 2026",
    meta: "Progressed from Volunteer & Website Lead",
  },
  {
    title: "Technical Team Lead",
    issuer: "Cox's Bazar Students Forum, AIUB (Palongkee)",
    year: "Community",
    meta: "Platform & IT Operations",
  },
  {
    title: "Campus Ambassador",
    issuer: "International Congress of Recent Computer Science Trends",
    year: "2025",
    meta: "Academic Advocacy",
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors"
        >
          <ArrowLeft
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-sky-400/90">
            CREDENTIALS &amp; RECOGNITION
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]">
            Academic &amp; Leadership Record
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Verified milestones across software engineering education, technical
            leadership, and research initiatives.
          </p>
        </motion.div>

        <section className="mt-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#71717A] mb-5">
            <BookOpen size={14} strokeWidth={1.5} className="text-sky-400/90" />
            <span>Academic Credentials</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {academicAchievements.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="surface-card border border-[#222225] rounded-lg p-6"
              >
                <div className="flex items-center justify-between gap-2 font-mono text-xs text-[#71717A]">
                  <span>{item.year}</span>
                  <span className="text-[#FAFAFA]">{item.meta}</span>
                </div>
                <h2 className="mt-4 text-base font-semibold tracking-tight text-[#FAFAFA]">
                  {item.title}
                </h2>
                <p className="mt-1.5 text-sm text-[#A1A1AA]">{item.issuer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#71717A] mb-5">
            <Award size={14} strokeWidth={1.5} className="text-sky-400/90" />
            <span>Leadership &amp; Community</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {leadershipAndTech.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="surface-card border border-[#222225] rounded-lg p-6"
              >
                <div className="flex items-center justify-between gap-2 font-mono text-xs text-[#71717A]">
                  <span>{item.year}</span>
                  <CheckCircle2 size={14} strokeWidth={1.5} className="text-sky-400/90" />
                </div>
                <h2 className="mt-4 text-base font-semibold tracking-tight text-[#FAFAFA]">
                  {item.title}
                </h2>
                <p className="mt-1.5 text-sm text-[#A1A1AA]">{item.issuer}</p>
                <p className="mt-3 text-xs font-mono text-[#71717A]">
                  {item.meta}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
