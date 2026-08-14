import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, Award } from 'lucide-react';
import teamPhoto from '../assets/images/team_foto_1786653999226.jpg';

export const StorySection: React.FC = () => {
  return (
    <section id="histoire" className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Soft Blob */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-amber-100/50 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Asymmetric Header + Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Asymmetric Layered Imagery Visual */}
        <div className="lg:col-span-6 relative">
          {/* Main Card Element */}
          <div className="relative z-10 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-stone-200/80 space-y-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md border-2 border-stone-100 shrink-0">
              <img
                src={teamPhoto}
                alt="Équipe Fondatrice Molita"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <blockquote className="font-serif text-xl sm:text-2xl text-stone-900 font-light leading-snug italic">
              "Nous avons créé Molita avec une conviction simple : prendre soin de soi ne doit plus jamais être une contrainte médicale, mais une parenthèse gourmande et hautement efficace."
            </blockquote>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-200 shadow-2xs shrink-0">
                <img
                  src={teamPhoto}
                  alt="Équipe Fondatrice Molita"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="font-semibold text-stone-900 text-sm block">Équipe Fondatrice Molita</span>
                <span className="text-xs text-stone-500">Genève, Suisse</span>
              </div>
            </div>
          </div>

          {/* Overlapping Staggered Secondary Card */}
          <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 bg-stone-900 text-white p-6 rounded-2xl shadow-2xl max-w-xs border border-stone-800 hidden sm:block transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              Savoir-faire Suisse
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Formulations développées en Suisse, testées en laboratoires indépendants pour garantir la biodisponibilité maximale de chaque vitamine.
            </p>
          </div>

          {/* Decorative Floating Circle */}
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-pink-400 to-rose-500 opacity-20 blur-xl pointer-events-none" />
        </div>

        {/* Right Column: Brand Story Content */}
        <div className="lg:col-span-6 space-y-6 lg:pl-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/70 text-stone-800 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            Notre Philosophie
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-900 tracking-tight leading-tight">
            L'Alliance de la Science Suisse et du Végétal
          </h2>

          <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed">
            Chez <strong className="text-stone-900 font-semibold">Molita</strong>, nous réinventons le rituel beauté et bien-être au quotidien. Fini les routines contraignantes et austères.
          </p>

          <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed">
            Nos gummies nutricosmétiques et de bien-être sont élaborées à partir de <strong className="text-stone-900">pectine de fruits 100% végétale</strong> (sans gélatine animale), enrichies en extraits botaniques titrés (Ginkgo Biloba, Guarana, Rhodiola, Aubépine) et en actifs synergiques hautement assimilables.
          </p>

          {/* Key Value Points */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-stone-900 text-sm">Qualité Sans Concession</h4>
                <p className="text-xs text-stone-500 mt-0.5">Sans gluten, sans arômes synthétiques, sans OGM.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-stone-900 text-sm">Écoute & Relation Humaine</h4>
                <p className="text-xs text-stone-500 mt-0.5">Un suivi téléphonique personnalisé avant et après votre cure.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
