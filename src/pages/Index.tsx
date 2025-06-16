
import { useState, useEffect } from 'react';
import { EnhancedHeroSection } from '@/components/hero/EnhancedHeroSection';
import { FloatingNav } from '@/components/layout/FloatingNav';
import { WisdomOrb } from '@/components/dashboard/WisdomOrb';
import { DadStats } from '@/components/dashboard/DadStats';
import { ModernCounters } from '@/components/ModernCounters';
import { EnhancedFooter } from '@/components/layout/EnhancedFooter';

const Index = () => {
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
      <EnhancedFooter />
    </div>
  );
};

export default Index;
