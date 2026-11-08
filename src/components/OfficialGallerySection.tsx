import React, { useState } from 'react';
import { OFFICIAL_IMAGES, OfficialImage, ACADEMY_INFO } from '../data/academyData.ts';
import { Images, Maximize2, X, Info, ExternalLink } from 'lucide-react';

export const OfficialGallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<OfficialImage | null>(null);

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C71925] uppercase tracking-widest mb-3">
            <Images className="w-3.5 h-3.5" />
            <span>Acervo Fotográfico Oficial</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#F5F3EF] tracking-tight mb-4">
            Fotografias e Registros da Academia Fuzi
          </h2>

          <p className="text-base text-neutral-300 leading-relaxed">
            Conheça os registros visuais da nossa escola em Salto, SP. Fotografias dos treinamentos, do material de Kung Fu Kids e do acervo da academia.
          </p>
        </div>

        {/* Gallery Grid of Official Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {OFFICIAL_IMAGES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#181920] border border-[#292929] hover:border-[#C99A38]/50 shadow-lg cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#292929]">
                <img
                  src={item.localPath}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== item.cdnUrl) {
                      target.src = item.cdnUrl;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181920] via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#292929] text-[10px] font-bold text-[#C99A38] uppercase tracking-wider">
                  {item.tag}
                </div>

                {/* Expand Hover Icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#111111]/80 backdrop-blur-md border border-neutral-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#C99A38]" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#C99A38] tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#F5F3EF] mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {item.isHistorical && (
                  <div className="mt-3 pt-3 border-t border-[#292929] flex items-center gap-1.5 text-[10px] text-neutral-500">
                    <Info className="w-3 h-3 text-[#C99A38] shrink-0" />
                    <span>Registro comemorativo do acervo.</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-[#181920] border border-[#292929] max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#111111]/80 hover:bg-[#C71925] text-white transition-colors border border-neutral-700 cursor-pointer"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Modal Image */}
            <div className="relative max-h-[65vh] w-full bg-[#111111] flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.localPath}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[65vh] object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== selectedImage.cdnUrl) {
                    target.src = selectedImage.cdnUrl;
                  }
                }}
              />
            </div>

            {/* Modal Info Bar */}
            <div className="p-6 bg-[#181920] border-t border-[#292929]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold text-[#C99A38] uppercase tracking-wider block mb-1">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-[#F5F3EF] mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
                    {selectedImage.description}
                  </p>
                </div>

                <a
                  href={`${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent(`Olá! Vi a foto "${selectedImage.title}" no biosite da Academia Fuzi e gostaria de mais informações.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Saber mais</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
