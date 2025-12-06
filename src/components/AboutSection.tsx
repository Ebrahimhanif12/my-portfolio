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
        <p className="mt-4 text-cyan-300 text-sm sm:text-base md:text-lg font-mono h-6">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-3xl">
          I’m a <span className="text-[#00ff9f] font-semibold">passionate full-stack developer</span> and competitive programmer who thrives on crafting elegant solutions and pushing technical boundaries. I specialize in <span className="text-[#00ffff] font-semibold">JavaScript, C++, and modern web technologies</span>.
        </p>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-3xl">
          When I’m not coding, I’m probably brainstorming cool UI effects or solving algorithms on <span className="text-[#00ffff] font-semibold">LeetCode</span> and <span className="text-[#00ffff] font-semibold">Codeforces</span>.
        </p>

        {/* Skills */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span key={i} className="px-4 py-1 text-xs sm:text-sm rounded-full border border-cyan-400/40 text-cyan-300 bg-cyan-400/10 backdrop-blur hover:scale-105 transition">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
