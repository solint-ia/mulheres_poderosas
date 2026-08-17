'use client';

import { useState, useRef, useEffect } from 'react';
// import Link from 'next/link'; // Comentado temporariamente até envio dos dados biográficos completos
import { motion } from 'framer-motion';
import { speakerGroups, Speaker } from '@/lib/data';

function getInitials(name: string): string {
  const parts = name.replace(/^(Dr\.|Dra\.|Dr)\s/i, '').split(' ');
  return parts.slice(0, 2).map((p) => p[0]).join('').toUpperCase();
}

function getInstagramHandle(url?: string): string {
  if (!url) return '';
  const cleanUrl = url.trim().replace(/\/+$/, '');
  const match = cleanUrl.match(/instagram\.com\/([a-zA-Z0-9._]+)/i);
  if (match && match[1] && match[1].toLowerCase() !== 'instagram') {
    return `@${match[1]}`;
  }
  if (cleanUrl.startsWith('@')) {
    return cleanUrl;
  }
  return 'Instagram';
}

function SpeakerSocialAction({ speaker, isSpecial = false }: { speaker: Speaker; isSpecial?: boolean }) {
  if (speaker.socials?.instagram) {
    const handle = getInstagramHandle(speaker.socials.instagram);
    return (
      <div className={`mt-4 pt-3 border-t w-full ${isSpecial ? 'border-[#D4AF37]/30' : 'border-[rgba(139,30,63,0.12)]'}`}>
        <a
          href={speaker.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          title={`Ver perfil de ${speaker.name} no Instagram`}
          className={`w-full flex items-center justify-center gap-2 text-[12.5px] font-bold tracking-wide transition-all duration-200 rounded-lg py-2.5 px-3 group/insta ${
            isSpecial
              ? 'bg-[#D4AF37] text-[#2A0813] hover:bg-[#F3E5AB] hover:shadow-md hover:scale-[1.01] shadow-sm border border-[#F3E5AB]/40 font-extrabold'
              : 'border border-[rgba(139,30,63,0.12)] text-[#8B1E3F] bg-[#8B1E3F]/5 hover:bg-[#8B1E3F] hover:text-[#FDFBF7] shadow-sm'
          }`}
        >
          <svg className="w-4 h-4 shrink-0 fill-current transition-transform group-hover/insta:scale-110" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="truncate">{handle || 'Instagram'}</span>
        </a>
      </div>
    );
  }

  if (speaker.socials?.linkedin) {
    return (
      <div className={`mt-4 pt-3 border-t w-full ${isSpecial ? 'border-[#D4AF37]/30' : 'border-[rgba(139,30,63,0.12)]'}`}>
        <a
          href={speaker.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title={`Ver perfil de ${speaker.name} no LinkedIn`}
          className={`w-full flex items-center justify-center gap-2 text-[12.5px] font-bold tracking-wide transition-all duration-200 rounded-lg py-2.5 px-3 group/link ${
            isSpecial
              ? 'bg-[#D4AF37] text-[#2A0813] hover:bg-[#F3E5AB] hover:shadow-md hover:scale-[1.01] shadow-sm border border-[#F3E5AB]/40 font-extrabold'
              : 'border border-[rgba(139,30,63,0.12)] text-[#8B1E3F] bg-[#8B1E3F]/5 hover:bg-[#8B1E3F] hover:text-[#FDFBF7] shadow-sm'
          }`}
        >
          <svg className="w-4 h-4 shrink-0 fill-current transition-transform group-hover/link:scale-110" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
    );
  }

  return (
    <div
      className={`mt-4 pt-3 border-t w-full flex items-center justify-center gap-1.5 text-[12px] font-semibold py-2 ${
        isSpecial ? 'border-[#D4AF37]/30 text-[#D4AF37]' : 'border-[rgba(139,30,63,0.12)] text-[#5C4A50] opacity-70'
      }`}
    >
      <span>Palestrante Confirmado(a)</span>
    </div>
  );
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
            /* Comentado temporariamente o Link para página individual até envio dos dados biográficos completos:
            <Link
              key={sp.id}
              href={`/palestrantes/${sp.id}`}
              className={`group flex-none w-[82vw] max-w-[320px] snap-center flex flex-col rounded-xl border transition-all overflow-hidden cursor-pointer ${
                isMara
                  ? 'bg-[#3D1220] text-[#FDFBF7] border-[#D4AF37] shadow-xl ring-2 ring-[#D4AF37]/40'
                  : 'bg-[#FDFBF7] text-[#3D1220] border-[rgba(212,175,55,0.35)] shadow-md hover:border-[#D4AF37]'
              }`}
            >
            */
            <div
              key={sp.id}
              className={`group flex-none w-[82vw] max-w-[320px] snap-center flex flex-col rounded-xl border transition-all overflow-hidden ${
                isMara
                  ? 'bg-[#3D1220] text-[#FDFBF7] border-[#D4AF37] shadow-xl ring-2 ring-[#D4AF37]/40'
                  : 'bg-[#FDFBF7] text-[#3D1220] border-[rgba(212,175,55,0.35)] shadow-md'
              }`}
            >
              <SpeakerCardMedia speaker={sp} isSpecial={isMara} />
              <div className="p-5 flex flex-col justify-between flex-1 text-center">
                <div>
                  <div
                    className="mb-1 transition-colors"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: isMara ? 20 : 18,
                      color: isMara ? '#FDFBF7' : '#3D1220',
                    }}
                  >
                    {sp.name}
                  </div>
                  {sp.role && (
                    <div
                      className="text-[12px] font-semibold mb-2 opacity-85 leading-snug"
                      style={{
                        color: isMara ? '#E8D5CE' : '#8B1E3F',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      {sp.role}
                    </div>
                  )}
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                      fontWeight: 600,
                      fontSize: isMara ? 17 : 15.5,
                      lineHeight: 1.4,
                      color: isMara ? '#FDFBF7' : '#4A1B28',
                    }}
                  >
                    {sp.talk}
                  </div>
                </div>

                {/* Botão de ver página individual comentado temporariamente */}
                {/* 
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
                */}

                {/* Botão de Instagram / Rede Social */}
                <SpeakerSocialAction speaker={sp} isSpecial={isMara} />
              </div>
            </div>
            /* </Link> */
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
          Conheça os grandes especialistas e líderes que estarão presentes neste dia transformador.
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
                      /* Comentado temporariamente o Link para página individual até envio dos dados biográficos completos:
                      <Link
                        key={sp.id}
                        href={`/palestrantes/${sp.id}`}
                        className={`group flex flex-col items-center text-center rounded-xl border transition-all overflow-hidden cursor-pointer ${
                          isMara
                            ? 'w-full max-w-[380px] bg-[#3D1220] text-[#FDFBF7] border-[#D4AF37] shadow-xl hover:shadow-2xl hover:scale-[1.02] ring-2 ring-[#D4AF37]/40'
                            : 'bg-[#FDFBF7] text-[#3D1220] border-[rgba(212,175,55,0.35)] shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#D4AF37]'
                        }`}
                      >
                      */
                      <div
                        key={sp.id}
                        className={`group flex flex-col items-center text-center rounded-xl border transition-all overflow-hidden ${
                          isMara
                            ? 'w-full max-w-[380px] bg-[#3D1220] text-[#FDFBF7] border-[#D4AF37] shadow-xl hover:shadow-2xl hover:scale-[1.02] ring-2 ring-[#D4AF37]/40'
                            : 'bg-[#FDFBF7] text-[#3D1220] border-[rgba(212,175,55,0.35)] shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#D4AF37]'
                        }`}
                      >
                        <SpeakerCardMedia speaker={sp} isSpecial={isMara} />
                        <div className="p-5 sm:p-6 flex flex-col items-center justify-between flex-1 w-full">
                          <div>
                            <div
                              className="mb-1 transition-colors"
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                fontSize: isMara ? 21 : 18,
                                color: isMara ? '#FDFBF7' : '#3D1220',
                              }}
                            >
                              {sp.name}
                            </div>
                            {sp.role && (
                              <div
                                className="text-[12.5px] font-semibold mb-2.5 opacity-85 leading-snug"
                                style={{
                                  color: isMara ? '#E8D5CE' : '#8B1E3F',
                                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}
                              >
                                {sp.role}
                              </div>
                            )}
                            <div
                              style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontStyle: 'italic',
                                fontWeight: 600,
                                fontSize: isMara ? 18 : 16.5,
                                lineHeight: 1.4,
                                color: isMara ? '#FDFBF7' : '#4A1B28',
                              }}
                            >
                              {sp.talk}
                            </div>
                          </div>

                          {/* Botão de ver página individual comentado temporariamente */}
                          {/* 
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
                          */}

                          {/* Botão de Instagram / Rede Social */}
                          <SpeakerSocialAction speaker={sp} isSpecial={isMara} />
                        </div>
                      </div>
                      /* </Link> */
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
