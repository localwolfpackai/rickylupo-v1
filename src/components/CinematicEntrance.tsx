
import { useState, useEffect } from 'react';

const entranceText = [
  "You know, Dad, I've been thinking...",
  "Remember all those times you said 'Money doesn't grow on trees'?",
  "Well, I finally learned to appreciate the value of a dollar...",
  "Mostly because I now pay my own bills and everything is RIDICULOUSLY expensive!",
  "You were right about checking the oil, calling when I get there safely...",
  "...and yes, even about not heating the entire neighborhood.",
  "So I built you this little dashboard of greatness...",
  "Because you're not just 'a dad' - you're THE dad.",
  "Welcome to your personal headquarters, Chief!"
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
      
      // Vary typing speed based on punctuation for more natural feel
      const getTypingSpeed = (char: string) => {
        if (char === '.' || char === '!' || char === '?') return 150;
        if (char === ',' || char === ';') return 100;
        if (char === ' ') return 30;
        return 40;
      };
      
      const typeCharacter = () => {
        if (charIndex < currentText.length) {
          const char = currentText[charIndex];
          setDisplayedText(currentText.slice(0, charIndex + 1));
          charIndex++;
          
          setTimeout(typeCharacter, getTypingSpeed(char));
        } else {
          setIsTyping(false);
          
          // Longer pause for dramatic effect on key lines
          const pauseDuration = currentIndex === 3 || currentIndex === 7 ? 2500 : 1800;
          
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            setDisplayedText('');
            setIsTyping(true);
          }, pauseDuration);
        }
      };
      
      // Small delay before starting each line
      setTimeout(typeCharacter, 200);
    } else if (currentIndex >= entranceText.length) {
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 1200);
      }, 2500);

      return () => clearTimeout(fadeTimer);
    }
  }, [currentIndex, isTyping, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="h-40 flex items-center justify-center">
          {currentIndex < entranceText.length ? (
            <div className="relative">
              <p className="text-xl md:text-2xl lg:text-3xl text-white font-inter min-h-[4rem] flex items-center leading-relaxed">
                {displayedText}
                <span className="inline-block w-0.5 h-7 bg-warmth-400 ml-2 animate-pulse" />
              </p>
              
              {/* Subtle progress indicator */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {entranceText.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-1 rounded-full transition-colors duration-300 ${
                        index <= currentIndex ? 'bg-warmth-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
                Rick Lupo
              </h1>
              <p className="text-2xl md:text-4xl text-warmth-300 font-medium tracking-wide">
                The World's Best Dad
              </p>
              <div className="mt-8 w-32 h-1 bg-gradient-to-r from-warmth-400 to-warmth-600 mx-auto rounded-full animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
