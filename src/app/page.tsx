"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import { ThreeDMarqueeDemoSecond } from "@/components/Banner";
import { Particles } from "@/components/magicui/particles";

const StarsCanvas = dynamic(() => import("@/components/StarsCanvas"), { ssr: false });

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="">
      {/* <div className="relative h-full w-full z-40">
      <Particles ></Particles>
      </div> */}
      <div className="relative">
       <ThreeDMarqueeDemoSecond></ThreeDMarqueeDemoSecond>
       </div>
    
      
    </div>
  );
}
