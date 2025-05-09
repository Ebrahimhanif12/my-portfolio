"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-50 text-white p-4 flex justify-between items-center z-10">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="hover:text-gray-300">Home</a>
        <a href="#projects" className="hover:text-gray-300">Projects</a>
        <a href="#contact" className="hover:text-gray-300">Contact</a>
      </div>
      <Button variant="outline" className="md:hidden" onClick={() => setSidebarOpen(true)}>
        <Menu className="w-6 h-6" />
      </Button>
    </nav>
  );
}
