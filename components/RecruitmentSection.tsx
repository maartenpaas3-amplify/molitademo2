import React, { useState } from 'react';
import { JobApplication } from '../types';
import { UserPlus, Globe2, Send, CheckCircle2, Briefcase, Award, Quote } from 'lucide-react';

export const RecruitmentSection: React.FC = () => {
  const [formData, setFormData] = useState<JobApplication>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    languages: ['fr'],
    experienceYears: '1-3',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [langError, setLangError] = useState(false);

  const availableLanguages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch / Schwyzerdütsch', flag: '🇩🇪' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  const handleLanguageToggle = (code: string) => {
    if (formData.languages.includes(code)) {
      const updated = formData.languages.filter((l) => l !== code);
      setFormData({
        ...formData,
        languages: updated,
      });
      if (updated.length > 0) {
        setLangError(false);
      }
    } else {
      const updated = [...formData.languages, code];
      setFormData({
        ...formData,
        languages: updated,
      });
      setLangError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.languages.length === 0) {
      setLangError(true);
      return;
    }
    setLangError(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="recrutement" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Neutral Deep Obsidian Contrast Block */}
      <div className="bg-[#17171a] text-stone-100 rounded-3xl p-6 sm:p-12 lg:p-16 border border-stone-800/80 shadow-2xl relative overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left Column: Job Overview & Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-xs font-semibold uppercase tracking-wider">
              <UserPlus className="w-3.5 h-3.5 text-stone-400" />
              Recrutement Télévente & Conseil Suisse
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-100 tracking-tight leading-tight">
              Rejoignez notre équipe de téléconseillers
            </h2>

            <p className="text-stone-300 font-sans text-base sm:text-lg leading-relaxed">
              Molita développe sa force de vente dédiée au marché suisse. Nous recrutons des conseillers commerciaux passionnés, d'origine marocaine, basés au Maroc ou ailleurs en Europe, pour accompagner notre clientèle exigeante en Suisse en télétravail.
            </p>

            {/* Language Cards Requirement - Matching Features style */}
            <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-3">
              <span className="text-xs font-semibold uppercase text-stone-400 tracking-wider flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-stone-400" />
                Langues recherchées pour le marché suisse
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 text-xs flex items-center gap-2 shadow-2xs">
                  <span className="text-sm">🇫🇷</span>
                  <div>
                    <span className="font-semibold text-stone-200 block">Français</span>
                    <span className="text-[10px] text-stone-400">Courant / Maternel</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 text-xs flex items-center gap-2 shadow-2xs">
                  <span className="text-sm">🇩🇪</span>
                  <div>
                    <span className="font-semibold text-stone-200 block">Deutsch</span>
                    <span className="text-[10px] text-stone-400">Schwyzerdütsch</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 text-xs flex items-center gap-2 shadow-2xs">
                  <span className="text-sm">🇮🇹</span>
                  <div>
                    <span className="font-semibold text-stone-200 block">Italiano</span>
                    <span className="text-[10px] text-stone-400">Avancé / Courant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 text-xs space-y-1">
                <span className="font-semibold text-stone-200 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-stone-400" />
                  Rémunération Attractive
                </span>
                <p className="text-stone-400 leading-relaxed">Fixe motivant + primes de vente non plafonnées basées sur le chiffre réalisé en Suisse.</p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800 text-xs space-y-1">
                <span className="font-semibold text-stone-200 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-stone-400" />
                  Formation Continue
                </span>
                <p className="text-stone-400 leading-relaxed">Formation complète aux produits Molita, aux techniques de vente suisses et à la nutrithérapie.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Application Form */}
          <div className="lg:col-span-6 bg-stone-900/90 rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-800/80">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-white">
                  Candidature bien reçue !
                </h3>
                <p className="text-stone-300 text-sm max-w-sm mx-auto">
                  Merci <strong className="text-white">{formData.fullName}</strong>. Notre responsable recrutement examinera votre profil sous 48h et vous recontactera par téléphone.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full bg-stone-800 text-xs font-semibold text-stone-300 hover:text-white transition-colors"
                >
                  Envoyer une autre candidature
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="pb-2 border-b border-stone-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-normal text-white">
                      Postuler en 2 minutes
                    </h3>
                    <span className="text-[11px] text-stone-400">Équipe Télévente Suisse</span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Les champs marqués (optionnel) peuvent être complétés plus tard lors de notre appel.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Youssef Bennani"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-stone-500 transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="youssef@exemple.ma"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-stone-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Téléphone (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+212 6... / +33 6..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-stone-500 transition-colors"
                    />
                  </div>
                </div>

                {/* City & Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Ville / Pays de résidence (optionnel)
                    </label>
                    <input
                      type="text"
                      placeholder="ex. Casablanca, Paris, Genève, Lyon..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-stone-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Expérience en télévente (optionnel)
                    </label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-stone-500 transition-colors"
                    >
                      <option value="0">Débutant (Formation offerte)</option>
                      <option value="1-3">1 à 3 ans</option>
                      <option value="3+">Plus de 3 ans</option>
                    </select>
                  </div>
                </div>

                {/* Languages Selection */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-medium text-stone-300">
                      Langues maîtrisées * (au moins une case cochée)
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {availableLanguages.map((lang) => {
                      const selected = formData.languages.includes(lang.code);
                      return (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => handleLanguageToggle(lang.code)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all border ${
                            selected
                              ? 'bg-stone-100 border-stone-100 text-stone-900 font-semibold shadow-xs'
                              : 'bg-stone-800 border-stone-700 text-stone-400 hover:border-stone-600'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  {langError && (
                    <p className="text-xs text-rose-400 mt-1.5 animate-fadeIn">
                      Veuillez cocher au moins une langue maîtrisée pour postuler.
                    </p>
                  )}
                </div>

                {/* Short Message / CV Link */}
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Présentation rapide ou lien CV / LinkedIn (optionnel)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Parlez-nous brièvement de votre parcours ou collez un lien vers votre CV..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-stone-500 transition-colors"
                  />
                </div>

                {/* Submit Button - Standard Site CTA styling */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-stone-100 hover:bg-white text-stone-900 font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
                >
                  {loading ? (
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-stone-900 border-t-transparent" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-stone-800" />
                      Envoyer ma candidature
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Testimonial Section - Same visual style as homepage founder testimonial */}
      <div className="mt-10 sm:mt-14 max-w-4xl mx-auto relative">
        {/* Soft decorative background glow */}
        <div className="absolute -top-6 -right-6 w-36 h-36 bg-purple-200/40 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-stone-200/80 space-y-6 relative overflow-hidden">
          {/* Top Gradient Badge */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md">
            <Quote className="w-6 h-6 fill-white/20 text-white" />
          </div>

          {/* Italic Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl text-stone-900 font-light leading-relaxed sm:leading-snug italic">
            "Je travaille depuis Casablanca pour des clients suisses. L'équilibre entre flexibilité, formation continue et rémunération non plafonnée est exactement ce que je cherchais après des années en centre d'appel classique."
          </blockquote>

          {/* Author Info with Round Initial Avatar */}
          <div className="flex items-center gap-3.5 pt-2">
            <div className="w-11 h-11 rounded-full bg-stone-200 overflow-hidden flex items-center justify-center font-serif font-bold text-stone-700 text-sm shrink-0 border border-stone-300/80">
              A.T.
            </div>
            <div>
              <span className="font-semibold text-stone-900 text-sm sm:text-base block">Amina T.</span>
              <span className="text-xs sm:text-sm text-stone-500">Téléconseillère Molita, depuis 8 mois</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

