"use client";
import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import Image from "next/image";

import SplitText from "./SplitText";
import CardSwap, { Card } from "./CardSwap";
import CircularText from "./CircularText";
import CurvedLoop from "./CurvedLoop";
import ScrollReveal from "./ScrollReveal";

// Lazy load heavy components
const InfiniteMenu = lazy(() => import('./InfiniteMenu'));
const LaserFlow = lazy(() => import("./LaserFlow"));
const ChromaGrid = lazy(() => import('./ChromaGrid'));
const Stepper = lazy(() => import('./Stepper').then(module => ({ default: module.default })));
const Step = lazy(() => import('./Stepper').then(module => ({ default: module.Step })));
const MetallicPaint = lazy(() => import('./MetallicPaint').then(module => ({ default: module.default })));

// Loading component for suspense
const ComponentLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
  </div>
);

export default function HeroSection() {
  const [logoImageData, setLogoImageData] = useState<ImageData | null>(null);

  const loadLogo = useCallback(async () => {
    try {
      const { parseLogoImage } = await import('./MetallicPaint');
      const response = await fetch('/image.svg');
      const svgBlob = await response.blob();
      const file = new File([svgBlob], 'image.svg', { type: 'image/svg+xml' });
      const { imageData } = await parseLogoImage(file);
      setLogoImageData(imageData);
    } catch (error) {
      console.error('Error loading logo:', error);
    }
  }, []);

  useEffect(() => {
    // Delay logo loading to improve initial render
    const timer = setTimeout(loadLogo, 1000);
    return () => clearTimeout(timer);
  }, [loadLogo]);

  // Memoized card data to prevent re-renders
  const cardData = useMemo(() => [
    {
      image: "/aiml_main.png",
      alt: "AI ML",
      content: (
        <div className="text-base md:text-lg text-purple-400 font-medium leading-relaxed mt-2" style={{letterSpacing: '0.01em', lineHeight: '1.7', fontWeight: 500}}>
          We design <span className="font-semibold text-white">intelligent models</span> that <span className="font-semibold text-white">learn</span>, <span className="font-semibold text-white">adapt</span>, and <span className="font-semibold text-white">automate tasks</span> — unlocking <span className="font-semibold text-white">innovation</span> and driving <span className="font-semibold text-white">smarter decisions</span>.
        </div>
      )
    },
    {
      image: "/cv_main.png", 
      alt: "Computer Vision",
      content: (
        <div className="text-base md:text-lg text-purple-400 font-medium leading-relaxed mt-2" style={{letterSpacing: '0.01em', lineHeight: '1.7', fontWeight: 500}}>
          <span className="font-semibold text-white">AI Vision</span> that <span className="font-semibold text-white">sees</span>, <span className="font-semibold text-white">analyzes</span>, and <span className="font-semibold text-white">acts</span> — automating recognition, inspection, and real-time decisions for <span className="font-semibold text-white">smarter businesses</span>.
        </div>
      )
    },
    {
      image: "/saas_main.png",
      alt: "SaaS Development", 
      content: (
        <div className="text-base md:text-lg text-purple-400 font-medium leading-relaxed mt-2" style={{letterSpacing: '0.01em', lineHeight: '1.7', fontWeight: 500}}>
          <span className="font-semibold text-white">SaaS solutions</span> from <span className="font-semibold text-white">idea</span> to <span className="font-semibold text-white">deployment</span> — scalable, secure, and <span className="font-semibold text-white">cloud-first</span> to fuel your growth.
        </div>
      )
    }
  ], []);

  // Memoized technology icons data
  const technologyIcons = useMemo(() => [
    { src: "/python-svgrepo-com.svg", alt: "Python" },
    { src: "/react-svgrepo-com.svg", alt: "React" },
    { src: "/nextjs-svgrepo-com.svg", alt: "Next.js" },
    { src: "/java-svgrepo-com.svg", alt: "Java" },
    { src: "/tensorflow-svgrepo-com.svg", alt: "TensorFlow" },
    { src: "/bootstrap-svgrepo-com.svg", alt: "Bootstrap" },
    { src: "/cpp.svg", alt: "C++" },
    { src: "/aws-svgrepo-com.svg", alt: "AWS" }
  ], []);

  return (
    <>
      {/* Hero Top Section: Headline and Subtitle */}
      <section id="hero" className="relative flex flex-col items-center justify-center w-full min-h-[40vh] px-4 md:px-12 pt-32">
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
        <section id="services" className="w-full flex items-center justify-center text-purple-500 text-border-black" style={{ minHeight: '600px', position: 'relative', marginTop: '20px', textShadow: '0 0 9px black', background: 'transparent' }}>
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
              <Suspense fallback={<ComponentLoader />}>
                <InfiniteMenu items={items} />
              </Suspense>
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
              <Suspense fallback={<ComponentLoader />}>
                <LaserFlow
                  horizontalBeamOffset={0.2}
                  verticalBeamOffset={0.1}
                  color="#a259ff"
              />
              </Suspense>
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
      <section id="visionaries" className="w-full flex flex-col items-center text-white justify-center" style={{justifyContent: 'center', alignItems: 'center', paddingTop: '5%', paddingBottom: '2%', fontSize: '50px', fontWeight: '600', fontFamily: 'Helvetica'}}>
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
              image: "/mohit.jpg",
              title: "Mohit Manglani",
              subtitle: "Founder & CEO",
              handle: "@mohit.127.0.0.1",
              borderColor: "#3B82F6",
              gradient: "linear-gradient(145deg, #3B82F6, #000)",
              url: "https://www.linkedin.com/in/mohit-manglani-412997220/"
            },
            {
              image: "/pra.jpg",
              title: "Pratham Rathod",
              subtitle: "Founding Engineer",
              handle: "@pratham_rathod_26",
              borderColor: "#10B981",
              gradient: "linear-gradient(180deg, #10B981, #000)",
              url: "https://linkedin.com/in/mikechen"
            },
            {
              image: '/shi.jpg',
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
              
              <Suspense fallback={<ComponentLoader />}>
                <ChromaGrid 
                  items={items}
                  radius={300}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />
              </Suspense>
            </div>
          );
        })()}
      </section>

      {/* Stepper Section */}
      <section id="process" className="w-full flex items-center justify-center py-12">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-500 mb-8" style={{ fontFamily: 'Helvetica',marginBottom: '5%' }}>
            Our Process
          </h2>
           
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
            console.log(step);
            }}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Previous"
            nextButtonText="Next"
          >
          <Step>
            <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-[400px]">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <svg className="w-24 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM9 11a2 2 0 104 0 2 2 0 00-4 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-center max-w-3xl">
                <h2 className="text-4xl font-bold text-white mb-4">Discovery & Requirements</h2>
                <p className="text-gray-300 text-xl leading-relaxed">
                  We start by understanding your business goals, challenges, and technical requirements. Our team conducts thorough analysis of your current systems, workflows, and pain points to create a comprehensive project roadmap.
                </p>
              </div>
            </div>
          </Step>
          <Step>
            <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-[400px]">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <svg className="w-24 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <div className="text-center max-w-3xl">
                <h2 className="text-4xl font-bold text-white mb-4">Strategic Planning & Architecture</h2>
                <p className="text-gray-300 text-xl leading-relaxed">
                  Based on our analysis, we design the optimal technology architecture and create detailed project specifications. This includes selecting the right tech stack, defining APIs, database design, and establishing development milestones.
                </p>
              </div>
            </div>
          </Step>
          <Step>
            <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-[400px]">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <svg className="w-24 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-center max-w-3xl">
                <h2 className="text-4xl font-bold text-white mb-4">Agile Development & Implementation</h2>
                <p className="text-gray-300 text-xl leading-relaxed">
                  Our expert developers bring your vision to life using cutting-edge technologies and best practices. We follow agile methodologies with regular sprints, continuous integration, and frequent client feedback to ensure we&apos;re always on track.
                </p>
              </div>
            </div>
          </Step>
          <Step>
            <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-[400px]">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <svg className="w-24 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="text-center max-w-3xl">
                <h2 className="text-4xl font-bold text-white mb-4">Testing & Quality Assurance</h2>
                <p className="text-gray-300 text-xl leading-relaxed">
                  Rigorous testing ensures your solution is robust, secure, and performs optimally. We conduct comprehensive unit testing, integration testing, security audits, and user acceptance testing to deliver excellence.
                </p>
              </div>
            </div>
          </Step>
          <Step>
            <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-[400px]">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <svg className="w-24 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <div className="text-center max-w-3xl">
                <h2 className="text-4xl font-bold text-white mb-4">Launch & Ongoing Support</h2>
                <p className="text-gray-300 text-xl leading-relaxed">
                  We deploy your solution to production with zero downtime and provide comprehensive documentation and training. Our team offers ongoing support, maintenance, and feature enhancements to ensure your technology evolves with your business.
                </p>
                <div className="mt-6">
                  <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    🚀 Ready to Launch Your Project?
                  </div>
                </div>
              </div>
            </div>
          </Step>
          </Stepper>
        </div>
      </section>

      {/* Expert Team Section */}
      <section id="team" className="w-full flex items-center justify-center py-20 bg-transparent">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-purple-500 mb-6" style={{ fontFamily: 'Helvetica' }}>
              Expert team. Proven methodology
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Our experienced team of developers, designers, and consultants work collaboratively to deliver solutions that exceed expectations and drive measurable business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Agile Development</h3>
              <p className="text-gray-400 text-sm">Rapid iteration and continuous delivery</p>
            </div>

            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Project Management</h3>
              <p className="text-gray-400 text-sm">Dedicated communication and oversight</p>
            </div>

            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quality Assurance</h3>
              <p className="text-gray-400 text-sm">Rigorous testing and validation</p>
            </div>

            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ongoing Support</h3>
              <p className="text-gray-400 text-sm">Post-launch optimization and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Statistics Section */}
      <section className="w-full flex items-center justify-center py-20 bg-transparent">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-purple-500 mb-6" style={{ fontFamily: 'Helvetica' }}>
            Trusted by businesses worldwide
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto">
            We&apos;ve delivered successful technology solutions across industries, helping companies transform their operations and achieve digital excellence.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="text-6xl font-bold text-purple-500 mb-4" style={{ fontFamily: 'Helvetica' }}>5+</div>
              <div className="text-gray-300 text-lg font-medium">Industries Covered</div>
            </div>
            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="text-6xl font-bold text-purple-500 mb-4" style={{ fontFamily: 'Helvetica' }}>100%</div>
              <div className="text-gray-300 text-lg font-medium">Client Satisfaction</div>
            </div>
            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="text-6xl font-bold text-purple-500 mb-4" style={{ fontFamily: 'Helvetica' }}>100+</div>
              <div className="text-gray-300 text-lg font-medium">Technologies</div>
            </div>
            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="text-6xl font-bold text-purple-500 mb-4" style={{ fontFamily: 'Helvetica' }}>24/7</div>
              <div className="text-gray-300 text-lg font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Technology Ecosystem Section */}
      <section className="w-full flex items-center justify-center py-20 bg-transparent">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-purple-500 mb-6" style={{ fontFamily: 'Helvetica' }}>
              Modern technology ecosystem
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              We work with cutting-edge technologies and frameworks to build robust, scalable solutions that drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-4 gap-6">
              {technologyIcons.map((tech, index) => (
                <div key={index} className="w-19 h-20 bg-[#18101f] rounded-xl flex items-center justify-center hover:border-purple-500 transition-all duration-300 group">
                  <Image 
                    src={tech.src} 
                    alt={tech.alt} 
                    width={75} 
                    height={32} 
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                
                <h3 className="text-2xl font-bold text-purple-500" style={{ fontFamily: 'Helvetica', alignItems: 'left' }}>Strategic technology consulting</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Get expert guidance on digital transformation, technology roadmaps, and strategic implementation that aligns with your business objectives.
              </p>
              <p className="text-gray-400 mb-6">From startup MVP to enterprise-scale solutions.</p>
              <div className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors cursor-pointer">
                <span className="font-medium">Schedule consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Solutions Section */}
      <section id="solutions" className="w-full flex items-center justify-center py-20 bg-transparent">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-purple-500 mb-6" style={{ fontFamily: 'Helvetica' }}>
            Solutions that scale everywhere
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto">
            From web applications to mobile apps, cloud infrastructure to AI-powered systems. We deliver technology solutions that work seamlessly across all platforms and environments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Helvetica' }}>Web Solutions</h3>
              <p className="text-gray-300">Scalable web applications and progressive web apps</p>
            </div>

            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Helvetica' }}>Mobile Apps</h3>
              <p className="text-gray-300">Native and cross-platform mobile applications</p>
            </div>

            <div className="bg-[#18101f] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Helvetica' }}>Cloud Infrastructure</h3>
              <p className="text-gray-300">Scalable cloud solutions and DevOps automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Contact Us Section */}
      <section id="contact" className="w-full flex items-center justify-center py-16 bg-black/60">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Details */}
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Helvetica' }}>
                <span className="text-purple-600">Get In</span> Touch
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Ready to transform your business with cutting-edge technology? Let&apos;s discuss your project and create something amazing together.
              </p>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-gray-400 text-sm">Email Us</p>
                    <p className="text-white text-lg font-medium"><a href="mailto:support@machboxsolutions.com">support@machboxsolutions.com</a></p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  
                  <div>
                    <p className="text-gray-400 text-sm">Call Us</p>
                    <p className="text-white text-lg font-medium">+91 9974443430</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center space-x-4">
                  
                  <div>
                    <p className="text-gray-400 text-sm">Working Hours</p>
                    <p className="text-white text-lg font-medium">Mon - Sat: 9AM - 8PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - MetallicPaint Logo */}
            <div className="flex items-center justify-center">
              {logoImageData ? (
                <div className="transform scale-80">
                  <Suspense fallback={<ComponentLoader />}>
                    <MetallicPaint 
                      imageData={logoImageData}
                      params={{
                        patternScale: 2.5,
                        refraction: 0.02,
                        edge: 0,
                        patternBlur: 0.008,
                        liquid: 0.1,
                        speed: 0.2
                      }}
                    />
                  </Suspense>
                </div>
              ) : (
                <div className="w-64 h-64 flex items-center justify-center">
                  <div className="text-purple-400 text-6xl font-bold">M</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

        
    </>
  );
}
