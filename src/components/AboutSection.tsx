"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="min-h-screen bg-transparent text-white flex flex-col justify-center items-center px-6 py-20"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          },
        }}
        className="max-w-4xl text-center justify-items-center items-center "
      >
        <img src="/me.jpg" className="w-50 h-50 rounded-full overflow-hidden items-center justify-center"></img>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
          About Me
          <span className="block h-1 w-24 bg-gradient-to-r from-[#00ff9f] to-[#00ffff] mt-2 mx-auto rounded-full animate-pulse"></span>
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          I’m a <span className="text-[#00ff9f] font-semibold">passionate developer</span> and
          competitive programmer who thrives on crafting elegant solutions and pushing technical boundaries.
          I specialize in JavaScript, C++, and modern web technologies.
          When I’m not coding, I’m probably brainstorming cool UI effects or solving algorithms on
          <span className="text-[#00ffff] font-semibold"> LeetCode</span> and <span className="text-[#00ffff] font-semibold">Codeforces</span>.
        </p>
      </motion.div>
    </section>
  );
}
