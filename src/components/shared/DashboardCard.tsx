
import { ReactNode, forwardRef } from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: 'blue' | 'green' | 'purple' | 'orange' | 'teal';
  size?: 'sm' | 'md' | 'lg';
  floating?: boolean;
  onClick?: () => void;
  className?: string;
  tabIndex?: number;
  role?: string;
  'aria-label'?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const DashboardCard = forwardRef<HTMLDivElement, DashboardCardProps>(({
  icon: Icon,
  title,
  description,
  children,
  variant = 'blue',
  size = 'md',
  floating = false,
  onClick,
  className,
  tabIndex,
  role,
  'aria-label': ariaLabel,
  onKeyDown,
  ...props
}, ref) => {
  const variants = {
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 shadow-blue-500/20',
    green: 'from-green-500/20 to-emerald-500/20 border-green-500/30 shadow-green-500/20',
    purple: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 shadow-purple-500/20',
    orange: 'from-orange-500/20 to-red-500/20 border-orange-500/30 shadow-orange-500/20',
    teal: 'from-teal-500/20 to-cyan-500/20 border-teal-500/30 shadow-teal-500/20',
  };

  const glowVariants = {
    blue: 'hover:shadow-blue-500/40',
    green: 'hover:shadow-green-500/40',
    purple: 'hover:shadow-purple-glow',
    orange: 'hover:shadow-orange-500/40',
    teal: 'hover:shadow-teal-glow',
  };

  const sizes = {
    sm: 'p-4 w-16 h-16',
    md: 'p-6 min-w-48',
    lg: 'p-8 min-w-64',
  };

  const floatingClasses = floating
    ? 'shadow-2xl hover:shadow-3xl'
    : '';

  return (
    <Card
      ref={ref}
      className={cn(
        'card-premium bg-gradient-to-br border gpu-accelerated',
        variants[variant],
        sizes[size],
        floatingClasses,
        glowVariants[variant],
        onClick && 'cursor-pointer interactive-element micro-press',
        'focus-visible-enhanced',
        className
      )}
      onClick={onClick}
      tabIndex={tabIndex}
      role={role}
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
      {...props}
    >
      <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
        {Icon && (
          <div className="mb-3 relative">
            <Icon className="h-8 w-8 text-white animate-float-gentle" aria-hidden="true" />
            <div className="absolute inset-0 blur-sm opacity-50">
              <Icon className="h-8 w-8 text-current" aria-hidden="true" />
            </div>
          </div>
        )}
        {size !== 'sm' && (
          <>
            <h3 className="font-semibold text-white text-lg mb-1 tracking-wide">
              {title}
            </h3>
            {description && (
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                {description}
              </p>
            )}
          </>
        )}
        {children}
      </div>
      
      {/* Enhanced glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-lg pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Card>
  );
});

DashboardCard.displayName = 'DashboardCard';
