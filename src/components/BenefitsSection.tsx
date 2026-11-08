import React from 'react';
import { BENEFITS, ACADEMY_INFO } from '../data/academyData.ts';
import { Target, HeartPulse, Focus, Compass, Users2, ArrowUpRight } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const iconList = [
    HeartPulse,
    Compass,
    Focus,
    Target,
    Users2,
  ];

  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C71925] uppercase tracking-widest mb-3">
            <span>Valores e Desenvolvimento Pessoal</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#F5F3EF] tracking-tight mb-4">
            Desenvolvimento que vai além do treino.
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            As artes marciais chinesas trabalham o praticante de forma integral. A regularidade e o compromisso nas aulas proporcionam benefícios físicos, cognitivos e relacionais construídos passo a passo.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconList[index % iconList.length];

            return (
              <div
                key={benefit.title}
                className="p-7 rounded-2xl bg-[#181920] border border-[#292929] hover:border-[#C99A38]/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#111111] border border-[#292929] flex items-center justify-center text-[#C71925] group-hover:text-[#C99A38] group-hover:border-[#C99A38]/30 transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#F5F3EF] mb-3 leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#292929] flex items-center justify-between text-xs text-neutral-500">
                  <span>Contribuição da prática</span>
                  <span className="text-[#C99A38] font-mono font-bold">0{index + 1}</span>
                </div>
              </div>
            );
          })}

          {/* Perspective Callout Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-[#201417] via-[#181920] to-[#14151b] border border-[#C71925]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C99A38] font-bold block mb-3">
                Compromisso com a verdade
              </span>
              <h3 className="font-heading text-lg font-bold text-[#F5F3EF] mb-3">
                Evolução real e consciente
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Não existem atalhos mágicos ou promessas exageradas. Cada conquista técnica e física na Academia Fuzi é fruto da prática constante, da orientação atenta e do respeito mútuo.
              </p>
            </div>

            <a
              href={`${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent("Olá! Gostaria de entender melhor como funcionam os treinos na Academia Fuzi.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#C99A38] transition-colors"
            >
              <span>Conversar com a academia</span>
              <ArrowUpRight className="w-4 h-4 text-[#C71925]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
