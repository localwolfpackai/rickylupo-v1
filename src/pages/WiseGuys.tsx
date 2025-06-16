
import { useState } from 'react';
import { FloatingNav } from '@/components/FloatingNav';
import { WisdomOrb } from '@/components/WisdomOrb';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

export default function WiseGuys() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const diceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-orange-900">
      <FloatingNav />
      <WisdomOrb />
      
      {/* Floating Dice Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {diceIcons.map((DiceIcon, index) => (
          <DiceIcon 
            key={index}
            className={`absolute text-white/10 transition-all duration-1000 ${
              index === 0 ? 'top-20 left-10 w-8 h-8 animate-float' :
              index === 1 ? 'top-40 right-20 w-6 h-6 animate-float' :
              index === 2 ? 'bottom-32 left-20 w-10 h-10 animate-float' :
              index === 3 ? 'top-60 left-1/3 w-5 h-5 animate-float' :
              index === 4 ? 'bottom-40 right-1/4 w-7 h-7 animate-float' :
              'top-1/3 right-10 w-9 h-9 animate-float'
            }`}
            style={{ 
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + index * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Wise Guys
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Rolling the dice on Dad's greatest moments - a cinematic gamble that always pays off. 
            Sometimes you win big, sometimes you get life lessons, but it's always worth the bet.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto rounded-full animate-fade-in" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Video Section */}
      <div className="container mx-auto px-6 pb-20">
        <Card className="max-w-4xl mx-auto overflow-hidden bg-black/60 backdrop-blur-sm border-purple-500/30 shadow-2xl animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="relative group">
            <video
              className="w-full h-auto aspect-video bg-black"
              poster="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=450&fit=crop"
              controls={false}
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/dad-video.mp4" type="video/mp4" />
              Your browser doesn't support video playback. Dad would say "Have you tried turning it off and on again?"
            </video>
            
            {/* Custom Video Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="flex items-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => {
                    const video = document.querySelector('video');
                    if (video) {
                      if (isPlaying) {
                        video.pause();
                      } else {
                        video.play();
                      }
                    }
                  }}
                  className="h-16 w-16 rounded-full bg-purple-600/80 backdrop-blur-md hover:bg-purple-500/90 border-0 transition-all duration-300"
                >
                  {isPlaying ? <Pause className="h-8 w-8 text-white" /> : <Play className="h-8 w-8 ml-1 text-white" />}
                </Button>
                
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => {
                    const video = document.querySelector('video');
                    if (video) {
                      video.muted = !isMuted;
                      setIsMuted(!isMuted);
                    }
                  }}
                  className="h-12 w-12 rounded-full bg-orange-600/80 backdrop-blur-md hover:bg-orange-500/90 border-0 transition-all duration-300"
                >
                  {isMuted ? <VolumeX className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
                </Button>
                
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => {
                    const video = document.querySelector('video');
                    if (video) {
                      video.requestFullscreen();
                    }
                  }}
                  className="h-12 w-12 rounded-full bg-gray-600/80 backdrop-blur-md hover:bg-gray-500/90 border-0 transition-all duration-300"
                >
                  <Maximize className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Video Description */}
          <div className="p-8 bg-gradient-to-r from-purple-900/50 to-orange-900/50">
            <h2 className="font-playfair text-2xl font-bold text-white mb-4">
              "The Dad Chronicles: Lucky Sevens"
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Every moment with Dad is like rolling the dice - you never know if you'll get a dad joke, 
              a life lesson, or that perfect story that makes everything click. This one's a jackpot.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm border border-purple-400/30">
                🎲 Lucky Shot
              </span>
              <span className="px-3 py-1 bg-orange-500/30 text-orange-200 rounded-full text-sm border border-orange-400/30">
                🎯 Pure Gold
              </span>
              <span className="px-3 py-1 bg-gray-500/30 text-gray-200 rounded-full text-sm border border-gray-400/30">
                🎪 Dad Magic
              </span>
            </div>
            <p className="text-sm text-gray-400 italic">
              "You really made a movie about me? What are the odds..." - Dad, probably
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
