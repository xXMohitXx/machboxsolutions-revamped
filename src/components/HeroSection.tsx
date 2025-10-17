"use client";
import React from "react";


import SplitText from "./SplitText";
import CardSwap, { Card } from "./CardSwap";
import CircularText from "./CircularText";
import CurvedLoop from "./CurvedLoop";
import ScrollReveal from "./ScrollReveal";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";
import InfiniteMenu from './InfiniteMenu'
import DomeGallery from "./DomeGallery";
import LaserFlow from "./LaserFlow";
import ChromaGrid from './ChromaGrid';

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
      <section className="w-full flex flex-col items-center text-purple-500 justify-center" style={{justifyContent: 'center', alignItems: 'center', paddingTop: '2%', paddingBottom: '2%', fontSize: '50px', fontWeight: '600', fontFamily: 'Helvetica'}}>
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
        <div style={{color: '#ccc', fontSize: '1rem', fontWeight: 400, textAlign: 'center', marginBottom: '0.5rem', fontFamily: 'inherit', letterSpacing: '0.01em'}}>
          Grab & Drag to explore
        </div>
        <div style={{fontSize: '1.5rem', color: '#fff', textAlign: 'center', lineHeight: 1}}>
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
        <section className="w-full flex items-center justify-center text-purple-500 text-border-black" style={{ minHeight: '600px', position: 'relative', marginTop: '20px', textShadow: '0 0 9px black', background: 'transparent' }}>
        {(() => {
          const items = [
            {
              image: '/fintec.jpeg',
              link: '',
              title: 'FinTech\n & Banking',
              description: 'Digital payments, Trading platforms'
            },
            {
              image: '/healthcare_in.jpeg',
              link: '',
              title: 'Healthcare\n & MedTech',
              description: 'Patient management, Telemedicine'
            },
            {
              image: '/ecom_in.jpeg',
              link: '',
              title: 'Ecommerce\n & Retail',
              description: 'Online stores, Inventory systems'
            },
            {
              image: '/edtech_in.jpeg',
              link: '',
              title: 'Education\n & EdTech',
              description: 'Learning platforms, Student portals'
            }
          ];
          return (
            <div style={{ height: '600px', width: '100%', position: 'relative', background: 'transparent' }}>
              <InfiniteMenu items={items} />
            </div>
          );
        })()}
      </section>
      {/* Industries We Serve description section (LaserFlow Interactive Example) */}
      {(() => {
        return (
          <div 
            style={{ 
              height: '900px', 
              position: 'relative', 
              overflow: 'hidden',
              width: '100%',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
              <LaserFlow
                horizontalBeamOffset={0.2}
                verticalBeamOffset={0.1}
                color="#a259ff"
            />
            <div style={{
              position: 'absolute',
              top: '40%',
              left: '40%',
              transform: 'translateX(-50%)',
              width: '86%',
              height: '60%',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderRadius: '20px',
              border: '2px solid #a259ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              zIndex: 6
            }}>
              {/* Overlay content: company-aligned messaging */}
              <div style={{padding: '3rem', textAlign: 'left', maxWidth: '1120px'}}>
                <h3 style={{color: '#a259ff', fontSize: '2.2rem', marginBottom: '0.5rem', fontWeight: 700, fontFamily: 'Helvetica'}}>Crafting Connected Digital Experiences</h3>
                <p style={{color: '#ddd', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.25rem', maxWidth: '70%'}}>
                  At Machbox Solutions we build resilient, scalable software that removes friction and accelerates growth. From intelligent automation and AI-driven insights to secure cloud-native platforms — we help teams move faster and deliver measurable business value.
                </p>

                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap'}}>
                  <div style={{flex: '1 1 200px', minWidth: '180px', background: 'rgba(162,89,255,0.06)', border: '1px solid rgba(162,89,255,0.12)', padding: '1rem 1rem', borderRadius: '12px'}}>
                    <div style={{color: '#fff', fontWeight: 700, marginBottom: '0.35rem'}}>AI & Automation</div>
                    <div style={{color: '#cfc8ff', fontSize: '0.95rem'}}>Custom models that reduce manual work and power smarter decisions.</div>
                  </div>

                  <div style={{flex: '1 1 200px', minWidth: '180px', background: 'rgba(162,89,255,0.03)', border: '1px solid rgba(162,89,255,0.08)', padding: '1rem 1rem', borderRadius: '12px'}}>
                    <div style={{color: '#fff', fontWeight: 700, marginBottom: '0.35rem'}}>SaaS & Platforms</div>
                    <div style={{color: '#cfc8ff', fontSize: '0.95rem'}}>Scalable, secure products designed for rapid iteration and growth.</div>
                  </div>

                  <div style={{flex: '1 1 200px', minWidth: '180px', background: 'rgba(162,89,255,0.03)', border: '1px solid rgba(162,89,255,0.08)', padding: '1rem 1rem', borderRadius: '12px'}}>
                    <div style={{color: '#fff', fontWeight: 700, marginBottom: '0.35rem'}}>Computer Vision</div>
                    <div style={{color: '#cfc8ff', fontSize: '0.95rem'}}>Vision systems that see, analyze, and automate inspection at scale.</div>
                  </div>
                </div>

                <div style={{marginTop: '1.5rem'}}>
                  <a href="#contact" className="inline-block rounded-md bg-purple-600 text-white px-5 py-3 font-semibold hover:bg-purple-500 transition-colors" style={{textDecoration: 'none'}}>Talk to our team</a>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
      {/* ScrollReveal Section: Industries we Serve */}
      <section className="w-full flex flex-col items-center text-purple-500 justify-center" style={{justifyContent: 'center', alignItems: 'center', paddingTop: '5%', paddingBottom: '2%', fontSize: '50px', fontWeight: '600', fontFamily: 'Helvetica'}}>
        <ScrollReveal
          baseOpacity={0.2}
          enableBlur={true}
          baseRotation={15}
          blurStrength={2}
        >
          Our Visionaries
        </ScrollReveal>

        
      </section>
      {/* ChromaGrid Section */}
      <section className="w-full flex items-center justify-center py-12">
        {(() => {
          const items = [
            {
              image: "https://i.pravatar.cc/300?img=1",
              title: "Mohit Manglani",
              subtitle: "Founder & CEO",
              handle: "@mohit.127.0.0.1",
              borderColor: "#3B82F6",
              gradient: "linear-gradient(145deg, #3B82F6, #000)",
              url: "https://www.linkedin.com/in/mohit-manglani-412997220/"
            },
            {
              image: "https://i.pravatar.cc/300?img=2",
              title: "Pratham Rathod",
              subtitle: "Founding Engineer",
              handle: "@pratham_rathod_26",
              borderColor: "#10B981",
              gradient: "linear-gradient(180deg, #10B981, #000)",
              url: "https://linkedin.com/in/mikechen"
            },
            {
              image: 'https://i.pravatar.cc/300?img=3',
              title: 'Shirisha Kundi',
              subtitle: 'Managing and Operations Head',
              handle: '@shiriishaa_rao',
              borderColor: '#F59E0B',
              gradient: 'linear-gradient(165deg, #F59E0B, #000)',
              url: 'https://dribbble.com/'
    }
          ];
          
          return (
            <div style={{ 
              height: '600px', 
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }}>
              
              <ChromaGrid 
                items={items}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          );
        })()}
      </section>
      
        
    </>
  );
}
