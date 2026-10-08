import React, { useState } from 'react';
import { ui, localizeProduct } from '../i18n/content';
import { useLanguage } from '../i18n/LanguageContext';
import { MOLITA_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, PhoneCall } from 'lucide-react';

interface InteractiveQuizProps {
  onSelectProduct: (product: Product) => void;
  onOpenCallback: (product?: Product) => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  onSelectProduct,
  onOpenCallback,
}) => {
  const { language } = useLanguage();
  const c = ui[language].quiz;
  const [step, setStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>('');
  const [timeOfDay, setTimeOfDay] = useState<string>('');
  const [secondaryNeed, setSecondaryNeed] = useState<string>('');

  const goals = [
    { id: 'memoire', label: c.goals['memoire'], icon: '🧠', targetId: 'memoire' },
    { id: 'vitalite', label: c.goals['vitalite'], icon: '⚡', targetId: 'vitalite' },
    { id: 'sommeil', label: c.goals['sommeil'], icon: '🌙', targetId: 'sommeil' },
    { id: 'cheveux', label: c.goals['cheveux-peau'], icon: '✨', targetId: 'cheveux-peau' },
    { id: 'detente', label: c.goals['detente'], icon: '🧘', targetId: 'detente' },
  ];

  const timeOptions = [
    { id: 'matin', label: c.times[0] },
    { id: 'journee', label: c.times[1] },
    { id: 'soir', label: c.times[2] },
  ];

  const handleGoalSelect = (goalId: string) => {
    setGoal(goalId);
    setStep(2);
  };

  const handleTimeSelect = (timeId: string) => {
    setTimeOfDay(timeId);
    setStep(3);
  };

  const getRecommendedProducts = (): Product[] => {
    const primary = MOLITA_PRODUCTS.find((p) => p.id === goal) || MOLITA_PRODUCTS[0];
    
    // Pick complementary product
    let secondaryId = 'vitalite';
    if (goal === 'sommeil') secondaryId = 'detente';
    else if (goal === 'memoire') secondaryId = 'vitalite';
    else if (goal === 'vitalite') secondaryId = 'memoire';
    else if (goal === 'cheveux-peau') secondaryId = 'vitalite';
    else if (goal === 'detente') secondaryId = 'sommeil';

    const secondary = MOLITA_PRODUCTS.find((p) => p.id === secondaryId) || MOLITA_PRODUCTS[1];
    return [primary, secondary];
  };

  const resetQuiz = () => {
    setStep(1);
    setGoal('');
    setTimeOfDay('');
    setSecondaryNeed('');
  };

  const recommendations = step === 3 ? getRecommendedProducts() : [];

  return (
    <section id="diagnostic" className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-stone-900 via-purple-950 to-stone-900 text-white rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden border border-purple-800/30">
        {/* Glow Accent Spots */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4 mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-900/80 border border-purple-700/50 text-purple-200 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            {c.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-white tracking-tight">
            {c.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-sans">
            {c.subtitle}
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="relative z-10 max-w-md mx-auto mb-8 sm:mb-10 flex items-center justify-between text-xs font-medium text-stone-400">
          <span className={step >= 1 ? 'text-pink-400 font-semibold' : ''}>{c.steps[0]}</span>
          <div className={`h-0.5 flex-1 mx-3 ${step >= 2 ? 'bg-pink-500' : 'bg-stone-800'}`} />
          <span className={step >= 2 ? 'text-pink-400 font-semibold' : ''}>{c.steps[1]}</span>
          <div className={`h-0.5 flex-1 mx-3 ${step >= 3 ? 'bg-pink-500' : 'bg-stone-800'}`} />
          <span className={step === 3 ? 'text-pink-400 font-semibold' : ''}>{c.steps[2]}</span>
        </div>

        {/* Step 1: Goal */}
        {step === 1 && (
          <div className="relative z-10 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
            {goals.map((g) => (
              <button
                key={g.id}
                onClick={() => handleGoalSelect(g.targetId)}
                className="p-5 rounded-2xl bg-stone-800/80 border border-stone-700/80 hover:border-pink-500/80 hover:bg-stone-800 text-left transition-all flex items-center gap-4 group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{g.icon}</span>
                <span className="font-medium text-sm text-stone-100 group-hover:text-pink-300 transition-colors">
                  {g.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Step 2: Time of Day */}
        {step === 2 && (
          <div className="relative z-10 max-w-xl mx-auto space-y-4 animate-fadeIn">
            <h3 className="text-center text-lg font-serif text-stone-200 mb-6">
              {c.q2}
            </h3>
            {timeOptions.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTimeSelect(t.id)}
                className="w-full p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 hover:border-pink-500/80 hover:bg-stone-800 text-center text-sm font-medium text-stone-100 transition-all"
              >
                {t.label}
              </button>
            ))}
          </div>
        )}

        {/* Step 3: Recommendation Results */}
        {step === 3 && (
          <div className="relative z-10 max-w-3xl mx-auto space-y-8 animate-fadeIn">
            <div className="text-center space-y-2">
              <h3 className="font-serif text-2xl text-pink-300">
                {c.resultTitle}
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm">
                {c.resultSub}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recommendations.map((baseProd, idx) => {
                const prod = localizeProduct(baseProd, language);
                return (
                <div
                  key={prod.id}
                  className="bg-stone-800/90 rounded-2xl p-6 border border-stone-700 flex flex-col justify-between text-left space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full shrink-0 ${prod.flyerCircleClass} p-1 flex items-center justify-center shadow-md overflow-hidden border border-white/20`}
                    >
                      <img
                        src={prod.imageUrl}
                        alt={prod.name}
                        className="w-full h-full object-contain drop-shadow-xs"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 font-semibold uppercase">
                        {idx === 0 ? c.main : c.duo}
                      </span>
                      <h4 className="font-serif text-lg font-semibold text-white">
                        {prod.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-stone-300 italic">
                    "{prod.description}"
                  </p>

                  <div className="pt-2 border-t border-stone-700/60 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProduct(baseProd)}
                      className="text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      {c.more}
                    </button>
                    <button
                      onClick={() => onSelectProduct(baseProd)}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white shadow-xs hover:scale-105 transition-all"
                      style={{ backgroundColor: prod.accentHex }}
                    >
                      {c.discover}
                    </button>
                  </div>
                </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenCallback(recommendations[0])}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm shadow-lg hover:shadow-pink-500/20 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                {c.cta}
              </button>

              <button
                onClick={resetQuiz}
                className="text-xs text-stone-400 hover:text-white transition-colors flex items-center gap-1 py-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {c.retry}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
