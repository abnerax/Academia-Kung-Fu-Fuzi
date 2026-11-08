import React, { useState } from 'react';
import { WEEK_SCHEDULE, MODALITIES, ACADEMY_INFO } from '../data/academyData.ts';
import { Calendar, Clock, MessageCircle, AlertCircle } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  const currentDayOfWeek = new Date().getDay();
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(
    currentDayOfWeek === 0 ? 0 : currentDayOfWeek
  );
  const [viewMode, setViewMode] = useState<'dia' | 'modalidade'>('dia');

  const selectedDayData = WEEK_SCHEDULE.find((d) => d.dayIndex === selectedDayIndex) || WEEK_SCHEDULE[0];

  const scheduleWhatsappLink = `${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent(
    "Olá! Gostaria de consultar a disponibilidade de vagas e horários das turmas da Academia Fuzi."
  )}`;

  return (
    <section id="cronograma" className="py-20 sm:py-28 bg-[#111111] border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C71925] uppercase tracking-widest mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Grade Semanal de Treinos</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#F5F3EF] tracking-tight mb-4">
              Cronograma de Aulas
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed">
              Consulte os dias e horários das atividades. Para garantir a melhor recepção, converse com nossa equipe antes da primeira visita.
            </p>
          </div>

          {/* Toggle between By Day and By Modality */}
          <div className="inline-flex p-1 bg-[#181920] border border-[#292929] rounded-xl shrink-0">
            <button
              onClick={() => setViewMode('dia')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                viewMode === 'dia'
                  ? 'bg-[#C71925] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Por Dia da Semana
            </button>
            <button
              onClick={() => setViewMode('modalidade')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                viewMode === 'modalidade'
                  ? 'bg-[#C71925] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Por Modalidade
            </button>
          </div>
        </div>

        {viewMode === 'dia' ? (
          <div>
            {/* Day Selector Buttons */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-3 mb-8">
              {WEEK_SCHEDULE.map((item) => {
                const isSelected = selectedDayIndex === item.dayIndex;
                const isToday = currentDayOfWeek === item.dayIndex;

                return (
                  <button
                    key={item.day}
                    onClick={() => setSelectedDayIndex(item.dayIndex)}
                    className={`py-3 px-1 sm:px-3 text-center rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#C71925] text-white border-[#C71925] shadow-md shadow-[#C71925]/20'
                        : 'bg-[#181920] text-neutral-300 hover:bg-[#292929] border-[#292929]'
                    }`}
                  >
                    <span className="block text-xs uppercase font-medium tracking-wider opacity-80">
                      {item.dayShort}
                    </span>
                    <span className="hidden sm:inline-block text-[11px] font-bold mt-0.5">
                      {item.day.split('-')[0]}
                    </span>
                    {isToday && (
                      <span className={`block text-[9px] uppercase tracking-wider font-extrabold mt-1 ${
                        isSelected ? 'text-amber-200' : 'text-[#C99A38]'
                      }`}>
                        Hoje
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Day Content */}
            <div className="bg-[#181920] border border-[#292929] rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#292929]">
                <div>
                  <span className="text-xs text-[#C99A38] uppercase tracking-widest font-semibold">
                    Aulas do dia
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F3EF] mt-0.5">
                    {selectedDayData.day}
                  </h3>
                </div>

                <div className="text-xs text-neutral-400">
                  {selectedDayData.sessions.length} {selectedDayData.sessions.length === 1 ? 'horário programado' : 'horários programados'}
                </div>
              </div>

              {/* Sessions List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {selectedDayData.sessions.map((session, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#111111] border border-[#292929] hover:border-[#C99A38]/40 flex items-start gap-4 transition-colors"
                  >
                    <div className="px-3 py-2 bg-[#181920] border border-[#292929] rounded-lg text-center shrink-0">
                      <span className="text-[10px] text-[#C99A38] block font-mono font-bold">HORÁRIO</span>
                      <span className="font-heading text-base font-bold text-[#F5F3EF] tabular-nums">
                        {session.time}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-bold text-sm text-[#F5F3EF] mb-1 truncate">
                        {session.modality}
                      </h4>
                      {session.notes ? (
                        <p className="text-xs text-[#C99A38] italic">{session.notes}</p>
                      ) : (
                        <p className="text-xs text-neutral-400">Turma presencial na Fuzi</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* View by Modality Table */
          <div className="bg-[#181920] border border-[#292929] rounded-2xl overflow-hidden">
            <div className="divide-y divide-[#292929]">
              {MODALITIES.map((mod) => (
                <div
                  key={mod.id}
                  className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#1f2029] transition-colors"
                >
                  <div className="max-w-md">
                    <span className="text-[11px] font-semibold text-[#C99A38] uppercase tracking-wider block mb-0.5">
                      {mod.categoryLabel}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#F5F3EF] mb-1">
                      {mod.name}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2">
                      {mod.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-2 bg-[#111111] border border-[#292929] rounded-xl text-xs font-medium text-neutral-200">
                      <Clock className="w-3.5 h-3.5 text-[#C71925] inline mr-1.5" />
                      <span>{mod.scheduleSummary}</span>
                    </div>

                    <a
                      href={`${ACADEMY_INFO.whatsappUrl}?text=${encodeURIComponent(mod.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#C71925] hover:bg-[#a6131c] rounded-lg transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Consultar</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mandatory Official Disclaimer & WhatsApp CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-[#181920] border border-[#292929]">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#C99A38] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm text-neutral-200 font-medium">
                Confirme a disponibilidade dos horários diretamente com a academia.
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Os horários são preservados conforme o cronograma oficial da escola e estão sujeitos a confirmação de turma.
              </p>
            </div>
          </div>

          <a
            href={scheduleWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#C71925] hover:bg-[#a6131c] rounded-xl transition-colors shadow-sm shrink-0 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar horários pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
