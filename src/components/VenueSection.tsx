'use client';

import { motion } from 'framer-motion';
import { SYMPLA_URL } from '@/lib/constants';

const MAPS_URL = 'https://maps.google.com/?q=Delmar+Hotel+Av.+Santos+Dumont,+1500+-+Coroa+do+Meio,+Aracaju+-+SE,+49035-730';

export default function VenueSection() {
  return (
    <section
      className="flex flex-col gap-8 items-center px-[clamp(20px,6vw,72px)] py-[clamp(64px,9vw,120px)] overflow-hidden"
      style={{
        backgroundColor: '#FDFBF7',
        backgroundImage: 'url(/assets/pattern-floral-bg.png)',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[720px]"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[1px] w-6 bg-[#D4AF37]" />
          <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#D4AF37]">
            Data e local do evento
          </span>
          <span className="h-[1px] w-6 bg-[#D4AF37]" />
        </div>
        <h2
          className="m-0 mb-2 text-[clamp(26px,3.6vw,40px)] font-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#3D1220',
          }}
        >
          Delmar Hotel · Aracaju/SE
        </h2>
        <p className="text-[16px] font-semibold text-[#8B1E3F] m-0">
          24 de Outubro de 2026 · Das 08:00 às 19:30
        </p>
      </motion.div>

      {/* Card do Endereço Completo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[820px] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center gap-4 bg-[#F7F1E8] border border-[rgba(212,175,55,0.4)] shadow-md"
      >
        <div className="p-3 bg-[#8B1E3F]/10 rounded-full text-[#8B1E3F]">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-1">
          <h3
            className="text-[20px] font-bold text-[#3D1220] m-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Endereço Completo
          </h3>
          <p className="text-[16px] font-medium text-[#3D1220] m-0 max-w-[540px]">
            Av. Santos Dumont, 1500 - Coroa do Meio, Aracaju - SE, CEP 49035-730
          </p>
        </div>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[14px] font-bold text-[#8B1E3F] hover:text-[#6B1730] border border-[#8B1E3F]/30 hover:border-[#8B1E3F] bg-white px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Abrir no Google Maps
        </a>
      </motion.div>

      {/* Botão de Compra */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-2"
      >
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-bold px-9 py-4 transition-all duration-200 rounded-md shadow-md hover:shadow-lg inline-block"
          style={{ backgroundColor: '#8B1E3F', color: '#FDFBF7' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#6B1730')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#8B1E3F')}
        >
          Garantir Meu Ingresso
        </a>
      </motion.div>
    </section>
  );
}
