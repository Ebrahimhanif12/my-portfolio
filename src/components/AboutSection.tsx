"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

const roles = ["Full Stack Developer", "Competitive Programmer", "AI Enthusiast"];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [particles, setParticles] = useState<{ top: string; left: string; delay: string }[]>([]);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  // Typing Effect
  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentRole = roles[roleIndex];
      if (charIndex < currentRole.length) {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, [charIndex, roleIndex]);

  // ✅ Generate random particle positions **only on client**
  useEffect(() => {
    const tempParticles = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
    }));
    setParticles(tempParticles);
  }, []);

  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind",
    "C++",
    "MongoDB",
    "AI Integration",
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen mt-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-20 bg-transparent text-white z-10 overflow-hidden"
    >
      {/* Floating Cyber Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
            style={{
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
        }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center"
      >
        {/* Parallax Image */}
        <motion.div style={{ y: imageY }} className="relative mb-8">
          <img
            src="/ne3.png"
            alt="Profile"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full border border-white/20 shadow-[0_0_40px_rgba(0,255,255,0.25)]"
          />
          <div className="absolute inset-0 rounded-full border border-cyan-400/40 blur-md"></div>
        </motion.div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          About Me
          <span className="block h-1 w-24 bg-gradient-to-r from-[#00ff9f] to-[#00ffff] mt-3 rounded-full animate-pulse mx-auto"></span>
        </h2>

        {/* Typing Role */}
        <p className="mt-4 text-cyan-300 text-xl sm:text-base md:text-lg font-mono h-6">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        {/* Description */}
        <p className="mt-6 text-2xl sm:text-base md:text-xl leading-relaxed text-gray-300 max-w-3xl">
          I’m <span className="font-bold text-2xl "> Ebrahim Hanif </span>, a <span className="text-[#00ff9f] text-xl font-semibold">passionate full-stack developer</span> and competitive programmer who thrives on crafting elegant solutions and pushing technical boundaries. I specialize in <span className="text-[#00ffff] font-semibold">JavaScript, C++, and modern web technologies</span>.
        </p>
        <p className="mt-4  sm:text-base md:text-xl leading-relaxed text-gray-300 max-w-3xl">
          When I’m not coding, I’m probably brainstorming cool UI effects or solving algorithms on <span className="text-[#00ffff] text-xl font-semibold">LeetCode</span> and <span className="text-[#00ffff] font-semibold">Codeforces</span>.
        </p>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span key={i} className="px-4 py-1 text-xs sm:text-sm rounded-full border border-cyan-400/40 text-cyan-300 bg-cyan-400/10 backdrop-blur hover:scale-105 transition">
              {skill}
            </span>
          ))}
        </div>
        {/* ✅ Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {/* Download CV */}
          <a
            href="/EbrahimHanif's_Cv.pdf"
            download
            className="px-6 py-2 text-sm sm:text-base rounded-full border border-[#00ff9f] text-[#00ff9f] bg-[#00ff9f]/10 hover:bg-[#00ff9f]/20 hover:shadow-[0_0_20px_#00ff9f] transition"
          >
            Download CV
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ebrahimhanif12/"
            target="_blank"
            className="px-6 py-2 text-sm sm:text-base rounded-full border border-cyan-400 text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 hover:shadow-[0_0_20px_#00ffff] transition"
          >
            GitHub
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/ebrahim.hanif.779/"
            target="_blank"
            className="px-6 py-2 text-sm sm:text-base rounded-full border border-blue-500 text-blue-500 bg-blue-500/10 hover:bg-blue-500/20 hover:shadow-[0_0_20px_#3b82f6] transition"
          >
            Facebook
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ebrahimhanif12/"
            target="_blank"
            className="px-6 py-2 text-sm sm:text-base rounded-full border border-sky-500 text-sky-500 bg-sky-500/10 hover:bg-sky-500/20 hover:shadow-[0_0_20px_#0ea5e9] transition"
          >
            LinkedIn
          </a>
        </div>

      </motion.div>
    </section>
  );
}
