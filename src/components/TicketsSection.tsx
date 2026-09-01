'use client';

import { motion } from 'framer-motion';
import { SYMPLA_URL } from '@/lib/constants';
import { legacyPrograms } from '@/lib/data';

function GoldLine() {
  return <div className="h-[1px] my-2" style={{ backgroundColor: 'rgba(212,175,55,0.35)' }} />;
}

function CheckItem({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="text-[13.5px] leading-[1.5] flex items-start gap-2.5" style={{ color: light ? '#FDFBF7' : '#3D1220' }}>
      <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 flex-none" style={{ backgroundColor: light ? '#D4AF37' : '#8B1E3F' }} />
      <span>{children}</span>
    </div>
  );
}


export default function TicketsSection() {
  return (
    <section
      id="ingressos"
      className="flex flex-col gap-12 items-center px-[clamp(20px,6vw,72px)] py-[clamp(64px,9vw,120px)] overflow-hidden"
      style={{ backgroundColor: '#F7F1E8' }}
    >
      {/* Cabeçalho da Seção */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[680px]"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="h-[1px] w-8 bg-[#D4AF37]" />
          <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#D4AF37]">
            Ingressos Exclusivos
          </span>
          <span className="h-[1px] w-8 bg-[#D4AF37]" />
        </div>
        <h2
          className="m-0 mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(28px,3.6vw,44px)',
            color: '#3D1220',
          }}
        >
          Escolha a experiência que você quer viver
        </h2>
        <p
          className="m-0"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(18px,2.2vw,22px)',
            color: '#8B1E3F',
          }}
        >
          Não é sobre participar. É sobre a proximidade, o conforto e a transformação que você escolhe ter.
        </p>
      </motion.div>

      {/* Grid de Cards de Ingressos Estilizados */}
      <div className="flex flex-wrap items-stretch justify-center gap-8 w-full max-w-[1160px] relative z-10">

        {/* ESSENTIAL TICKET */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0 }}
          className="relative flex-1 min-w-[290px] max-w-[350px] flex flex-col justify-between p-8 rounded-xl bg-[#FFFFFF] border-2 border-[rgba(139,30,63,0.15)] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
          style={{
            borderTop: '5px solid #8B1E3F',
          }}
        >


          {/* Cabeçalho do Ticket */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-[#8B1E3F]">
                Passe Individual
              </span>
            </div>
            <h3 className="text-[26px] font-bold text-[#3D1220] m-0 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Essential
            </h3>
            <div className="flex items-baseline gap-1 my-3">
              <span className="text-[14px] font-bold text-[#8B1E3F]">R$</span>
              <span className="text-[36px] font-extrabold text-[#8B1E3F] leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                300
              </span>
            </div>
            <p className="text-[13.5px] leading-[1.6] text-[#5C4A50] m-0 mb-4">
              Viva a experiência do Dia das Mulheres Poderosas com acesso total às palestras.
            </p>
            
            {/* Linha serrilhada estilo ingresso */}
            <div className="w-full border-t-2 border-dashed border-[#8B1E3F]/20 my-4" />

            {/* Lista de Benefícios */}
            <div className="flex flex-col gap-3 my-2">
              <CheckItem>Acesso a toda a programação e palestras</CheckItem>
              <CheckItem>Kit Oficial do Participante</CheckItem>
              <CheckItem>Certificado Digital de Participação</CheckItem>
              <CheckItem>Acesso à área de expositores</CheckItem>
              <CheckItem>Networking durante os intervalos</CheckItem>
              <CheckItem>Participação nos sorteios dos patrocinadores</CheckItem>
            </div>
          </div>

          {/* Botão de Compra */}
          <div className="mt-8 pt-4 border-t border-[rgba(139,30,63,0.1)]">
            <a
              href={SYMPLA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-[14px] font-bold py-3.5 px-4 rounded-md transition-all duration-200 uppercase tracking-wider"
              style={{ border: '2px solid #8B1E3F', color: '#8B1E3F', backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = '#8B1E3F';
                el.style.color = '#FDFBF7';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = 'transparent';
                el.style.color = '#8B1E3F';
              }}
            >
              Garantir Essential
            </a>
          </div>
        </motion.div>

        {/* SIGNATURE VIP TICKET (DESTAQUE CENTRAL) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="relative flex-1 min-w-[300px] max-w-[370px] flex flex-col justify-between p-8 sm:p-9 rounded-xl bg-[#6B1730] text-[#FDFBF7] border-2 border-[#D4AF37] shadow-2xl hover:shadow-2xl transition-all sm:-translate-y-2 overflow-hidden ring-4 ring-[#D4AF37]/30"
        >


          {/* Cabeçalho do Ticket */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-[#D4AF37]">
                Experiência Premium VIP
              </span>
            </div>
            <h3 className="text-[28px] font-bold text-[#FDFBF7] m-0 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Signature
            </h3>
            <div className="flex items-baseline gap-1 my-3">
              <span className="text-[14px] font-bold text-[#D4AF37]">R$</span>
              <span className="text-[38px] font-extrabold text-[#D4AF37] leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                1.000
              </span>
            </div>
            <p className="text-[13.5px] leading-[1.6] text-[#E8D5CE] m-0 mb-4">
              Mais conforto, assentos privilegiados e proximidade dos palestrantes.
            </p>
            
            {/* Linha serrilhada estilo ingresso */}
            <div className="w-full border-t-2 border-dashed border-[#D4AF37]/40 my-4" />

            {/* Lista de Benefícios */}
            <div className="flex flex-col gap-3 my-2">
              <div className="text-[11.5px] font-extrabold uppercase tracking-wider text-[#D4AF37]">
                Tudo do Essential, mais:
              </div>
              <CheckItem light>Assentos reservados nas primeiras fileiras, com mesa</CheckItem>
              <CheckItem light>Foto oficial com Mara Maravilha</CheckItem>
              <CheckItem light>Acesso exclusivo a todos os palestrantes</CheckItem>
              <CheckItem light>Kit Premium Exclusivo + Brinde Especial</CheckItem>
              <CheckItem light>Certificado VIP impresso</CheckItem>
              <CheckItem light>Networking VIP com palestrantes e patrocinadores</CheckItem>
              <CheckItem light>Jantar VIP incluso</CheckItem>
            </div>
          </div>

          {/* Botão de Compra */}
          <div className="mt-8 pt-4 border-t border-[#D4AF37]/30">
            <a
              href={SYMPLA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-[14px] font-extrabold py-4 px-4 rounded-md transition-all duration-200 uppercase tracking-wider shadow-lg"
              style={{ backgroundColor: '#D4AF37', color: '#3D1220' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#C9A227')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#D4AF37')}
            >
              Garantir Signature VIP
            </a>
          </div>
        </motion.div>

        {/* LEGACY MASTER TICKET */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="relative flex-1 min-w-[300px] max-w-[360px] flex flex-col justify-between p-8 rounded-xl bg-[#3D1220] text-[#FDFBF7] border-2 border-[#D4AF37]/80 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden"
        >


          {/* Cabeçalho do Ticket */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-extrabold tracking-[0.16em] uppercase text-[#D4AF37]">
                Imersão Master Individual
              </span>
            </div>
            <h3 className="text-[28px] font-bold text-[#FDFBF7] m-0 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              Legacy
            </h3>
            <div className="flex items-baseline gap-1 my-3">
              <span className="text-[14px] font-bold text-[#D4AF37]">R$</span>
              <span className="text-[38px] font-extrabold text-[#D4AF37] leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                4.000
              </span>
            </div>
            <p className="text-[13.5px] leading-[1.65] text-[#E8D5CE] m-0 mb-4">
              Tudo do Signature + 1 Programa Master de Desenvolvimento à sua escolha:
            </p>

            {/* Linha serrilhada estilo ingresso */}
            <div className="w-full border-t-2 border-dashed border-[#D4AF37]/30 my-4" />

            {/* Programas Exclusivos Grid */}
            <div className="grid grid-cols-2 gap-2 my-3">
              {legacyPrograms.map((prog, idx) => {
                const isLastOdd = idx === legacyPrograms.length - 1 && legacyPrograms.length % 2 !== 0;
                return (
                  <div
                    key={prog.title}
                    className={`p-2.5 rounded bg-[#6B1730]/60 border border-[#D4AF37]/40 flex flex-col justify-center ${
                      isLastOdd ? 'col-span-2 text-center' : ''
                    }`}
                  >
                    <div className="text-[11.5px] font-bold text-[#D4AF37] leading-tight mb-1">
                      {prog.title}
                    </div>
                    <div className="text-[10.5px] leading-tight text-[#E8D5CE]">
                      {prog.speaker}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Botão de Compra */}
          <div className="mt-8 pt-4 border-t border-[#D4AF37]/30">
            <a
              href={SYMPLA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-[14px] font-extrabold py-4 px-4 rounded-md transition-all duration-200 uppercase tracking-wider"
              style={{ backgroundColor: '#D4AF37', color: '#3D1220' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#C9A227')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#D4AF37')}
            >
              Garantir Master Legacy
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
