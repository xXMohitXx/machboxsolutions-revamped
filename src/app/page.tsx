

import HeroSection from '@/components/HeroSection';
import DotGrid from '../components/DotGrid';
import Header from "../components/Header";
import Footer from '@/components/Footer';
import GradualBlur from '@/components/GradualBlur';
import MobileMessage from '@/components/MobileMessage';

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col relative overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Mobile Message */}
      <MobileMessage />
      
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
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <HeroSection />
        
        
      </main>
      <Footer />
      <section style={{position: 'relative',overflow: 'hidden'}}>
  <div style={{ height: '100%',overflowY: 'auto' }}>
  </div>

  <GradualBlur
    target="page"
    position="bottom"
    height="6rem"
    strength={2}
    divCount={5}
    curve="bezier"
    exponential={true}
    opacity={1}
  />
</section>
      


    </div>
  );
}
