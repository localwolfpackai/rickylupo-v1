
import { useState } from 'react';
import { DashboardCard } from '@/components/shared/DashboardCard';
import { BarChart3 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const dadStats = [
  { label: "Times asked 'Are we there yet?'", value: "∞" },
  { label: "Dad jokes told", value: "47,293" },
  { label: "Thermostats adjusted", value: "2,847" },
  { label: "Tools 'borrowed' and never returned", value: "156" },
  { label: "Times said 'I'm not mad, just disappointed'", value: "4,291" },
  { label: "Lawn mowing sessions this year", value: "89" },
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
        className="hover:scale-110 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
        tabIndex={0}
        role="button"
        aria-label="View dad's performance statistics"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openStats();
          }
        }}
      />

      <Dialog open={showStats} onOpenChange={setShowStats}>
        <DialogContent 
          className="sm:max-w-md backdrop-blur-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-white/10 shadow-2xl rounded-3xl focus:outline-none"
          aria-labelledby="stats-title"
          aria-describedby="stats-content"
        >
          <div className="text-center py-6">
            <BarChart3 className="h-16 w-16 text-teal-400 mx-auto mb-6" aria-hidden="true" />
            <h3 id="stats-title" className="text-2xl font-bold text-white mb-6">
              Dad Analytics Dashboard
            </h3>
            <div id="stats-content" className="space-y-3">
              {dadStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                >
                  <div className="text-2xl font-bold text-teal-400">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
