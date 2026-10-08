import React, { useState, useEffect, useRef } from 'react';
import { ui, cantons, localizeProduct } from '../i18n/content';
import { useLanguage } from '../i18n/LanguageContext';
import { Product } from '../types';
import {
  MOLITA_PRODUCTS,
  COMPLEMENTARY_PRODUCTS_DATA,
  ALL_PRODUCTS_OPTIONS,
  resolveProductId,
} from '../data/products';
import { X, PhoneCall, CheckCircle2, ChevronDown, Check } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: Product | { id?: string; name?: string } | string | null;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const { language: siteLang, t } = useLanguage();
  const c = ui[siteLang].callback;
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [canton, setCanton] = useState('Genève');
  const [preferredTime, setPreferredTime] = useState('0');
  const [productId, setProductId] = useState<string>(() =>
    resolveProductId(preselectedProduct)
  );
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [language, setLanguage] = useState<'fr' | 'de' | 'it'>(siteLang);
  // keep the call-language radio in sync with the site language
  useEffect(() => { setLanguage(siteLang); setPreferredTime('0'); }, [siteLang]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync if preselected product changes
  useEffect(() => {
    if (preselectedProduct) {
      setProductId(resolveProductId(preselectedProduct));
    }
  }, [preselectedProduct, isOpen]);

  // Handle click outside to close custom dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isProductDropdownOpen) {
        setIsProductDropdownOpen(false);
      }
    };

    if (isProductDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isProductDropdownOpen]);

  if (!isOpen) return null;
  const locName = (id: string, fallback: { name: string; subName: string }) => {
    const comp = t.complementary.products.find((x) => x.id === id);
    if (comp) return { name: comp.name, subName: comp.subName };
    const p = MOLITA_PRODUCTS.find((x) => x.id === id);
    return p ? localizeProduct(p, siteLang) : fallback;
  };

  const currentSelectedProduct =
    ALL_PRODUCTS_OPTIONS.find((p) => p.id === productId) ||
    ALL_PRODUCTS_OPTIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#faf9f6] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Neutral Permanent Brand Header (Violet/Rose & Deep Stone gradient) */}
        <div className="bg-gradient-to-r from-stone-950 via-purple-950 to-stone-900 text-white p-6 relative overflow-hidden">
          {/* Subtle background glow flare */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-pink-500/20 via-purple-500/20 to-transparent rounded-full blur-2xl pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label={c.close}
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative z-10 flex items-center gap-2 text-xs font-semibold text-pink-300 uppercase tracking-wider mb-1">
            <PhoneCall className="w-3.5 h-3.5" />
            {c.eyebrow}
          </div>
          <h3 className="relative z-10 font-serif text-2xl text-white">
            {c.title}
          </h3>
          <p className="relative z-10 text-xs text-stone-300 mt-1 font-sans">
            {c.sub}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 font-sans">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-stone-900">
                {c.okTitle}
              </h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                {c.okText(fullName, c.times[Number(preferredTime)] ?? c.times[0], phone)}
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
              >
                {c.okClose}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              {/* Product Choice Custom Dropdown with All 5 Gummies + 3 Complementary Care Products */}
              <div className="relative" ref={dropdownRef}>
                <label className="block font-semibold text-stone-800 mb-1">
                  {c.product}
                </label>

                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => setIsProductDropdownOpen((prev) => !prev)}
                  className={`w-full bg-white border rounded-xl px-3.5 py-2.5 text-xs text-left text-stone-900 transition-all flex items-center justify-between cursor-pointer ${
                    isProductDropdownOpen
                      ? 'border-purple-500 ring-2 ring-purple-500/20 shadow-sm'
                      : 'border-stone-300 hover:border-purple-300'
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isProductDropdownOpen}
                >
                  <span className="truncate">
                    <span className="font-medium text-stone-900">
                      {locName(currentSelectedProduct.id, currentSelectedProduct).name}
                    </span>
                    <span className="text-stone-500 font-normal">
                      {' '}
                      — {locName(currentSelectedProduct.id, currentSelectedProduct).subName}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 ml-2 transition-transform duration-200 ${
                      isProductDropdownOpen ? 'rotate-180 text-purple-600' : ''
                    }`}
                  />
                </button>

                {/* Custom Options Menu */}
                {isProductDropdownOpen && (
                  <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white rounded-2xl border border-stone-200/90 shadow-2xl py-2 max-h-64 overflow-y-auto animate-fadeIn">
                    {/* Group 1: Nos 5 Formules Gummies */}
                    <div className="px-3 pt-1 pb-1 text-[10px] font-bold tracking-wider uppercase text-stone-400 font-sans">
                      {c.groupGummies}
                    </div>
                    <div className="px-1.5 space-y-0.5">
                      {MOLITA_PRODUCTS.map((p) => {
                        const isSelected = p.id === productId;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => {
                              setProductId(p.id);
                              setIsProductDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-purple-100/70 text-purple-950 font-semibold'
                                : 'text-stone-800 hover:bg-purple-50/80 hover:text-purple-900'
                            }`}
                          >
                            <span className="truncate">
                              <span className={isSelected ? 'font-semibold' : 'font-medium'}>
                                {locName(p.id, p).name}
                              </span>
                              <span className="text-stone-500 font-normal text-[11px]">
                                {' '}
                                — {locName(p.id, p).subName}
                              </span>
                            </span>
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-purple-700 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Divider */}
                    <div className="my-1.5 border-t border-stone-100" />

                    {/* Group 2: Nos Soins Complémentaires */}
                    <div className="px-3 pt-1 pb-1 text-[10px] font-bold tracking-wider uppercase text-stone-400 font-sans">
                      {c.groupCare}
                    </div>
                    <div className="px-1.5 space-y-0.5">
                      {COMPLEMENTARY_PRODUCTS_DATA.map((p) => {
                        const isSelected = p.id === productId;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => {
                              setProductId(p.id);
                              setIsProductDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-purple-100/70 text-purple-950 font-semibold'
                                : 'text-stone-800 hover:bg-purple-50/80 hover:text-purple-900'
                            }`}
                          >
                            <span className="truncate">
                              <span className={isSelected ? 'font-semibold' : 'font-medium'}>
                                {locName(p.id, p).name}
                              </span>
                              <span className="text-stone-500 font-normal text-[11px]">
                                {' '}
                                — {locName(p.id, p).subName}
                              </span>
                            </span>
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-purple-700 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    {c.name}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={c.namePh}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    {c.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+41 79 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Canton & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    {c.canton}
                  </label>
                  <select
                    value={canton}
                    onChange={(e) => setCanton(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    {Object.entries(cantons[siteLang]).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                    <option value="Autre">{c.other}</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    {c.time}
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    {c.times.map((label, i) => (
                      <option key={i} value={String(i)}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Language for Phone Call */}
              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  {c.lang}
                </label>
                <div className="flex items-center gap-3 pt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer font-medium">
                    <input
                      type="radio"
                      name="lang"
                      checked={language === 'fr'}
                      onChange={() => setLanguage('fr')}
                      className="text-purple-600"
                    />
                    Français
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer font-medium">
                    <input
                      type="radio"
                      name="lang"
                      checked={language === 'de'}
                      onChange={() => setLanguage('de')}
                      className="text-purple-600"
                    />
                    Deutsch
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer font-medium">
                    <input
                      type="radio"
                      name="lang"
                      checked={language === 'it'}
                      onChange={() => setLanguage('it')}
                      className="text-purple-600"
                    />
                    Italiano
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 text-white font-semibold text-xs shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                {loading ? (
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <PhoneCall className="w-3.5 h-3.5" />
                    {c.submit}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

