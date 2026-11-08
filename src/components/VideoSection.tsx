import React from 'react';
import { VIDEOS_SHOWCASE, ACADEMY_INFO } from '../data/academyData.ts';
import { Youtube, Play, ExternalLink } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section id="videos" className="py-20 sm:py-28 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C71925] uppercase tracking-widest mb-3">
              <Youtube className="w-4 h-4 text-[#C71925]" />
              <span>Vídeos e Demonstrações</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#F5F3EF] tracking-tight mb-4">
              Assista aos treinos e apresentações
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              Acompanhe os vídeos marciais, apresentações tradicionais de Kung Fu e Dança do Leão no canal oficial do Prof. José Machado e da Academia Fuzi.
            </p>
          </div>

          <a
            href={ACADEMY_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl transition-colors shadow-md shadow-[#C71925]/20 shrink-0 self-start md:self-auto"
          >
            <Youtube className="w-4 h-4" />
            <span>Acessar Canal no YouTube</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {VIDEOS_SHOWCASE.map((video) => (
            <div
              key={video.id}
              className="group rounded-2xl overflow-hidden bg-[#181920] border border-[#292929] hover:border-[#C99A38]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Preview with Play Icon */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#292929]">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181920] via-black/30 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#C71925] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#292929] text-[10px] font-bold text-[#C99A38] uppercase tracking-wider">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading font-bold text-base text-[#F5F3EF] mb-2 group-hover:text-white transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-200 bg-[#292929] hover:bg-[#C71925] hover:text-white rounded-xl transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-500 group-hover:text-white" />
                  <span>Assistir no YouTube</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Banner Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1c1d25] via-[#181920] to-[#1c1d25] border border-[#292929] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#C71925] text-white flex items-center justify-center shrink-0 shadow-lg">
              <Youtube className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#C99A38] uppercase tracking-widest block mb-0.5">
                Canal Oficial no YouTube
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F5F3EF]">
                Prof. José Machado · Academia Fuzi
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Acompanhe postagens de técnicas, eventos esportivos e tradição chinesa.
              </p>
            </div>
          </div>

          <a
            href={ACADEMY_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#F5F3EF] hover:text-white bg-[#292929] hover:bg-[#333] border border-neutral-700 rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            <span>Ver todos os vídeos</span>
            <ExternalLink className="w-4 h-4 text-[#C99A38]" />
          </a>
        </div>
      </div>
    </section>
  );
};
