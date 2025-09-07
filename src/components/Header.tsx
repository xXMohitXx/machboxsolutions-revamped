"use client";
import GlassSurface from "./GlassSurface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
          <Image src="/logo.svg" alt="Logo" width={40} height={40} priority />
        </div>
        {/* Nav center */}
        <nav className="flex-1 flex justify-center gap-10 text-lg font-semibold text-white">
          <Link href="#services" className="hover:text-purple-300 transition-colors">Services</Link>
          <Link href="#solutions" className="hover:text-purple-300 transition-colors">Solutions</Link>
          <Link href="#portfolio" className="hover:text-purple-300 transition-colors">Portfolio</Link>
          <Link href="#contact" className="hover:text-purple-300 transition-colors">Contact</Link>
          <Link href="#contact" className="hover:text-purple-300 transition-colors">Team</Link>
        </nav>
        {/* Get Quote right */}
        <div className="flex items-center pr-6 pl-2">
          <Link href="#get-quote">
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold px-6 py-2 rounded-xl shadow-md transition-colors text-base">
              Get Quote
            </button>
          </Link>
        </div>
      {/* end header container */}
      </GlassSurface>
    </div>
  );
}
