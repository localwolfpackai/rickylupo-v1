
import { useState } from 'react';
import { DashboardCard } from '@/components/shared/DashboardCard';
import { Lightbulb } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const wisdomQuotes = [
  "Back in my day, we didn't have Google. We had one encyclopedia and we were grateful!",
  "Money doesn't grow on trees, but apparently app subscriptions do.",
  "I'm not saying I'm old, but I remember when emojis were called 'feelings'.",
  "The thermostat is not a suggestion. It's a carefully calculated family budget decision.",
  "When I was your age, we had to walk uphill both ways to change the TV channel.",
  "A penny saved is a penny earned, but a coupon saved is a victory over corporate America.",
];

export const WisdomOrb = () => {
  const [showWisdom, setShowWisdom] = useState(false);
  const [currentWisdom, setCurrentWisdom] = useState('');

  const shareWisdom = () => {
    const randomWisdom = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
    setCurrentWisdom(randomWisdom);
    setShowWisdom(true);
  };

  return (
    <>
      <DashboardCard
        icon={Lightbulb}
        title="Dad's Wisdom"
        description="Pearls of wisdom from the master"
        variant="purple"
        size="sm"
        floating={true}
        onClick={shareWisdom}
        className="hover:animate-float-gentle cursor-pointer group"
        tabIndex={0}
        role="button"
        aria-label="Get a piece of dad's wisdom - opens dialog with inspirational quote"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            shareWisdom();
          }
        }}
      />

      <Dialog open={showWisdom} onOpenChange={setShowWisdom}>
        <DialogContent 
          className="sm:max-w-lg card-premium bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 shadow-purple-glow rounded-3xl focus-trap"
          aria-labelledby="wisdom-title"
          aria-describedby="wisdom-content"
        >
          <div className="text-center py-6 animate-spring-in">
            <div className="relative mb-6 inline-block">
              <Lightbulb className="h-16 w-16 text-purple-400 mx-auto animate-float-gentle" aria-hidden="true" />
              <div className="absolute inset-0 blur-lg opacity-30">
                <Lightbulb className="h-16 w-16 text-purple-400 mx-auto" aria-hidden="true" />
              </div>
            </div>
            <h3 id="wisdom-title" className="text-2xl font-bold text-white mb-6 text-gradient-purple">
              Dad's Wisdom
            </h3>
            <div className="card-premium p-6 border border-white/20 shadow-purple-glow interactive-glow">
              <p id="wisdom-content" className="text-lg text-white/90 italic leading-relaxed mb-4">
                "{currentWisdom}"
              </p>
              <p className="text-sm text-white/60">- Dad, probably</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
