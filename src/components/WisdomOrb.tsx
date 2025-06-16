
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const dadWisdom = [
  "I can't believe how much that costs these days!",
  "When I was your age, we walked uphill both ways.",
  "Money doesn't grow on trees, you know.",
  "Turn off those lights! We're not lighting up the neighborhood.",
  "Did you check the oil in your car lately?",
  "Always have a backup plan... and a backup for the backup.",
  "If you're going to do something, do it right the first time.",
  "That's not how we did it in my day.",
  "You kids don't know how good you have it.",
  "Remember: measure twice, cut once!"
];

export const WisdomOrb = () => {
  const [position, setPosition] = useState({ x: 80, y: 80 });
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentWisdom, setCurrentWisdom] = useState('');

  useEffect(() => {
    const showOrb = () => {
      setPosition({
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100) + 100
      });
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 8000); // Orb disappears after 8 seconds
    };

    const interval = setInterval(showOrb, 15000); // Show every 15 seconds
    showOrb(); // Show immediately on mount

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
      >
        <div className="w-full h-full flex items-center justify-center text-white text-xl animate-pulse-gentle">
          💡
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-warmth-50 to-warmth-100 border-warmth-200">
          <div className="text-center py-6">
            <div className="text-6xl mb-4">👨‍👦</div>
            <h3 className="font-playfair text-2xl font-bold text-warmth-800 mb-4">
              Dad's Wisdom
            </h3>
            <p className="text-lg text-warmth-700 italic animate-bloom">
              "{currentWisdom}"
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
