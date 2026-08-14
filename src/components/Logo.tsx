import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md', className = '' }) => {
  // Height sizing to fit navbar cleanly (approx 32px to 42px)
  const heightClasses = {
    sm: 'h-7 sm:h-8',       // ~28px - 32px
    md: 'h-9 sm:h-10',      // ~36px - 40px
    lg: 'h-11 sm:h-12',     // ~44px - 48px
  };

  const gradientId = variant === 'light' ? 'molitaTextGradLight' : 'molitaTextGradDark';

  return (
    <div className={`inline-flex items-center group cursor-pointer select-none py-0.5 ${className}`}>
      <svg
        viewBox="0 0 190 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClasses[size]} w-auto max-w-full group-hover:scale-[1.02] transition-transform duration-300 drop-shadow-2xs`}
        aria-label="Molita Suisse Logo"
      >
        <defs>
          {/* Badge Background Gradient: Rich Purple to Vibrant Indigo Blue */}
          <linearGradient id="molitaBadgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7e22ce" /> {/* purple-700 */}
            <stop offset="50%" stopColor="#4338ca" /> {/* indigo-700 */}
            <stop offset="100%" stopColor="#2563eb" /> {/* blue-600 */}
          </linearGradient>

          {/* Dark Variant Text Gradient for OLITA */}
          <linearGradient id="molitaTextGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b21a8" /> {/* purple-800 */}
            <stop offset="50%" stopColor="#3730a3" /> {/* indigo-800 */}
            <stop offset="100%" stopColor="#1d4ed8" /> {/* blue-700 */}
          </linearGradient>

          {/* Light Variant Text Gradient for OLITA (Footer) */}
          <linearGradient id="molitaTextGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f3e8ff" />
            <stop offset="100%" stopColor="#e0e7ff" />
          </linearGradient>

          {/* Soft shadow for badge */}
          <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#4338ca" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* M Icon Badge: Rounded Square with Gradient Fill */}
        <rect
          x="2"
          y="3"
          width="40"
          height="40"
          rx="11"
          fill="url(#molitaBadgeGrad)"
          filter="url(#badgeShadow)"
        />

        {/* Letter "M" in Badge */}
        <text
          x="22"
          y="31"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Playfair Display', Georgia, serif"
          fontWeight="900"
          fontSize="24"
          fill="#ffffff"
          textAnchor="middle"
          letterSpacing="-0.5"
        >
          M
        </text>

        {/* Wordmark "OLITA" - Placed tight right after badge with minimal spacing */}
        <text
          x="48"
          y="33"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Playfair Display', Georgia, serif"
          fontWeight="800"
          fontSize="27"
          letterSpacing="2.5"
          fill={`url(#${gradientId})`}
        >
          OLITA
        </text>
      </svg>
    </div>
  );
};

