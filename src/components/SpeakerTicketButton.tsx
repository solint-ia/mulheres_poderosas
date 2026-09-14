'use client';

import React from 'react';
import Link from 'next/link';

export default function SpeakerTicketButton({ speakerName: _speakerName }: { speakerName?: string }) {
  return (
    <Link
      href="/#ingressos"
      className="w-full sm:w-auto whitespace-nowrap text-[14.5px] font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all text-center cursor-pointer inline-block"
      style={{ backgroundColor: '#8B1E3F', color: '#FDFBF7' }}
    >
      Garantir Meu Ingresso
    </Link>
  );
}
