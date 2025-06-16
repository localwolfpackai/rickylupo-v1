
import { useState, useEffect } from 'react';
import { CinematicEntrance } from '@/components/CinematicEntrance';
import { EnhancedHeroSection } from '@/components/EnhancedHeroSection';
import { FloatingNav } from '@/components/FloatingNav';
import { WisdomOrb } from '@/components/WisdomOrb';
import { DadStats } from '@/components/DadStats';
import { ModernCounters } from '@/components/ModernCounters';
import { EnhancedFooter } from '@/components/EnhancedFooter';
import { OnboardingTooltips } from '@/components/OnboardingTooltips';

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
      
      <EnhancedHeroSection />
      <ModernCounters />
      <OnboardingTooltips />
      <EnhancedFooter />
    </div>
  );
};

export default Index;
