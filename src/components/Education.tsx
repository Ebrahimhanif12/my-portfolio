"use client";
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    level: "Secondary School Certificate (SSC)",
    institute: "Naya Para Al-Haj Nabi Hossain High School Teknaf",
    year: "2018",
    group: "Science",
    result: "GPA 4.56 / 5.00",
    details: [
      "Strong foundation in Mathematics, Physics & ICT",
      "Participated in science fairs and coding contests",
      "Developed early interest in programming",
    ],
  },
  {
    level: "Higher Secondary Certificate (HSC)",
    institute: "Cox's Bazar City College",
    year: "2020",
    group: "Science",
    result: "GPA 5.00 / 5.00",
    details: [
      "Advanced Mathematics & Problem Solving focus",
      "Introduced to Competitive Programming with C++",
      "Physics & ICT specialization",
    ],
  },
  {
    level: "Bachelor of Science and Technology (BSc) in CSE",
    institute: "American International University Bangladesh",
    year: "2023 — Present",
    group: "Computer Science & Engineering",
    result: "Current CGPA 3.61 / 4.00",
    details: [
      "Core courses: DSA, OOP, DBMS, OS, Computer Networks",
      "Full Stack Web Development projects",
      "Competitive Programming & Algorithms practice",
    ],
  },
];

export default function Education() {
  return (
    <section id="education"  className="relative min-h-screen flex flex-col justify-center px-6 py-24 bg-transparent text-white">
      
      {/* Section Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Education
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Academic background that shaped my foundation in computer science and engineering.
        </p>
      </div>

      {/* Education Cards */}
      <div className="max-w-5xl cursor-pointer mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/20 transition"
          >
            <span className="text-xs text-cyan-400 font-semibold">
              {edu.year}
            </span>

            <h3 className="text-xl font-semibold mt-2 mb-1">
              {edu.level}
            </h3>

            <p className="text-l font-bold text-neutral-400 mb-2">
              {edu.institute}
            </p>

            <p className="text-sm text-neutral-300 mb-3">
              Subject: {edu.group}
            </p>

            <p className="text-sm text-emerald-400 font-medium mb-4">
              {edu.result}
            </p>

            <ul className="text-sm text-neutral-300 space-y-2 list-disc pl-4">
              {edu.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
