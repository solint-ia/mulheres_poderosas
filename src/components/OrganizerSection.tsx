'use client';

import { motion } from 'framer-motion';

export default function OrganizerSection() {
  return (
    <section
      className="w-full flex justify-center px-[clamp(20px,6vw,72px)] py-[clamp(56px,8vw,96px)] overflow-hidden"
      style={{ backgroundColor: '#123024' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="w-full max-w-[1200px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-stretch">
          {/* Lado Esquerdo: Realização (Maria Zélia) */}
          <div className="flex flex-col items-center justify-between text-center gap-6 px-4 md:px-12 py-4 md:border-r border-[rgba(212,175,55,0.25)]">
            <div className="flex flex-col items-center gap-5 w-full">
              <div className="text-[12px] font-extrabold tracking-[0.2em] uppercase text-[#D4AF37]">
                Realização
              </div>
              <div className="p-4 px-6 bg-[#FDFBF7] rounded-xl shadow-lg border border-[rgba(212,175,55,0.4)] flex items-center justify-center min-h-[140px] w-[min(260px,80%)]">
                <img
                  src="/assets/logo-organizer.png"
                  alt="Maria Zélia Eventos e Representações"
                  className="w-full max-w-[210px] sm:max-w-[230px] h-auto object-contain"
                />
              </div>
              <div>
                <h4
                  className="m-0 mb-1 text-[24px] sm:text-[26px] font-bold text-[#FDFBF7]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Maria Zélia
                </h4>
                <span
                  className="text-[17.5px] sm:text-[19px] font-bold text-[#D4AF37] tracking-wide block mt-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
                >
                  Eventos & Representações
                </span>
              </div>
            </div>
            <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#FDFBF7] font-normal m-0 max-w-[480px]">
              Idealizado pela Maria Zélia Eventos e Representações, com curadoria dedicada a conectar pessoas, negócios e propósito em experiências femininas de alto nível.
            </p>
          </div>

          {/* Lado Direito: Idealização & Visão (Mariane Rocha) */}
          <div className="flex flex-col items-center justify-between text-center gap-6 px-4 md:px-12 py-4">
            <div className="flex flex-col items-center gap-5 w-full">
              <div className="text-[12px] font-extrabold tracking-[0.2em] uppercase text-[#D4AF37]">
                Idealização & Visão
              </div>
              <div className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-xl border-2 border-[#D4AF37] ring-4 ring-[#D4AF37]/20 flex items-center justify-center bg-[#E8D5CE]">
                <img
                  src="/palestrantes/Mariana Rocha.jpeg"
                  alt="Mariana Rocha"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div>
                <h4
                  className="m-0 mb-1 text-[24px] sm:text-[26px] font-bold text-[#FDFBF7]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Mariana Rocha
                </h4>
                <span
                  className="text-[17.5px] sm:text-[19px] font-bold text-[#D4AF37] tracking-wide block mt-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
                >
                  Idealizadora do Dia das Mulheres Poderosas
                </span>
              </div>
            </div>
            <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[#FDFBF7] font-normal m-0 max-w-[480px]">
              Liderando com sensibilidade e foco no empoderamento feminino 360°, unindo empreendedorismo, saúde, tecnologia e estética em Aracaju.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
