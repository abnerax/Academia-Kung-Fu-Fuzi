import React from 'react';
import { ACADEMY_INFO } from '../data/academyData.ts';
import { Youtube, Instagram, ExternalLink, ShieldCheck, Video } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const galleryItems = [
    {
      title: 'Prática Tradicional e Formas',
      subtitle: 'Posturas, equilíbrio e refinamento técnico',
      image: '/src/assets/images/hero_kungfu_atmosphere_1792983282125.jpg',
    },
    {
      title: 'Sanda · Boxe Chinês',
      subtitle: 'Combate esportivo, agilidade e condicionamento',
      image: '/src/assets/images/sanda_chinese_boxing_1792983282449.jpg',
    },
    {
      title: 'Tai Chi Chuan e Silêncio',
      subtitle: 'Respiração profunda e consciência corporal',
      image: '/src/assets/images/taichi_morning_peace_1792983282369.jpg',
    },
    {
      title: 'Kung Fu Kids',
      subtitle: 'Respeito, cooperação e desenvolvimento motor',
      image: '/src/assets/images/kids_kungfu_practice_1792983283303.jpg',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0c0d10] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#c51e28] uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Identidade e Autenticidade</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-neutral-100 tracking-tight mb-4">
            Canais oficiais e rotina marcial
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            Acompanhe o trabalho da Academia Fuzi em Salto, SP. Registros dos treinos, movimentações técnicas e o cotidiano da escola estão disponíveis em nossos canais oficiais no Instagram e no YouTube.
          </p>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden bg-[#14161d] border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.opacity = '0';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14161d] via-[#14161d]/50 to-transparent" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-end">
                <h3 className="font-heading font-bold text-sm sm:text-base text-neutral-100 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Official Channels Connect Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Instagram Official Card */}
          <a
            href={ACADEMY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 sm:p-7 rounded-xl bg-[#14161d] border border-neutral-800 hover:border-neutral-700 hover:bg-[#181a24] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 via-rose-600 to-purple-600 flex items-center justify-center text-white shadow-md">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-[#c99b42] uppercase tracking-wider font-semibold block">
                  Instagram Oficial
                </span>
                <span className="font-heading font-bold text-base text-neutral-100 group-hover:text-white transition-colors">
                  {ACADEMY_INFO.instagramHandle}
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Fotos, avisos de aulas e rotina da academia
                </span>
              </div>
            </div>

            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-neutral-200 transition-colors" />
          </a>

          {/* YouTube Official Card */}
          <a
            href={ACADEMY_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 sm:p-7 rounded-xl bg-[#14161d] border border-neutral-800 hover:border-neutral-700 hover:bg-[#181a24] transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c51e28] flex items-center justify-center text-white shadow-md">
                <Youtube className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-[#c99b42] uppercase tracking-wider font-semibold block">
                  Canal no YouTube
                </span>
                <span className="font-heading font-bold text-base text-neutral-100 group-hover:text-white transition-colors">
                  {ACADEMY_INFO.youtubeHandle}
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Demonstrações, formas e vídeos marciais
                </span>
              </div>
            </div>

            <Video className="w-4 h-4 text-neutral-500 group-hover:text-neutral-200 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};
