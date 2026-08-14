import React, { useState } from 'react';
import { MOLITA_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { ProductDetailModal } from './ProductDetailModal';
import { Sparkles, ArrowRight, Check, Eye } from 'lucide-react';

interface ProductsSectionProps {
  onOpenCallback: (product?: Product) => void;
  selectedProductFromParent?: Product | null;
  onClearSelectedProductFromParent?: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onOpenCallback,
  selectedProductFromParent,
  onClearSelectedProductFromParent,
}) => {
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(
    selectedProductFromParent || null
  );

  // Sync if parent passes product
  React.useEffect(() => {
    if (selectedProductFromParent) {
      setActiveModalProduct(selectedProductFromParent);
    }
  }, [selectedProductFromParent]);

  const handleCloseModal = () => {
    setActiveModalProduct(null);
    if (onClearSelectedProductFromParent) {
      onClearSelectedProductFromParent();
    }
  };

  return (
    <section id="produits" className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Subtle Organic Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-pink-100/40 via-amber-100/40 to-cyan-100/40 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          La Gamme Molita
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-stone-900 tracking-tight">
          Nos 5 Formules Gummies
        </h2>
        <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed">
          Chaque rituel Molita associe des actifs cosmétiques et des extraits naturels de plantes. Découvrez la formule adaptée à votre quotidien.
        </p>
      </div>

      {/* Product Cards Grid - Asymmetric & Distinctive Circle-in-Circle Flyer Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOLITA_PRODUCTS.map((product) => {
          return (
            <div
              key={product.id}
              onClick={() => setActiveModalProduct(product)}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Color Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
                style={{ backgroundColor: product.accentHex }}
              />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${product.badgeBg}`}>
                    {product.category}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600">
                    Soin Rituel
                  </span>
                </div>

                {/* Circle-in-Circle Flyer Style Centerpiece with Real Bottle Photo */}
                <div className="flex justify-center my-6">
                  <div
                    className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full p-2.5 bg-stone-50/80 border border-stone-200/80 shadow-md group-hover:shadow-xl transition-all duration-500 flex items-center justify-center overflow-hidden"
                    style={{
                      boxShadow: `0 15px 35px -10px ${product.accentHex}35`,
                    }}
                  >
                    {/* Inner Circle Flyer Gradient Background Blob */}
                    <div className={`w-full h-full rounded-full ${product.flyerCircleClass} flex items-center justify-center relative overflow-hidden shadow-inner p-1.5`}>
                      {/* Inner highlight overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full pointer-events-none" />

                      {/* Real Product Bottle Image with 3D Tilt & Soft Drop Shadow */}
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="relative z-10 w-full h-full object-contain drop-shadow-xl group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 ease-out"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Quick View Floating Pill on Hover */}
                    <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs font-semibold gap-1 z-20">
                      <Eye className="w-4 h-4" />
                      Voir les détails
                    </div>
                  </div>
                </div>

                {/* Product Title & Subtitle */}
                <div className="text-center space-y-2 mb-4">
                  <h3 className="font-serif text-2xl font-normal text-stone-900 group-hover:text-purple-900 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium text-stone-500 italic">
                    "{product.description}"
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-stone-500">
                  {product.subName}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalProduct(product);
                  }}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-white transition-all shadow-xs hover:shadow-md hover:scale-105 flex items-center gap-1.5"
                  style={{
                    backgroundColor: product.accentHex,
                  }}
                >
                  Découvrir
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={handleCloseModal}
        onRequestCallback={(prod) => {
          handleCloseModal();
          onOpenCallback(prod);
        }}
      />
    </section>
  );
};
