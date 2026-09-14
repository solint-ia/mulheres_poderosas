'use client';

import { motion } from 'framer-motion';

function FloralOrn() {
  return (
    <div className="relative w-5 h-5">
      {[{l:7,t:0},{l:13.5,t:5},{l:11,t:12.5},{l:3,t:12.5},{l:0.5,t:5}].map((p, i) => (
        <span key={i} className="absolute rounded-full w-[6px] h-[6px]" style={{ left: p.l, top: p.t, backgroundColor: 'rgba(212,175,55,0.4)' }} />
      ))}
      <span className="absolute rounded-full w-[6px] h-[6px]" style={{ left: 7, top: 7, backgroundColor: '#D4AF37' }} />
    </div>
  );
}

export default function FinalCTA() {

  return (
    <section
      className="relative flex flex-col items-center gap-[22px] text-center px-[clamp(20px,6vw,72px)] py-[clamp(72px,10vw,130px)]"
      style={{ backgroundImage: 'radial-gradient(120% 140% at 50% 100%, #8B1E3F 0%, #6B1730 60%)' }}
    >
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mb-1"
        style={{ width: 'min(220px,50vw)', height: 1, backgroundImage: 'linear-gradient(90deg,transparent,#D4AF37,transparent)' }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <FloralOrn />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="max-w-[760px] m-0"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: 'clamp(28px,4vw,46px)',
          color: '#FDFBF7',
        }}
      >
        O próximo capítulo da sua história pode começar aqui.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-[600px] m-0"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(17px,2vw,21px)',
          color: '#E8D5CE',
        }}
      >
        Um dia para aprender, se conectar, se inspirar e lembrar da força que existe quando mulheres
        escolhem crescer juntas.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-2"
      >
        <a
          href="#ingressos"
          className="text-[15px] font-bold px-10 py-[18px] transition-colors duration-200 cursor-pointer inline-block"
          style={{ backgroundColor: '#D4AF37', color: '#3D1220', borderRadius: 2 }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#C9A227')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#D4AF37')}
        >
          Garantir Meu Ingresso
        </a>
      </motion.div>
    </section>
  );
}
