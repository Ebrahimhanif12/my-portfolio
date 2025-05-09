"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: sidebarOpen ? 0 : -300 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 h-full w-64 bg-black bg-opacity-75 text-white p-6 z-20 md:hidden"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Menu</h2>
        <Button variant="ghost" onClick={() => setSidebarOpen(false)}>
          <X className="w-6 h-6" />
        </Button>
      </div>
      <ul className="space-y-4">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </motion.aside>
  );
}
