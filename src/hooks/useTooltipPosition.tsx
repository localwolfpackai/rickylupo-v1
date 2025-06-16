
import { useState, useEffect, useCallback } from 'react';

interface Position {
  top: number;
  left: number;
  position: 'top' | 'bottom' | 'left' | 'right';
}

interface UseTooltipPositionProps {
  targetSelector: string;
  preferredPosition: 'top' | 'bottom' | 'left' | 'right';
  tooltipWidth?: number;
  tooltipHeight?: number;
  offset?: number;
}

export const useTooltipPosition = ({
  targetSelector,
  preferredPosition,
  tooltipWidth = 320,
  tooltipHeight = 200,
  offset = 20
}: UseTooltipPositionProps) => {
  const [position, setPosition] = useState<Position>({ top: 0, left: 0, position: preferredPosition });

  const calculatePosition = useCallback(() => {
    const targetElement = document.querySelector(`[data-onboarding="${targetSelector}"]`);
    if (!targetElement) return;

    const rect = targetElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate available space in each direction
    const spaceTop = rect.top;
    const spaceBottom = viewportHeight - rect.bottom;
    const spaceLeft = rect.left;
    const spaceRight = viewportWidth - rect.right;

    let finalPosition = preferredPosition;
    let top = 0;
    let left = 0;

    // Determine the best position based on available space
    const positions = [
      { 
        name: 'left' as const, 
        space: spaceLeft, 
        fits: spaceLeft >= tooltipWidth + offset 
      },
      { 
        name: 'right' as const, 
        space: spaceRight, 
        fits: spaceRight >= tooltipWidth + offset 
      },
      { 
        name: 'top' as const, 
        space: spaceTop, 
        fits: spaceTop >= tooltipHeight + offset 
      },
      { 
        name: 'bottom' as const, 
        space: spaceBottom, 
        fits: spaceBottom >= tooltipHeight + offset 
      }
    ];

    // Try preferred position first, then find best alternative
    const preferredFits = positions.find(p => p.name === preferredPosition)?.fits;
    if (!preferredFits) {
      const bestFit = positions
        .filter(p => p.fits)
        .sort((a, b) => b.space - a.space)[0];
      
      if (bestFit) {
        finalPosition = bestFit.name;
      }
    }

    // Calculate actual position
    switch (finalPosition) {
      case 'left':
        top = rect.top + scrollTop + rect.height / 2;
        left = rect.left + scrollLeft - tooltipWidth - offset;
        // Ensure tooltip doesn't go off screen vertically
        top = Math.max(10, Math.min(top, viewportHeight - tooltipHeight - 10));
        break;
      case 'right':
        top = rect.top + scrollTop + rect.height / 2;
        left = rect.left + scrollLeft + rect.width + offset;
        top = Math.max(10, Math.min(top, viewportHeight - tooltipHeight - 10));
        break;
      case 'top':
        top = rect.top + scrollTop - tooltipHeight - offset;
        left = rect.left + scrollLeft + rect.width / 2;
        left = Math.max(10, Math.min(left, viewportWidth - tooltipWidth - 10));
        break;
      case 'bottom':
        top = rect.top + scrollTop + rect.height + offset;
        left = rect.left + scrollLeft + rect.width / 2;
        left = Math.max(10, Math.min(left, viewportWidth - tooltipWidth - 10));
        break;
    }

    setPosition({ top, left, position: finalPosition });
  }, [targetSelector, preferredPosition, tooltipWidth, tooltipHeight, offset]);

  useEffect(() => {
    calculatePosition();
    
    const handleResize = () => calculatePosition();
    const handleScroll = () => calculatePosition();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [calculatePosition]);

  return position;
};
