import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  MessageCircle,
  PhoneCall,
  Stethoscope,
  Clock,
  Headphones,
  Package,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { WHATSAPP_URL } from '../config';

interface FAQSectionProps {
  onOpenCallback?: () => void;
}

// Semantic icons mapped precisely to each FAQ question topic:
// 1. Compatibilité traitement médical → Croix/Stéthoscope (Stethoscope)
// 2. Durée de la cure → Horloge (Clock)
// 3. Produit ne convient pas / Service client → Service client / Support (Headphones)
// 4. Livraison → Colis (Package)
// 5. Fabrication en Suisse → Bouclier/Qualité (ShieldCheck)
// 6. Combinaison de formules → Étincelles (Sparkles)
const FAQ_QUESTION_ICONS = [
  Stethoscope,
  Clock,
  Headphones,
  Package,
  ShieldCheck,
  Sparkles,
];

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenCallback }) => {
  const { t } = useLanguage();
  // Store open state for each item (first item open by default for discoverability)
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative font-sans">
      {/* Dynamic multi-tone pastel gradient background blobs aligned with Hero */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-12 w-96 h-96 bg-purple-200/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute top-1/4 -right-12 w-96 h-96 bg-pink-200/20 rounded-full blur-[110px] animate-pulse-glow delay-1000" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/15 rounded-full blur-[100px] animate-pulse-glow delay-2000" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-200/15 rounded-full blur-[110px] animate-pulse-glow delay-1500" />
      </div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50/90 backdrop-blur-xs border border-purple-200/80 text-purple-900 text-xs font-semibold tracking-wide uppercase shadow-2xs">
          <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
          {t.faq.badge}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight">
          {t.faq.title}
        </h2>
        <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
          {t.faq.subtitle}
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {t.faq.items.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          const IconComponent = FAQ_QUESTION_ICONS[idx % FAQ_QUESTION_ICONS.length] || HelpCircle;

          // Subtle opacity variations of the brand purple hue for visual depth across items
          const iconBgClosed = idx % 2 === 0 ? 'bg-purple-50/80' : 'bg-purple-50/90';
          const iconBorderClosed = idx % 2 === 0 ? 'border-purple-200/60' : 'border-purple-200/80';

          return (
            <div
              key={idx}
              className={`rounded-2xl border border-l-4 transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-purple-300/90 border-l-purple-600 bg-white shadow-sm ring-1 ring-purple-500/10'
                  : 'border-stone-200/80 border-l-purple-400/60 bg-white/85 backdrop-blur-xs hover:bg-white hover:border-stone-300 hover:border-l-purple-500 hover:shadow-2xs'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
                className="w-full py-4 sm:py-5 px-5 sm:px-7 flex items-center justify-between text-left gap-3.5 sm:gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-700 focus-visible:ring-offset-2 rounded-2xl"
              >
                {/* Question Icon + Text */}
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 border shadow-2xs transition-all duration-300 ${
                      isOpen
                        ? 'bg-purple-100 text-purple-900 border-purple-300 scale-105 shadow-xs'
                        : `${iconBgClosed} text-purple-700 ${iconBorderClosed}`
                    }`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-medium text-stone-900 text-sm sm:text-base lg:text-lg leading-snug">
                    {item.question}
                  </span>
                </div>

                {/* Chevron indicator */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-purple-900 text-white rotate-180 shadow-2xs' : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Accordion Content with smooth expand + fade & translation animation */}
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`px-5 sm:px-7 pb-5 sm:pb-6 pt-2 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-purple-100/60 transition-all duration-300 ease-out transform ${
                      isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                    }`}
                  >
                    <div className="pl-0 sm:pl-13">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Direct Contact Assistance Strip with Molita brand gradient & border */}
      <div className="mt-8 sm:mt-10 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white via-purple-50/40 to-pink-50/40 border border-purple-200/70 shadow-xs backdrop-blur-xs text-center flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
        {/* Subtle accent corner flare */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-200/20 via-purple-200/20 to-transparent rounded-full blur-xl pointer-events-none" />

        <div className="text-left relative z-10">
          <h3 className="font-semibold text-stone-900 text-sm sm:text-base">
            Vous avez une autre question spécifique ?
          </h3>
          <p className="text-xs sm:text-sm text-stone-500">
            Nos conseillers en Suisse vous répondent avec bienveillance.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-emerald-600 transition-colors shadow-2xs hover:scale-105 active:scale-95 duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            WhatsApp
          </a>
          {onOpenCallback && (
            <button
              type="button"
              onClick={onOpenCallback}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors shadow-2xs hover:scale-105 active:scale-95 duration-200"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              Être rappelé
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

