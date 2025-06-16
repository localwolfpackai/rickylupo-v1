
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';

const dadQuotes = [
  "I can't believe how much that costs these days!",
  "Money doesn't grow on trees!",
  "When I was your age, gas was 50 cents!",
  "Highway robbery! That's what this is!",
  "Back in my day, you could buy a car for that!",
  "They're charging an arm and a leg!",
];

export const InteractiveCounters = () => {
  const [callsIgnored, setCallsIgnored] = useState(0);
  const [swearJar, setSwearJar] = useState(0);
  const [currentQuote, setCurrentQuote] = useState('');
  const [showQuote, setShowQuote] = useState(false);

  const playFartSound = () => {
    // In a real app, you'd load and play an actual sound file
    console.log('💨 *FART NOISE* 💨');
    // For now, we'll just show a fun animation
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
    const randomQuote = dadQuotes[Math.floor(Math.random() * dadQuotes.length)];
    setCurrentQuote(randomQuote);
    setShowQuote(true);
    setTimeout(() => setShowQuote(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12">
          Dad's Dashboard
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Fart Button */}
          <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Emergency Button</CardTitle>
              <CardDescription>For when Dad needs to clear the room</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={playFartSound}
                className="fart-button w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-3xl transition-all duration-200"
              >
                💨
              </Button>
            </CardContent>
          </Card>

          {/* Call Tracker */}
          <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Ignored Calls</CardTitle>
              <CardDescription>Anthony & Nicole's tally</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-4 text-warmth-600">{callsIgnored}</div>
              <div className="flex justify-center space-x-2">
                <Button
                  onClick={() => setCallsIgnored(Math.max(0, callsIgnored - 1))}
                  variant="outline"
                  size="sm"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => setCallsIgnored(callsIgnored + 1)}
                  className="bg-warmth-500 hover:bg-warmth-600"
                  size="sm"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Swear Jar */}
          <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Swear Jar</CardTitle>
              <CardDescription>Dad's legendary reactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-4 text-warmth-600">${swearJar}</div>
              <Button
                onClick={addToSwearJar}
                className="bg-gradient-to-r from-warmth-500 to-warmth-600 hover:from-warmth-600 hover:to-warmth-700"
              >
                Add Money 💰
              </Button>
              
              {showQuote && (
                <div className="mt-4 p-3 bg-warmth-50 dark:bg-warmth-900/20 rounded-lg animate-bloom">
                  <p className="text-sm font-medium text-warmth-800 dark:text-warmth-200 italic">
                    "{currentQuote}"
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
