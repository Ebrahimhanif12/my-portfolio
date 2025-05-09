import Background from "@/components/Background";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { ThreeDMarqueeDemoSecond } from "@/components/Banner";
import StarsCanvas from "@/components/StarsCanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Animated Background */}
        {/* <Background /> */}

        <div className="">
          {/* UI Components */}
          <Navbar />
          <Sidebar />
          
          
          {/* <Header /> */}
        </div>

        {children}
      </body>
    </html>
  );
}
