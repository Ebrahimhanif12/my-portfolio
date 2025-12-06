"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Contribution", link: "#contribution" },
    { name: "Projects", link: "#projects" },
    { name: "Achievement", link: "/achievement" },
  ];

  const handleScroll = (link: string) => {
    if (link.startsWith("#")) {
      const id = link.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = link; // route
    }
  };

  return (
    <nav className="fixed bg-transparent top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Desktop Name */}
        <Link href="/">
        <div className="text-white cursor-pointer font-bold text-xl cursor-default">
          Ebrahim Hanif
        </div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(item.link)}
              className="text-white cursor-pointer hover:text-[#00ffff] transition-colors font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isMobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-transparent">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                handleScroll(item.link);
                setIsMobileOpen(false);
              }}
              className="block w-full text-right px-6 py-3 text-white hover:bg-gray-800 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
