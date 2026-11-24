import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Experience } from "@/components/Experience";
import ResearchEducation from "@/components/ResearchEducation";
import Leadership from "@/components/Leadership";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function HomePage() {
  return (
    <div className="relative bg-[#09090B] text-[#FAFAFA] overflow-x-clip">
      {/* Subtle ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-subtle-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_35%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-0 h-[540px] w-[min(1000px,100vw)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.09)_0%,rgba(99,102,241,0.05)_38%,transparent_72%)] blur-2xl"
      />

      <div className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <ResearchEducation />
        <Leadership />
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
}
