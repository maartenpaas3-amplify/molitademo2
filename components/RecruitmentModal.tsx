import React, { useState, useEffect } from 'react';
import { X, UserPlus, ChevronRight, ArrowRight } from 'lucide-react';
import teamImg from '../assets/images/team_foto_1786653999226.jpg';

// Set to true only during development/testing; false ensures popup shows only once per session
const DISABLE_SESSION_CHECK = false;

interface RecruitmentModalProps {
  onNavigateTo: (sectionId: string) => void;
}

export const RecruitmentModal: React.FC<RecruitmentModalProps> = ({ onNavigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if modal was already dismissed in the current session (unless test mode is active)
    if (!DISABLE_SESSION_CHECK) {
      const isDismissed = sessionStorage.getItem('molita_recruitment_modal_dismissed');
      if (isDismissed) {
        return;
      }
    }

    // Auto-display after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (!DISABLE_SESSION_CHECK) {
      sessionStorage.setItem('molita_recruitment_modal_dismissed', 'true');
    }
    setIsOpen(false);
  };

  const handleAction = () => {
    if (!DISABLE_SESSION_CHECK) {
      sessionStorage.setItem('molita_recruitment_modal_dismissed', 'true');
    }
    setIsOpen(false);
    onNavigateTo('recrutement');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="relative w-[88%] sm:w-full sm:max-w-lg bg-[#151419] text-stone-100 rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-950/60 my-auto transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Gradient Line */}
        <div className="h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 w-full" />

        {/* Close Button (X) - High contrast dark disc with pure white icon */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all cursor-pointer border border-white/20 shadow-md flex items-center justify-center"
          aria-label="Fermer"
        >
          <X className="w-4 h-4 text-white stroke-[2.5]" />
        </button>

        {/* Header Image */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-stone-900">
          <img
            src={teamImg}
            alt="Équipe Télévente Molita"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151419] via-[#151419]/40 to-transparent" />

          {/* Badge Overlay on Image */}
          <div className="absolute bottom-3 left-4 sm:left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 backdrop-blur-md text-purple-200 text-xs font-semibold uppercase tracking-wider">
            <UserPlus className="w-3.5 h-3.5 text-pink-400" />
            <span>Recrutement Télévente Suisse 🇨🇭</span>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-7 space-y-4 text-center sm:text-left">
          {/* Main Title */}
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight leading-tight">
            Rejoignez notre équipe de téléconseillers
          </h3>

          {/* Subtext */}
          <p className="font-sans text-stone-300 text-xs sm:text-sm leading-relaxed">
            Vous parlez français, allemand ou italien ? Molita recrute au Maroc et en Europe pour sa force de vente Suisse en télétravail.
          </p>

          {/* Language Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
            <div className="px-3 py-1.5 rounded-xl bg-stone-900/90 border border-stone-800 text-xs text-stone-200 flex items-center gap-1.5">
              <span>🇫🇷</span>
              <span className="font-medium">Français</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-stone-900/90 border border-stone-800 text-xs text-stone-200 flex items-center gap-1.5">
              <span>🇩🇪</span>
              <span className="font-medium">Deutsch</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-stone-900/90 border border-stone-800 text-xs text-stone-200 flex items-center gap-1.5">
              <span>🇮🇹</span>
              <span className="font-medium">Italiano</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 space-y-2.5">
            <button
              onClick={handleAction}
              className="group w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-stone-100 via-white to-stone-200 hover:from-white hover:to-white text-stone-950 font-semibold text-sm shadow-lg hover:shadow-xl active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-white"
            >
              <span>Découvrir les postes</span>
              <ArrowRight className="w-4 h-4 text-purple-900 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleClose}
              className="w-full py-2 text-xs font-sans text-stone-400 hover:text-stone-200 transition-colors cursor-pointer text-center block"
            >
              Continuer vers la boutique
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
