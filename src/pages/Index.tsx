
import { useState } from 'react';
import { CinematicEntrance } from '@/components/CinematicEntrance';
import { HeroSection } from '@/components/HeroSection';
import { FloatingNav } from '@/components/FloatingNav';
import { WisdomOrb } from '@/components/WisdomOrb';
import { DadStats } from '@/components/DadStats';

const Index = () => {
  const [showMainSite, setShowMainSite] = useState(false);

  if (!showMainSite) {
    return <CinematicEntrance onComplete={() => setShowMainSite(true)} />;
  }

  return (
    <div className="min-h-screen">
      <FloatingNav />
      <WisdomOrb />
      <DadStats />
      
      <HeroSection />
      
      {/* Simplified Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-playfair text-xl font-bold mb-2">
            Rick Lupo
          </h3>
          <p className="text-xs text-gray-500">
            "I can't believe how much web hosting costs these days!"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
