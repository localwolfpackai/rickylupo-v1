
import { useState, useEffect } from 'react';

export const useScrollVisibility = (threshold: number = 100) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlVisibility = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > threshold) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlVisibility);
      return () => {
        window.removeEventListener('scroll', controlVisibility);
      };
    }
  }, [lastScrollY, threshold]);

  return isVisible;
};
