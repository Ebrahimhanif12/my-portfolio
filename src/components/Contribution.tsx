"use client";
import React from "react";
import { motion } from "framer-motion";

const contributions = [
  {
    year: "2023 — 2024",
    role: "Volunteer, Website Team",
    organization: "IEEE AIUB Student Branch",
    details: [
      "Maintained and updated official student branch website",
      "Collaborated with design & content teams",
      "Improved UI responsiveness and performance",
      "Supported event landing pages and registrations",
    ],
  },
  {
    year: "2024 — Present",
    role: "Lead, Website Team",
    organization: "IEEE AIUB Student Branch",
    details: [
      "Leading the complete website development team",
      "Reviewing code and maintaining deployment pipelines",
      "Planning UI/UX improvements for official platforms",
      "Mentoring junior volunteers",
    ],
  },
  {
    year: "Ongoing",
    role: "Open Source Contributor",
    organization: "Various GitHub Projects",
    details: [
      "Contributed to multiple open source repositories",
      "Fixed bugs and improved documentation",
      "Worked with global developer communities",
    ],
  },
  {
    year: "Event Based",
    role: "Campus Ambassador",
    organization: "International Congress of Recent Computer Science Trends",
    details: [
      "Promoted international tech conference on campus",
      "Managed student registrations",
      "Coordinated between organizers and participants",
    ],
  },
  {
    year: "Community Role",
    role: "Technical Team Lead",
    organization: "Cox's Bazar Students Forum, AIUB",
    details: [
      "Led technical operations of the student forum",
      "Managed website and online platforms",
      "Provided IT support for student activities",
    ],
  },
];


export default function Contribution() {
  return (
    <section
      id="contribution"
      className="relative min-h-screen flex flex-col justify-center px-6 py-24 bg-transparent text-white"
    >
      {/* Section Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Contributions
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Community involvement and technical contributions beyond personal projects.
        </p>
      </div>

      {/* Contribution Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
        {contributions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-neutral-800 
                       rounded-2xl p-8 shadow-lg 
                       hover:shadow-emerald-400/20 transition"
          >
            {/* Year Badge */}
            <span className="inline-block mb-3 text-xs font-semibold text-emerald-400 tracking-wide">
              {item.year}
            </span>

            {/* Role */}
            <h3 className="text-2xl font-semibold mb-1">
              {item.role}
            </h3>

            {/* Organization */}
            <p className="text-neutral-400 mb-4">
              {item.organization}
            </p>

            {/* Details */}
            <ul className="text-sm text-neutral-300 space-y-2 list-disc pl-5">
              {item.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
