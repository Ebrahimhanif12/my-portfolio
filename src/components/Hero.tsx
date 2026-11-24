"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  Facebook,
  Github,
  Linkedin,
} from "lucide-react";

const metadataRows = [
  { label: "Current Focus", value: "Scalable Web & AI Systems" },
  { label: "Stack", value: "Next.js · TypeScript · Postgres" },
  { label: "Availability", value: "Open to Engineering & Advisory", highlight: true },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Ebrahimhanif12/",
    ariaLabel: "GitHub Profile",
    icon: Github,
    hoverClass: "hover:text-white hover:border-zinc-500 hover:bg-zinc-800/80",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ebrahimhanif12/",
    ariaLabel: "LinkedIn Profile",
    icon: Linkedin,
    hoverClass: "hover:text-sky-400 hover:border-sky-400/40 hover:bg-sky-500/10",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ebrahim.hanif.779/",
    ariaLabel: "Facebook Profile",
    icon: Facebook,
    hoverClass: "hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10",
  },
];

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative border-b border-[#222225]/80 py-16 sm:py-24 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.02, ease: easeOutExpo }}
              className="flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-[#71717A] uppercase"
            >
              <span className="text-sky-400/90">01</span>
              <span
                className="h-px w-8 bg-gradient-to-r from-sky-400/60 to-[#222225]"
                aria-hidden="true"
              />
              <span>DHAKA, BANGLADESH · SOFTWARE ENGINEER</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: easeOutExpo }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.06] bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent"
            >
              Ebrahim Hanif
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease: easeOutExpo }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-[#A1A1AA] leading-relaxed max-w-2xl"
            >
              Full-Stack Software Engineer &amp; Product Builder. Architecting
              scalable web platforms, corporate systems, and AI-integrated
              products.
            </motion.p>

            {/* Primary Actions */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FAFAFA] text-[#09090B] hover:bg-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(255,255,255,0.45)] active:scale-[0.98]"
              >
                View Selected Work
                <ArrowDownRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>

              <a
                href="/Ebrahim_Hanif_CV.pdf"
                download
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#111113] text-[#FAFAFA] border border-[#222225] hover:border-zinc-500 hover:bg-[#18181B] text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Download
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
                Download CV
              </a>

              <span
                className="hidden sm:block h-6 w-px bg-[#222225] mx-1"
                aria-hidden="true"
              />

              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      title={social.name}
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#111113] border border-[#222225] text-[#A1A1AA] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${social.hoverClass}`}
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Framed Portrait + Metadata Strip */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative group"
          >
            {/* Soft Ambient Halo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-b from-sky-400/20 via-indigo-400/10 to-transparent opacity-60 group-hover:opacity-100 blur-md transition-opacity duration-500"
            />

            <div className="relative surface-card border border-[#222225] rounded-lg overflow-hidden">
              <div className="relative aspect-[4/4] w-full bg-[#09090B] border-b border-[#222225] overflow-hidden">
                <Image
                  src="/ne3.png"
                  alt="Portrait of Ebrahim Hanif"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#09090B]/70 to-transparent"
                />
              </div>

              <dl className="divide-y divide-[#222225]">
                {metadataRows.map((row) => (
                  <div
                    key={row.label}
                    className="px-4 py-3 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-[#71717A] shrink-0">
                      {row.label}
                    </dt>
                    <dd className="text-xs sm:text-sm text-right text-[#FAFAFA] font-medium truncate">
                      {row.highlight ? (
                        <span className="inline-flex items-center gap-2 text-emerald-300/95">
                          <span className="relative flex h-2 w-2" aria-hidden="true">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                          </span>
                          {row.value}
                        </span>
                      ) : (
                        <span className="text-[#A1A1AA] font-normal">
                          {row.value}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
