"use client"; // Ensure it's a Client Component

import dynamic from "next/dynamic";

// Import StarsCanvas without SSR
const StarsCanvas = dynamic(() => import("@/components/StarsCanvas"), { ssr: false });

export default function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <StarsCanvas />
    </div>
  );
}
