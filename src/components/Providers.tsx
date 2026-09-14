'use client';

import React from 'react';
import { LeadModalProvider } from '@/context/LeadModalContext';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LeadModalProvider>
      {children}
      <LeadCaptureModal />
    </LeadModalProvider>
  );
}
