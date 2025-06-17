
import { useState, useEffect } from 'react';
import { Hero3D } from './Hero3D';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const entranceText = [
  "You know, Dad, I've been thinking...",
  "Remember all those times you said 'Money doesn't grow on trees'?",
  "Well, I finally learned to appreciate the value of a dollar...",
  "Mostly because I now pay my own bills and everything is RIDICULOUSLY expensive!",
  "You were right about checking the oil, calling when I get there safely...",
  "...and yes, even about not heating the entire neighborhood.",
  "So I built you this little dashboard of greatness...",
  "Because you're not just 'a dad' - you're THE dad."
];

export const EnhancedHeroSection = () => {
  const [showTyping, setShowTyping] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Check if user has seen the intro this session
    const introSeen = sessionStorage.getItem('rickLupoIntroSeen');
    if (!introSeen) {
      // Show typing animation for first-time visitors
      const timer = setTimeout(() => {
        setShowTyping(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Show main content immediately for returning visitors
      setShowMainContent(true);
    }
  }, []);

  const { displayedText, currentIndex, isComplete } = useTypingEffect(
    entranceText,
    {
      typingSpeed: 40,
      pauseDuration: 1800,
      onComplete: () => {
        sessionStorage.setItem('rickLupoIntroSeen', 'true');
        setTimeout(() => {
          setShowMainContent(true);
        }, 1000);
      }
    }
  );

  return (
    <section 
      id="home" 
      className="min-h-screen gradient-hero-enhanced relative overflow-hidden flex items-center justify-center critical-above-fold"
      role="main"
      aria-label="Hero section introducing Rick Lupo"
    >
      <Hero3D />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main content for returning visitors or after typing completes */}
        {showMainContent && (
          <>
            <div className="mb-8">
              <div className="relative inline-block">
                <h1 className="heading-primary mb-6 animate-spring-in tracking-tight relative z-10">
                  Rick Lupo
                </h1>
                <div className="absolute -inset-4 shadow-warmth-glow blur-2xl -z-10 animate-pulse-gentle rounded-full"></div>
              </div>
              
              <div 
                className="heading-secondary animate-spring-in tracking-wide card-premium py-4 px-8 inline-block" 
                style={{ animationDelay: '0.2s' }}
              >
                The World's Best Dad
              </div>
            </div>

            <div className="animate-spring-in max-w-lg mx-auto" style={{ animationDelay: '0.4s' }}>
              <div className="card-premium p-8 shadow-warmth-glow hover:shadow-warmth interactive-element focus-trap">
                <div className="text-warmth-300 text-base font-semibold mb-4 tracking-wide flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-warmth-400 rounded-full animate-pulse-ring"></span>
                  A Little Note For You, Dad
                  <span className="w-2 h-2 bg-warmth-400 rounded-full animate-pulse-ring" style={{ animationDelay: '0.5s' }}></span>
                </div>
                <p className="text-white/90 text-base leading-relaxed font-inter mb-6">
                  Thanks for being the most amazing, funny, and supportive dad. We love your quirks, your wisdom, and even your questionable dance moves. This dashboard is a small token of our huge appreciation! ❤️
                </p>
                <div className="text-right">
                  <span className="text-gradient-warmth text-sm italic font-medium">Love, Your Son</span>
                </div>
              </div>
            </div>

            <div className="mt-16 animate-spring-in flex flex-col items-center gap-6" style={{ animationDelay: '0.6s' }}>
              <div className="w-32 h-1 gradient-warmth-dynamic mx-auto rounded-full shadow-warmth-glow" />
              
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <div className="flex items-center gap-2 interactive-element">
                  <div className="w-1 h-1 bg-warmth-400 rounded-full animate-bounce-gentle"></div>
                  Scroll to explore
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex items-center gap-2 interactive-element">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
                  Interactive elements below
                </div>
              </div>
            </div>
          </>
        )}

        {/* Typing animation for first-time visitors */}
        {showTyping && !showMainContent && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white/20 mb-6 tracking-tight">
                Rick Lupo
              </h1>
            </div>
            
            <div className="h-40 flex items-center justify-center">
              <div className="relative">
                <p className="text-xl md:text-2xl lg:text-3xl text-white font-inter min-h-[4rem] flex items-center leading-relaxed">
                  {displayedText}
                  <span className="inline-block w-0.5 h-7 bg-warmth-400 ml-2 animate-pulse" />
                </p>
                
                {/* Progress indicator */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-1">
                    {entranceText.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-1 rounded-full transition-colors duration-300 ${
                          index <= currentIndex ? 'bg-warmth-400 shadow-warmth-glow' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {isComplete && (
              <div className="mt-8 animate-spring-in">
                <div className="text-2xl md:text-4xl text-gradient-warmth font-medium tracking-wide">
                  Welcome to your personal headquarters, Chief!
                </div>
                <div className="mt-4 w-32 h-1 gradient-warmth-dynamic mx-auto rounded-full animate-shimmer" />
              </div>
            )}
          </div>
        )}
      </div>
      
      {showMainContent && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle scroll-indicator no-print">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center interactive-element focus-visible-enhanced" tabIndex={0} role="button" aria-label="Scroll down to explore more">
            <div className="w-1 h-3 bg-warmth-400 rounded-full mt-2 animate-bounce-gentle shadow-warmth-glow"></div>
          </div>
        </div>
      )}
    </section>
  );
};
