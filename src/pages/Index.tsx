
import { HeroSection } from '@/components/HeroSection';
import { FloatingNav } from '@/components/FloatingNav';
import { InteractiveCounters } from '@/components/InteractiveCounters';
import { PhotoGallery } from '@/components/PhotoGallery';
import { WisdomOrb } from '@/components/WisdomOrb';

const Index = () => {
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
          <p className="text-gray-400 mb-4">
            The World's Best Dad - A Digital Tribute
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-warmth-400 to-warmth-600 mx-auto rounded-full" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
