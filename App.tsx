/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { ProductsSection } from './components/ProductsSection';
import { ComplementaryProductsSection } from './components/ComplementaryProductsSection';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { StorySection } from './components/StorySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { CallbackModal } from './components/CallbackModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Product } from './types';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [selectedProductForCallback, setSelectedProductForCallback] = useState<
    Product | { id?: string; name?: string } | string | null
  >(null);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);

  const handleOpenCallback = (
    product?: Product | { id?: string; name?: string } | string | null
  ) => {
    setSelectedProductForCallback(product || null);
    setCallbackModalOpen(true);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProductForDetail(product);
    const element = document.getElementById('produits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#faf9f6] text-[#1c1917] font-sans selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
        {/* Fixed Navigation Header */}
        <Header
          onOpenCallback={handleOpenCallback}
          onNavigateTo={handleNavigateTo}
        />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section: Kinetic Floating Gummy Universe */}
          <Hero
            onSelectProduct={handleSelectProduct}
            onNavigateTo={handleNavigateTo}
            onOpenCallback={() => handleOpenCallback()}
          />

          {/* 2. Quality bar / Notre engagement qualité (Trust Banner - 4 Core Guarantees) */}
          <TrustBanner />

          {/* 3. Notre Histoire / Philosophie (Brand Story Asymmetric Layout) */}
          <StorySection />

          {/* 4. Diagnostic Gummies Quiz (Diagnostic Express) */}
          <InteractiveQuiz
            onSelectProduct={handleSelectProduct}
            onOpenCallback={handleOpenCallback}
          />

          {/* 5. Nos 5 Formules Gummies (Products Grid) */}
          <ProductsSection
            onOpenCallback={handleOpenCallback}
            selectedProductFromParent={selectedProductForDetail}
            onClearSelectedProductFromParent={() => setSelectedProductForDetail(null)}
          />

          {/* 6. Nos Soins Complémentaires (Complementary Care Products Grid) */}
          <ComplementaryProductsSection
            onOpenCallback={handleOpenCallback}
          />

          {/* 7. Témoignages Clients (Customer Reviews Grid & Trust Banner) */}
          <TestimonialsSection />

          {/* 8. FAQ (Questions Fréquentes Accordion) */}
          <FAQSection onOpenCallback={() => handleOpenCallback()} />
        </main>

        {/* Footer */}
        <Footer
          onNavigateTo={handleNavigateTo}
          onOpenCallback={() => handleOpenCallback()}
        />

        {/* Callback Request Modal */}
        <CallbackModal
          isOpen={callbackModalOpen}
          onClose={() => setCallbackModalOpen(false)}
          preselectedProduct={selectedProductForCallback}
        />

        {/* Sticky Floating WhatsApp Contact Button */}
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}

