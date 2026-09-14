'use client';

import { useEffect, useState } from 'react';
import { useLeadModal } from '@/context/LeadModalContext';

export default function StickyMobileCTA() {
  const { openLeadModal } = useLeadModal();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!isMobile) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] flex items-center justify-between gap-3 px-4 py-3"
      style={{
        backgroundColor: '#6B1730',
        boxShadow: '0 -8px 24px rgba(0,0,0,0.15)',
      }}
    >
      <span className="text-[13px] font-semibold" style={{ color: '#E8D5CE' }}>
        A partir de R$ 300
      </span>
      <button
        type="button"
        onClick={() => openLeadModal()}
        className="whitespace-nowrap text-[13.5px] font-bold px-[22px] py-3 transition-colors duration-200 cursor-pointer"
        style={{ backgroundColor: '#D4AF37', color: '#3D1220', borderRadius: 2 }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#C9A227')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#D4AF37')}
      >
        Garantir Meu Ingresso
      </button>
    </div>
  );
}
