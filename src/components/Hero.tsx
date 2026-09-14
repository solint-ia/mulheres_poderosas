'use client';

import { motion, Variants } from 'framer-motion';
import { useLeadModal } from '@/context/LeadModalContext';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay },
  }),
};

function FloralOrn() {
  return (
    <div className="relative w-5 h-5 flex-none">
      {[
        { left: 7, top: 0 }, { left: 13.5, top: 5 }, { left: 11, top: 12.5 },
        { left: 3, top: 12.5 }, { left: 0.5, top: 5 },
      ].map((pos, i) => (
        <span
          key={i}
          className="absolute rounded-full w-[6px] h-[6px]"
          style={{ left: pos.left, top: pos.top, backgroundColor: '#E8D5CE' }}
        />
      ))}
      <span
        className="absolute rounded-full w-[6px] h-[6px]"
        style={{ left: 7, top: 7, backgroundColor: '#D4AF37' }}
      />
    </div>
  );
}

export default function Hero() {
  const { openLeadModal } = useLeadModal();
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center text-center gap-6 px-[clamp(16px,5vw,64px)] pt-[clamp(40px,6vw,84px)] pb-[clamp(48px,7vw,96px)] min-h-[calc(100vh-84px)] justify-center bg-[#FDFBF7] bg-[url('/assets/plano-fundo-mobile.png')] md:bg-[url('/assets/pattern-floral-bg.png')] bg-[length:100%_100%] bg-no-repeat bg-center"
    >
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-[960px] w-full mx-auto">
        {/* Date Pill - Fully Responsive without text clipping */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10.5px] sm:text-[12px] font-bold tracking-[0.06em] sm:tracking-[0.12em] uppercase shadow-sm max-w-[calc(100vw-32px)] text-center leading-tight whitespace-normal"
          style={{
            border: '1px solid rgba(212,175,55,0.65)',
            backgroundColor: '#FFFFFF',
            color: '#8B1E3F',
          }}
        >
          <span className="w-[6px] h-[6px] rounded-full flex-none" style={{ backgroundColor: '#D4AF37' }} />
          <span>24 de Outubro de 2026 · Delmar Hotel · Aracaju/SE</span>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1} className="w-full flex justify-center">
          <img
            src="/assets/logo-full.png"
            alt="Dia das Mulheres Poderosas — Empreendedorismo Feminino 360°"
            className="w-[min(380px,78vw)] h-auto my-2 object-contain"
          />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="max-w-[880px] m-0 text-[clamp(24px,4.5vw,54px)] font-bold leading-[1.15]"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#3D1220',
          }}
        >
          Sua jornada empreendedora não precisa custar a sua saúde, beleza e equilíbrio.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="max-w-[680px] m-0 text-[clamp(16px,2vw,24px)] leading-[1.45] font-medium"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: '#8B1E3F',
          }}
        >
          O encontro 360° que reconecta Negócios, Saúde, Tecnologia, Estética e Liderança Feminina.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex gap-4 flex-wrap justify-center items-center mt-3 w-full"
        >
          <button
            type="button"
            onClick={() => openLeadModal()}
            className="w-full sm:w-auto text-[15px] font-bold tracking-[0.02em] px-9 py-4 transition-all duration-200 rounded-md text-center shadow-lg hover:shadow-xl cursor-pointer"
            style={{
              backgroundColor: '#8B1E3F',
              color: '#FDFBF7',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#6B1730')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#8B1E3F')}
          >
            Garantir Meu Ingresso
          </button>
          <a
            href="#pilares"
            className="w-full sm:w-auto text-[15px] font-semibold px-8 py-4 transition-all duration-200 rounded-md text-center bg-[#FFFFFF]/80 hover:bg-[#FFFFFF]"
            style={{
              border: '1px solid rgba(61,18,32,0.3)',
              color: '#3D1220',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = '#8B1E3F';
              el.style.color = '#8B1E3F';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(61,18,32,0.3)';
              el.style.color = '#3D1220';
            }}
          >
            Conhecer o Evento
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="relative mt-4"
          style={{ width: 'min(300px,60vw)', height: 1, backgroundImage: 'linear-gradient(90deg,transparent,#D4AF37,transparent)' }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <FloralOrn />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
