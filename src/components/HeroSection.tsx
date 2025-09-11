"use client";
import React from "react";


import SplitText from "./SplitText";
import CardSwap, { Card } from "./CardSwap";
import CircularText from "./CircularText";
import CurvedLoop from "./CurvedLoop";
import ScrollReveal from "./ScrollReveal";
import InfiniteMenu from './InfiniteMenu'
import DomeGallery from "./DomeGallery";

export default function HeroSection() {
  return (
    <>
      {/* Hero Top Section: Headline and Subtitle */}
      <section className="relative flex flex-col items-center justify-center w-full min-h-[40vh] px-4 md:px-12 pt-32">
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col space-y-4 max-w-2xl text-justify" style={{textJustify: 'inter-word', marginTop: '2%'}}>
            <h1 className="text-6xl md:text-7xl lg:text-7xl font-extrabold leading-tight text-purple-500 text-justify" style={{ fontFamily: 'Helvetica', marginTop: '10%', textAlign: 'justify', textJustify: 'inter-word', }}>
              <SplitText
                text="Drowning in inefficiencies?"
                className="text-purple"
                delay={80}
                duration={0.5}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            </h1>
            <br />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mt-2 mb-2 text-justify" style={{ fontFamily: 'inherit', textAlign: 'justify', textJustify: 'inter-word' }}>
              We build tech that streamlines your business, so you can focus on growth, not glitches.
            </h2>
          </div>
          
          {/* Right: CircularText (optional, can be removed if not needed) */}
          <div className="hidden md:block -translate-x-325 -translate-y-55" style={{scale: '0.6'}}>
            <CircularText
              text="MACHBOX*SOLUTIONS*"
              onHover="goBonkers"
              spinDuration={10}
              className="custom-class"
            />
          </div>
        </div>
         <section className="relative flex flex-col items-center justify-center w-full min-h-[40vh] px-4 md:px-12 pb-12">
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex-1 flex justify-center items-center w-full md:w-auto max-w-md" style={{marginTop: '2%', marginLeft: '-5%'}}>
            <CardSwap width={520} height={400} cardDistance={40} verticalDistance={32} delay={5000} skewAmount={8} pauseOnHover={false}>
              <Card customClass="bg-[#18101f] border border-gray-700 text-white p-6 rounded-xl shadow-lg">
                <div className="font-bold text-lg mb-2"><img style={{alignContent: 'center', justifyItems: 'center', justifySelf: 'center'}} src="../aiml_main.png" alt="AI ML" /></div>
                <div className="text-base md:text-lg text-purple-400 font-medium leading-relaxed mt-2" style={{letterSpacing: '0.01em', lineHeight: '1.7', fontWeight: 500}}>
                  We design <span className="font-semibold text-white">intelligent models</span> that <span className="font-semibold text-white">learn</span>, <span className="font-semibold text-white">adapt</span>, and <span className="font-semibold text-white">automate tasks</span> — unlocking <span className="font-semibold text-white">innovation</span> and driving <span className="font-semibold text-white">smarter decisions</span>.
                </div>
              </Card>
              <Card customClass="bg-[#18101f] border border-gray-700 text-white p-6 rounded-xl shadow-lg">
                <div className="font-bold text-lg mb-2"><img src="../cv_main.png" alt="Computer Vision" /></div>
                <div className="text-base md:text-lg text-purple-400 font-medium leading-relaxed mt-2" style={{letterSpacing: '0.01em', lineHeight: '1.7', fontWeight: 500}}>
                  <span className="font-semibold text-white">AI Vision</span> that <span className="font-semibold text-white">sees</span>, <span className="font-semibold text-white">analyzes</span>, and <span className="font-semibold text-white">acts</span> — automating recognition, inspection, and real-time decisions for <span className="font-semibold text-white">smarter businesses</span>.
                </div>
              </Card>
              <Card customClass="bg-[#18101f] border border-gray-700 text-white p-6 rounded-xl shadow-lg">
                <div className="font-bold text-lg mb-2"><img src="../saas_main.png" alt="SaaS Development" /></div>
                <div className="text-base md:text-lg text-purple-400 font-medium leading-relaxed mt-2" style={{letterSpacing: '0.01em', lineHeight: '1.7', fontWeight: 500}}>
                  <span className="font-semibold text-white">SaaS solutions</span> from <span className="font-semibold text-white">idea</span> to <span className="font-semibold text-white">deployment</span> — scalable, secure, and <span className="font-semibold text-white">cloud-first</span> to fuel your growth.
                </div>
              </Card>
              <Card customClass="bg-[#18101f] border border-gray-700 text-white p-6 rounded-xl shadow-lg">
                <div className="font-bold text-lg mb-2"><img src="../cpd_main.png" alt="Cross-Platform Development" /></div>
                <div className="text-base md:text-lg text-purple-400 font-medium leading-relaxed mt-2" style={{letterSpacing: '0.01em', lineHeight: '1.7', fontWeight: 500}}>
                  <span className="font-semibold text-white">One codebase</span>, <span className="font-semibold text-white">every device</span> — seamless apps for web, mobile, and desktop, delivering a <span className="font-semibold text-white">unified experience</span>.
                </div>
              </Card>
              <Card customClass="bg-[#18101f] border border-gray-700 text-white p-6 rounded-xl shadow-lg">
                <div className="font-bold text-lg mb-2"><img src="../api_main.png" alt="API Development" /></div>
                <div className="text-base md:text-lg text-purple-400 font-medium leading-relaxed mt-2" style={{letterSpacing: '0.01em', lineHeight: '1.7', fontWeight: 500}}>
                  <span className="font-semibold text-white">APIs</span> that are <span className="font-semibold text-white">secure</span>, <span className="font-semibold text-white">reliable</span>, and <span className="font-semibold text-white">well-documented</span> — simplifying integrations and accelerating your <span className="font-semibold text-white">digital ecosystem</span>.
                </div>
              </Card>
              <Card customClass="bg-[#18101f] border border-gray-700 text-white p-6 rounded-xl shadow-lg">
                <div className="font-bold text-lg mb-2"><img src="../cyber_main.png" alt="Cybersecurity Audits" /></div>
                <div className="text-base md:text-lg text-purple-400 font-medium leading-relaxed mt-2" style={{letterSpacing: '0.01em', lineHeight: '1.7', fontWeight: 500}}>
                  <span className="font-semibold text-white">Security audits</span> that <span className="font-semibold text-white">uncover vulnerabilities</span>, <span className="font-semibold text-white">strengthen defenses</span>, and ensure <span className="font-semibold text-white">compliance</span> with the highest standards.
                </div>
              </Card>
              <Card customClass="bg-[#18101f] border border-gray-700 text-white p-6 rounded-xl shadow-lg">
                <div className="font-bold text-lg mb-2"><img src="../biz_main.png" alt="Business Intelligence" /></div>
                <div className="text-base md:text-lg text-purple-400 font-medium leading-relaxed mt-2" style={{letterSpacing: '0.01em', lineHeight: '1.7', fontWeight: 500}}>
                  <span className="font-semibold text-white">Raw data</span> becomes <span className="font-semibold text-white">actionable insight</span> — empowering <span className="font-semibold text-white">smarter decisions</span> with advanced BI dashboards and analytics.
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </section>
      </section>

      {/* Divider Section: CurvedLoop */}
      <section className="relative w-full flex items-center justify-center py-2 md:py-4" style={{height: '10px', marginTop: '-40px', marginBottom: '40px', overflow: 'visible', fontSize: '30px'}}>
        <CurvedLoop 
          marqueeText=". Be Creative With Machbox"
          speed={1}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </section>



      {/* ScrollReveal Section: Industries we Serve */}
      <section className="w-full flex items-center text-purple-500 justify-center" style={{justifyContent: 'center', alignItems: 'center', paddingTop: '2%', paddingBottom: '2%', fontSize: '50px', fontWeight: '600', fontFamily: 'Helvetica'}}>
        <ScrollReveal
          baseOpacity={0.2}
          enableBlur={true}
          baseRotation={15}
          blurStrength={2}
        >
          INDUSTRIES WE SERVE
        </ScrollReveal>
      </section>

      {/* Scroll Down to Explore Section */}
      <section className="w-full flex flex-col items-center justify-center" style={{background: 'transparent', padding: '0', margin: '0'}}>
        <div style={{color: '#ccc', fontSize: '2rem', fontWeight: 400, textAlign: 'center', marginBottom: '0.5rem', fontFamily: 'inherit', letterSpacing: '0.01em'}}>
          Grab & Drag to explore
        </div>
        <div style={{fontSize: '2.5rem', color: '#fff', textAlign: 'center', lineHeight: 1}}>
          <span style={{display: 'inline-block', animation: 'bounceDown 1.5s infinite'}}>&#x25BC;</span>
        </div>
        <style>{`
          @keyframes bounceDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
        `}</style>
      </section>

      {/* InfiniteMenu Section */}
      <section className="w-full flex items-center justify-center text-white" style={{ minHeight: '600px', position: 'relative', marginBottom: '40px', marginTop: '20px' }}>
        {(() => {
          const items = [
            {
              image: 'https://picsum.photos/300/300?grayscale',
              link: '',
              title: 'FinTech &\nBanking',
              description: 'Digital payments, trading platforms'
            },
            {
              image: 'https://picsum.photos/400/400?grayscale',
              link: '',
              title: 'Healthcare &\nMedTech',
              description: 'Patient management, telemedicine'
            },
            {
              image: 'https://picsum.photos/500/500?grayscale',
              link: '',
              title: 'Ecommerce &\nRetail',
              description: 'Online stores, inventory systems'
            },
            {
              image: 'https://picsum.photos/600/600?grayscale',
              link: '',
              title: 'Education &\nEdTech',
              description: 'Learning platforms, student portals'
            }
          ];
          return (
            <div style={{ height: '600px', width: '100%', position: 'relative' }}>
              <InfiniteMenu items={items} />
            </div>
          );
        })()}
      </section>

    </>
  );
}
