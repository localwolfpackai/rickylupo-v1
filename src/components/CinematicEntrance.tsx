
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
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentIndex < entranceText.length && isTyping) {
      const currentText = entranceText[currentIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          
          // Wait before moving to next text
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            setDisplayedText('');
            setIsTyping(true);
          }, 1500);
        }
      }, 50); // Typing speed

      return () => clearInterval(typeInterval);
    } else if (currentIndex >= entranceText.length) {
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 1000);
      }, 2000);

      return () => clearTimeout(fadeTimer);
    }
  }, [currentIndex, isTyping, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="h-32 flex items-center justify-center">
          {currentIndex < entranceText.length ? (
            <p className="text-xl md:text-2xl text-white font-inter min-h-[3rem] flex items-center">
              {displayedText}
              <span className="inline-block w-0.5 h-6 bg-white ml-1 animate-pulse" />
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
