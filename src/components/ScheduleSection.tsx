'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { shift0Rows, shift1Rows } from '@/lib/data';

export default function ScheduleSection() {
  const [activeShift, setActiveShift] = useState(0);
  const rows = activeShift === 0 ? shift0Rows : shift1Rows;

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
        <div className="inline-block px-4 sm:px-5 py-2 rounded-full text-[12.5px] sm:text-[13.5px] font-bold bg-[#E8D5CE] text-[#6B1730] shadow-sm">
          Imersão completa com duração total de 8 horas de conteúdo rico e experiência
        </div>
      </motion.div>

      {/* Selector de Turnos (Tabs Compactas & Elegantes) */}
      <div className="w-full max-w-[540px] grid grid-cols-2 p-1.5 rounded-full bg-white border border-[rgba(139,30,63,0.2)] shadow-md gap-1">
        {[
          { title: '1º Turno (Manhã)', time: '09:00 às 12:10', idx: 0 },
          { title: '2º Turno (Tarde)', time: '13:50 às 18:30', idx: 1 },
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
            <span className="text-[10.5px] sm:text-[11.5px] font-medium opacity-90 leading-tight">
              {time}
            </span>
          </button>
        ))}
      </div>

      {/* Timeline Aberta e Moderna com Nome e Tema da Apresentação */}
      <div className="w-full max-w-[840px] mt-2 px-2 sm:px-4">
        <motion.div
          key={activeShift}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative flex flex-col gap-6 sm:gap-8 pl-6 sm:pl-12"
        >
          {/* Linha vertical condutora com gradiente dourado */}
          <div
            className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-[3px] rounded-full"
            style={{
              background: 'linear-gradient(180deg, #D4AF37 0%, #8B1E3F 100%)',
            }}
          />

          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="relative flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-8 p-4 sm:p-5 rounded-2xl bg-[#F7F1E8]/40 hover:bg-[#F7F1E8]/90 transition-all border border-[rgba(212,175,55,0.25)] shadow-sm hover:shadow-md"
            >
              {/* Ponto reluzente na linha do tempo */}
              <span
                className="absolute -left-[23px] sm:-left-[39px] top-5 sm:top-6 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full shadow-md flex items-center justify-center ring-4 ring-[#FDFBF7]"
                style={{ backgroundColor: '#D4AF37' }}
              >
                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#3D1220]" />
              </span>

              {/* Horário em Destaque */}
              <div
                className="text-[13px] sm:text-[13.5px] font-extrabold tracking-[0.08em] uppercase text-[#8B1E3F] min-w-[120px] sm:min-w-[130px] flex-none pt-0.5"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {row.time}
              </div>

              {/* Palestrantes e Temas das Apresentações */}
              <div className="flex flex-col gap-3.5 flex-1">
                {row.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col gap-0.5">
                    <div
                      className="text-[16px] sm:text-[17px] font-bold text-[#3D1220]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.speaker}
                    </div>
                    <div
                      className="text-[15.5px] sm:text-[17px] font-bold leading-[1.4] text-[#8B1E3F]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
                    >
                      {item.talk}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
