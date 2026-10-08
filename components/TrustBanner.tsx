import React from 'react';
import { Award, Leaf, Sparkles, Sun } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { TrustBadge } from './TrustBadge';

const icons = [Award, Leaf, Sparkles, Sun];

export const TrustBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="confiance" className="w-full bg-[#17171a] text-stone-100 py-8 sm:py-10 border-t border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-center text-lg sm:text-xl text-stone-200 font-normal mb-5 sm:mb-6">
          {t.trustBanner.title}
        </h2>
        {/* Balanced 2x2 Grid on Mobile, 4-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {t.trustBanner.items.map((item, idx) => (
            <TrustBadge
              key={idx}
              id={`trust-badge-${idx}`}
              size="large"
              icon={icons[idx]}
              title={item.title}
              subtitle={item.sub}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

