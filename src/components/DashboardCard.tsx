
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'purple' | 'blue' | 'green' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  floating?: boolean;
  children?: React.ReactNode;
}

const variants = {
  purple: 'from-purple-500/20 to-pink-500/20 group-hover:from-purple-400/30 group-hover:to-pink-400/30',
  blue: 'from-blue-500/20 to-cyan-500/20 group-hover:from-blue-400/30 group-hover:to-cyan-400/30',
  green: 'from-green-500/20 to-emerald-500/20 group-hover:from-green-400/30 group-hover:to-emerald-400/30',
  orange: 'from-orange-500/20 to-red-500/20 group-hover:from-orange-400/30 group-hover:to-red-400/30',
};

const sizes = {
  sm: 'w-12 h-12',
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
};

const iconSizes = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-7 w-7',
};

export const DashboardCard = React.forwardRef<HTMLButtonElement, DashboardCardProps>(
  ({ 
    icon: Icon, 
    title, 
    description, 
    onClick, 
    className, 
    variant = 'purple', 
    size = 'md',
    floating = true,
    children,
    ...props 
  }, ref) => {
    const baseClasses = floating 
      ? "relative group backdrop-blur-lg bg-gradient-to-br border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center touch-target overflow-hidden rounded-full"
      : "relative group backdrop-blur-lg bg-gradient-to-br border border-white/10 shadow-xl hover:shadow-lg transition-all duration-300 hover:scale-105 p-6 rounded-2xl overflow-hidden";

    const gradientClasses = variants[variant];
    const sizeClasses = floating ? sizes[size] : '';
    const iconSizeClasses = iconSizes[size];

    if (floating) {
      return (
        <button
          ref={ref}
          className={cn(baseClasses, sizeClasses, gradientClasses, className)}
          onClick={onClick}
          title={title}
          {...props}
        >
          <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Icon className={cn(iconSizeClasses, "text-white/90 group-hover:text-white transition-colors duration-300 relative z-10")} />
          {children}
        </button>
      );
    }

    return (
      <div className={cn(baseClasses, gradientClasses, className)}>
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center mb-4">
            <Icon className={cn(iconSizeClasses, "text-white/90 group-hover:text-white transition-colors duration-300")} />
          </div>
          <h3 className="font-playfair text-xl font-bold text-white mb-2">{title}</h3>
          {description && (
            <p className="text-white/80 text-sm leading-relaxed">{description}</p>
          )}
          {children}
        </div>
      </div>
    );
  }
);

DashboardCard.displayName = 'DashboardCard';
