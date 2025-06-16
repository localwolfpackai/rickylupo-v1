
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Lightbulb, ArrowUpRight } from 'lucide-react';

const dadWisdom = [
  "\"Money doesn't grow on trees!\" - Dad's favorite financial advice since 1985",
  "\"When I was your age...\" - The start of every legendary Dad story",
  "\"Did you check the oil?\" - Dad's universal solution to car problems",
  "\"We're not heating the neighborhood!\" - Said while adjusting the thermostat by 1 degree",
  "\"That's highway robbery!\" - Dad's review of literally any price",
  "\"Back in my day, gas was 50 cents!\" - Dad's inflation commentary",
  "\"If you're gonna do it, do it right!\" - Dad's perfectionist motto",
  "\"What's the WiFi password again?\" - Dad, every single time",
  "\"I'm not sleeping, I'm just resting my eyes!\" - Dad on the couch at 3 PM",
  "\"Ask your mother.\" - Dad's diplomatic solution to everything"
];

export const WisdomOrb = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentWisdom, setCurrentWisdom] = useState('');

  const handleOrbClick = () => {
    const randomWisdom = dadWisdom[Math.floor(Math.random() * dadWisdom.length)];
    setCurrentWisdom(randomWisdom);
    setShowModal(true);
  };

  return (
    <>
      <div className="relative group">
        <button
          className="w-14 h-14 rounded-full backdrop-blur-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center touch-target relative overflow-hidden"
          onClick={handleOrbClick}
          title="Dad's wisdom awaits..."
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Lightbulb className="h-6 w-6 text-white/90 group-hover:text-white transition-colors duration-300 relative z-10" />
          <ArrowUpRight className="h-3 w-3 absolute top-1 right-1 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-lg bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
          <div className="relative">
            {/* Modern gradient header */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
            
            <div className="text-center py-8 px-6">
              {/* Modern icon instead of emoji */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-6">
                Dad Wisdom™
              </h3>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {currentWisdom}
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
