"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { motion } from "framer-motion";
import { useState, useEffect,useRef } from 'react';
import { TypingAnimation } from "./magicui/typing-animation";


export default function Intro() {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "A Computer Science student with a strong passion for building software, solving problems, and exploring the latest in technology. From front-end development to algorithmic challenges, I enjoy turning ideas into impactful digital solutions.";

  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText((prev) => {
        const nextChar = fullText.charAt(indexRef.current);
        indexRef.current += 1;
        return prev + nextChar;
      });

      if (indexRef.current >= fullText.length) {
        clearInterval(interval);
      }
    }, 40); // Adjust typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative z-20 text-center px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto max-w-4xl leading-tight">
        Hi, I'm{" "}
        <br className="block sm:hidden" />
        <span className="sm:ml-2 underline decoration-pink-500 decoration-[6px] underline-offset-[10px]">
          Ebrahim Hanif
        </span>
      </h1>

     
        <TypingAnimation>{fullText}</TypingAnimation>
    
    </motion.div>
  );
}

export function ThreeDMarqueeDemoSecond() {
    const images = [
        "me.jpg",
        "me.jpg",
        "pimage2.jpg",
        "pimage1.jpg",
        "pimage2.jpg",
        "pimage1.jpg",
        "pimage2.jpg",
        "pimage1.jpg",
        "pimage2.jpg",
        "pimage1.jpg",
        "pimage2.jpg",
        "pimage1.jpg",
        "pimage2.jpg",
        "pimage1.jpg",
        "pimage2.jpg",
        "pimage1.jpg",
        "pimage2.jpg",
        "pimage1.jpg",
        "pimage2.jpg",
        "pimage1.jpg",
        "pimage2.jpg",
        "pimage1.jpg",

    ];
    return (
        <div className="relative top-10  mx-auto my-5 flex h-screen w-full  flex-col items-center p-10 overflow-hidden rounded-3xl">
            <div className="relative mt-20 z-20 mb-6 w-40 h-40 rounded-full overflow-hidden border-8 border-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                <img className="w-full h-full object-cover" src="me.jpg"></img>
            </div>
            <Intro></Intro>


            {/* <motion.div
                className="relative z-20 text-center px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto max-w-4xl leading-tight">
                    Hi, I'm{" "}
                    <br className="block sm:hidden" />
                    <span className="sm:ml-2 underline decoration-pink-500 decoration-[6px] underline-offset-[10px]">
                        Ebrahim Hanif
                    </span>
                </h1>

                <motion.p
                    className="mt-4 text-base  sm:text-lg md:text-xl font-medium"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <span className="font-bold text-white">A Computer Science student with a strong passion for building software, solving problems, and exploring the latest in technology. From front-end development to algorithmic challenges, I enjoy turning ideas into impactful digital solutions.</span>
                </motion.p>
            </motion.div> */}


            {/* <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
                This is your life and it&apos;s ending one{" "}
                <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
                    moment
                </span>{" "}
                at a time.
            </h2>
            <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
                You are not your job, you&apos;re not how much money you have in the
                bank. You are not the car you drive. You&apos;re not the contents of
                your wallet.
            </p>

            <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
                <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                    Join the club
                </button>
                <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                    Read more
                </button>
            </div> */}

            {/* overlay */}
            <div className="absolute inset-0 z-10  h-full w-full bg-black/80 dark:bg-black/40" />
            <ThreeDMarquee
                className="pointer-events-none absolute inset-0 h-full w-full"
                images={images}
            />
        </div>
    );
}
