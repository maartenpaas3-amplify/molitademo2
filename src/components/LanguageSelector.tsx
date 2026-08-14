import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  variant?: 'header' | 'mobile' | 'compact';
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'it', label: 'IT', flag: '🇮🇹' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'header' }) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compact variant: small pill button showing only the active language,
  // opens a mini dropdown on tap. Designed for the fixed mobile header bar.
  if (variant === 'compact') {
    const active = languages.find((l) => l.code === language) ?? languages[0];
    return (
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen((o) => !o)}
          className="min-w-[44px] min-h-[44px] px-2.5 py-2 flex items-center justify-center gap-1 bg-stone-900 text-white rounded-full text-xs font-semibold shadow-2xs hover:bg-stone-800 active:scale-95 transition-all shrink-0"
          aria-label="Changer de langue"
        >
          <span className="leading-none font-semibold uppercase">{active.label}</span>
          <ChevronDown className={`w-3 h-3 text-stone-300 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-stone-200/90 overflow-hidden z-50 min-w-[110px] animate-fadeIn">
            {languages.map((lang) => {
              const isActive = language === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3.5 py-2.5 text-xs font-medium text-left transition-colors min-h-[40px] ${
                    isActive ? 'bg-stone-100 text-stone-900 font-semibold' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl border border-stone-200/80">
        {languages.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-white text-stone-900 shadow-xs border border-stone-200'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <span>{lang.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center bg-stone-100/90 hover:bg-stone-100 p-0.5 rounded-full border border-stone-200/80 transition-colors shadow-2xs">
      {languages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center justify-center transition-all ${
              isActive
                ? 'bg-white text-stone-900 shadow-xs scale-100'
                : 'text-stone-500 hover:text-stone-900 opacity-80 hover:opacity-100'
            }`}
            title={`Changer la langue : ${lang.label}`}
          >
            <span className="text-xs font-semibold leading-none">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
};
