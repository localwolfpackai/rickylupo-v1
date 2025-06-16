
import { useState, useEffect } from 'react';

interface UseTypingEffectOptions {
  typingSpeed?: number;
  pauseDuration?: number;
  onComplete?: () => void;
}

export const useTypingEffect = (
  textArray: string[], 
  options: UseTypingEffectOptions = {}
) => {
  const { 
    typingSpeed = 40, 
    pauseDuration = 1800, 
    onComplete 
  } = options;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < textArray.length && isTyping) {
      const currentText = textArray[currentIndex];
      let charIndex = 0;
      
      const getTypingSpeed = (char: string) => {
        if (char === '.' || char === '!' || char === '?') return 150;
        if (char === ',' || char === ';') return 100;
        if (char === ' ') return 30;
        return typingSpeed;
      };
      
      const typeCharacter = () => {
        if (charIndex < currentText.length) {
          const char = currentText[charIndex];
          setDisplayedText(currentText.slice(0, charIndex + 1));
          charIndex++;
          
          setTimeout(typeCharacter, getTypingSpeed(char));
        } else {
          setIsTyping(false);
          
          const pauseTime = currentIndex === 3 || currentIndex === 7 ? 2500 : pauseDuration;
          
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            setDisplayedText('');
            setIsTyping(true);
          }, pauseTime);
        }
      };
      
      setTimeout(typeCharacter, 200);
    } else if (currentIndex >= textArray.length && !isComplete) {
      setIsComplete(true);
      setTimeout(() => {
        onComplete?.();
      }, 2500);
    }
  }, [currentIndex, isTyping, textArray, typingSpeed, pauseDuration, onComplete, isComplete]);

  return {
    displayedText,
    currentIndex,
    isComplete,
    progress: textArray.length > 0 ? (currentIndex / textArray.length) * 100 : 0
  };
};
