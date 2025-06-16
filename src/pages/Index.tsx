
import { useState } from 'react';
import { CinematicEntrance } from '@/components/CinematicEntrance';
import { HeroSection } from '@/components/HeroSection';
import { FloatingNav } from '@/components/FloatingNav';
import { InteractiveCounters } from '@/components/InteractiveCounters';
import { PhotoGallery } from '@/components/PhotoGallery';
import { WisdomOrb } from '@/components/WisdomOrb';

const Index = () => {
  const [showMainSite, setShowMainSite] = useState(false);

  if (!showMainSite) {
    return <CinematicEntrance onComplete={() => setShowMainSite(true)} />;
  }

  return (
    <div className="min-h-screen">
      <FloatingNav />
      <WisdomOrb />
      
      <HeroSection />
      <InteractiveCounters />
      <PhotoGallery />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-playfair text-2xl font-bold mb-4">
            Rick Lupo
          </h3>
          <p className="text-gray-400 mb-2">
            The World's Best Dad
          </p>
          <p className="text-sm text-gray-500 italic mb-4">
            A digital tribute crafted with love (and mild sarcasm) by his son
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-warmth-400 to-warmth-600 mx-auto rounded-full" />
          <p className="text-xs text-gray-600 mt-4">
            "I can't believe how much web hosting costs these days!"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
