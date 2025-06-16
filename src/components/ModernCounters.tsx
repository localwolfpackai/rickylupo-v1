
import { useState } from 'react';
import { DashboardCard } from '@/components/DashboardCard';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Plus, Minus, Zap, Phone, DollarSign } from 'lucide-react';
import { playFartSound, playNotificationSound } from '@/utils/soundUtils';

const dadQuotes = [
  "I can't believe how much that costs these days!",
  "Highway robbery! That's what this is!",
  "When I was your age, you could buy a car for that!",
  "They're charging an arm and a leg!",
  "Back in my day, gas was 50 cents!",
  "What do you mean the WiFi password expired?",
  "Who left all these lights on? We're not the electric company!",
  "Did somebody touch the thermostat?",
];

export const ModernCounters = () => {
  const [callsIgnored, setCallsIgnored] = useState(0);
  const [swearJar, setSwearJar] = useState(0);
  const [showFartModal, setShowFartModal] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const [showSwearModal, setShowSwearModal] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');

  const handleFartButton = () => {
    playFartSound();
    setShowFartModal(true);
    setTimeout(() => setShowFartModal(false), 2000);
  };

  const addToSwearJar = () => {
    setSwearJar(prev => prev + 1);
    const randomQuote = dadQuotes[Math.floor(Math.random() * dadQuotes.length)];
    setCurrentQuote(randomQuote);
    setShowSwearModal(true);
    setTimeout(() => setShowSwearModal(false), 3000);
  };

  const addIgnoredCall = () => {
    setCallsIgnored(callsIgnored + 1);
    playNotificationSound();
    setShowCallModal(true);
    setTimeout(() => setShowCallModal(false), 2000);
  };

  return (
    <>
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
              Dad's Greatest Hits
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-warmth-400 to-warmth-600 mx-auto rounded-full mb-4" />
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              A loving son's completely unbiased documentation of legendary moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <DashboardCard
                icon={Zap}
                title="Emergency Button"
                description="For when Dad needs to assert dominance"
                variant="orange"
                size="lg"
                floating={false}
                onClick={handleFartButton}
                className="w-full hover:scale-105 cursor-pointer"
              >
                <div className="text-6xl mb-4">💨</div>
                <p className="text-xs text-white/50 italic">
                  Warning: May clear entire rooms
                </p>
              </DashboardCard>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <DashboardCard
                icon={Phone}
                title="Calls Avoided"
                description="Kids avoiding responsibility since forever"
                variant="blue"
                size="lg"
                floating={false}
                className="w-full"
              >
                <div className="text-5xl font-bold mb-6 text-cyan-400">{callsIgnored}</div>
                <div className="flex justify-center space-x-3">
                  <Button
                    onClick={() => setCallsIgnored(Math.max(0, callsIgnored - 1))}
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={addIgnoredCall}
                    className="bg-cyan-500 hover:bg-cyan-600"
                    size="sm"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-white/50 mt-4 italic">
                  "Why don't they ever call back?"
                </p>
              </DashboardCard>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <DashboardCard
                icon={DollarSign}
                title="Dad's Reaction Fund"
                description="For when he sees any receipt"
                variant="green"
                size="lg"
                floating={false}
                className="w-full"
              >
                <div className="text-5xl font-bold mb-6 text-emerald-400">${swearJar}</div>
                <Button
                  onClick={addToSwearJar}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  Ka-Ching! 💰
                </Button>
                <p className="text-xs text-white/50 mt-4 italic">
                  Inflation has been rough on everyone
                </p>
              </DashboardCard>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Dialog open={showFartModal} onOpenChange={setShowFartModal}>
        <DialogContent className="sm:max-w-md backdrop-blur-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-white/10 shadow-2xl rounded-3xl">
          <div className="text-center py-6">
            <div className="text-6xl mb-4">💨</div>
            <h3 className="text-2xl font-bold text-white mb-2">DOMINANCE ASSERTED!</h3>
            <p className="text-white/80">Room cleared successfully</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showCallModal} onOpenChange={setShowCallModal}>
        <DialogContent className="sm:max-w-md backdrop-blur-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 shadow-2xl rounded-3xl">
          <div className="text-center py-6">
            <Phone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Call Logged!</h3>
            <p className="text-white/80">Another responsibility successfully avoided</p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showSwearModal} onOpenChange={setShowSwearModal}>
        <DialogContent className="sm:max-w-lg backdrop-blur-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10 shadow-2xl rounded-3xl">
          <div className="text-center py-6">
            <DollarSign className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Dad's Reaction!</h3>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <p className="text-lg text-white/90 italic mb-2">"{currentQuote}"</p>
              <p className="text-sm text-white/60">- Dad, probably looking at a receipt</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
