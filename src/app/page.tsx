"use client"
import AboutSection from "@/components/AboutSection";
import ChatBot from "@/components/Chatbot";
import Contribution from "@/components/Contribution";
import Education from "@/components/Education";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import Project from "@/components/Projects";



export default function Layout() {





  return (
    <div >
      {/* <ThreeDMarqueeDemoSecond></ThreeDMarqueeDemoSecond> */}
      {/* <StickyScrollRevealDemo></StickyScrollRevealDemo> */}
      <AboutSection></AboutSection>
      <Experience></Experience>
      <Education/>
      <Contribution/>
      <Project/>
      <Footer/>
      <ChatBot/>
  
      {/* <Projects></Projects> */}
    {/* <h1>Welcome to My Portfolio</h1>
      <p>This is the home page. Other components will go here.</p> */}
      
      
       
       
    
      
    </div>
  );
}
