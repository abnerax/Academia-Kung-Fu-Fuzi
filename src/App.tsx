/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ModalitiesSection } from './components/ModalitiesSection.tsx';
import { ScheduleSection } from './components/ScheduleSection.tsx';
import { OfficialGallerySection } from './components/OfficialGallerySection.tsx';
import { VideoSection } from './components/VideoSection.tsx';
import { BenefitsSection } from './components/BenefitsSection.tsx';
import { BeginnerGuideSection } from './components/BeginnerGuideSection.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F3EF] flex flex-col selection:bg-[#C71925] selection:text-white">
      {/* 1-Row 3-Zone Header */}
      <Header />

      <main className="flex-1">
        {/* Section 1: Hero com Destaque para Kung Fu em Ação & Logo Oficial */}
        <Hero />

        {/* Section 2: Conheça a Academia / Nossa História (Placa Dourada & Retrato Oficial) */}
        <AboutSection />

        {/* Section 3: Modalidades & Destaque Especial Kung Fu Kids */}
        <ModalitiesSection />

        {/* Section 4: Cronograma Semanal de Aulas */}
        <ScheduleSection />

        {/* Section 5: Galeria Oficial do Acervo da Academia Fuzi (Lightbox com as 6 imagens) */}
        <OfficialGallerySection />

        {/* Section 6: Vídeos e Demonstrações Marciais (Canal Oficial no YouTube) */}
        <VideoSection />

        {/* Section 7: O que a prática pode proporcionar (Benefícios) */}
        <BenefitsSection />

        {/* Section 8: Para quem quer começar (Guia em 3 Passos) */}
        <BeginnerGuideSection />

        {/* Section 9: Localização e Contato em Salto, SP */}
        <LocationSection />

        {/* Section 10: Chamada Final */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile-Friendly WhatsApp Floating Button */}
      <FloatingWhatsApp />
    </div>
  );
}
