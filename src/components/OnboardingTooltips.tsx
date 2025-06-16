
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, ArrowRight } from 'lucide-react';
import { useTooltipPosition } from '@/hooks/useTooltipPosition';

interface TooltipStep {
  id: string;
  target: string;
  title: string;
  content: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

const tooltipSteps: TooltipStep[] = [
  {
    id: 'wisdom-orb',
    target: 'wisdom-orb',
    title: 'Your Personal Wisdom Generator',
    content: "Click this magical orb for instant Dad wisdom! Warning: May contain traces of 'back in my day' stories and unsolicited life advice.",
    position: 'left'
  },
  {
    id: 'dad-stats',
    target: 'dad-stats',
    title: 'Dad\'s Hall of Fame',
    content: "Your legendary statistics are here! Don't worry, we rounded down the dad jokes counter to keep it believable... barely.",
    position: 'left'
  }
];

export const OnboardingTooltips = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const currentStepData = tooltipSteps[currentStep];
  const tooltipPosition = useTooltipPosition({
    targetSelector: currentStepData?.target || '',
    preferredPosition: currentStepData?.position || 'left',
    tooltipWidth: 350,
    tooltipHeight: 220,
    offset: 20
  });

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem('rickLupoOnboardingSeen');
    const hasSeenIntro = sessionStorage.getItem('rickLupoIntroSeen');
    
    if (hasSeenIntro && !hasSeenOnboarding) {
      setTimeout(() => {
        showCurrentTooltip();
      }, 1000);
    }
  }, []);

  const showCurrentTooltip = () => {
    if (currentStep >= tooltipSteps.length) return;
    
    const step = tooltipSteps[currentStep];
    const targetElement = document.querySelector(`[data-onboarding="${step.target}"]`);
    
    if (targetElement) {
      setIsVisible(true);
      targetElement.classList.add('onboarding-highlight');
    }
  };

  const nextStep = () => {
    const currentStepData = tooltipSteps[currentStep];
    const currentElement = document.querySelector(`[data-onboarding="${currentStepData.target}"]`);
    if (currentElement) {
      currentElement.classList.remove('onboarding-highlight');
    }

    if (currentStep < tooltipSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setTimeout(() => {
        showCurrentTooltip();
      }, 300);
    } else {
      finishOnboarding();
    }
  };

  const finishOnboarding = () => {
    setIsVisible(false);
    localStorage.setItem('rickLupoOnboardingSeen', 'true');
    
    const lastStepData = tooltipSteps[currentStep];
    const lastElement = document.querySelector(`[data-onboarding="${lastStepData.target}"]`);
    if (lastElement) {
      lastElement.classList.remove('onboarding-highlight');
    }
  };

  const skipOnboarding = () => {
    tooltipSteps.forEach(step => {
      const element = document.querySelector(`[data-onboarding="${step.target}"]`);
      if (element) {
        element.classList.remove('onboarding-highlight');
      }
    });
    finishOnboarding();
  };

  if (!isVisible || !currentStepData) return null;

  const getTransformClass = () => {
    switch (tooltipPosition.position) {
      case 'top':
      case 'bottom':
        return 'translateX(-50%)';
      case 'left':
      case 'right':
        return 'translateY(-50%)';
      default:
        return 'none';
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
      
      <Card
        className="fixed z-50 w-80 bg-white shadow-2xl border-2 border-warmth-200 rounded-2xl overflow-hidden"
        style={{
          top: tooltipPosition.top,
          left: tooltipPosition.left,
          transform: getTransformClass()
        }}
      >
        <div className="bg-gradient-to-r from-warmth-500 to-warmth-600 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-playfair text-lg font-bold text-white">
              {currentStepData.title}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={skipOnboarding}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-6 leading-relaxed">
            {currentStepData.content}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              {tooltipSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentStep ? 'bg-warmth-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={skipOnboarding}
                className="text-gray-600"
              >
                Skip Tour
              </Button>
              <Button
                onClick={nextStep}
                size="sm"
                className="bg-warmth-500 hover:bg-warmth-600"
              >
                {currentStep === tooltipSteps.length - 1 ? 'Got it!' : 'Next'}
                {currentStep !== tooltipSteps.length - 1 && <ArrowRight className="h-4 w-4 ml-1" />}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
