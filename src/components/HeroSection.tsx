
export const HeroSection = () => {
  return <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6 animate-fade-in tracking-tight">
            Rick Lupo
          </h1>
          <div className="text-xl md:text-3xl text-warmth-300 font-medium animate-fade-in tracking-wide" style={{
          animationDelay: '0.5s'
        }}>
            The World's Best Dad
          </div>
        </div>

        <div className="animate-fade-in max-w-md mx-auto" style={{
        animationDelay: '1.5s'
      }}>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="text-warmth-300 text-sm font-medium mb-2 tracking-wide">
              A Little Note For You, Dad:
            </div>
            <p className="text-white/90 text-sm leading-relaxed font-inter">
              Thanks for being the most amazing, funny, and supportive dad. We love your quirks, your wisdom, and even your questionable dance moves. This dashboard is a small token of our huge appreciation! ❤️
            </p>
            <div className="mt-4 text-right">
              <span className="text-warmth-400 text-xs italic">Love, Your Son</span>
            </div>
          </div>
        </div>

        <div className="mt-12 animate-fade-in" style={{
        animationDelay: '2s'
      }}>
          <div className="w-32 h-1 bg-gradient-to-r from-warmth-400 to-warmth-600 mx-auto rounded-full" />
        </div>
      </div>
    </section>;
};
