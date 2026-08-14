import React from 'react';
import { Star, ShieldCheck, Quote, Users } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { TrustBadge } from './TrustBadge';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="avis" className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative font-sans">
      {/* Subtle organic light backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-purple-100/30 via-pink-100/30 to-amber-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200/80 text-purple-900 text-xs font-semibold tracking-wide uppercase">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
          {t.testimonials.badge}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight">
          {t.testimonials.title}
        </h2>
        <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
          {t.testimonials.subtitle}
        </p>
      </div>

      {/* 3 Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {t.testimonials.reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-7 border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
          >
            {/* Top Row: Stars + Quote icon */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-stone-200'
                      }`}
                    />
                  ))}
                  <span className="ml-1.5 text-xs font-semibold text-stone-700">
                    {review.rating}.0/5
                  </span>
                </div>
                <Quote className="w-6 h-6 text-stone-200 group-hover:text-purple-200 transition-colors" />
              </div>

              {/* Review Text */}
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-6">
                « {review.text} »
              </p>
            </div>

            {/* Author details */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-stone-900 text-white font-semibold flex items-center justify-center text-xs shadow-2xs">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <span className="font-semibold text-stone-900 block">
                    {review.name}
                  </span>
                  <span className="text-stone-500">{review.city}, Suisse 🇨🇭</span>
                </div>
              </div>
              <TrustBadge size="compact" icon={ShieldCheck} title="Vérifié" />
            </div>
          </div>
        ))}
      </div>

      {/* Trust & Satisfaction Banner */}
      <div className="mt-8 sm:mt-10 max-w-xl mx-auto flex justify-center">
        <TrustBadge
          size="compact"
          icon={Users}
          title={t.testimonials.banner}
        />
      </div>
    </section>
  );
};

