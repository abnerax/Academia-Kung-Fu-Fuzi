import React, { useState } from 'react';
import { ACADEMY_INFO } from '../data/academyData.ts';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultWhatsappMessage = encodeURIComponent(
    "Olá! Conheci a Academia Fuzi pelo biosite e gostaria de saber mais sobre as aulas e como começar."
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Mini Tooltip / Popover Bubble */}
      {showTooltip && (
        <div className="mb-2.5 max-w-[260px] bg-[#181920] text-neutral-200 text-xs p-3.5 rounded-xl border border-[#292929] shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#292929]">
            <span className="font-bold text-[#F5F3EF] font-heading">Academia Fuzi</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-neutral-400 hover:text-white p-0.5"
              aria-label="Fechar mensagem"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-neutral-300 text-[11px] leading-snug mb-2.5">
            Dúvidas sobre turmas e horários em Salto? Fale diretamente com nossa equipe no WhatsApp!
          </p>
          <a
            href={`${ACADEMY_INFO.whatsappUrl}?text=${defaultWhatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowTooltip(false)}
            className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#C71925] hover:bg-[#a6131c] text-white text-[11px] font-bold uppercase rounded-lg transition-colors shadow-sm"
          >
            <span>Iniciar conversa</span>
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`${ACADEMY_INFO.whatsappUrl}?text=${defaultWhatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg shadow-black/50 hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
        aria-label="Falar com a Academia Fuzi pelo WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />
      </a>
    </div>
  );
};
