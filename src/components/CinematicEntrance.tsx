
import { useState, useEffect } from 'react';

const entranceText = [
  "My dad taught me that fishing isn't just about catching fish...",
  "it's about the stories you tell afterward.",
  "He made me his unpaid intern for every home project...",
  "and somehow convinced me it was 'character building.'",
  "Now I realize he was just preparing me to appreciate how much everything costs these days.",
  "Thanks, Dad – you really are the world's best."
];

export const CinematicEntrance = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentIndex < entranceText.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 3500);

      return () => clearTimeout(timer);
    } else {
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 1000);
      }, 2000);

      return () => clearTimeout(fadeTimer);
    }
  }, [currentIndex, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="h-32 flex items-center justify-center">
          {currentIndex < entranceText.length ? (
            <p 
              key={currentIndex}
              className="text-xl md:text-2xl text-white font-inter typing-text animate-fade-in"
            >
              {entranceText[currentIndex]}
            </p>
          ) : (
            <div className="animate-fade-in">
              <h1 className="font-playfair text-6xl md:text-8xl font-bold text-white mb-4">
                Rick Lupo
              </h1>
              <p className="text-2xl md:text-3xl text-warmth-300 font-medium">
                The World's Best Dad
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
