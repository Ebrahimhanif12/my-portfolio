"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Website Builder",
    description:
      "An AI-powered website builder that generates complete websites from user prompts with dynamic layouts and responsive design.",
    tech: ["Next.js", "Tailwind", "AI API"],
    demo: "https://kiddoo-ai.vercel.app/",
    github: "https://github.com/Ebrahimhanif12/kiddo",
  },
  {
    title: "AI Companion (Chat App)",
    description:
      "An intelligent AI companion chat application with real-time messaging, authentication, and conversation memory.",
    tech: ["Next.js", "WebSocket", "AI API", "Auth"],
    demo: "https://inflow-chat.vercel.app/",
    github: "https://github.com/Ebrahimhanif12/inflowChat",
  },
  {
    title: "Corporate Websites (Multiple Clients)",
    description:
      "Designed and developed multiple corporate websites for different companies with modern UI, SEO optimization, and high performance.",
    tech: ["Next.js", "Tailwind", "SEO"],
    demo: "https://www.frolinno.com/",
    github: "https://github.com/Ebrahimhanif12",
  },
  {
    title: "IEEE AIUB Student Branch Official Website",
    description:
      "Official website for IEEE AIUB Student Branch featuring event management, team showcase, announcements, and registration system.",
    tech: ["Next.js", "Tailwind", "CMS"],
    demo: "https://ieeeaiubsb.com/",
    github: "https://github.com/Ebrahimhanif12",
  },
  {
    title: "IEEE SPAVE Website",
    description:
      "Official website for IEEE SPAVE with modern UI, dynamic content, and optimized performance.",
    tech: ["Next.js", "Tailwind"],
    demo: "https://spave.ieeeaiubsb.com/",
    github: "https://github.com/Ebrahimhanif12",
  },
];


export default function Project() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center px-6 py-24 bg-transparent text-white"
    >
      {/* Section Header */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Projects
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          A selection of projects showcasing my skills in full-stack development and AI integration.
        </p>
      </div>

      {/* Project Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-md border border-neutral-800 
                       rounded-2xl p-8 shadow-lg 
                       hover:shadow-purple-500/20 transition flex flex-col justify-between"
          >
            {/* Title */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-neutral-400 mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full 
                               bg-neutral-800 text-neutral-200 border border-neutral-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              {/* Demo Button */}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg 
                           bg-gradient-to-r from-purple-500 to-blue-500 
                           text-sm font-medium hover:opacity-90 transition"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg 
                           border border-neutral-700 text-sm font-medium
                           hover:bg-neutral-800 transition"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
