import React, { useState } from 'react';
import { FuziLogo } from './FuziLogo.tsx';
import { ACADEMY_INFO } from '../data/academyData.ts';
import { MessageCircle, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Conheça', href: '#conheca' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Horários', href: '#cronograma' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Vídeos', href: '#videos' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#111111]/95 backdrop-blur-md border-b border-[#292929] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark with Official Emblem */}
          <a
            href="#"
            className="flex items-center gap-3 group text-left whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C71925]"
          >
            <FuziLogo size="sm" showText={false} />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-wider text-[#F5F3EF] group-hover:text-[#C71925] transition-colors leading-tight">
                Academia Fuzi
              </span>
              <span className="text-[10px] text-[#C99A38] uppercase tracking-widest font-semibold">
                Kung Fu Wushu · Salto SP
              </span>
            </div>
          </a>

          {/* Zone 2: Concise single-line text links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#C71925] decoration-2 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent("Olá! Conheci a Academia Fuzi pelo biosite e gostaria de saber mais sobre as aulas e como começar.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide text-white uppercase bg-[#C71925] hover:bg-[#a6131c] rounded-xl shadow-sm hover:shadow-[#C71925]/25 transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C71925]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent("Olá! Conheci a Academia Fuzi pelo biosite e gostaria de saber mais sobre as aulas.")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl sm:hidden"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-neutral-300 hover:text-white hover:bg-[#292929] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C71925]"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181920] border-b border-[#292929] px-5 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2.5 px-3 text-sm font-medium text-neutral-200 hover:text-white hover:bg-[#292929] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#292929]">
              <a
                href={`${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent("Olá! Conheci a Academia Fuzi pelo biosite e gostaria de saber mais sobre as aulas e como começar.")}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold tracking-wide text-white uppercase bg-[#C71925] hover:bg-[#a6131c] rounded-xl shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
