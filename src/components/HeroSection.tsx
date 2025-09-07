"use client";
import React from "react";
import SplitText from "./SplitText";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-top justify-center w-full min-h-[80vh] px-6 text-center">
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-purple-500" style={{ fontFamily: 'Helvetica' }}>
          <SplitText
            text="MachBox Solutions"
            className="text-purple"
            delay={80}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
        </h1>
        {/* Subtitle */}
        <h2 className="text-4xl md:text-4xl lg:text-4xl font-extrabold leading-tight text-white" style={{ fontFamily: 'Courier New, monospace' }}>
          Complete Business Technology Solutions
        </h2>
        {/* Description */}
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 font-medium" style={{ fontFamily: 'Courier New, monospace', fontWeight: 900, fontSize: '1.5rem', lineHeight: '1.75rem', color: '#666666ff' }}>
          Empowering businesses with tailored tech solutions that drive innovation, scalability, and growth.
        </p>

        {/* Call to Action */}
        
      </div>
    </section>
  );
}
