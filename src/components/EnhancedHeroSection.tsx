
import { Hero3D } from './Hero3D';

export const EnhancedHeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden flex items-center justify-center">
      <Hero3D />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="relative inline-block">
            <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 animate-fade-in tracking-tight relative z-10">
              Rick Lupo
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-warmth-400/20 via-purple-500/20 to-cyan-500/20 blur-2xl -z-10 animate-pulse-gentle"></div>
          </div>
          
          <div className="text-2xl md:text-4xl text-warmth-300 font-medium animate-fade-in tracking-wide backdrop-blur-sm bg-white/5 rounded-2xl py-4 px-8 border border-white/10" style={{
            animationDelay: '0.5s'
          }}>
            The World's Best Dad
          </div>
        </div>

        <div className="animate-fade-in max-w-lg mx-auto" style={{
          animationDelay: '1.5s'
        }}>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-warmth-500/20 transition-all duration-500 hover:scale-105">
            <div className="text-warmth-300 text-base font-semibold mb-4 tracking-wide flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-warmth-400 rounded-full animate-pulse"></span>
              A Little Note For You, Dad
              <span className="w-2 h-2 bg-warmth-400 rounded-full animate-pulse"></span>
            </div>
            <p className="text-white/90 text-base leading-relaxed font-inter mb-6">
              Thanks for being the most amazing, funny, and supportive dad. We love your quirks, your wisdom, and even your questionable dance moves. This dashboard is a small token of our huge appreciation! ❤️
            </p>
            <div className="text-right">
              <span className="text-warmth-400 text-sm italic font-medium">Love, Your Son</span>
            </div>
          </div>
        </div>

        <div className="mt-16 animate-fade-in flex flex-col items-center gap-6" style={{
          animationDelay: '2s'
        }}>
          <div className="w-32 h-1 bg-gradient-to-r from-warmth-400 to-warmth-600 mx-auto rounded-full shadow-lg shadow-warmth-500/50" />
          
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-warmth-400 rounded-full animate-ping"></div>
              Scroll to explore
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              Interactive elements below
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-warmth-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
