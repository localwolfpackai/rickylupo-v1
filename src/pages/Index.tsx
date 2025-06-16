
import { useState, useEffect } from 'react';
import { CinematicEntrance } from '@/components/CinematicEntrance';
import { HeroSection } from '@/components/HeroSection';
import { FloatingNav } from '@/components/FloatingNav';
import { WisdomOrb } from '@/components/WisdomOrb';
import { DadStats } from '@/components/DadStats';

const Index = () => {
  const [showMainSite, setShowMainSite] = useState(false);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  useEffect(() => {
    // Check if user has seen the intro this session
    const introSeen = sessionStorage.getItem('rickLupoIntroSeen');
    if (introSeen) {
      setHasSeenIntro(true);
      setShowMainSite(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('rickLupoIntroSeen', 'true');
    setHasSeenIntro(true);
    setShowMainSite(true);
  };

  if (!hasSeenIntro && !showMainSite) {
    return <CinematicEntrance onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen">
      <FloatingNav />
      
      {/* Bottom Right Floating Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-3">
        <WisdomOrb />
        <DadStats />
      </div>
      
      <HeroSection />
      
      {/* Minimized Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-playfair text-lg font-bold mb-1">
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
