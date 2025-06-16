
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const dadWisdom = [
  "\"Money doesn't grow on trees!\" - Dad's favorite financial advice since 1985",
  "\"When I was your age...\" - The start of every legendary Dad story",
  "\"Did you check the oil?\" - Dad's universal solution to car problems",
  "\"We're not heating the neighborhood!\" - Said while adjusting the thermostat by 1 degree",
  "\"That's highway robbery!\" - Dad's review of literally any price",
  "\"Back in my day, gas was 50 cents!\" - Dad's inflation commentary",
  "\"If you're gonna do it, do it right!\" - Dad's perfectionist motto",
  "\"What's the WiFi password again?\" - Dad, every single time",
  "\"I'm not sleeping, I'm just resting my eyes!\" - Dad on the couch at 3 PM",
  "\"Ask your mother.\" - Dad's diplomatic solution to everything"
];

export const WisdomOrb = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentWisdom, setCurrentWisdom] = useState('');

  const handleOrbClick = () => {
    const randomWisdom = dadWisdom[Math.floor(Math.random() * dadWisdom.length)];
    setCurrentWisdom(randomWisdom);
    setShowModal(true);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className="relative w-16 h-16 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 group touch-target"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #f59e0b  50%, #ef4444 100%)',
            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3), inset 0 2px 8px rgba(255, 255, 255, 0.2)',
          }}
          onClick={handleOrbClick}
          title="Dad's wisdom awaits..."
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
          
          {/* Click me indicator */}
          <div className="absolute -top-2 -right-2 bg-white/90 text-xs px-2 py-1 rounded-full text-purple-700 font-medium animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Click me!
          </div>
          
          {/* Dad emoji in center */}
          <div className="absolute inset-0 flex items-center justify-center text-2xl">
            👨‍👦‍👦
          </div>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-lg bg-gradient-to-br from-warmth-50 to-warmth-100 border-warmth-200">
          <div className="text-center py-8">
            <div className="text-6xl mb-6">👨‍👦‍👦</div>
            <h3 className="font-playfair text-3xl font-bold text-warmth-800 mb-6">
              Dad Wisdom™
            </h3>
            <p className="text-lg text-warmth-700 leading-relaxed animate-bloom font-medium">
              {currentWisdom}
            </p>
            <p className="text-sm text-warmth-500 mt-4 italic">
              - As interpreted by his loving (and slightly sarcastic) son
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
