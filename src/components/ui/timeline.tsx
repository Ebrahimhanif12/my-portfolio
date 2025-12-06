"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-white max-w-4xl font-bold">
          My Development Journey
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-xl">
          A timeline of my growth as a Full Stack Web Developer — from frontend
          craftsmanship to scalable backend systems and cloud deployment.
        </p>
      </div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Left sticky title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 w-10 rounded-full bg-black border border-neutral-700 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-emerald-400 shadow-[0_0_12px_#34ffd2]" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Right content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-400">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
          from-transparent via-neutral-700 to-transparent
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated progress glow */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px]
            bg-gradient-to-t from-emerald-400 via-cyan-400 to-transparent
            rounded-full shadow-[0_0_18px_rgba(52,255,210,0.8)]"
          />
        </div>
      </div>
    </div>
  );
};
