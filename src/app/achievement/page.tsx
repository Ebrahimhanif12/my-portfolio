"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const academicAchievements = [
  {
    title: "SSC Certificate",
    issuer: "Board of Intermediate & Secondary Education",
    year: "2019",
    image: "/certificates/ssc.jpg",
  },
  {
    title: "HSC Certificate",
    issuer: "Board of Intermediate & Secondary Education",
    year: "2021",
    image: "/certificates/hsc.jpg",
  },
  {
    title: "BSc in Computer Science",
    issuer: "American International University-Bangladesh",
    year: "2025 (Expected)",
    image: "/certificates/bsc.jpg",
  },
];

const skillAchievements = [
  {
    title: "Full Stack Web Development",
    issuer: "Online Training Platform",
    year: "2023",
    image: "/certificates/fullstack.jpg",
  },
  {
    title: "AI & Machine Learning Workshop",
    issuer: "IEEE",
    year: "2024",
    image: "/certificates/ai.jpg",
  },
];

const extraCurricular = [
  {
    title: "Leadership Development Program",
    issuer: "IEEE AIUB Student Branch",
    year: "2024",
    image: "/certificates/leadership.jpg",
  },
];

function AchievementCard({
  title,
  issuer,
  year,
  image,
}: {
  title: string;
  issuer: string;
  year: string;
  image: string;
}) {
  return (
    <div className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-cyan-400 transition">
      {/* IMAGE */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* TEXT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{issuer}</p>
        <p className="text-xs text-cyan-400 mt-1">{year}</p>
      </div>
    </div>
  );
}

export default function AchievementsPage() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Auto-hide popup after 5 seconds (optional)
    const timer = setTimeout(() => setShowPopup(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-transparent text-white px-6 py-24 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Popup Message */}
        {showPopup && (
          <div className="fixed top-60 left-1/2 transform -translate-x-1/2 z-50 bg-neutral-900/95 border border-cyan-400 text-white px-6 py-4 rounded-xl shadow-lg max-w-sm text-center animate-fadeIn">
            <p>The Certificates will be uploaded soon. Thank you for your understanding.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-3 text-cyan-400 cursor-pointer hover:text-cyan-300 font-semibold"
            >
              Close
            </button>
          </div>
        )}

        {/* HEADER */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-cyan-400">Achievements</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my academic success, technical certifications, personal
            development, and extracurricular accomplishments.
          </p>
        </div>

        {/* ACADEMIC ACHIEVEMENTS */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-cyan-400">
            Academic Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {academicAchievements.map((item, index) => (
              <AchievementCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* PERSONAL / SKILL ACHIEVEMENTS */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-emerald-400">
            Personal & Skill Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skillAchievements.map((item, index) => (
              <AchievementCard key={index} {...item} />
            ))}
          </div>
        </section>

        {/* EXTRA CURRICULAR */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-purple-400">
            Extra-Curricular Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {extraCurricular.map((item, index) => (
              <AchievementCard key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
