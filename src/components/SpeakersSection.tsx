'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { speakerGroups, Speaker } from '@/lib/data';

function getInitials(name: string): string {
  const parts = name.replace(/^(Dr\.|Dra\.|Dr)\s/i, '').split(' ');
  return parts.slice(0, 2).map((p) => p[0]).join('').toUpperCase();
}

function SpeakerCardMedia({ speaker, isSpecial = false }: { speaker: Speaker; isSpecial?: boolean }) {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(speaker.name);

  return (
    <div className="w-full aspect-square relative overflow-hidden bg-[#E8D5CE] border-b-2 border-[#D4AF37]">
      {/* Background decoration gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          isSpecial
            ? 'from-[#6B1730] via-[#8B1E3F] to-[#3D1220]'
            : 'from-[#F7F1E8] via-[#E8D5CE] to-[#E2C7BC]'
        }`}
      />

      {/* Speaker Image or Fallback */}
      {speaker.image && !imageError ? (
        <img
          src={speaker.image}
          alt={speaker.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center relative z-10 transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center relative z-10 p-4 text-center">
          <span
            className={`font-bold tracking-widest text-[42px] sm:text-[48px] select-none transition-transform duration-300 group-hover:scale-110 ${
              isSpecial ? 'text-[#D4AF37]' : 'text-[#8B1E3F]'
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {initials}
          </span>
          <span
            className={`text-[10px] uppercase font-bold tracking-[0.2em] mt-1 opacity-70 ${
              isSpecial ? 'text-[#FDFBF7]' : 'text-[#3D1220]'
            }`}
          >
            Palestrante
          </span>
        </div>
      )}

      {/* Special Guest Badge Overlay */}
      {isSpecial && (
        <div className="absolute top-3 right-3 z-20 bg-[#D4AF37] text-[#3D1220] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg tracking-wider border border-[#FDFBF7]">
          Convidada Especial
        </div>
      )}
    </div>
  );
}

function MobileGroupCarousel({ items, groupTitle }: { items: Speaker[]; groupTitle: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth > 0) {
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveIndex(Math.min(Math.max(0, index), items.length - 1));
    }
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  return (
    <div className="w-full relative flex flex-col gap-3">
      {/* Mobile Horizontal Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-1 px-4 -mx-4 scrollbar-none scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((sp) => {
          const isMara = sp.name.toLowerCase().includes('mara maravilha');

          return (
            <Link
              key={sp.id}
              href={`/palestrantes/${sp.id}`}
              className={`group flex-none w-[82vw] max-w-[320px] snap-center flex flex-col rounded-xl border transition-all overflow-hidden cursor-pointer ${
                isMara
                  ? 'bg-[#3D1220] text-[#FDFBF7] border-[#D4AF37] shadow-xl ring-2 ring-[#D4AF37]/40'
                  : 'bg-[#FDFBF7] text-[#3D1220] border-[rgba(212,175,55,0.35)] shadow-md hover:border-[#D4AF37]'
              }`}
            >
              <SpeakerCardMedia speaker={sp} isSpecial={isMara} />
              <div className="p-5 flex flex-col justify-between flex-1 text-center">
                <div>
                  <div
                    className="mb-1.5 group-hover:text-[#8B1E3F] transition-colors"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: isMara ? 20 : 18,
                      color: isMara ? '#FDFBF7' : '#3D1220',
                    }}
                  >
                    {sp.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                      fontSize: isMara ? 16 : 14.5,
                      lineHeight: 1.45,
                      color: isMara ? '#E8D5CE' : '#5C4A50',
                    }}
                  >
                    {sp.talk}
                  </div>
                </div>

                <div
                  className={`text-[11.5px] font-bold uppercase tracking-wider mt-3 pt-3 border-t flex items-center justify-center gap-1 group-hover:translate-x-0.5 transition-all ${
                    isMara
                      ? 'border-[#D4AF37]/30 text-[#D4AF37]'
                      : 'border-[rgba(139,30,63,0.1)] text-[#8B1E3F]'
                  }`}
                >
                  <span>Ver detalhes da palestra</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Carousel Navigation Controls (Mobile) */}
      {items.length > 1 && (
        <div className="flex items-center justify-between px-2 pt-1">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label="Palestrante anterior"
            className={`p-2 rounded-full border transition-all ${
              activeIndex === 0
                ? 'opacity-30 cursor-not-allowed border-gray-300 text-gray-400'
                : 'bg-[#FDFBF7] border-[#D4AF37] text-[#8B1E3F] shadow-sm active:scale-95'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-1.5">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Ir para palestrante ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-6 bg-[#8B1E3F]' : 'w-2 bg-[#D4AF37]/50'
                }`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={() => scrollToCard(Math.min(items.length - 1, activeIndex + 1))}
            disabled={activeIndex === items.length - 1}
            aria-label="Próximo palestrante"
            className={`p-2 rounded-full border transition-all ${
              activeIndex === items.length - 1
                ? 'opacity-30 cursor-not-allowed border-gray-300 text-gray-400'
                : 'bg-[#FDFBF7] border-[#D4AF37] text-[#8B1E3F] shadow-sm active:scale-95'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default function SpeakersSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="palestrantes"
      className="flex flex-col gap-12 sm:gap-14 items-center px-[clamp(16px,5vw,72px)] py-[clamp(64px,9vw,120px)] overflow-hidden"
      style={{ backgroundColor: '#F7F1E8' }}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[640px]"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="h-[1px] w-6 bg-[#D4AF37]" />
          <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#D4AF37]">
            Palestrantes Confirmados
          </span>
          <span className="h-[1px] w-6 bg-[#D4AF37]" />
        </div>
        <h2
          className="m-0 text-[clamp(28px,3.6vw,42px)] font-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#3D1220',
          }}
        >
          Quem vai estar com você
        </h2>
        <p className="text-[14px] text-[#5C4A50] mt-2 mb-0">
          Clique no card de qualquer palestrante para ver o tema completo e o perfil detalhado.
        </p>
      </motion.div>

      {/* Speaker Groups */}
      <div className="w-full max-w-[1140px] flex flex-col gap-12 sm:gap-14">
        {speakerGroups.map((group, gi) => {
          const isSpecialGroup =
            group.title.toLowerCase().includes('encerramento') || group.title.toLowerCase().includes('especial');

          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="w-full flex flex-col gap-6"
            >
              {/* Group Title Divider */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-[1px] flex-1 bg-[rgba(139,30,63,0.18)] max-w-[120px]" />
                <h3
                  className="m-0 text-center uppercase tracking-wider text-[18px] sm:text-[22px] font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isSpecialGroup ? '#8B1E3F' : '#6B1730',
                  }}
                >
                  {group.title}
                </h3>
                <div className="h-[1px] flex-1 bg-[rgba(139,30,63,0.18)] max-w-[120px]" />
              </div>

              {/* Group Content: Mobile Carousel OR Desktop/Tablet Grid */}
              {isMobile && !isSpecialGroup ? (
                <MobileGroupCarousel items={group.items} groupTitle={group.title} />
              ) : (
                <div
                  className={`w-full ${
                    isSpecialGroup
                      ? 'flex justify-center'
                      : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch'
                  }`}
                >
                  {group.items.map((sp) => {
                    const isMara = sp.name.toLowerCase().includes('mara maravilha');

                    return (
                      <Link
                        key={sp.id}
                        href={`/palestrantes/${sp.id}`}
                        className={`group flex flex-col items-center text-center rounded-xl border transition-all overflow-hidden cursor-pointer ${
                          isMara
                            ? 'w-full max-w-[380px] bg-[#3D1220] text-[#FDFBF7] border-[#D4AF37] shadow-xl hover:shadow-2xl hover:scale-[1.02] ring-2 ring-[#D4AF37]/40'
                            : 'bg-[#FDFBF7] text-[#3D1220] border-[rgba(212,175,55,0.35)] shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#D4AF37]'
                        }`}
                      >
                        <SpeakerCardMedia speaker={sp} isSpecial={isMara} />
                        <div className="p-5 sm:p-6 flex flex-col items-center justify-between flex-1 w-full">
                          <div>
                            <div
                              className="mb-1.5 group-hover:text-[#8B1E3F] transition-colors"
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                fontSize: isMara ? 21 : 18,
                                color: isMara ? '#FDFBF7' : '#3D1220',
                              }}
                            >
                              {sp.name}
                            </div>
                            <div
                              style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontStyle: 'italic',
                                fontSize: isMara ? 16.5 : 15,
                                lineHeight: 1.45,
                                color: isMara ? '#E8D5CE' : '#5C4A50',
                              }}
                            >
                              {sp.talk}
                            </div>
                          </div>

                          <div
                            className={`text-[11.5px] font-bold uppercase tracking-wider mt-4 pt-3 border-t w-full flex items-center justify-center gap-1 group-hover:translate-x-0.5 transition-all ${
                              isMara
                                ? 'border-[#D4AF37]/30 text-[#D4AF37]'
                                : 'border-[rgba(139,30,63,0.1)] text-[#8B1E3F]'
                            }`}
                          >
                            <span>Ver detalhes da palestra</span>
                            <span>→</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <p className="text-[12px] text-center mt-2" style={{ color: '#8A7A80' }}>
        * Fotos oficiais dos palestrantes serão adicionadas quando disponíveis.
      </p>
    </section>
  );
}
