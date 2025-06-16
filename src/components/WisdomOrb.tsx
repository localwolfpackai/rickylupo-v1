
import { useState, useEffect } from 'react';
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
  const [position, setPosition] = useState({ x: 80, y: 80 });
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentWisdom, setCurrentWisdom] = useState('');

  useEffect(() => {
    const showOrb = () => {
      setPosition({
        x: Math.random() * (window.innerWidth - 80),
        y: Math.random() * (window.innerHeight - 80) + 100
      });
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 10000);
    };

    const interval = setInterval(showOrb, 20000);
    showOrb();

    return () => clearInterval(interval);
  }, []);

  const handleOrbClick = () => {
    const randomWisdom = dadWisdom[Math.floor(Math.random() * dadWisdom.length)];
    setCurrentWisdom(randomWisdom);
    setShowModal(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className="wisdom-orb"
        style={{ left: position.x, top: position.y }}
        onClick={handleOrbClick}
        title="Dad's wisdom awaits..."
      />

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
