"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const EMAIL = "ebrahimhanif@ieee.org";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer id="contact" className="bg-[#09090B]/90 text-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-[#71717A] uppercase">
            <span className="text-sky-400/90">06</span>
            <span
              className="h-px w-8 bg-gradient-to-r from-sky-400/60 to-[#222225]"
              aria-hidden="true"
            />
            <span>CONTACT</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Available for full-stack software engineering roles, platform
            architecture consulting, and technical collaborations.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="border-y border-[#222225] divide-y divide-[#222225]">
              {/* Email with Copy */}
              <div className="group py-5 flex items-center justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <Mail
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#71717A] group-hover:text-sky-400 transition-colors mt-0.5 shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#71717A]">
                      Email
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1 block text-sm text-[#FAFAFA] hover:text-sky-300 transition-colors truncate"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#111113] border border-[#222225] hover:border-zinc-500 hover:bg-[#18181B] font-mono text-xs text-[#A1A1AA] hover:text-[#FAFAFA] transition-all duration-200 active:scale-95 cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={13} strokeWidth={1.5} className="text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} strokeWidth={1.5} />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="group py-5 flex items-start gap-3.5">
                <Phone
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#71717A] group-hover:text-sky-400 transition-colors mt-0.5 shrink-0"
                />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#71717A]">
                    Phone
                  </p>
                  <a
                    href="tel:+8801609460512"
                    className="mt-1 block text-sm text-[#FAFAFA] hover:text-sky-300 transition-colors font-mono"
                  >
                    +880 1609-460512
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="group py-5 flex items-start gap-3.5">
                <MapPin
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#71717A] group-hover:text-sky-400 transition-colors mt-0.5 shrink-0"
                />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#71717A]">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-[#FAFAFA]">
                    Uttara Sector 4, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#111113]/90 border border-[#222225] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-lg p-6 sm:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#71717A] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-[#09090B] border border-[#222225] focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/15 rounded-md px-3.5 py-2.5 text-sm text-[#FAFAFA] placeholder:text-[#71717A] outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[11px] uppercase tracking-wider text-[#71717A] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    required
                    className="w-full bg-[#09090B] border border-[#222225] focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/15 rounded-md px-3.5 py-2.5 text-sm text-[#FAFAFA] placeholder:text-[#71717A] outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#71717A] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Share project details, scope, or timeline..."
                  required
                  rows={4}
                  className="w-full bg-[#09090B] border border-[#222225] focus:border-sky-400/50 focus:ring-2 focus:ring-sky-400/15 rounded-md px-3.5 py-2.5 text-sm text-[#FAFAFA] placeholder:text-[#71717A] outline-none resize-none transition-all duration-200"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#FAFAFA] text-[#09090B] hover:bg-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(255,255,255,0.4)] active:scale-[0.98] cursor-pointer"
                >
                  Send Message
                  <ArrowRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>

                <AnimatePresence>
                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25 }}
                      role="status"
                      className="inline-flex items-center gap-2 text-xs font-mono text-emerald-300"
                    >
                      <CheckCircle2 size={15} strokeWidth={1.5} />
                      Message received. I will respond shortly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Minimal Bottom Bar */}
      <div className="border-t border-[#222225]/80">
        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p className="font-mono">
            &copy; {new Date().getFullYear()} Ebrahim Hanif
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Ebrahimhanif12/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAFAFA] transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ebrahimhanif12/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/ebrahim.hanif.779/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Facebook
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-[#FAFAFA] transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
