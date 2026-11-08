import React, { useState } from 'react';
import { ACADEMY_INFO } from '../data/academyData.ts';
import { MapPin, Navigation, MessageCircle, Mail, Instagram, Youtube, Copy, Check, Compass, Car, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(ACADEMY_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const encodedAddress = encodeURIComponent("Rua Luiz Brito de Almeida, 1107, Jardim Arco Íris, Salto, SP");
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const wazeUrl = `https://waze.com/ul?q=${encodedAddress}`;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C71925] uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Onde Treinar em Salto - SP</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#F5F3EF] tracking-tight mb-4">
            Localização e Endereço Oficial
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            Consulte a localização real da Academia Fuzi no Google Maps. Estamos situados no Jardim Arco Íris, com fácil acesso na cidade de Salto e região.
          </p>
        </div>

        {/* CAMPO DE DESTAQUE: ENDEREÇO REAL NO GOOGLE MAPS */}
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-[#181920] via-[#1e2029] to-[#181920] border-2 border-[#C99A38]/60 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Gold Wash */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C99A38]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Address Details (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#C99A38]/40 text-[#C99A38] text-xs font-bold uppercase tracking-wider mb-4">
                <Compass className="w-3.5 h-3.5 text-[#C71925]" />
                <span>Endereço Oficial no Google Maps</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F5F3EF] mb-2 leading-snug">
                Rua Luiz Brito de Almeida, 1107
              </h3>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm sm:text-base text-neutral-300 mb-6">
                <span className="font-semibold text-[#C99A38]">Jardim Arco Íris</span>
                <span aria-hidden="true" className="text-[#292929]">·</span>
                <span>Salto, São Paulo</span>
                <span aria-hidden="true" className="text-[#292929]">·</span>
                <span>Brasil</span>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#F5F3EF] bg-[#292929] hover:bg-[#333] border border-neutral-700 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Endereço Copiado com Sucesso!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#C99A38]" />
                      <span>Copiar Endereço Completo</span>
                    </>
                  )}
                </button>

                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl transition-all shadow-md shadow-[#C71925]/25"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar Rota no Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-[#111111] hover:bg-[#292929] border border-[#292929] rounded-xl transition-colors"
                >
                  <Car className="w-4 h-4 text-sky-400" />
                  <span>Navegar pelo Waze</span>
                </a>
              </div>
            </div>

            {/* Quick Summary Pill Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#111111]/90 border border-[#292929] rounded-xl p-5 sm:p-6 text-xs text-neutral-300">
              <span className="text-[11px] font-bold text-[#C99A38] uppercase tracking-wider block mb-2">
                Informações para Visita
              </span>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#C71925] font-bold">✓</span>
                  <span><strong>Local:</strong> Dojô e espaço de treino estruturado em Salto, SP.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C71925] font-bold">✓</span>
                  <span><strong>Bairro:</strong> Jardim Arco Íris (fácil localização por GPS).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C71925] font-bold">✓</span>
                  <span><strong>Recomendação:</strong> Envie uma mensagem pelo WhatsApp antes de visitar para confirmar a turma em andamento.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real Interactive Map + Contact Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Google Maps Frame (7 cols) */}
          <div className="lg:col-span-7 h-96 lg:h-[460px] rounded-2xl overflow-hidden border-2 border-[#292929] bg-[#181920] relative shadow-xl">
            <iframe
              title="Localização Real no Google Maps da Academia Fuzi em Salto SP"
              src={mapsEmbedUrl}
              className="w-full h-full border-0 contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* Floating indicator */}
            <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#292929] shadow-lg flex items-center gap-2 pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C71925] animate-ping" />
              <span className="text-xs font-bold text-[#F5F3EF]">
                Academia Fuzi · Salto - SP
              </span>
            </div>
          </div>

          {/* Direct Channels Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="p-6 rounded-2xl bg-[#181920] border border-[#292929]">
              <span className="text-xs text-[#C99A38] uppercase tracking-widest font-semibold block mb-3">
                Canais de Atendimento
              </span>

              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href={`${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent("Olá! Gostaria de falar com a Academia Fuzi de Kung Fu sobre como chegar e as aulas.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#C71925] transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#C71925] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-400 block">WhatsApp Oficial</span>
                      <span className="text-xs sm:text-sm font-bold text-[#F5F3EF]">
                        {ACADEMY_INFO.whatsappPhoneFormatted}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href={ACADEMY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#C99A38]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#292929] text-rose-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-400 block">Instagram</span>
                      <span className="text-xs sm:text-sm font-bold text-[#F5F3EF]">
                        {ACADEMY_INFO.instagramHandle}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                {/* E-mail */}
                <a
                  href={`mailto:${ACADEMY_INFO.email}`}
                  className="p-3.5 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#C99A38]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#292929] text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-400 block">E-mail</span>
                      <span className="text-xs sm:text-sm font-bold text-[#F5F3EF]">
                        {ACADEMY_INFO.email}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                {/* YouTube */}
                <a
                  href={ACADEMY_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#C99A38]/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#292929] text-red-500 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Youtube className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] text-neutral-400 block">YouTube</span>
                      <span className="text-xs sm:text-sm font-bold text-[#F5F3EF]">
                        {ACADEMY_INFO.youtubeHandle}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
