
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';
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

export const InteractiveCounters = () => {
  const [callsIgnored, setCallsIgnored] = useState(0);
  const [swearJar, setSwearJar] = useState(0);
  const [currentQuote, setCurrentQuote] = useState('');
  const [showQuote, setShowQuote] = useState(false);
  const [coinAnimation, setCoinAnimation] = useState(false);

  const handleFartButton = () => {
    playFartSound();
    
    const button = document.querySelector('.fart-button');
    if (button) {
      button.classList.add('animate-bounce');
      setTimeout(() => {
        button.classList.remove('animate-bounce');
      }, 1000);
    }
  };

  const addToSwearJar = () => {
    setSwearJar(prev => prev + 1);
    setCoinAnimation(true);
    
    const randomQuote = dadQuotes[Math.floor(Math.random() * dadQuotes.length)];
    setCurrentQuote(randomQuote);
    setShowQuote(true);
    
    setTimeout(() => {
      setCoinAnimation(false);
      setShowQuote(false);
    }, 3000);
  };

  const addIgnoredCall = () => {
    setCallsIgnored(callsIgnored + 1);
    playNotificationSound();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4">
          Dad's Greatest Hits
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          A loving son's completely unbiased documentation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Emergency Fart Button */}
          <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Emergency Button</CardTitle>
              <CardDescription>For when Dad needs to assert dominance</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleFartButton}
                className="fart-button w-20 h-20 rounded-full metallic-button text-3xl"
              >
                💨
              </Button>
              <p className="text-xs text-gray-500 mt-2 italic">
                Warning: May clear entire rooms
              </p>
            </CardContent>
          </Card>

          {/* Call Tracker */}
          <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Calls Avoided</CardTitle>
              <CardDescription>Kids avoiding responsibility since forever</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-4 text-warmth-600">{callsIgnored}</div>
              <div className="flex justify-center space-x-2">
                <Button
                  onClick={() => setCallsIgnored(Math.max(0, callsIgnored - 1))}
                  variant="outline"
                  size="sm"
                  className="metallic-button"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Button
                  onClick={addIgnoredCall}
                  className="bg-warmth-500 hover:bg-warmth-600"
                  size="sm"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 italic">
                "Why don't they ever call back?"
              </p>
            </CardContent>
          </Card>

          {/* Swear Jar */}
          <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Dad's Reaction Fund</CardTitle>
              <CardDescription>For when he sees any receipt</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="text-4xl font-bold mb-4 text-warmth-600">${swearJar}</div>
                {coinAnimation && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl coin-drop">
                    💰
                  </div>
                )}
              </div>
              
              <Button
                onClick={addToSwearJar}
                className="bg-gradient-to-r from-warmth-500 to-warmth-600 hover:from-warmth-600 hover:to-warmth-700 metallic-button"
              >
                Ka-Ching! 💰
              </Button>
              
              {showQuote && (
                <div className="mt-4 p-4 bg-warmth-50 dark:bg-warmth-900/20 rounded-lg animate-bloom border border-warmth-200">
                  <p className="text-sm font-medium text-warmth-800 dark:text-warmth-200 italic">
                    "{currentQuote}"
                  </p>
                  <p className="text-xs text-warmth-600 mt-1">
                    - Dad, probably looking at a grocery receipt
                  </p>
                </div>
              )}
              
              <p className="text-xs text-gray-500 mt-2 italic">
                Inflation has been rough on everyone
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
