import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import MatrixBackground from '@/components/MatrixBackground';
import MatBackground from '@/components/MatBackground';
import { NavbarDemo } from '@/components/Nav';

export const metadata = {
  title: 'My Portfolio',
  description: 'Created with Next.js and Matrix-style background',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="relative overflow-x-hidden">
        {/* Background layers */}
        <MatBackground />
        <MatrixBackground />

        {/* Content and navbar above background */}
        <div className="relative z-10">
          <NavbarDemo></NavbarDemo>
          <main className="min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
