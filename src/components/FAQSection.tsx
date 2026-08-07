'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '@/lib/data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="flex flex-col gap-9 items-center px-[clamp(20px,6vw,72px)] py-[clamp(64px,9vw,120px)]"
      style={{ backgroundColor: '#F7F1E8' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[640px]"
      >
        <div className="text-[12px] font-bold tracking-[0.16em] uppercase mb-3" style={{ color: '#D4AF37' }}>
          Perguntas frequentes
        </div>
        <h2
          className="m-0"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 'clamp(26px,3.4vw,38px)',
            color: '#3D1220',
          }}
        >
          Tudo o que você precisa saber
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-[720px] flex flex-col"
      >
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} style={{ borderBottom: '1px solid rgba(139,30,63,0.15)' }}>
              <button
                className="w-full flex justify-between items-center gap-4 py-5 px-1 cursor-pointer bg-transparent border-none text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: '#3D1220',
                  }}
                >
                  {item.q}
                </span>
                <span
                  className="text-[20px] font-light transition-transform duration-200 flex-none select-none"
                  style={{
                    color: '#8B1E3F',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                  }}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-[14px] leading-[1.7] px-1 pb-5 m-0" style={{ color: '#5C4A50' }}>
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
