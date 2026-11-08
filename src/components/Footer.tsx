import React, { useState } from 'react';
import { ACADEMY_INFO } from '../data/academyData.ts';
import { FuziLogo } from './FuziLogo.tsx';
import { VerificationModal } from './VerificationModal.tsx';
import { Instagram, Youtube, Mail, MessageCircle, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#' },
    { label: 'Conheça a Academia', href: '#conheca' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Horários', href: '#cronograma' },
    { label: 'Galeria Oficial', href: '#galeria' },
    { label: 'Vídeos', href: '#videos' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Iniciantes', href: '#iniciantes' },
    { label: 'Localização & Contato', href: '#localizacao' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0b0b0d] border-t border-[#292929] py-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#292929]">
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <FuziLogo size="sm" showText={false} />
              <div>
                <span className="font-heading font-bold text-base text-[#F5F3EF] block">
                  {ACADEMY_INFO.name}
                </span>
                <span className="text-[10px] text-[#C99A38] uppercase tracking-widest font-medium">
                  Salto · São Paulo · Brasil
                </span>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-sm mb-6">
              Escola dedicada ao ensino e prática das artes marciais chinesas tradicionais e combate esportivo. Tradição, disciplina e evolução contínua em Salto, SP.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Academia Fuzi"
                className="w-9 h-9 rounded-xl bg-[#181920] hover:bg-[#C71925] text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-[#292929]"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={ACADEMY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Academia Fuzi"
                className="w-9 h-9 rounded-xl bg-[#181920] hover:bg-[#C71925] text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-[#292929]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={ACADEMY_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal no YouTube da Academia Fuzi"
                className="w-9 h-9 rounded-xl bg-[#181920] hover:bg-[#C71925] text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-[#292929]"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${ACADEMY_INFO.email}`}
                aria-label="E-mail da Academia Fuzi"
                className="w-9 h-9 rounded-xl bg-[#181920] hover:bg-[#C71925] text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-[#292929]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="lg:col-span-4">
            <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-200 block mb-4">
              Navegação
            </span>
            <ul className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Verification Notice (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="font-heading font-bold text-xs uppercase tracking-wider text-neutral-200 block mb-3">
                Local de Treino
              </span>
              <p className="text-neutral-400 leading-relaxed mb-4">
                {ACADEMY_INFO.addressShort}<br />
                Jardim Arco Íris · Salto - SP
              </p>
            </div>

            <button
              onClick={() => setShowVerificationModal(true)}
              className="inline-flex items-center gap-1.5 text-[11px] text-[#C99A38] hover:text-[#e4be68] transition-colors py-1 cursor-pointer"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Notas de conferência do projeto</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Academia Fuzi de Kung Fu. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Salto - São Paulo</span>
            <span aria-hidden="true" className="text-[#292929]">·</span>
            <span className="text-neutral-400">Escola Fuzi Tradicional de Kung Fu, Wushu e Boxe Chinês</span>
          </div>
        </div>
      </div>

      <VerificationModal
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
      />
    </footer>
  );
};
