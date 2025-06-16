
import { useState } from 'react';
import { FloatingNav } from '@/components/FloatingNav';
import { WisdomOrb } from '@/components/WisdomOrb';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

export default function WiseGuys() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // You'll replace this with your actual video URL
  const videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <div className="min-h-screen bg-black">
      <FloatingNav />
      <WisdomOrb />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
            Wise Guys
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A cinematic masterpiece featuring the wisdom, wit, and wonderful chaos of Dad - 
            as captured and curated by his Oscar-worthy (in his own mind) son
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-warmth-400 to-warmth-600 mx-auto rounded-full" />
        </div>
      </div>

      {/* Video Section */}
      <div className="container mx-auto px-6 pb-20">
        <Card className="max-w-4xl mx-auto overflow-hidden bg-gray-900 border-gray-700">
          <div className="relative group">
            <video
              className="w-full h-auto aspect-video"
              poster="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=450&fit=crop"
              controls={false}
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser doesn't support video playback. Dad would say "Have you tried turning it off and on again?"
            </video>
            
            {/* Custom Video Controls */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
                  className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border-0"
                >
                  {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
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
                  className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border-0"
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
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
                  className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border-0"
                >
                  <Maximize className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Video Description */}
          <div className="p-8">
            <h2 className="font-playfair text-2xl font-bold text-white mb-4">
              "The Dad Chronicles: Volume 1"
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              An epic compilation of Dad's greatest hits, featuring his legendary dad jokes, 
              philosophical musings about the thermostat, and that time he explained why 
              we can't just "leave the lights on all over the house." 
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-warmth-500/20 text-warmth-300 rounded-full text-sm">
                Comedy Gold
              </span>
              <span className="px-3 py-1 bg-warmth-500/20 text-warmth-300 rounded-full text-sm">
                Life Lessons
              </span>
              <span className="px-3 py-1 bg-warmth-500/20 text-warmth-300 rounded-full text-sm">
                Dad Wisdom
              </span>
              <span className="px-3 py-1 bg-warmth-500/20 text-warmth-300 rounded-full text-sm">
                Family Classic
              </span>
            </div>
            <p className="text-sm text-gray-500 italic">
              "I can't believe you made a whole movie about me... How much did this cost to make?" - Dad, probably
            </p>
          </div>
        </Card>

        {/* Behind the Scenes */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="font-playfair text-3xl font-bold text-white text-center mb-8">
            Behind the Scenes
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-gray-700 p-6">
              <h4 className="font-playfair text-xl font-bold text-white mb-4">
                Director's Note
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Creating this tribute was like trying to capture lightning in a bottle - 
                if lightning made dad jokes and constantly asked about the thermostat. 
                Every moment with Dad is worth preserving, even the ones where he's 
                explaining why we can't just "Google everything."
              </p>
            </Card>
            
            <Card className="bg-gray-900 border-gray-700 p-6">
              <h4 className="font-playfair text-xl font-bold text-white mb-4">
                Fun Facts
              </h4>
              <ul className="text-gray-300 space-y-2">
                <li>• 47 takes of Dad trying to remember his own stories</li>
                <li>• 12 interruptions to check if we locked the door</li>
                <li>• 3 thermostat adjustments during filming</li>
                <li>• 1 perfectly timed dad joke that made everyone laugh</li>
                <li>• Priceless memories worth every minute</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
