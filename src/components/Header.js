"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center h-screen text-white text-center relative z-10">
      {/* Profile Picture with Frame */}
      <motion.div
        className="relative mb-6 w-40 h-40 rounded-full overflow-hidden border-8 border-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="me.jpg" // Replace this with your image path
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Typing Animation for Intro */}
      <motion.div
        className="text-3xl md:text-5xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          Hi, I'm [Your Name]
        </h1>
        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-xl font-bold">Passionate Developer | Tech Enthusiast</span> - <span>Your intro or tagline goes here</span>
        </motion.p>
      </motion.div>
    </header>
  );
}
