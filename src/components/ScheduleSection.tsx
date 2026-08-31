'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { shift0Rows, shift1Rows, ScheduleRow } from '@/lib/data';

function ScheduleIcon({ type, icon }: { type?: string; icon?: string }) {
  if (icon === 'coffee' || type === 'credenciamento' || type === 'coffeebreak') {
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
        />
      </svg>
    );
  }
  if (icon === 'users' || type === 'conexao') {
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    );
  }
  if (icon === 'lunch' || type === 'almoco') {
    return (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    );
  }
  if (icon === 'sparkle' || type === 'encerramento') {
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z" />
      </svg>
    );
  }
  return null;
}

export default function ScheduleSection() {
  const [activeShift, setActiveShift] = useState(0);
  const rows: ScheduleRow[] = activeShift === 0 ? shift0Rows : shift1Rows;

  return (
    <section
      id="programacao"
      className="flex flex-col gap-10 items-center px-[clamp(16px,5vw,72px)] py-[clamp(56px,7vw,96px)]"
      style={{
        backgroundColor: '#FDFBF7',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[680px]"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[1px] w-6 bg-[#D4AF37]" />
          <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#D4AF37]">
            Cronograma Oficial
          </span>
          <span className="h-[1px] w-6 bg-[#D4AF37]" />
        </div>
        <h2
          className="m-0 mb-3 text-[clamp(26px,3.6vw,44px)] font-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#3D1220',
          }}
        >
          24 de outubro · 2 turnos
        </h2>
        <div className="inline-block px-4 sm:px-5 py-2 rounded-full text-[12px] sm:text-[13.5px] font-bold bg-[#E8D5CE] text-[#6B1730] shadow-sm">
          Imersão completa das 08:00 às 19:30 · Palestras, conexões e experiências exclusivas
        </div>
      </motion.div>

      {/* Selector de Turnos (Tabs Compactas & Elegantes) */}
      <div className="w-full max-w-[560px] grid grid-cols-2 p-1.5 rounded-full bg-white border border-[rgba(139,30,63,0.2)] shadow-md gap-1">
        {[
          { title: '1º Turno (Manhã)', time: '08:00 às 12:00 (Almoço até 14h)', idx: 0 },
          { title: '2º Turno (Tarde)', time: '14:00 às 19:30 (Encerramento)', idx: 1 },
        ].map(({ title, time, idx }) => (
          <button
            key={idx}
            type="button"
            className="flex flex-col items-center justify-center py-2 sm:py-2.5 px-2 sm:px-4 rounded-full transition-all duration-200 cursor-pointer border-none"
            style={{
              backgroundColor: activeShift === idx ? '#8B1E3F' : 'transparent',
              color: activeShift === idx ? '#FDFBF7' : '#8B1E3F',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
            onClick={() => setActiveShift(idx)}
          >
            <span className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.03em] uppercase leading-tight">
              {title}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium opacity-90 leading-tight mt-0.5">
              {time}
            </span>
          </button>
        ))}
      </div>

      {/* Timeline Aberta e Moderna com Badges e Detalhes */}
      <div className="w-full max-w-[880px] mt-2 px-2 sm:px-4">
        <motion.div
          key={activeShift}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative flex flex-col gap-6 sm:gap-7 pl-6 sm:pl-12"
        >
          {/* Linha vertical condutora com gradiente dourado */}
          <div
            className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-[3px] rounded-full"
            style={{
              background: 'linear-gradient(180deg, #D4AF37 0%, #8B1E3F 100%)',
            }}
          />

          {rows.map((row, i) => {
            const isSpecial = row.categoryType === 'encerramento';
            const isBreak =
              row.categoryType === 'credenciamento' ||
              row.categoryType === 'conexao' ||
              row.categoryType === 'almoco' ||
              row.categoryType === 'coffeebreak';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`relative flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-7 p-4 sm:p-5 rounded-2xl transition-all border shadow-sm hover:shadow-md ${
                  isSpecial
                    ? 'bg-gradient-to-br from-[#3D1220] via-[#5C1428] to-[#2A0813] text-[#FDFBF7] border-[#D4AF37] ring-2 ring-[#D4AF37]/30'
                    : isBreak
                    ? 'bg-[#E8D5CE]/35 border-[rgba(212,175,55,0.35)] hover:bg-[#E8D5CE]/60'
                    : 'bg-[#F7F1E8]/40 hover:bg-[#F7F1E8]/90 border-[rgba(212,175,55,0.25)]'
                }`}
              >
                {/* Ponto reluzente na linha do tempo */}
                <span
                  className="absolute -left-[23px] sm:-left-[39px] top-5 sm:top-6 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full shadow-md flex items-center justify-center ring-4 ring-[#FDFBF7]"
                  style={{ backgroundColor: isSpecial ? '#D4AF37' : isBreak ? '#8B1E3F' : '#D4AF37' }}
                >
                  <span
                    className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${
                      isSpecial ? 'bg-[#3D1220]' : isBreak ? 'bg-[#FDFBF7]' : '#3D1220'
                    }`}
                  />
                </span>

                {/* Horário e Badge da Atividade */}
                <div className="flex flex-row sm:flex-col items-start justify-between sm:justify-start gap-1.5 min-w-[130px] sm:min-w-[140px] flex-none">
                  <div
                    className={`text-[13px] sm:text-[14px] font-extrabold tracking-[0.05em] uppercase pt-0.5 ${
                      isSpecial ? 'text-[#D4AF37]' : 'text-[#8B1E3F]'
                    }`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {row.time}
                  </div>

                  {row.categoryTitle && (
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] sm:text-[10.5px] font-extrabold tracking-wider uppercase ${
                        isSpecial
                          ? 'bg-[#D4AF37] text-[#2A0813]'
                          : isBreak
                          ? 'bg-[#8B1E3F] text-[#FDFBF7]'
                          : 'bg-[#D4AF37]/20 text-[#8B1E3F] border border-[#D4AF37]/40'
                      }`}
                    >
                      <ScheduleIcon type={row.categoryType} icon={row.icon} />
                      <span>{row.categoryTitle}</span>
                    </div>
                  )}
                </div>

                {/* Conteúdo: Palestrantes, Temas ou Descrição do Momento */}
                <div className="flex flex-col gap-3.5 flex-1">
                  {/* Descrição para momentos de intervalo / networking */}
                  {row.description && (
                    <p
                      className={`m-0 text-[14px] sm:text-[15px] font-medium leading-relaxed ${
                        isSpecial ? 'text-[#E8D5CE]' : 'text-[#5C4A50]'
                      }`}
                    >
                      {row.description}
                    </p>
                  )}

                  {/* Lista de Palestrantes / Temas */}
                  {row.items && row.items.length > 0 && (
                    <div className="flex flex-col gap-3">
                      {row.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex flex-col gap-0.5">
                          {item.speaker && (
                            <div
                              className={`text-[16px] sm:text-[17.5px] font-bold ${
                                isSpecial ? 'text-[#FDFBF7]' : 'text-[#3D1220]'
                              }`}
                              style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                              {item.speaker}
                            </div>
                          )}
                          {item.talk && (
                            <div
                              className={`text-[15px] sm:text-[16.5px] font-bold leading-[1.4] ${
                                isSpecial ? 'text-[#D4AF37]' : 'text-[#8B1E3F]'
                              }`}
                              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
                            >
                              {item.talk}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
