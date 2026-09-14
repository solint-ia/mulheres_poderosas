'use client';

import React from 'react';
import { useLeadModal } from '@/context/LeadModalContext';

export default function SpeakerTicketButton({ speakerName }: { speakerName: string }) {
  const { openLeadModal } = useLeadModal();

  return (
    <button
      type="button"
      onClick={() => openLeadModal(`Palestrante: ${speakerName}`)}
      className="w-full sm:w-auto whitespace-nowrap text-[14.5px] font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all text-center cursor-pointer"
      style={{ backgroundColor: '#8B1E3F', color: '#FDFBF7' }}
    >
      Garantir Meu Ingresso
    </button>
  );
}
