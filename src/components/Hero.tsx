import React from 'react';
import { FuziLogo } from './FuziLogo.tsx';
import { ACADEMY_INFO } from '../data/academyData.ts';
import { MessageCircle, Calendar, MapPin, ChevronDown, Sparkles, Navigation } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroWhatsappText = encodeURIComponent(
    "Olá! Conheci a Academia Fuzi pelo biosite e gostaria de saber mais sobre as aulas e como começar."
  );

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#111111] border-b border-[#292929] pt-8 pb-16 lg:py-20">
      {/* Subtle Atmospheric Martial Backing */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C71925]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#C99A38]/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#292929_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Column 1: Core Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Header Lockup with Official Emblem on Clean White Background */}
            <div className="inline-flex items-center gap-3.5 mb-5">
              <FuziLogo size="md" showText={false} />
              <div className="text-left">
                <span className="block text-xs uppercase tracking-widest text-[#C99A38] font-bold">
                  Escola Tradicional de Kung Fu Wushu
                </span>
                <span className="font-heading text-sm text-[#F5F3EF] tracking-wider font-bold">
                  Academia Fuzi · Salto, SP
                </span>
              </div>
            </div>

            {/* Sub-kicker with Click to Location */}
            <button
              onClick={() => scrollToSection('#localizacao')}
              className="group inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-[#C99A38] hover:text-[#e0b556] uppercase tracking-widest mb-3 transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C71925] group-hover:scale-110 transition-transform" />
              <span>Rua Luiz Brito de Almeida, 1107 · Salto, SP</span>
              <span className="text-[10px] text-neutral-400 group-hover:text-white underline underline-offset-2 ml-1">
                (Ver no mapa)
              </span>
            </button>

            {/* Official Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F3EF] tracking-tight leading-[1.12] mb-6 text-balance drop-shadow-md">
              {ACADEMY_INFO.slogan}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed mb-8 text-balance">
              {ACADEMY_INFO.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto mb-10">
              {/* Primary: Quero conhecer as aulas */}
              <a
                href={`${ACADEMY_INFO.whatsappUrl}?text=${heroWhatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl shadow-lg shadow-[#C71925]/30 hover:shadow-[#C71925]/50 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C71925] active:translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Quero conhecer as aulas</span>
              </a>

              {/* Secondary: Ver modalidades e horários */}
              <button
                onClick={() => scrollToSection('#modalidades')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs sm:text-sm font-semibold tracking-wide text-[#F5F3EF] hover:text-white bg-[#292929]/70 hover:bg-[#292929] border border-[#292929] hover:border-[#C99A38]/50 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A38] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C99A38]" />
                <span>Ver modalidades e horários</span>
              </button>
            </div>

            {/* Quick Trust Highlights Strip with Address Field Highlight */}
            <div className="w-full pt-6 border-t border-[#292929] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#C99A38] tracking-wider block">Turmas</span>
                <span className="text-xs sm:text-sm font-medium text-[#F5F3EF]">Kids & Adultos</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#C99A38] tracking-wider block">Modalidades</span>
                <span className="text-xs sm:text-sm font-medium text-[#F5F3EF]">Kung Fu & Sanda</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#C99A38] tracking-wider block">Períodos</span>
                <span className="text-xs sm:text-sm font-medium text-[#F5F3EF]">Manhã, Noite e Sáb</span>
              </div>
              <button
                onClick={() => scrollToSection('#localizacao')}
                className="text-left group cursor-pointer"
              >
                <span className="text-[10px] uppercase font-semibold text-[#C99A38] tracking-wider block flex items-center gap-1">
                  <span>Endereço</span>
                  <Navigation className="w-2.5 h-2.5 text-[#C71925]" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#F5F3EF] group-hover:text-[#C99A38] transition-colors truncate block">
                  R. Luiz Brito, 1107
                </span>
              </button>
            </div>
          </div>

          {/* Column 2: Mandatory Official Imagem 04 — Kung Fu em Ação (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md group">
              {/* Decorative Chinese Style Border Accent */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C71925]/30 via-[#C99A38]/20 to-transparent rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />

              <div className="relative rounded-2xl overflow-hidden bg-[#111111] border-2 border-[#C99A38]/40 shadow-2xl shadow-black/80">
                {/* Official Image 04: Kung Fu em Ação */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-[#292929]">
                  <img
                    src="/images/kungfu_acao_hero.png"
                    alt="Kung Fu em Ação — Fotografia oficial da Academia Fuzi"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== 'https://i.postimg.cc/PfFMHTnZ/Poster-de-Kung-Fu-em-Acao.png') {
                        target.src = 'https://i.postimg.cc/PfFMHTnZ/Poster-de-Kung-Fu-em-Acao.png';
                      }
                    }}
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                </div>

                {/* Caption Bar */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-[#1c1d22] to-[#111111] border-t border-[#292929] flex items-center justify-between">
                  <div>
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#C99A38] uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-[#C71925]" />
                      <span>Kung Fu em Ação</span>
                    </span>
                    <h3 className="font-heading font-bold text-sm text-[#F5F3EF]">
                      Força, Postura e Tradição Marcial
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#292929] flex items-center justify-center border border-[#C99A38]/30">
                    <span className="font-heading text-xs font-bold text-[#C99A38]">武</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down trigger */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollToSection('#conheca')}
            className="text-neutral-500 hover:text-[#C99A38] transition-colors p-2 focus-visible:outline-none cursor-pointer"
            aria-label="Rolar para a seção Conheça a Academia"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
