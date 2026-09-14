'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LeadModalContextType {
  isOpen: boolean;
  origin: string;
  openLeadModal: (originName?: string) => void;
  closeLeadModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState('');

  const openLeadModal = (originName: string = '') => {
    setOrigin(originName);
    setIsOpen(true);
  };

  const closeLeadModal = () => {
    setIsOpen(false);
  };

  return (
    <LeadModalContext.Provider value={{ isOpen, origin, openLeadModal, closeLeadModal }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error('useLeadModal deve ser utilizado dentro de um LeadModalProvider');
  }
  return context;
}
