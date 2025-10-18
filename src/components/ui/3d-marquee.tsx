"use client";

import { cn } from "@/lib/utils";
import StarsCanvas from "../StarsCanvas";
export const ThreeDMarquee = ({
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Split the images array into 4 equal part
 
  return (
   <div className={cn("w-screen relative", className)}>
  <StarsCanvas />
</div>

  );
};