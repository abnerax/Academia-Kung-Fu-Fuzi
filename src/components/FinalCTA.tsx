import React from 'react';
import { ACADEMY_INFO } from '../data/academyData.ts';
import { FuziLogo } from './FuziLogo.tsx';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const finalWhatsappLink = `${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent(
    "Olá! Gostaria de falar com a Academia Fuzi para conhecer as modalidades e começar a treinar."
  )}`;

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#181920] to-[#111111] border-b border-[#292929] relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute inset-0 bg-radial-at-t from-[#C71925]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        <div className="mb-6">
          <FuziLogo size="md" showText={false} />
        </div>

        <span className="text-xs font-semibold text-[#C99A38] uppercase tracking-widest mb-3">
          Artes Marciais Chinesas em Salto - SP
        </span>

        <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#F5F3EF] tracking-tight leading-tight max-w-2xl text-balance mb-4">
          Encontre sua turma. Comece sua jornada.
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed text-balance mb-8">
          Conheça as modalidades da Academia Fuzi e descubra qual treinamento combina com seus objetivos.
        </p>

        <a
          href={finalWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl shadow-xl shadow-[#C71925]/30 hover:shadow-[#C71925]/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C71925]"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Falar com a Academia Fuzi</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400">
          <span>Kung Fu Tradicional</span>
          <span aria-hidden="true" className="text-[#292929]">·</span>
          <span>Kids</span>
          <span aria-hidden="true" className="text-[#292929]">·</span>
          <span>Sanda</span>
          <span aria-hidden="true" className="text-[#292929]">·</span>
          <span>Tai Chi</span>
        </div>
      </div>
    </section>
  );
};
