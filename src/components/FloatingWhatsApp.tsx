import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_URL } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    try {
      return sessionStorage.getItem('molita_wa_tooltip_dismissed') === 'true';
    } catch {
      return false;
    }
  });
  const { t } = useLanguage();

  const handleDismiss = () => {
    setTooltipVisible(false);
    setIsDismissed(true);
    try {
      sessionStorage.setItem('molita_wa_tooltip_dismissed', 'true');
    } catch {
      // ignore storage access errors
    }
  };

  useEffect(() => {
    if (isDismissed) return;

    let showTimer: ReturnType<typeof setTimeout> | null = null;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    // Dismiss if page is already scrolled on mount
    if (window.scrollY > 300) {
      handleDismiss();
      return;
    }

    // Dismiss if user scrolls past Hero section
    const handleScroll = () => {
      if (window.scrollY > 300) {
        handleDismiss();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Show tooltip once after 5s if user stays near top
    showTimer = setTimeout(() => {
      if (window.scrollY <= 300) {
        setTooltipVisible(true);

        // Auto-dismiss after 7 seconds
        hideTimer = setTimeout(() => {
          handleDismiss();
        }, 7000);
      } else {
        handleDismiss();
      }
    }, 5000);

    return () => {
      if (showTimer) clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDismissed]);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 sm:gap-3">
      {/* Interactive Non-Intrusive Tooltip Card */}
      {!isDismissed && (
        <div
          className={`flex items-center gap-2 sm:gap-2.5 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl shadow-xl border border-emerald-100/80 text-stone-800 text-[11px] sm:text-xs font-medium max-w-[calc(100vw-5rem)] sm:max-w-xs transition-all duration-500 ease-out ${
            tooltipVisible
              ? 'opacity-100 translate-x-0 pointer-events-auto'
              : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDismiss}
            className="hover:text-emerald-700 transition-colors truncate"
          >
            {t.contact.floatingTooltip}
          </a>
          <button
            onClick={handleDismiss}
            className="text-stone-400 hover:text-stone-600 p-0.5 rounded-full hover:bg-stone-100 transition-colors shrink-0"
            aria-label="Fermer l'info-bulle"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button with Molita Brand Violet/Indigo Halo & Border */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.contact.whatsappCta}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none ring-3 ring-purple-500/40 hover:ring-purple-600/70 hover:ring-4 shrink-0"
      >
        {/* Molita Violet/Indigo brand aura halo */}
        <span className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-500/25 to-pink-500/20 blur-xs -z-10 group-hover:opacity-100 transition-opacity" />

        {/* Pulsing glow halo */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-ping" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 fill-white stroke-[#25D366] stroke-[1.5]" />

        {/* Small Online Badge with Molita brand border */}
        <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center z-20 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </span>
      </a>
    </div>
  );
};

