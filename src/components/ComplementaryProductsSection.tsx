import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ComplementaryProductsSectionProps {
  onOpenCallback?: (productId?: string) => void;
}

interface ProductItemConfig {
  id: string;
  accentHex: string;
  badgeBg: string;
  flyerCircleClass: string;
  shadowColor: string;
  imageUrl: string;
}

const COMPLEMENTARY_CONFIGS: Record<string, ProductItemConfig> = {
  'gelee-royale': {
    id: 'gelee-royale',
    accentHex: '#d97706', // Miel & Ambre doux
    badgeBg: 'bg-amber-100 text-amber-700',
    flyerCircleClass: 'bg-gradient-to-b from-white via-amber-50/60 to-white border border-amber-200/70',
    shadowColor: '#d9770625',
    imageUrl: 'https://i.ibb.co/pBb8gthc/molitageleeroyale.webp',
  },
  'omega-3': {
    id: 'omega-3',
    accentHex: '#0284c7', // Bleu Océan Pur
    badgeBg: 'bg-sky-100 text-sky-700',
    flyerCircleClass: 'bg-gradient-to-b from-white via-sky-50/60 to-white border border-sky-200/70',
    shadowColor: '#0284c725',
    imageUrl: 'https://i.ibb.co/dssDqhZM/molitaomega3.webp',
  },
  'creme-argan': {
    id: 'creme-argan',
    accentHex: '#c2410c', // Argan & Terracotta Doux
    badgeBg: 'bg-orange-100 text-orange-700',
    flyerCircleClass: 'bg-gradient-to-b from-white via-orange-50/60 to-white border border-orange-200/70',
    shadowColor: '#c2410c25',
    imageUrl: 'https://i.ibb.co/N676KWD4/molitageleearganoil.webp',
  },
};

export const ComplementaryProductsSection: React.FC<ComplementaryProductsSectionProps> = ({
  onOpenCallback,
}) => {
  const { t } = useLanguage();

  return (
    <section id="soins-complementaires" className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative font-sans">
      {/* Subtle organic light backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-amber-100/30 via-stone-100/40 to-yellow-100/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          {t.complementary.badge}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-900 tracking-tight">
          {t.complementary.title}
        </h2>
        <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
          {t.complementary.subtitle}
        </p>
      </div>

      {/* 3 Complementary Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.complementary.products.map((item) => {
          const config = COMPLEMENTARY_CONFIGS[item.id] || COMPLEMENTARY_CONFIGS['gelee-royale'];

          return (
            <div
              key={item.id}
              onClick={() => onOpenCallback && onOpenCallback(item.id)}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Color Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ backgroundColor: config.accentHex }}
              />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${config.badgeBg}`}>
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-stone-500" />
                    Qualité Suisse
                  </span>
                </div>

                {/* Circle-in-Circle Flyer Style Centerpiece with Photo */}
                <div className="flex justify-center my-6">
                  <div
                    className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full p-2.5 bg-stone-50/80 border border-stone-200/80 shadow-md group-hover:shadow-xl transition-all duration-500 flex items-center justify-center overflow-hidden"
                    style={{
                      boxShadow: `0 15px 35px -10px ${config.shadowColor}`,
                    }}
                  >
                    {/* Inner Circle Flyer Gradient / Light Background */}
                    <div className={`w-full h-full rounded-full ${config.flyerCircleClass} flex items-center justify-center relative overflow-hidden shadow-inner p-2`}>
                      {/* Inner highlight overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-full pointer-events-none" />

                      {/* Product Image */}
                      <img
                        src={config.imageUrl}
                        alt={item.name}
                        className="relative z-10 w-full h-full object-cover rounded-full drop-shadow-md group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 ease-out"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {/* Product Title & Short Tagline */}
                <div className="text-center space-y-2 mb-4">
                  <h3 className="font-serif text-2xl font-normal text-stone-900 group-hover:text-purple-900 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-stone-600 leading-relaxed italic">
                    « {item.tagline} »
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-5 border-t border-stone-100 flex items-center justify-between gap-3 mt-4">
                <span className="text-xs font-medium text-stone-500">
                  {item.subName}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenCallback) {
                      onOpenCallback(item.id);
                    }
                  }}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-white transition-all shadow-xs hover:shadow-md hover:scale-105 flex items-center gap-1.5 cursor-pointer"
                  style={{
                    backgroundColor: config.accentHex,
                  }}
                >
                  {t.complementary.discoverButton}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Reassurance Banner */}
      <div className="mt-8 sm:mt-10 max-w-2xl mx-auto p-4 rounded-2xl bg-stone-50/80 border border-stone-200 text-center flex items-center justify-center gap-2.5 text-xs sm:text-sm text-stone-600">
        <HeartHandshake className="w-4 h-4 text-amber-600 shrink-0" />
        <span>
          Nos conseillers vous accompagnent pour associer vos formules gummies et soins complémentaires.
        </span>
      </div>
    </section>
  );
};
