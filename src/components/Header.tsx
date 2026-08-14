import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { PhoneCall, MessageCircle, Menu, X, Sparkles, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { WHATSAPP_URL } from '../config';

interface HeaderProps {
  onOpenCallback: (productId?: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCallback, onNavigateTo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section IDs in DOM top-to-bottom order
      const sectionIds = ['histoire', 'diagnostic', 'produits'];

      // Near top of page (Hero section), no nav link is active
      if (window.scrollY < 200) {
        setActiveSection(null);
        return;
      }

      const scrollPos = window.scrollY + 220; // Offset for fixed header & threshold
      let currentSection: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigateTo(sectionId);
    setMobileMenuOpen(false);
  };

  const isProduitsActive = activeSection === 'produits';
  const isDiagnosticActive = activeSection === 'diagnostic';
  const isHistoireActive = activeSection === 'histoire';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf9f6]/90 backdrop-blur-md shadow-sm border-b border-stone-200/60 py-3.5'
            : 'bg-[#faf9f6]/80 backdrop-blur-xs py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => handleNavClick('hero')} className="cursor-pointer shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => handleNavClick('produits')}
              className={`py-1 relative group transition-colors ${
                isProduitsActive
                  ? 'text-purple-700 font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              {t.header.nav.products}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 ${
                  isProduitsActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>

            <button
              onClick={() => handleNavClick('diagnostic')}
              className={`py-1 flex items-center gap-1.5 relative group transition-colors ${
                isDiagnosticActive
                  ? 'text-purple-700 font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              <Sparkles
                className={`w-3.5 h-3.5 transition-colors ${
                  isDiagnosticActive
                    ? 'text-purple-600'
                    : 'text-stone-400 group-hover:text-purple-500'
                }`}
              />
              {t.header.nav.quiz}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 ${
                  isDiagnosticActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>

            <button
              onClick={() => handleNavClick('histoire')}
              className={`py-1 relative group transition-colors ${
                isHistoireActive
                  ? 'text-purple-700 font-semibold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              {t.header.nav.story}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 ${
                  isHistoireActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          </nav>

          {/* Language Selector + WhatsApp + CTA Button (Desktop >= 768px) */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Language Selector */}
            <LanguageSelector variant="header" />

            {/* WhatsApp Direct Contact Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-xs font-semibold hover:bg-emerald-100 hover:border-emerald-300 hover:text-emerald-800 transition-all duration-200 shadow-2xs group"
              title={t.header.whatsappAria}
              aria-label={t.header.whatsappAria}
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600 group-hover:scale-110 transition-transform" />
              <span>{t.header.whatsappButton}</span>
            </a>

            {/* Phone Callback CTA Button */}
            <button
              onClick={() => onOpenCallback()}
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-stone-900 to-stone-800 text-white text-xs font-semibold px-5 py-2.5 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <PhoneCall className="w-3.5 h-3.5 relative z-10 text-pink-300 group-hover:text-white transition-colors" />
              <span className="relative z-10">{t.header.callbackButton}</span>
            </button>
          </div>

          {/* Mobile menu toggle & quick actions (< 768px) */}
          <div className="flex md:hidden items-center gap-2.5 sm:gap-3">
            <LanguageSelector variant="compact" />
            <button
              onClick={() => onOpenCallback()}
              className="w-[44px] h-[44px] min-w-[44px] min-h-[44px] bg-stone-900 text-white rounded-full text-xs flex items-center justify-center shadow-xs hover:bg-stone-800 active:scale-95 transition-all shrink-0"
              title={t.header.callbackButton}
              aria-label={t.header.callbackButton}
            >
              <PhoneCall className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-[44px] h-[44px] min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-800 rounded-xl hover:bg-stone-100 active:scale-95 transition-all shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-[#faf8f6] via-[#fdf7f9] to-[#f6f2fb] border-b border-stone-200/90 px-4.5 pt-4 pb-5 space-y-4 shadow-xl animate-fadeIn">
            {/* Products & Exploration Group */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 px-1">
                {t.header.mobile.productsCategory || 'PRODUITS'}
              </span>
              <nav className="flex flex-col font-medium text-stone-800 bg-white/70 rounded-2xl border border-stone-200/70 p-2 shadow-2xs divide-y divide-stone-100">
                <button
                  onClick={() => handleNavClick('produits')}
                  className={`text-left px-3 py-2.5 text-base font-serif transition-colors rounded-xl ${
                    isProduitsActive
                      ? 'text-purple-900 font-semibold bg-purple-100/70'
                      : 'text-stone-900 hover:text-stone-950'
                  }`}
                >
                  {t.header.mobile.products}
                </button>
                <button
                  onClick={() => handleNavClick('diagnostic')}
                  className={`text-left px-3 py-2.5 text-base font-serif flex items-center justify-between transition-colors rounded-xl ${
                    isDiagnosticActive
                      ? 'text-purple-900 font-semibold bg-purple-100/70'
                      : 'text-stone-900 hover:text-purple-950'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles
                      className={`w-4 h-4 ${
                        isDiagnosticActive ? 'text-purple-700' : 'text-purple-600'
                      }`}
                    />
                    {t.header.mobile.diagnostic}
                  </span>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider bg-purple-100/80 text-purple-900 px-2 py-0.5 rounded-full">
                    1 min
                  </span>
                </button>
                <button
                  onClick={() => handleNavClick('histoire')}
                  className={`text-left px-3 py-2.5 text-base font-serif transition-colors rounded-xl ${
                    isHistoireActive
                      ? 'text-purple-900 font-semibold bg-purple-100/70'
                      : 'text-stone-900 hover:text-stone-950'
                  }`}
                >
                  {t.header.mobile.story}
                </button>
              </nav>
            </div>

            {/* Action Button (Call Request) */}
            <div className="pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallback();
                }}
                className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99] transition-all text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                {t.header.mobile.callbackButton}
              </button>
            </div>

            {/* Bottom Social Links Bar */}
            <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between px-1 text-xs text-stone-500">
              <span className="font-sans text-[11px] text-stone-600">Suivez Molita</span>
              <div className="flex items-center gap-2">
                <span
                  className="w-7 h-7 rounded-full bg-white/80 border border-stone-200 text-stone-600 hover:text-pink-600 hover:border-pink-300 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </span>
                <span
                  className="w-7 h-7 rounded-full bg-white/80 border border-stone-200 text-stone-600 hover:text-blue-600 hover:border-blue-300 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </span>
                <span
                  className="w-7 h-7 rounded-full bg-white/80 border border-stone-200 text-stone-600 hover:text-indigo-600 hover:border-indigo-300 transition-colors flex items-center justify-center cursor-pointer shadow-2xs"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
