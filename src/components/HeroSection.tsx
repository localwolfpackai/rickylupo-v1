
import { useState, useEffect } from 'react';

const heroTexts = [
  'Once upon a time, there was a dad who took me fishing...',
  'taught me everything I know about being stubborn...',
  'made me his personal assistant for every home project...',
  'and somehow makes us all proud and happy every single day.'
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
    }, 4500);

    return () => clearTimeout(timer);
  }, [currentTextIndex]);

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 animate-fade-in tracking-tight">
            Rick Lupo
          </h1>
          <div className="text-xl md:text-3xl text-warmth-300 font-medium animate-fade-in tracking-wide" style={{ animationDelay: '0.5s' }}>
            The World's Best Dad
          </div>
          <div className="text-sm md:text-base text-warmth-400 mt-2 animate-fade-in" style={{ animationDelay: '1s' }}>
            <em>According to his totally unbiased son</em>
          </div>
        </div>

        <div className="h-40 flex items-center justify-center">
          {isTyping ? (
            <p className="text-lg md:text-xl text-white/90 font-inter typing-text max-w-3xl leading-relaxed">
              {heroTexts[currentTextIndex]}
            </p>
          ) : (
            <div className="animate-bloom">
              <p className="text-lg md:text-xl text-white/90 font-inter max-w-3xl leading-relaxed">
                {heroTexts.join(' ')}
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="w-32 h-1 bg-gradient-to-r from-warmth-400 to-warmth-600 mx-auto rounded-full" />
          <p className="text-sm text-white/60 mt-4 italic">
            Scroll down for Dad's greatest hits and legendary moments
          </p>
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
