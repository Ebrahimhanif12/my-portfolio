"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Research", href: "/#research" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090B]/75 backdrop-blur-md border-b border-[#222225]/80 transition-colors">
      <nav
        aria-label="Primary Navigation"
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        {/* Left Wordmark / Monogram */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[#111113] border border-[#222225] group-hover:border-sky-400/40 group-hover:bg-[#18181B] group-hover:shadow-[0_0_16px_rgba(56,189,248,0.18)] font-mono text-xs font-semibold tracking-wider text-[#FAFAFA] transition-all duration-300 group-hover:-translate-y-0.5">
            EH
          </span>
          <span className="text-sm font-medium tracking-tight text-[#FAFAFA] group-hover:text-white transition-colors hidden sm:inline">
            Ebrahim Hanif
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-sky-400 after:to-indigo-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/Ebrahim_Hanif_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[#222225] bg-[#111113] hover:border-zinc-500 hover:bg-[#18181B] text-xs font-mono text-[#FAFAFA] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Resume
            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-[#222225] bg-[#111113] text-[#FAFAFA] hover:border-[#3F3F46] hover:bg-[#18181B] transition-all duration-200 active:scale-95 cursor-pointer"
        >
          {mobileOpen ? (
            <X size={18} strokeWidth={1.5} />
          ) : (
            <Menu size={18} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Scroll Progress Hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="h-[1.5px] w-full origin-left bg-gradient-to-r from-sky-400 via-indigo-400 to-zinc-200"
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#09090B]/95 backdrop-blur-md border-t border-[#222225]"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col divide-y divide-[#222225]">
              {navLinks.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 pb-1">
                <a
                  href="/Ebrahim_Hanif_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-md border border-[#222225] bg-[#111113] hover:border-[#3F3F46] hover:bg-[#18181B] text-xs font-mono text-[#FAFAFA] transition-colors"
                >
                  Resume (PDF)
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
