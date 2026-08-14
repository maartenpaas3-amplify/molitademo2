import React from 'react';
import { LucideIcon } from 'lucide-react';

export type TrustBadgeSize = 'large' | 'compact';
// For backwards compatibility
export type TrustBadgeVariant = 'large' | 'compact' | 'card' | 'banner' | 'tag';

export interface TrustBadgeProps {
  size?: TrustBadgeSize;
  variant?: TrustBadgeVariant;
  icon?: LucideIcon | React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({
  size,
  variant,
  icon: Icon,
  title,
  subtitle,
  children,
  className = '',
  id,
}) => {
  // Map legacy variant prop to size if size is not provided
  const effectiveSize: TrustBadgeSize =
    size || (variant === 'card' ? 'large' : 'compact');

  // Unified base styling shared across ALL trust badge sizes:
  // Same border-radius (rounded-2xl), same border & background styling, same dark purple theme
  const baseContainer =
    'rounded-2xl bg-purple-950/80 border border-purple-800/60 text-purple-100 shadow-xs backdrop-blur-xs hover:border-purple-700/80 transition-all group';

  // Unified icon frame style (rounded square icon container with subtle border)
  const baseIconFrame =
    'rounded-xl bg-purple-900/60 border border-purple-700/50 text-purple-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform';

  // 1. Large Size Variant (for "Notre engagement qualité" grid items)
  if (effectiveSize === 'large') {
    return (
      <div
        id={id}
        className={`flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 h-full ${baseContainer} ${className}`}
      >
        {Icon && (
          <div className={`w-9 h-9 sm:w-10 sm:h-10 ${baseIconFrame}`}>
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200" strokeWidth={1.8} />
          </div>
        )}
        <div className="min-w-0">
          {title && (
            <h3 className="text-xs sm:text-sm font-semibold text-stone-100 leading-snug">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-[11px] text-purple-200/80 mt-0.5 leading-snug font-sans">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }

  // 2. Compact Size Variant (harmonized for both "2'500 clients satisfaits" banner and "Vérifié" badges)
  return (
    <div
      id={id}
      className={`inline-flex items-center gap-2.5 px-3.5 py-2 ${baseContainer} ${className}`}
    >
      {Icon && (
        <div className={`w-6 h-6 ${baseIconFrame}`}>
          <Icon className="w-3.5 h-3.5 text-purple-200" strokeWidth={2} />
        </div>
      )}
      <div className="min-w-0 text-xs font-medium text-purple-100 tracking-wide flex items-center gap-1.5">
        {title && <span>{title}</span>}
        {children}
      </div>
    </div>
  );
};

