import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "2023 — Present",
      content: (
        <div className="bg-black/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 shadow-lg">
          <h4 className="text-xl font-semibold text-white mb-2">
            Full Stack Web Developer
          </h4>
          <p className="text-sm text-neutral-300 mb-4">
            Designing, building, and deploying scalable full-stack applications
            with modern web technologies.
          </p>

          <ul className="text-sm text-neutral-300 space-y-2">
            <li>✅ Built full-stack apps using Next.js, React & Tailwind</li>
            <li>✅ Developed REST & API routes with Node.js</li>
            <li>✅ Integrated authentication & secure user flows</li>
            <li>✅ Optimized performance & SEO for production apps</li>
            <li>✅ Deployed projects on Vercel & cloud platforms</li>
          </ul>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-neutral-800 text-white">
              Next.js
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-800 text-white">
              React
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-800 text-white">
              Node.js
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-800 text-white">
              MongoDB
            </span>
            <span className="px-3 py-1 rounded-full bg-neutral-800 text-white">
              Tailwind
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Frontend Expertise",
      content: (
        <div className="bg-black/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 shadow-lg">
          <h4 className="text-xl font-semibold text-white mb-3">
            UI / UX & Frontend Development
          </h4>

          <ul className="text-sm text-neutral-300 space-y-2">
            <li>✅ Responsive layouts with Tailwind & CSS Grid</li>
            <li>✅ Interactive animations using Framer Motion</li>
            <li>✅ Pixel-perfect UI from Figma designs</li>
            <li>✅ Performance-optimized React components</li>
            <li>✅ Accessibility & SEO best practices</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Backend & Databases",
      content: (
        <div className="bg-black/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 shadow-lg">
          <h4 className="text-xl font-semibold text-white mb-3">
            Server, APIs & Data
          </h4>

          <ul className="text-sm text-neutral-300 space-y-2">
            <li>✅ REST APIs with Next.js & Node.js</li>
            <li>✅ Secure authentication systems</li>
            <li>✅ Database design with MongoDB & SQL</li>
            <li>✅ Server-side rendering & optimization</li>
            <li>✅ Web security & performance tuning</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Deployment & DevOps",
      content: (
        <div className="bg-black/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 shadow-lg">
          <h4 className="text-xl font-semibold text-white mb-3">
            Production & Deployment
          </h4>

          <ul className="text-sm text-neutral-300 space-y-2">
            <li>✅ Vercel CI/CD workflows</li>
            <li>✅ Environment & secret management</li>
            <li>✅ Build optimization & caching</li>
            <li>✅ API security & rate limiting</li>
            <li>✅ Monitoring & performance debugging</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full bg-transparent">
      <Timeline data={data} />
    </div>
  );
}
