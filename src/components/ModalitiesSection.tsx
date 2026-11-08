import React, { useState } from 'react';
import { MODALITIES, ACADEMY_INFO, Modality } from '../data/academyData.ts';
import { MessageCircle, Clock, CheckCircle2, ChevronRight, Heart, Sparkles } from 'lucide-react';

export const ModalitiesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'todas' | Modality['category']>('todas');
  const [activeModalModality, setActiveModalModality] = useState<Modality | null>(null);

  const filters = [
    { key: 'todas', label: 'Todas as modalidades' },
    { key: 'tradicional', label: 'Kung Fu Tradicional' },
    { key: 'infantil', label: 'Kung Fu Kids' },
    { key: 'combate', label: 'Sanda / Boxe Chinês' },
    { key: 'bem-estar', label: 'Tai Chi & Mobilidade' },
  ] as const;

  const filteredModalities =
    selectedFilter === 'todas'
      ? MODALITIES
      : MODALITIES.filter((m) => m.category === selectedFilter);

  return (
    <section id="modalidades" className="py-20 sm:py-28 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C71925] uppercase tracking-widest mb-3">
            <span>Treinamentos e Turmas</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#F5F3EF] tracking-tight mb-4">
            Modalidades para cada objetivo
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            A Academia Fuzi reúne modalidades tradicionais chinesas, combate esportivo e práticas de consciência corporal. Escolha a atividade ideal e converse diretamente conosco pelo WhatsApp.
          </p>
        </div>

        {/* SPECIAL MANDATORY SPOTLIGHT: IMAGEM 01 — KUNG FU KIDS BANNER */}
        <div className="mb-14 rounded-2xl overflow-hidden bg-gradient-to-r from-[#181920] via-[#1c1d24] to-[#181920] border-2 border-[#C99A38]/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image Container (6 cols) */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[280px] sm:min-h-[320px] bg-[#292929] overflow-hidden">
              <img
                src="/images/kids_kungfu.png"
                alt="Kung Fu Kids — Disciplina e Confiança na Academia Fuzi"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== 'https://i.postimg.cc/wjN2FPP1/Kung-Fu-Kids-Disciplina-e-Confianca.png') {
                    target.src = 'https://i.postimg.cc/wjN2FPP1/Kung-Fu-Kids-Disciplina-e-Confianca.png';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#181920]/40 to-[#181920] opacity-90" />
              
              <div className="absolute top-4 left-4 bg-[#111111]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#C99A38]/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C99A38]" />
                <span className="text-[11px] font-bold text-[#F5F3EF] uppercase tracking-wider">
                  Turma Especial Infantil
                </span>
              </div>
            </div>

            {/* Content Container (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C99A38] uppercase tracking-wider mb-2">
                  <Heart className="w-3.5 h-3.5 text-[#C71925]" />
                  <span>Disciplina · Atenção · Respeito</span>
                </div>

                <h3 className="font-heading text-xl sm:text-3xl font-bold text-[#F5F3EF] mb-3">
                  Kung Fu Kids: Disciplina e Confiança
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                  Uma prática voltada ao desenvolvimento infantil saudável. Trabalha coordenação motora, atenção, respeito ao professor e aos colegas em um ambiente acolhedor e estimulante.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C71925] shrink-0" />
                    <span>Atenção e concentração</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C71925] shrink-0" />
                    <span>Coordenação e equilíbrio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C71925] shrink-0" />
                    <span>Respeito e convivência</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C71925] shrink-0" />
                    <span>Ter & Qui: 17h/19h · Sáb: 10h</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#292929]">
                <a
                  href={`${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent("Olá! Gostaria de receber informações sobre as aulas de Kung Fu Kids da Academia Fuzi para meu filho(a).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl transition-colors shadow-md shadow-[#C71925]/25"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar Kung Fu Kids no WhatsApp</span>
                </a>

                <span className="text-[11px] text-neutral-400">
                  Consulte disponibilidade de vagas para a faixa etária.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filters.map((f) => {
            const isActive = selectedFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setSelectedFilter(f.key)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-xl whitespace-nowrap shrink-0 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C71925] ${
                  isActive
                    ? 'bg-[#C71925] text-white shadow-sm shadow-[#C71925]/30'
                    : 'bg-[#181920] text-neutral-300 hover:text-white hover:bg-[#292929] border border-[#292929]'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Modalities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredModalities.map((item) => {
            const whatsappLink = `${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent(item.whatsappMessage)}`;

            return (
              <div
                key={item.id}
                className="bg-[#181920] border border-[#292929] rounded-2xl overflow-hidden hover:border-[#C99A38]/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#292929]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== item.fallbackImage) {
                          target.src = item.fallbackImage;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181920] via-[#181920]/40 to-transparent" />
                    
                    {/* Unboxed Category Kicker */}
                    <div className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wider text-[#C99A38] bg-[#111111]/85 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-[#292929]">
                      {item.categoryLabel}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#F5F3EF] mb-2.5">
                      {item.name}
                    </h3>

                    <p className="text-sm text-neutral-300 leading-relaxed mb-4 line-clamp-3">
                      {item.shortDesc}
                    </p>

                    {/* Schedule Snippet */}
                    <div className="flex items-start gap-2.5 text-xs text-neutral-300 bg-[#111111] p-3 rounded-xl border border-[#292929] mb-5">
                      <Clock className="w-4 h-4 text-[#C99A38] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#F5F3EF] block mb-0.5">Dias e Horários:</span>
                        <span>{item.scheduleSummary}</span>
                      </div>
                    </div>

                    {/* Feature Points */}
                    <div className="space-y-1.5 mb-6">
                      {item.tags.map((tag) => (
                        <div key={tag} className="flex items-center gap-2 text-xs text-neutral-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C71925] shrink-0" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 flex flex-col gap-2.5">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C71925]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar esta modalidade</span>
                  </a>

                  <button
                    onClick={() => setActiveModalModality(item)}
                    className="text-xs text-neutral-400 hover:text-[#C99A38] inline-flex items-center justify-center gap-1 py-1 transition-colors cursor-pointer"
                  >
                    <span>Ver detalhes completos</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Details Modal */}
      {activeModalModality && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#181920] border border-[#292929] max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-48 w-full bg-[#292929]">
              <img
                src={activeModalModality.image}
                alt={activeModalModality.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181920] to-transparent" />
              <button
                onClick={() => setActiveModalModality(null)}
                className="absolute top-4 right-4 p-2 text-neutral-300 hover:text-white bg-black/60 rounded-full transition-colors"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            <div className="p-6 sm:p-7">
              <span className="text-xs text-[#C99A38] uppercase tracking-wider font-semibold">
                {activeModalModality.categoryLabel}
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#F5F3EF] mt-1 mb-3">
                {activeModalModality.name}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                {activeModalModality.fullDesc}
              </p>

              <div className="bg-[#111111] p-4 rounded-xl border border-[#292929] mb-6">
                <span className="text-xs text-neutral-400 font-semibold block mb-1">
                  Cronograma informado:
                </span>
                <span className="text-sm font-medium text-[#F5F3EF]">
                  {activeModalModality.scheduleSummary}
                </span>
                <span className="text-[11px] text-neutral-400 block mt-2">
                  * Confirme vagas e turmas diretamente no WhatsApp.
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveModalModality(null)}
                  className="flex-1 px-4 py-2.5 text-xs font-semibold text-neutral-300 bg-[#292929] hover:bg-[#333] rounded-xl transition-colors"
                >
                  Voltar
                </button>
                <a
                  href={`${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent(activeModalModality.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no Zap</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
