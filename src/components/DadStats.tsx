
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { BarChart3, Coffee, Wrench, Heart, ArrowUpRight } from 'lucide-react';

const stats = [
  {
    icon: BarChart3,
    label: "Dad Jokes Told",
    value: 47832,
    description: "And counting... each one carefully crafted to make you groan"
  },
  {
    icon: Coffee,
    label: "Cups of Coffee",
    value: 15678,
    description: "Fuel for all those early morning lectures about responsibility"
  },
  {
    icon: Wrench,
    label: "Things Fixed",
    value: 3421,
    description: "From broken hearts to broken appliances - Dad fixes it all"
  },
  {
    icon: Heart,
    label: "Life Lessons Shared",
    value: 892,
    description: "Each one delivered with perfect timing and questionable relevance"
  }
];

export const DadStats = () => {
  const [showStats, setShowStats] = useState(false);

  return (
    <>
      <div className="relative group" data-onboarding="dad-stats">
        <button
          onClick={() => setShowStats(true)}
          className="w-14 h-14 rounded-full backdrop-blur-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center touch-target relative overflow-hidden"
          title="Dad's greatest hits"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <BarChart3 className="h-6 w-6 text-white/90 group-hover:text-white transition-colors duration-300 relative z-10" />
          <ArrowUpRight className="h-3 w-3 absolute top-1 right-1 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      <Dialog open={showStats} onOpenChange={setShowStats}>
        <DialogContent className="sm:max-w-2xl bg-gradient-to-br from-warmth-50 to-warmth-100 border-warmth-200">
          <div className="text-center py-6">
            <h3 className="font-playfair text-3xl font-bold text-warmth-800 mb-8">
              Dad's Greatest Hits
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-white/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-warmth-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-warmth-800 mb-2 font-playfair">
                      {stat.value.toLocaleString()}
                    </div>
                    <div className="text-sm font-semibold text-warmth-700 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs text-warmth-600 italic">
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <p className="text-sm text-warmth-500 mt-6 italic">
              *Statistics may be slightly exaggerated for dramatic effect
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
