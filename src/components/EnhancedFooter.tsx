
export const EnhancedFooter = () => {
  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warmth-500/5 via-transparent to-purple-500/5" />
      
      <div className="container mx-auto px-6 text-center relative">
        <div className="mb-6">
          <h3 className="font-playfair text-3xl font-bold mb-3 bg-gradient-to-r from-warmth-400 to-warmth-600 bg-clip-text text-transparent">
            Rick Lupo
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-warmth-400 to-warmth-600 mx-auto rounded-full mb-4" />
        </div>
        
        <div className="max-w-md mx-auto mb-6">
          <p className="text-white/60 text-sm leading-relaxed italic">
            "I can't believe how much web hosting costs these days!"
          </p>
          <p className="text-white/40 text-xs mt-2">
            - Dad, probably checking the server bills
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-4 text-xs text-white/40">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-warmth-400 rounded-full animate-pulse"></div>
            Made with ❤️ by his favorite son
          </div>
          <div className="w-px h-3 bg-white/20"></div>
          <div>© 2024 Rick Lupo Dashboard</div>
        </div>
      </div>
    </footer>
  );
};
