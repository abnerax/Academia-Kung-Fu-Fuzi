import React from 'react';
import { ACADEMY_INFO, PILLARS } from '../data/academyData.ts';
import { Shield, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="conheca" className="py-20 sm:py-28 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C71925] uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Nossa História e Identidade</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#F5F3EF] tracking-tight mb-6">
            Tradição, disciplina e evolução.
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-4">
            {ACADEMY_INFO.institutionText}
          </p>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {ACADEMY_INFO.historyText}
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F5F3EF] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C71925]" />
            <span>Os Cinco Pilares da Prática na Fuzi</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((pillar, idx) => (
              <div
                key={pillar.number}
                className={`p-6 sm:p-7 rounded-2xl bg-[#181920] border border-[#292929] hover:border-[#C99A38]/50 transition-all duration-200 flex flex-col justify-between group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-heading text-2xl font-bold text-[#C99A38] group-hover:text-[#e0b556] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-8 h-[1px] bg-[#292929] group-hover:bg-[#C71925] transition-colors" />
                  </div>

                  <h4 className="font-heading text-base sm:text-lg font-bold text-[#F5F3EF] mb-2.5">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick Invitation Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#1f1416] to-[#181920] border border-[#C71925]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C99A38] font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#C71925]" />
                  <span>Salto · São Paulo</span>
                </div>
                <h4 className="font-heading text-base sm:text-lg font-bold text-[#F5F3EF] mb-2">
                  Visite e Conheça o Espaço
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  Tire suas dúvidas diretamente no WhatsApp e agende o melhor dia para conversar com nossa equipe.
                </p>
              </div>

              <a
                href={`${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent("Olá! Gostaria de conversar com a Academia Fuzi para conhecer o espaço e as modalidades.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl transition-colors text-center shadow-md shadow-[#C71925]/20"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
