
import { useState, useEffect } from 'react';

const heroTexts = [
  'Once upon a time, there was a dad who took me fishing...',
  'taught me everything I know...',
  'made me his personal assistant for chores...',
  'and makes us all so proud and happy every day.'
];

export const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTextIndex < heroTexts.length - 1) {
        setCurrentTextIndex(currentTextIndex + 1);
      } else {
        setIsTyping(false);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentTextIndex]);

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
            Rick Lupo
          </h1>
          <div className="text-xl md:text-2xl text-warmth-300 font-medium animate-fade-in" style={{ animationDelay: '0.5s' }}>
            The World's Best Dad
          </div>
        </div>

        <div className="h-32 flex items-center justify-center">
          {isTyping ? (
            <p className="text-lg md:text-xl text-white/90 font-inter typing-text max-w-2xl">
              {heroTexts[currentTextIndex]}
            </p>
          ) : (
            <div className="animate-bloom">
              <p className="text-lg md:text-xl text-white/90 font-inter max-w-2xl leading-relaxed">
                {heroTexts.join(' ')}
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="w-32 h-1 bg-gradient-to-r from-warmth-400 to-warmth-600 mx-auto rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
