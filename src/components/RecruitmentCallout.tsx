import React from 'react';
import { UserPlus, ChevronRight, Briefcase } from 'lucide-react';
import teamImg from '../assets/images/team_foto_1786653999226.jpg';

interface RecruitmentCalloutProps {
  onNavigateTo: (sectionId: string) => void;
}

export const RecruitmentCallout: React.FC<RecruitmentCalloutProps> = ({ onNavigateTo }) => {
  return (
    <section id="recrutement-callout" className="w-full pt-3 sm:pt-5 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-[#17171a] text-stone-100 p-6 sm:p-10 lg:p-12 border border-stone-800/80 shadow-xl">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo: Above text on mobile (order-1), to the right of text on desktop (order-2, col-span-5) */}
          <div className="order-1 lg:order-2 lg:col-span-5 w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-700/60 shadow-xl aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full bg-stone-900 group">
              <img
                src={teamImg}
                alt="Équipe Téléconseillers Molita"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17171a]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text & Content: Below photo on mobile (order-2), left column on desktop (order-1, col-span-7) */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-400/40 text-purple-200 text-xs font-semibold uppercase tracking-wider">
              <UserPlus className="w-3.5 h-3.5 text-purple-300" />
              <span>Nous recrutons • Télévente & Conseil Suisse</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-100 tracking-tight leading-snug">
              Vous parlez allemand, français ou italien ? <br />
              <span className="text-stone-300 font-light">
                Rejoignez nos téléconseillers dédiés
              </span>
            </h2>

            <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed">
              Que vous soyez au Maroc ou en Europe, si vous parlez français, allemand ou italien couramment, ce poste est pour vous. Rémunération fixe motivante et primes non plafonnées.
            </p>

            {/* Language Badges - Designed identically to TrustBanner icon-cards */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-stone-900/80 border border-stone-800/80 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-stone-800 border border-stone-700/80 text-stone-300 flex items-center justify-center shrink-0 text-xs font-bold">
                  🇫🇷
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-stone-200">Français</span>
                  <span className="block text-[11px] text-stone-400">Courant / Maternel</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-2xl bg-stone-900/80 border border-stone-800/80 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-stone-800 border border-stone-700/80 text-stone-300 flex items-center justify-center shrink-0 text-xs font-bold">
                  🇩🇪
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-stone-200">Deutsch</span>
                  <span className="block text-[11px] text-stone-400">Schwyzerdütsch</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-2xl bg-stone-900/80 border border-stone-800/80 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-stone-800 border border-stone-700/80 text-stone-300 flex items-center justify-center shrink-0 text-xs font-bold">
                  🇮🇹
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-stone-200">Italiano</span>
                  <span className="block text-[11px] text-stone-400">Avancé / Courant</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigateTo('recrutement')}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-stone-100 hover:bg-white text-stone-900 font-semibold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer border border-stone-200"
              >
                <Briefcase className="w-4 h-4 text-stone-700" />
                <span>Découvrir les postes & Postuler</span>
                <ChevronRight className="w-4 h-4 text-stone-600 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <span className="text-xs text-stone-400 font-sans">
                Candidature en 2 min • Traitement sous 48h
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


