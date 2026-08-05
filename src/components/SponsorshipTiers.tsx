'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { SponsorshipTier } from '@/lib/data';

interface SponsorshipTiersProps {
  tiers: SponsorshipTier[];
  whatsappUrl: string;
}

function CategoryIcon({ title }: { title: string }) {
  switch (title) {
    case 'Divulgação':
      return (
        <svg className="w-4 h-4 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      );
    case 'Experiência':
      return (
        <svg className="w-4 h-4 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case 'Marketing':
      return (
        <svg className="w-4 h-4 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      );
    case 'Relacionamento':
      return (
        <svg className="w-4 h-4 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SponsorshipTiers({ tiers, whatsappUrl }: SponsorshipTiersProps) {
  const [openTierId, setOpenTierId] = useState<string | null>(null);
  const [pageActiveTier, setPageActiveTier] = useState(tiers[0]?.id ?? 'diamante');
  const [mobileActiveTier, setMobileActiveTier] = useState(tiers[0]?.id ?? 'diamante');

  useEffect(() => {
    if (!openTierId) return;
    setMobileActiveTier(openTierId);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenTierId(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [openTierId]);

  const renderCard = (tier: SponsorshipTier, isMobileSingle: boolean = false) => {
    const isDiamante = tier.id === 'diamante';
    const whatsappMessage = encodeURIComponent(
      `Olá! Gostaria de reservar a ${tier.name} (${tier.price}) para patrocínio do Dia das Mulheres Poderosas.`
    );

    return (
      <div
        key={tier.id}
        className={`rounded-2xl transition-all duration-300 flex flex-col overflow-hidden relative shadow-lg ${
          isDiamante
            ? 'bg-[#3D1220] text-[#FDFBF7] ring-4 ring-[#D4AF37]/50 border-2 border-[#D4AF37] lg:-translate-y-2'
            : 'bg-[#FDFBF7] text-[#3D1220] border border-[rgba(212,175,55,0.4)]'
        } ${isMobileSingle ? 'w-full' : ''}`}
      >
        {tier.badge && (
          <div className="bg-[#D4AF37] text-[#3D1220] text-[11px] font-extrabold uppercase tracking-wider py-1.5 px-4 text-center">
            {tier.badge}
          </div>
        )}

        {/* Card Header */}
        <div className="p-6 sm:p-7 flex flex-col gap-2 border-b border-[rgba(212,175,55,0.2)] text-center">
          <h3
            className="text-[24px] sm:text-[26px] font-bold m-0"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: isDiamante ? '#FDFBF7' : '#3D1220',
            }}
          >
            {tier.name}
          </h3>

          <div className="flex items-baseline justify-center gap-1 my-1">
            <span
              className="text-[32px] sm:text-[36px] font-extrabold"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: isDiamante ? '#D4AF37' : '#8B1E3F',
              }}
            >
              {tier.price}
            </span>
          </div>

          {tier.maxSponsors && (
            <span
              className={`text-[11.5px] font-bold uppercase tracking-wider inline-block py-1 px-3 rounded-full mx-auto ${
                isDiamante
                  ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40'
                  : 'bg-[#8B1E3F]/10 text-[#8B1E3F]'
              }`}
            >
              {tier.maxSponsors}
            </span>
          )}
        </div>

        {/* Card Body - Streamlined Highlights */}
        <div className="p-6 sm:p-7 flex flex-col gap-4 flex-1">
          <span
            className="text-[12px] font-extrabold uppercase tracking-wider"
            style={{ color: isDiamante ? '#D4AF37' : '#8B1E3F' }}
          >
            Destaques Inclusos:
          </span>

          <div className="flex flex-col gap-3">
            {tier.highlights.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-[14px] leading-[1.45]">
                <span
                  className={`w-4 h-4 rounded-full flex items-center justify-center flex-none mt-0.5 text-[10px] font-bold ${
                    isDiamante
                      ? 'bg-[#D4AF37] text-[#3D1220]'
                      : 'bg-[#8B1E3F]/15 text-[#8B1E3F]'
                  }`}
                >
                  ✓
                </span>
                <span style={{ color: isDiamante ? '#E8D5CE' : '#5C4A50' }}>
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Trigger Modal Button */}
          <button
            type="button"
            onClick={() => setOpenTierId(tier.id)}
            className="mt-auto flex items-center justify-between text-[13px] font-bold pt-4 border-t border-[rgba(212,175,55,0.25)] hover:underline"
            style={{ color: isDiamante ? '#D4AF37' : '#8B1E3F' }}
          >
            <span>Ver todos os benefícios em detalhes</span>
            <span aria-hidden className="text-[14px]">↗</span>
          </button>
        </div>

        {/* Card Footer CTA */}
        <div className="p-6 sm:p-7 pt-0 mt-auto">
          <a
            href={`${whatsappUrl}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 text-[14.5px] font-bold py-3.5 px-5 rounded-xl shadow-md transition-all text-center hover:scale-[1.02] border"
            style={
              isDiamante
                ? { backgroundColor: '#D4AF37', color: '#3D1220', borderColor: '#FDFBF7' }
                : { backgroundColor: '#8B1E3F', color: '#FDFBF7', borderColor: '#8B1E3F' }
            }
          >
            <span>Quero Patrocinar</span>
            <span>→</span>
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* ─── Mobile Tier Selector Tabs (Visible on Mobile only) ───────── */}
      <div className="lg:hidden flex gap-2 mb-6 p-1.5 bg-[#F7F1E8] rounded-xl border border-[rgba(212,175,55,0.3)] shadow-sm">
        {tiers.map((t) => {
          const isActive = pageActiveTier === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setPageActiveTier(t.id)}
              className={`flex-1 text-[13.5px] font-bold py-2.5 px-2 rounded-lg transition-all text-center flex items-center justify-center gap-1 ${
                isActive
                  ? 'bg-[#3D1220] text-[#D4AF37] shadow-md ring-2 ring-[#D4AF37]/40'
                  : 'bg-white text-[#5C4A50] hover:text-[#8B1E3F] border border-[rgba(139,30,63,0.12)]'
              }`}
            >
              <span>{t.name.replace('Cota ', '')}</span>
            </button>
          );
        })}
      </div>

      {/* ─── Mobile View (renders single selected card) ───────────────── */}
      <div className="lg:hidden w-full">
        {tiers
          .filter((t) => t.id === pageActiveTier)
          .map((t) => renderCard(t, true))}
      </div>

      {/* ─── Desktop View (renders all 3 cards in grid) ───────────────── */}
      <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => renderCard(tier, false))}
      </div>

      {/* ─── Refined Comparison Modal ────────────────────────────────────── */}
      <AnimatePresence>
        {openTierId && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Dark Backdrop */}
            <motion.div
              className="fixed inset-0 bg-[#12050B]/80 backdrop-blur-md"
              onClick={() => setOpenTierId(null)}
            />

            {/* Modal Dialog Content Box */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Comparativo de benefícios das cotas de patrocínio"
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#FDFBF7] rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-[#D4AF37]/50 flex flex-col overflow-hidden z-10"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-4.5 bg-[#3D1220] text-[#FDFBF7] border-b border-[#D4AF37]/30 flex-none">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#D4AF37]">
                    Comparativo Completo
                  </span>
                  <h3
                    className="text-[18px] sm:text-[22px] font-bold m-0 mt-0.5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Benefícios por Cota de Patrocínio
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenTierId(null)}
                  aria-label="Fechar comparativo"
                  className="flex-none w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#3D1220] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Tab Switcher Bar (Mobile only) */}
              <div className="md:hidden flex gap-2 px-4 py-3 bg-[#2A0B15] border-b border-[#D4AF37]/30 flex-none">
                {tiers.map((tier) => {
                  const isActive = mobileActiveTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setMobileActiveTier(tier.id)}
                      className={`flex-1 text-[13px] font-bold py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                        isActive
                          ? 'bg-[#D4AF37] text-[#3D1220] shadow-md ring-2 ring-[#D4AF37]/50'
                          : 'bg-[#3D1220] text-[#E8D5CE] border border-[rgba(212,175,55,0.3)]'
                      }`}
                    >
                      <span>{tier.name.replace('Cota ', '')}</span>
                    </button>
                  );
                })}
              </div>

              {/* Modal Body Container */}
              <div className="overflow-y-auto flex-1 p-4 sm:p-8 bg-[#F7F1E8]">
                {/* ─── DESKTOP VIEW: 3 DISTINCT CARDS GRID ─────────────── */}
                <div className="hidden md:grid grid-cols-3 gap-6 items-stretch pb-6">
                  {tiers.map((tier) => {
                    const isDiamante = tier.id === 'diamante';
                    const whatsappMsg = encodeURIComponent(
                      `Olá! Gostaria de reservar a ${tier.name} (${tier.price}) para patrocínio do Dia das Mulheres Poderosas.`
                    );

                    return (
                      <div
                        key={tier.id}
                        className={`rounded-2xl p-6 flex flex-col justify-between shadow-md transition-all ${
                          isDiamante
                            ? 'bg-[#3D1220] text-[#FDFBF7] border-2 border-[#D4AF37] ring-2 ring-[#D4AF37]/40'
                            : 'bg-white text-[#3D1220] border-2 border-[rgba(212,175,55,0.35)]'
                        }`}
                      >
                        <div>
                          {/* Column Header */}
                          <div className="flex flex-col gap-1 pb-4 mb-5 border-b border-[rgba(212,175,55,0.25)] text-center">
                            <span
                              className="text-[20px] font-bold"
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                color: isDiamante ? '#FDFBF7' : '#3D1220',
                              }}
                            >
                              {tier.name}
                            </span>
                            <span
                              className="text-[22px] font-extrabold"
                              style={{ color: isDiamante ? '#D4AF37' : '#8B1E3F' }}
                            >
                              {tier.price}
                            </span>
                            {tier.maxSponsors && (
                              <span
                                className={`text-[11px] font-bold uppercase tracking-wider mt-1 px-2.5 py-0.5 rounded-full inline-block mx-auto ${
                                  isDiamante
                                    ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                                    : 'bg-[#8B1E3F]/10 text-[#8B1E3F]'
                                }`}
                              >
                                {tier.maxSponsors}
                              </span>
                            )}
                          </div>

                          {/* Categories List */}
                          <div className="flex flex-col gap-5">
                            {tier.categories.map((cat, ci) => (
                              <div key={ci} className="flex flex-col gap-2">
                                <div
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider w-fit"
                                  style={{
                                    backgroundColor: isDiamante ? 'rgba(212,175,55,0.15)' : 'rgba(139,30,63,0.08)',
                                    color: isDiamante ? '#D4AF37' : '#8B1E3F',
                                  }}
                                >
                                  <CategoryIcon title={cat.title} />
                                  <span>{cat.title}</span>
                                </div>

                                <div className="flex flex-col gap-2 pl-1">
                                  {cat.items.map((item, ii) => (
                                    <div key={ii} className="flex items-start gap-2 text-[13px] leading-[1.45]">
                                      <span
                                        className={`w-3.5 h-3.5 rounded-full flex items-center justify-center flex-none mt-0.5 text-[9px] font-bold ${
                                          isDiamante
                                            ? 'bg-[#D4AF37] text-[#3D1220]'
                                            : 'bg-[#8B1E3F] text-[#FDFBF7]'
                                        }`}
                                      >
                                        ✓
                                      </span>
                                      <span style={{ color: isDiamante ? '#E8D5CE' : '#4A1B28' }}>
                                        {item}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Column Footer CTA */}
                        <div className="mt-8 pt-4 border-t border-[rgba(212,175,55,0.2)]">
                          <a
                            href={`${whatsappUrl}?text=${whatsappMsg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-1.5 text-[13.5px] font-bold py-3 px-4 rounded-xl shadow-md transition-all text-center hover:scale-[1.02]"
                            style={
                              isDiamante
                                ? { backgroundColor: '#D4AF37', color: '#3D1220' }
                                : { backgroundColor: '#8B1E3F', color: '#FDFBF7' }
                            }
                          >
                            <span>Garantir Cota</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ─── MOBILE VIEW: ACTIVE TAB CARD ─────────────────────── */}
                <div className="block md:hidden pb-8">
                  {tiers
                    .filter((t) => t.id === mobileActiveTier)
                    .map((tier) => {
                      const isDiamante = tier.id === 'diamante';
                      const whatsappMsg = encodeURIComponent(
                        `Olá! Gostaria de reservar a ${tier.name} (${tier.price}) para patrocínio do Dia das Mulheres Poderosas.`
                      );

                      return (
                        <div
                          key={tier.id}
                          className={`rounded-2xl p-5 flex flex-col gap-6 shadow-xl ${
                            isDiamante
                              ? 'bg-[#3D1220] text-[#FDFBF7] border-2 border-[#D4AF37]'
                              : 'bg-white text-[#3D1220] border-2 border-[#D4AF37]/40'
                          }`}
                        >
                          {/* Active Mobile Tier Header */}
                          <div className="flex flex-col items-center gap-1 pb-4 border-b border-[rgba(212,175,55,0.25)] text-center">
                            <span
                              className="text-[22px] font-bold"
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                color: isDiamante ? '#FDFBF7' : '#3D1220',
                              }}
                            >
                              {tier.name}
                            </span>
                            <span
                              className="text-[26px] font-extrabold"
                              style={{ color: isDiamante ? '#D4AF37' : '#8B1E3F' }}
                            >
                              {tier.price}
                            </span>
                            {tier.maxSponsors && (
                              <span
                                className={`text-[11.5px] font-bold uppercase tracking-wider mt-1 px-3 py-0.5 rounded-full ${
                                  isDiamante
                                    ? 'bg-[#D4AF37]/20 text-[#D4AF37]'
                                    : 'bg-[#8B1E3F]/10 text-[#8B1E3F]'
                                }`}
                              >
                                {tier.maxSponsors}
                              </span>
                            )}
                          </div>

                          {/* Mobile Categories */}
                          <div className="flex flex-col gap-6">
                            {tier.categories.map((cat, ci) => (
                              <div key={ci} className="flex flex-col gap-2.5">
                                <div
                                  className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[12px] font-extrabold uppercase tracking-wider w-fit"
                                  style={{
                                    backgroundColor: isDiamante ? 'rgba(212,175,55,0.15)' : 'rgba(139,30,63,0.08)',
                                    color: isDiamante ? '#D4AF37' : '#8B1E3F',
                                  }}
                                >
                                  <CategoryIcon title={cat.title} />
                                  <span>{cat.title}</span>
                                </div>

                                <div className="flex flex-col gap-2 pl-1">
                                  {cat.items.map((item, ii) => (
                                    <div key={ii} className="flex items-start gap-2.5 text-[14px] leading-[1.5]">
                                      <span
                                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-none mt-0.5 text-[10px] font-bold ${
                                          isDiamante
                                            ? 'bg-[#D4AF37] text-[#3D1220]'
                                            : 'bg-[#8B1E3F] text-[#FDFBF7]'
                                        }`}
                                      >
                                        ✓
                                      </span>
                                      <span style={{ color: isDiamante ? '#E8D5CE' : '#3D1220' }}>
                                        {item}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Mobile Footer CTA */}
                          <div className="pt-4 border-t border-[rgba(212,175,55,0.25)]">
                            <a
                              href={`${whatsappUrl}?text=${whatsappMsg}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-2 text-[15px] font-bold py-4 px-5 rounded-xl shadow-lg transition-all text-center"
                              style={
                                isDiamante
                                  ? { backgroundColor: '#D4AF37', color: '#3D1220' }
                                  : { backgroundColor: '#8B1E3F', color: '#FDFBF7' }
                              }
                            >
                              <span>Quero Patrocinar esta Cota</span>
                              <span>→</span>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
