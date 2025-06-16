
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
    blue: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    green: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    purple: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    orange: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
    teal: 'from-teal-500/20 to-cyan-500/20 border-teal-500/30',
  };

  const sizes = {
    sm: 'p-4 w-16 h-16',
    md: 'p-6 min-w-48',
    lg: 'p-8 min-w-64',
  };

  const floatingClasses = floating
    ? 'shadow-2xl hover:shadow-3xl transition-all duration-300'
    : '';

  return (
    <Card
      ref={ref}
      className={cn(
        'backdrop-blur-lg bg-gradient-to-br border shadow-lg transition-all duration-300',
        variants[variant],
        sizes[size],
        floatingClasses,
        onClick && 'cursor-pointer hover:scale-105',
        className
      )}
      onClick={onClick}
      tabIndex={tabIndex}
      role={role}
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
      {...props}
    >
      <div className="flex flex-col items-center justify-center h-full text-center">
        {Icon && <Icon className="h-8 w-8 text-white mb-2" aria-hidden="true" />}
        {size !== 'sm' && (
          <>
            <h3 className="font-semibold text-white text-lg mb-1">{title}</h3>
            {description && (
              <p className="text-white/70 text-sm mb-4">{description}</p>
            )}
          </>
        )}
        {children}
      </div>
    </Card>
  );
});

DashboardCard.displayName = 'DashboardCard';
