import React, { useState } from 'react';
import { Product } from '../types';
import { X, CheckCircle2, Sparkles, PhoneCall, ShieldCheck, Clock, HeartHandshake } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestCallback: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestCallback,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#faf9f6] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with Product Color Accent */}
        <div
          className={`px-6 py-6 text-white flex items-center justify-between relative overflow-hidden`}
          style={{
            background: `linear-gradient(135deg, ${product.accentHex}, #1c1917)`,
          }}
        >
          {/* Subtle background blob inside modal header */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex items-center gap-4">
            {/* Real Bottle Thumbnail in Modal Header */}
            <div className={`w-14 h-14 rounded-full ${product.flyerCircleClass} p-1 shadow-md border-2 border-white/40 flex items-center justify-center overflow-hidden shrink-0`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-contain drop-shadow-sm"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xs uppercase font-sans font-semibold tracking-wider text-stone-200">
                {product.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                {product.name}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="relative z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans">
          {/* Bottle Showcase & Description Card */}
          <div className="p-5 rounded-3xl bg-white border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-center gap-6">
            {/* Centered Bottle over Colored Blob Background */}
            <div className="shrink-0 relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-2 bg-stone-50 border border-stone-200/80 shadow-md flex items-center justify-center overflow-hidden">
              <div className={`w-full h-full rounded-full ${product.flyerCircleClass} p-1.5 flex items-center justify-center relative overflow-hidden shadow-inner`}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full pointer-events-none" />
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="relative z-10 w-full h-full object-contain drop-shadow-xl"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${product.accentHex}18`, color: product.accentHex }}>
                <Sparkles className="w-3.5 h-3.5" />
                {product.subName}
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900 leading-snug">
                "{product.description}"
              </h3>
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-stone-600">
                <span><strong>Arôme:</strong> {product.taste}</span>
                <span>•</span>
                <span><strong>Format:</strong> {product.countPerBottle} gummies (Rituel 30 jours)</span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold">Qualité & Formulation Suisse</span>
              </div>
            </div>
          </div>

          {/* Key Benefits & Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefits */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200/70 shadow-xs space-y-3">
              <h4 className="font-serif text-base font-semibold text-stone-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: product.accentHex }} />
                Bénéfices Principaux
              </h4>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200/70 shadow-xs space-y-3">
              <h4 className="font-serif text-base font-semibold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                Pour qui ?
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed pt-1">
                {product.targetAudience}
              </p>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-600">
                <span className="font-semibold text-stone-800 block mb-0.5">Rituel Nutricosmétique & Bien-être</span>
                Intégrez cette formule douce et végétale dans votre routine quotidienne pour des résultats visibles et durables.
              </div>
            </div>
          </div>

          {/* Quality Guarantee Note */}
          <div className="flex items-center gap-2 text-xs text-stone-500 pt-2 border-t border-stone-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Soin nutricosmétique et bien-être certifié conforme aux normes suisses. Échange personnalisé avec nos experts sur demande.
            </span>
          </div>
        </div>

        {/* Modal Footer / Consultation CTA */}
        <div className="p-6 bg-stone-100/90 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-stone-500 block">Rituel Personnalisé Suisse</span>
            <span className="text-lg font-serif font-bold text-stone-900">
              Conseil & Accompagnement Dédié
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestCallback(product);
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-semibold text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
            style={{
              backgroundColor: product.accentHex,
            }}
          >
            <PhoneCall className="w-4 h-4" />
            Être conseillé pour {product.name}
          </button>
        </div>
      </div>
    </div>
  );
};
