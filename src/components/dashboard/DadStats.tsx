
import { useState } from 'react';
import { DashboardCard } from '@/components/shared/DashboardCard';
import { BarChart3 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const dadStats = [
  { label: "Times asked 'Are we there yet?'", value: "∞", color: "text-blue-400" },
  { label: "Dad jokes told", value: "47,293", color: "text-green-400" },
  { label: "Thermostats adjusted", value: "2,847", color: "text-red-400" },
  { label: "Tools 'borrowed' and never returned", value: "156", color: "text-yellow-400" },
  { label: "Times said 'I'm not mad, just disappointed'", value: "4,291", color: "text-purple-400" },
  { label: "Lawn mowing sessions this year", value: "89", color: "text-teal-400" },
];

export const DadStats = () => {
  const [showStats, setShowStats] = useState(false);

  const openStats = () => {
    setShowStats(true);
  };

  return (
    <>
      <DashboardCard
        icon={BarChart3}
        title="Dad Analytics"
        description="The numbers don't lie"
        variant="teal"
        size="sm"
        floating={true}
        onClick={openStats}
        className="hover:animate-float-gentle cursor-pointer group"
        tabIndex={0}
        role="button"
        aria-label="View dad's performance statistics - opens analytics dashboard"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openStats();
          }
        }}
      />

      <Dialog open={showStats} onOpenChange={setShowStats}>
        <DialogContent 
          className="sm:max-w-md card-premium bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-white/10 shadow-teal-glow rounded-3xl focus-trap"
          aria-labelledby="stats-title"
          aria-describedby="stats-content"
        >
          <div className="text-center py-6 animate-spring-in">
            <div className="relative mb-6 inline-block">
              <BarChart3 className="h-16 w-16 text-teal-400 mx-auto animate-float-gentle" aria-hidden="true" />
              <div className="absolute inset-0 blur-lg opacity-30">
                <BarChart3 className="h-16 w-16 text-teal-400 mx-auto" aria-hidden="true" />
              </div>
            </div>
            <h3 id="stats-title" className="text-2xl font-bold text-white mb-6 text-gradient-teal">
              Dad Analytics Dashboard
            </h3>
            <div id="stats-content" className="space-y-3">
              {dadStats.map((stat, index) => (
                <div
                  key={index}
                  className="card-premium p-4 border border-white/20 interactive-glow animate-slide-up-fade"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    '--stagger-index': index 
                  } as React.CSSProperties}
                >
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80 leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
