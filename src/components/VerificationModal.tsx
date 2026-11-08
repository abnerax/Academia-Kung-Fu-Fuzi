import React from 'react';
import { ACADEMY_INFO } from '../data/academyData.ts';
import { AlertCircle, CheckCircle, PhoneCall, MapPin, X, ShieldCheck } from 'lucide-react';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#181920] border border-[#292929] max-w-xl w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-xl transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-[#C99A38] mb-3">
          <AlertCircle className="w-5 h-5 text-[#C71925]" />
          <span className="font-heading font-bold text-sm uppercase tracking-wider">
            {ACADEMY_INFO.divergenceNotice.title}
          </span>
        </div>

        <h3 className="font-heading text-xl font-bold text-[#F5F3EF] mb-4">
          Conferência de Dados do Biosite
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
          <div className="p-4 rounded-xl bg-[#111111] border border-[#292929]">
            <div className="flex items-start gap-2.5">
              <PhoneCall className="w-4 h-4 text-[#C71925] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#F5F3EF] block mb-1">
                  WhatsApp Oficial Configurado:
                </span>
                <span className="text-emerald-400 font-mono font-bold">
                  {ACADEMY_INFO.whatsappPhoneFormatted}
                </span>
                <p className="text-xs text-neutral-400 mt-1.5">
                  Conforme solicitado no briefing, todos os botões de ação e mensagens pré-preenchidas foram conectados ao número <strong>(11) 99483-0840</strong>. A arte física de horários mencionava uma numeração secundária; recomendamos verificar se ambos devem ser mantidos ou atualizados antes da impressão.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-[#292929]">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C99A38] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#F5F3EF] block mb-1">
                  Endereço Cadastrado:
                </span>
                <span className="text-neutral-200">
                  {ACADEMY_INFO.address}
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-[#292929]">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C99A38] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#F5F3EF] block mb-1">
                  Acervo e Imagens Oficiais:
                </span>
                <span className="text-neutral-300 text-xs">
                  Todas as 6 imagens oficiais fornecidas pelo cliente foram integradas rigorosamente no biosite (Kung Fu Kids, Placa Dourada, Pôster, Kung Fu em Ação, Registro Visual e Retrato Oficial). A imagem comemorativa foi mantida no acervo sem criar promoções fictícias.
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <span className="font-semibold text-[#F5F3EF] block">
              Regras de Fidelidade Respeitadas:
            </span>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Sem invenção de preços, promoções ou matrícula grátis</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Horários preservados fielmente conforme a grade oficial</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Benefícios da prática descritos com equilíbrio e seriedade marcial</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Links diretos para Instagram (@fuzi.kungfu) e YouTube (@machado_22.62)</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl transition-colors cursor-pointer"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};
