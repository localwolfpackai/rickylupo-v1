
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { BarChart3, Coffee, Wrench, Heart, ArrowUpRight } from 'lucide-react';
import { DashboardCard } from '@/components/shared/DashboardCard';

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
      <div className="relative" data-onboarding="dad-stats">
        <DashboardCard
          icon={BarChart3}
          title="Dad's greatest hits"
          variant="blue"
          size="md"
          floating={true}
          onClick={() => setShowStats(true)}
        >
          <ArrowUpRight className="h-3 w-3 absolute top-1 right-1 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </DashboardCard>
      </div>

      <Dialog open={showStats} onOpenChange={setShowStats}>
        <DialogContent className="sm:max-w-2xl backdrop-blur-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
            
            <div className="text-center py-8 px-6">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-lg border border-white/20 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">
                Dad's Greatest Hits
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 group hover:bg-white/15"
                    >
                      <div className="flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2 font-playfair">
                        {stat.value.toLocaleString()}
                      </div>
                      <div className="text-sm font-semibold text-white/90 mb-2">
                        {stat.label}
                      </div>
                      <div className="text-xs text-white/70 italic">
                        {stat.description}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <p className="text-sm text-white/60 mt-6 italic">
                *Statistics may be slightly exaggerated for dramatic effect
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
