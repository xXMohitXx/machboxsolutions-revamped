

import HeroSection from '@/components/HeroSection';
import DotGrid from '../components/DotGrid';
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col relative overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* DotGrid background */}
      <div className="absolute inset-0 -z-10">
        <DotGrid
          dotSize={10}
          gap={25}
          baseColor="#211b2c"
          activeColor="#7e28c1"
          proximity={150}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={2.5}
        />
      </div>
      <Header />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{height: '100vh', width: '100vw'}}>
          <div style={{ width: '100vw', height: '100vh', maxWidth: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HeroSection />
        </div>
      </div>
    </div>
  );
}
