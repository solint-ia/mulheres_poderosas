'use client';

import { motion } from 'framer-motion';
import { TicketConfig, TicketId, ticketLeadOrigin } from '@/lib/tickets';
import { useLeadModal } from '@/context/LeadModalContext';

function CheckItem({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="text-[13.5px] leading-[1.5] flex items-start gap-2.5" style={{ color: light ? '#FDFBF7' : '#3D1220' }}>
      <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 flex-none" style={{ backgroundColor: light ? '#D4AF37' : '#8B1E3F' }} />
      <span>{children}</span>
    </div>
  );
}

// Visual de cada card — o conteúdo (textos, preço, benefícios) vem do painel admin
const cardThemes: Record<TicketId, { className: string; borderTop?: string; dark: boolean }> = {
  essential: {
    className:
      'relative flex-1 min-w-[290px] max-w-[350px] flex flex-col justify-between p-8 rounded-xl bg-[#FFFFFF] border-2 border-[rgba(139,30,63,0.15)] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden',
    borderTop: '5px solid #8B1E3F',
    dark: false,
  },
  // Destaque central
  signature: {
    className:
      'relative flex-1 min-w-[300px] max-w-[370px] flex flex-col justify-between p-8 sm:p-9 rounded-xl bg-[#6B1730] text-[#FDFBF7] border-2 border-[#D4AF37] shadow-2xl hover:shadow-2xl transition-all sm:-translate-y-2 overflow-hidden ring-4 ring-[#D4AF37]/30',
    dark: true,
  },
  solidario: {
    className:
      'relative flex-1 min-w-[290px] max-w-[350px] flex flex-col justify-between p-8 rounded-xl bg-[#FDF3F1] border-2 border-[rgba(139,30,63,0.15)] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden',
    borderTop: '5px solid #D4AF37',
    dark: false,
  },
};

function TicketCard({ ticket, index }: { ticket: TicketConfig; index: number }) {
  const { openLeadModal } = useLeadModal();
  const theme = cardThemes[ticket.id];
  const dark = theme.dark;
  const accent = dark ? '#D4AF37' : '#8B1E3F';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className={theme.className}
      style={theme.borderTop ? { borderTop: theme.borderTop } : undefined}
    >
      {/* Cabeçalho do Ticket */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] font-extrabold tracking-[0.16em] uppercase" style={{ color: accent }}>
            {ticket.label}
          </span>
        </div>
        <h3
          className={`${dark ? 'text-[28px]' : 'text-[26px]'} font-bold m-0 mb-1`}
          style={{ fontFamily: "'Playfair Display', serif", color: dark ? '#FDFBF7' : '#3D1220' }}
        >
          {ticket.name}
        </h3>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 my-3">
          <span className="flex items-baseline gap-1">
            <span className="text-[14px] font-bold" style={{ color: accent }}>R$</span>
            <span
              className={`${dark ? 'text-[38px]' : 'text-[36px]'} font-extrabold leading-none`}
              style={{ fontFamily: "'Playfair Display', serif", color: accent }}
            >
              {ticket.price}
            </span>
          </span>
          {ticket.extra && (
            <span
              className="text-[14px] font-extrabold px-2.5 py-1 rounded-md bg-[#D4AF37]/25 border border-[#D4AF37]/60"
              style={{ color: dark ? '#FDFBF7' : '#3D1220' }}
            >
              {ticket.extra}
            </span>
          )}
        </div>
        {ticket.description && (
          <p className="text-[13.5px] leading-[1.6] m-0 mb-4" style={{ color: dark ? '#E8D5CE' : '#5C4A50' }}>
            {ticket.description}
          </p>
        )}

        {/* Linha serrilhada estilo ingresso */}
        <div className={`w-full border-t-2 border-dashed my-4 ${dark ? 'border-[#D4AF37]/40' : 'border-[#8B1E3F]/20'}`} />

        {/* Lista de Benefícios */}
        <div className="flex flex-col gap-3 my-2">
          {ticket.benefitsTitle && (
            <div className="text-[11.5px] font-extrabold uppercase tracking-wider" style={{ color: accent }}>
              {ticket.benefitsTitle}
            </div>
          )}
          {ticket.benefits.map((benefit, i) => (
            <CheckItem key={i} light={dark}>{benefit}</CheckItem>
          ))}
        </div>
      </div>

      {/* Botão de Compra */}
      <div className={`mt-8 pt-4 border-t ${dark ? 'border-[#D4AF37]/30' : 'border-[rgba(139,30,63,0.1)]'}`}>
        {dark ? (
          <button
            type="button"
            onClick={() => openLeadModal(ticketLeadOrigin(ticket))}
            className="block w-full text-center text-[14px] font-extrabold py-4 px-4 rounded-md transition-all duration-200 uppercase tracking-wider shadow-lg cursor-pointer"
            style={{ backgroundColor: '#D4AF37', color: '#3D1220' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#C9A227')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#D4AF37')}
          >
            {ticket.buttonText}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => openLeadModal(ticketLeadOrigin(ticket))}
            className="block w-full text-center text-[14px] font-bold py-3.5 px-4 rounded-md transition-all duration-200 uppercase tracking-wider cursor-pointer"
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
            {ticket.buttonText}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function TicketsSection({ tickets }: { tickets: TicketConfig[] }) {
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
            Planos de Participação
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
          Vagas limitadas! Garanta já a sua presença e viva uma experiência transformadora.
        </p>
      </motion.div>

      {/* Grid de Cards de Ingressos Estilizados */}
      <div className="flex flex-wrap items-stretch justify-center gap-8 w-full max-w-[1160px] relative z-10">
        {tickets.map((ticket, index) => (
          <TicketCard key={ticket.id} ticket={ticket} index={index} />
        ))}
      </div>
    </section>
  );
}
