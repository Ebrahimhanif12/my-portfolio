"use client"
import { useState } from "react";
import dynamic from "next/dynamic";
import Intro, { ThreeDMarqueeDemoSecond } from "@/components/Banner";
import { Projects } from "@/components/projects/page";
import { StickyScrollRevealDemo } from "@/components/About";
import AboutSection from "@/components/AboutSection";
import { Experience } from "@/components/Experience";



export default function Layout() {





  return (
    <div >
      {/* <ThreeDMarqueeDemoSecond></ThreeDMarqueeDemoSecond> */}
      {/* <StickyScrollRevealDemo></StickyScrollRevealDemo> */}
      <AboutSection></AboutSection>
      <Experience></Experience>
  
      {/* <Projects></Projects> */}
    {/* <h1>Welcome to My Portfolio</h1>
      <p>This is the home page. Other components will go here.</p> */}
      
      
       
       
    
      
    </div>
  );
}
