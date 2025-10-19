"use client";
import GlassSurface from "./GlassSurface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default function Header() {
  return (
    <div className="fixed top-6 left-1/2 z-[100] w-full max-w-6xl px-4" style={{transform: 'translateX(-50%)'}}>
      <GlassSurface
        width="100%"
        height={64}
        borderRadius={32}
        blur={18}
        opacity={0.85}
        backgroundOpacity={0.18}
      >
        {/* Logo left */}
        <div className="flex items-center pl-6 pr-2">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} priority />
          </Link>
        </div>
        {/* Nav center */}
  <nav className="flex-1 flex justify-center gap-6 text-lg font-semibold text-white max-w-2xl mx-auto">
          <button onClick={() => scrollToSection('hero')} className="hover:text-purple-300 transition-colors cursor-pointer">Services</button>
          <button onClick={() => scrollToSection('solutions')} className="hover:text-purple-300 transition-colors cursor-pointer">Solutions</button>
          <button onClick={() => scrollToSection('process')} className="hover:text-purple-300 transition-colors cursor-pointer">Process</button>
          <button onClick={() => scrollToSection('visionaries')} className="hover:text-purple-300 transition-colors cursor-pointer">Team</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-purple-300 transition-colors cursor-pointer">Contact</button>
        </nav>
        {/* Get Quote right */}
        <div className="flex items-center pr-6 pl-2">
          <a 
            href="mailto:support@machboxsolutions.com"
            className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold px-6 py-2 rounded-xl shadow-md transition-colors text-base cursor-pointer"
          >
            Get Quote
          </a>
        </div>
      {/* end header container */}
      </GlassSurface>
    </div>
  );
}
