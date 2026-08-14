import React, { useState, useEffect } from 'react';
import { MOLITA_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { ArrowDown, Sparkles, ChevronRight, PhoneCall } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroProps {
  onSelectProduct: (product: Product) => void;
  onNavigateTo: (sectionId: string) => void;
  onOpenCallback: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectProduct,
  onNavigateTo,
  onOpenCallback,
}) => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [mobileProductIndex, setMobileProductIndex] = useState(0);
  const [isFadeVisible, setIsFadeVisible] = useState(true);
  const { t } = useLanguage();

  // Auto-rotate featured product on mobile every 3.5 seconds with smooth fade + scale transition
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFadeVisible(false);
      setTimeout(() => {
        setMobileProductIndex((prev) => (prev + 1) % MOLITA_PRODUCTS.length);
        setIsFadeVisible(true);
      }, 250);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const currentMobileProduct = MOLITA_PRODUCTS[mobileProductIndex];

  // Position coordinates for the 5 floating gummies asymmetrically across the hero (desktop)
  const floatingItems = [
    {
      product: MOLITA_PRODUCTS[0], // Mémoire - Pink
      pos: 'top-[16%] left-[4%] sm:left-[8%] lg:left-[10%]',
      anim: 'animate-float-slow',
      size: 'w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36',
      badgePos: 'top-full mt-2 left-0',
    },
    {
      product: MOLITA_PRODUCTS[1], // Vitalité - Orange
      pos: 'top-[18%] right-[5%] sm:right-[10%] lg:right-[12%]',
      anim: 'animate-float-medium',
      size: 'w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40',
      badgePos: 'top-full mt-2 right-0',
    },
    {
      product: MOLITA_PRODUCTS[2], // Sommeil - Blue
      pos: 'bottom-[22%] left-[6%] sm:left-[12%] lg:left-[15%]',
      anim: 'animate-float-fast',
      size: 'w-26 h-26 sm:w-30 sm:h-30 lg:w-36 lg:h-36',
      badgePos: 'bottom-full mb-2 left-0',
    },
    {
      product: MOLITA_PRODUCTS[3], // Cheveux & Peau - Green
      pos: 'bottom-[24%] right-[4%] sm:right-[12%] lg:right-[14%]',
      anim: 'animate-float-slow',
      size: 'w-28 h-28 sm:w-32 sm:h-32 lg:w-38 lg:h-38',
      badgePos: 'bottom-full mb-2 right-0',
    },
    {
      product: MOLITA_PRODUCTS[4], // Détente - Cyan
      pos: 'top-[48%] left-[2%] sm:left-[3%] lg:left-[5%] hidden md:block',
      anim: 'animate-float-medium',
      size: 'w-24 h-24 lg:w-32 lg:h-32',
      badgePos: 'top-1/2 -translate-y-1/2 left-full ml-3',
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between items-center pt-28 pb-12 sm:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#faf9f6]"
    >
      {/* Organic Background Color Spots (Blur / Gradient Blobs in Product Colors) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Mobile dynamic ambient glow changing color smoothly with featured product */}
        <div
          className="md:hidden absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-88 h-88 rounded-full filter blur-[90px] transition-all duration-1000 ease-in-out opacity-40 pointer-events-none"
          style={{
            backgroundColor: currentMobileProduct.accentHex,
          }}
        />

        {/* Desktop full gradient blobs */}
        <div className="hidden md:block absolute top-10 -left-20 w-[500px] h-[500px] bg-pink-300/25 rounded-full filter blur-[90px] animate-pulse-glow" />
        <div className="hidden md:block absolute top-20 -right-20 w-[520px] h-[520px] bg-amber-300/25 rounded-full filter blur-[100px] animate-pulse-glow delay-1000" />
        <div className="hidden md:block absolute -bottom-10 left-10 w-[480px] h-[480px] bg-blue-300/20 rounded-full filter blur-[90px] animate-pulse-glow delay-2000" />
        <div className="hidden md:block absolute -bottom-20 right-20 w-[500px] h-[500px] bg-emerald-300/20 rounded-full filter blur-[100px] animate-pulse-glow delay-1500" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-200/15 rounded-full filter blur-[120px] animate-pulse-glow delay-3000" />
      </div>

      {/* Floating Gummy Universe Objects (Hidden on Mobile < 768px to prevent text overlap) */}
      <div className="hidden md:block absolute inset-0 z-10 max-w-7xl mx-auto pointer-events-none">
        {floatingItems.map((item) => {
          const isHovered = activeHoverId === item.product.id;
          return (
            <div
              key={item.product.id}
              className={`absolute ${item.pos} ${item.anim} pointer-events-auto transition-transform duration-500 cursor-pointer group`}
              onMouseEnter={() => setActiveHoverId(item.product.id)}
              onMouseLeave={() => setActiveHoverId(null)}
              onClick={() => onSelectProduct(item.product)}
            >
              {/* Outer Glow / Soft Shadow */}
              <div
                className={`relative ${item.size} rounded-full p-2.5 bg-white/70 backdrop-blur-md shadow-xl border border-white/80 transition-all duration-300 ${
                  isHovered ? 'scale-110 shadow-2xl ring-4 ring-offset-2' : 'hover:scale-105'
                }`}
                style={{
                  boxShadow: `0 20px 40px -15px ${item.product.accentHex}40`,
                }}
              >
                {/* Circle in Circle Flyer Style with Real Bottle Photo */}
                <div
                  className={`w-full h-full rounded-full ${item.product.flyerCircleClass} p-1 flex items-center justify-center shadow-inner relative overflow-hidden`}
                >
                  {/* Subtle inner highlight overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full pointer-events-none" />

                  {/* Real Bottle Image with Soft Drop-Shadow */}
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="relative z-10 w-full h-full object-contain p-1 drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Pulse Ring */}
                <span
                  className="absolute -inset-1 rounded-full opacity-30 animate-ping pointer-events-none"
                  style={{ backgroundColor: item.product.accentHex }}
                />
              </div>

              {/* Hover Floating Product Badge */}
              <div
                className={`absolute ${
                  item.badgePos
                } z-30 min-w-[200px] max-w-[240px] bg-stone-900/90 text-white backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-stone-700/50 transition-all duration-300 pointer-events-none ${
                  isHovered
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-2 scale-95'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: item.product.accentHex }}
                  />
                  <span className="text-xs font-semibold uppercase tracking-wide text-stone-300">
                    {item.product.name}
                  </span>
                </div>
                <p className="text-xs font-serif italic text-stone-200 leading-snug">
                  "{item.product.description}"
                </p>
                <div className="mt-2 text-[10px] text-pink-300 font-semibold flex items-center gap-1">
                  Cliquer pour découvrir le produit →
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hero Center Composition (Clean Vertical Stack on Mobile) */}
      <div className="relative z-20 w-full max-w-3xl text-center my-auto flex flex-col items-center justify-center space-y-3.5 sm:space-y-8 px-2 sm:px-0">
        {/* Brand Kicker / Eyebrow Badge (Merged compact pill for mobile) */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-stone-200 shadow-xs backdrop-blur-xs text-xs font-medium text-stone-700 hover:bg-white transition-all">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-stone-900 hidden sm:inline">Molita Suisse •</span>
          <span>Nutricosmétique & Bien-être</span>
        </div>

        {/* Characterful Google Font Headline */}
        <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl font-light text-stone-900 tracking-tight leading-[1.15] sm:leading-[1.1]">
          Le bien-être, <br className="hidden sm:inline" />
          <span className="font-normal italic bg-gradient-to-r from-purple-700 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            en un geste quotidien
          </span>
        </h1>

        {/* Subtitle / Value Statement */}
        <p className="font-sans text-xs sm:text-xl text-stone-600 max-w-2xl leading-relaxed font-normal px-2 sm:px-0">
          5 formules hautement concentrées, enrichies en actifs nutricosmétiques et extraits botaniques. Conçues avec précision suisse pour sublimer votre éclat et votre bien-être au quotidien.
        </p>

        {/* Mobile Prominent Featured Bottle Showcase (Auto-Rotating every 3.5s, placed below Subtitle) */}
        <div className="md:hidden flex flex-col items-center justify-center py-1 my-0.5">
          <div
            onClick={() => onSelectProduct(currentMobileProduct)}
            className="group relative cursor-pointer flex flex-col items-center"
          >
            {/* Ambient soft glow directly behind bottle */}
            <div
              className="absolute inset-0 rounded-full filter blur-xl opacity-60 transition-colors duration-1000 ease-in-out -z-10 scale-125 pointer-events-none"
              style={{ backgroundColor: currentMobileProduct.accentHex }}
            />

            {/* Colored Flyer Backdrop Circle with Glow */}
            <div
              className="relative w-36 h-36 rounded-full p-2 bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-lg flex items-center justify-center transition-all duration-700 ease-in-out"
              style={{
                boxShadow: `0 16px 36px -10px ${currentMobileProduct.accentHex}55`,
              }}
            >
              <div
                className={`w-full h-full rounded-full ${currentMobileProduct.flyerCircleClass} p-1.5 flex items-center justify-center relative overflow-hidden shadow-inner transition-all duration-700`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full pointer-events-none" />

                {/* Featured Bottle Image with Smooth Fade & Scale transition */}
                <img
                  src={currentMobileProduct.imageUrl}
                  alt={currentMobileProduct.name}
                  className={`relative z-10 w-full h-full object-contain drop-shadow-xl transition-all duration-500 ease-out ${
                    isFadeVisible
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-1'
                  }`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Sparkle Tag */}
              <div
                className="absolute -top-1 -right-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white shadow-xs border border-white/60 transition-colors duration-500"
                style={{ backgroundColor: currentMobileProduct.accentHex }}
              >
                {t.hero.formulaOfTheMoment}
              </div>
            </div>

            {/* Product Name & Subtitle Label (Fade along with bottle - Always single-line pill) */}
            <div
              className={`mt-2.5 w-full flex justify-center transition-all duration-500 ease-out ${
                isFadeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
              }`}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-stone-200/90 shadow-2xs whitespace-nowrap max-w-[94vw] overflow-hidden">
                <span
                  className="w-2 h-2 rounded-full shrink-0 transition-colors duration-500"
                  style={{ backgroundColor: currentMobileProduct.accentHex }}
                />
                <span className="font-serif font-bold text-[11px] sm:text-xs text-stone-900 shrink-0">
                  {currentMobileProduct.name}
                </span>
                <span className="text-[10px] text-stone-400 font-sans shrink-0">•</span>
                <span className="text-[10px] sm:text-[11px] text-stone-600 font-medium font-sans truncate">
                  {currentMobileProduct.subName}
                </span>
              </div>
            </div>

            {/* 5 Indicator Dots for Carousel Progress */}
            <div className="flex items-center gap-1.5 mt-2">
              {MOLITA_PRODUCTS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFadeVisible(false);
                    setTimeout(() => {
                      setMobileProductIndex(idx);
                      setIsFadeVisible(true);
                    }, 150);
                  }}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === mobileProductIndex
                      ? 'w-5 h-2'
                      : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                  style={{
                    backgroundColor: idx === mobileProductIndex ? p.accentHex : undefined,
                  }}
                  aria-label={p.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTAs and Micro-Interactions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto pt-1">
          {/* Main Primary CTA Button */}
          <button
            onClick={() => onNavigateTo('produits')}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-stone-900 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              {t.hero.primaryCta}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Secondary Diagnostic Quiz Button */}
          <button
            onClick={() => onNavigateTo('diagnostic')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/90 border border-stone-300 text-stone-800 text-sm font-semibold hover:bg-stone-50 hover:border-stone-400 transition-all shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            {t.hero.quizCta}
          </button>
        </div>

        {/* Quick Product Chips Bar - Horizontally Scrollable on Mobile */}
        <div className="w-full max-w-full pt-2 relative">
          {/* Subtle Right Gradient Fade Overlay on Mobile to indicate scrollable content gracefully */}
          <div className="sm:hidden absolute right-0 top-2 bottom-6 w-10 bg-gradient-to-l from-[#faf9f6] via-[#faf9f6]/85 to-transparent z-10 pointer-events-none" />

          <div className="w-full overflow-x-auto no-scrollbar py-2.5 px-4 pr-12 sm:px-6 flex items-center justify-start sm:justify-center gap-2.5 flex-nowrap touch-pan-x snap-x snap-mandatory scroll-smooth">
            {MOLITA_PRODUCTS.map((p, idx) => {
              const isActiveMobile = idx === mobileProductIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setIsFadeVisible(false);
                    setTimeout(() => {
                      setMobileProductIndex(idx);
                      setIsFadeVisible(true);
                    }, 150);
                    onSelectProduct(p);
                  }}
                  className={`shrink-0 min-w-max whitespace-nowrap snap-start text-xs pl-1.5 pr-3.5 py-1.5 rounded-full bg-white/95 border text-stone-800 hover:border-stone-400 active:scale-95 transition-all flex items-center gap-2 shadow-2xs cursor-pointer ${
                    isActiveMobile
                      ? 'border-stone-800 ring-2 ring-stone-900/10 font-bold bg-white'
                      : 'border-stone-200/90'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full shrink-0 p-0.5 ${p.flyerCircleClass} flex items-center justify-center overflow-hidden shadow-xs border border-white/60`}
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-full object-contain drop-shadow-xs"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="font-semibold text-xs text-stone-800 shrink-0 whitespace-nowrap">
                    {p.name.replace('Gummies ', '')}
                  </span>
                </button>
              );
            })}
          </div>
          <span className="text-[10px] text-stone-400 sm:hidden block text-center mt-1 font-sans tracking-wide">
            {t.hero.swipeHint}
          </span>
        </div>
      </div>

      {/* Subordinate Service Link at bottom of Hero */}
      <div className="relative z-20 w-full max-w-2xl text-center mt-6 pt-4 border-t border-stone-200/50 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500">
        <button
          onClick={() => onOpenCallback()}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-stone-200 hover:bg-white text-stone-700 transition-all shadow-2xs"
        >
          <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
          <span>{t.hero.serviceLink}</span>
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-20 mt-4 animate-bounce">
        <button
          onClick={() => onNavigateTo('confiance')}
          className="p-2 text-stone-400 hover:text-stone-700 transition-colors rounded-full"
          aria-label="Défiler vers le bas"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
