import React from 'react';
import { ACADEMY_INFO } from '../data/academyData.ts';
import { MessageCircle, HelpCircle, ArrowRight, CheckCircle } from 'lucide-react';

export const BeginnerGuideSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Mande uma mensagem no WhatsApp',
      desc: 'Diga que você conheceu a academia e informe sua disponibilidade de dias ou o interesse de seu filho(a).',
    },
    {
      step: '02',
      title: 'Tire suas dúvidas sobre as turmas',
      desc: 'Nossa equipe esclarece qual modalidade melhor se adequa ao seu momento (Kung Fu Tradicional, Kids, Sanda ou Tai Chi).',
    },
    {
      step: '03',
      title: 'Conheça o espaço e as orientações',
      desc: 'Receba todas as instruções sobre vestimenta adequada, funcionamento do dojo e início dos treinamentos.',
    },
  ];

  const beginnerWhatsappLink = `${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent(
    "Olá! Nunca pratiquei artes marciais e gostaria de saber como funciona para começar na Academia Fuzi."
  )}`;

  return (
    <section id="iniciantes" className="py-20 sm:py-28 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#181920] border border-[#292929] rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle martial backdrop decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C71925]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-12 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C71925] uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Orientações para Novos Alunos</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#F5F3EF] tracking-tight mb-4">
              Seu primeiro passo começa aqui.
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              Você não precisa ter praticado artes marciais antes para entrar em contato. Cada modalidade possui dinâmicas próprias, e o caminho mais simples para começar é tirar suas dúvidas diretamente conosco para escolher a turma certa para você.
            </p>
          </div>

          {/* 3 Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 relative z-10">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#C99A38]/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#181920] border border-[#292929] flex items-center justify-center font-heading font-bold text-sm text-[#C99A38] mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#F5F3EF] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Points & Direct Button */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-8 border-t border-[#292929] relative z-10">
            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C71925]" />
                <span>Atendimento atencioso diretamente pelos responsáveis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C71925]" />
                <span>Orientações claras para quem está voltando ou começando do zero</span>
              </div>
            </div>

            <a
              href={beginnerWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl transition-colors shadow-lg shadow-[#C71925]/25 shrink-0"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar com o professor no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
