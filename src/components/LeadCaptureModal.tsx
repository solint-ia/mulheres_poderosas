'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ArrowRight, Loader2, User, Phone, Sparkles } from 'lucide-react';
import { useLeadModal } from '@/context/LeadModalContext';
import { SYMPLA_URL } from '@/lib/constants';
import { event as fbEvent } from '@/lib/fpixel';

export default function LeadCaptureModal() {
  const { isOpen, origin, closeLeadModal } = useLeadModal();
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Limpa estados ao fechar ou abrir
  useEffect(() => {
    if (isOpen) {
      setNome('');
      setWhatsapp('');
      setErrorMsg('');
      setLoading(false);
      // Trava scroll do body
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Máscara brasileira de telefone (10 ou 11 dígitos)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 11);
    let formatted = '';

    if (raw.length === 0) {
      formatted = '';
    } else if (raw.length <= 2) {
      formatted = `(${raw}`;
    } else if (raw.length <= 6) {
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2)}`;
    } else if (raw.length <= 10) {
      // Formato fixo antigo: (XX) XXXX-XXXX
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 6)}-${raw.slice(6)}`;
    } else {
      // Formato celular: (XX) XXXXX-XXXX
      formatted = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7)}`;
    }

    setWhatsapp(formatted);
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || nome.trim().length < 3) {
      setErrorMsg('Por favor, informe seu nome.');
      return;
    }

    const digitsOnly = whatsapp.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setErrorMsg('Por favor, informe um WhatsApp válido.');
      return;
    }

    // Registra evento de conversão Lead no Meta Pixel
    fbEvent('Lead', {
      content_name: origin || 'Ingresso Geral',
    });

    // Pre-abertura síncrona da nova janela no clique para prevenir bloqueador de popups
    const symplaWindow = typeof window !== 'undefined' ? window.open('', '_blank') : null;
    if (symplaWindow) {
      symplaWindow.opener = null;
    }

    setLoading(true);
    setErrorMsg('');

    // Redirecionamento seguro abrindo em outra janela
    const redirectToSympla = () => {
      if (symplaWindow && !symplaWindow.closed) {
        symplaWindow.location.href = SYMPLA_URL;
      } else {
        window.open(SYMPLA_URL, '_blank', 'noopener,noreferrer');
      }
      setLoading(false);
      closeLeadModal();
    };

    try {
      // Envia os dados para a API com timeout de segurança de 3 segundos
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: nome.trim(),
          whatsapp: whatsapp.trim(),
          origem: origin || 'Ingresso Geral',
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      // Redireciona imediatamente após salvar
      redirectToSympla();
    } catch (err) {
      console.warn('Salvamento em cache expirou ou falhou, prosseguindo com compra:', err);
      // Mesmo com erro de rede ou timeout no Redis, nunca bloqueia a compra do cliente!
      redirectToSympla();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop escuro com blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLeadModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Card do Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[480px] bg-[#FDFBF7] rounded-2xl shadow-2xl border-2 border-[#D4AF37]/40 overflow-hidden z-10"
          >
            {/* Faixa decorativa superior */}
            <div className="h-2 bg-gradient-to-r from-[#8B1E3F] via-[#D4AF37] to-[#8B1E3F]" />

            {/* Botão Fechar */}
            <button
              onClick={closeLeadModal}
              disabled={loading}
              className="absolute top-4 right-4 p-2 text-[#8A7A80] hover:text-[#3D1220] transition-colors rounded-full hover:bg-black/5"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {/* Badge da seleção (somente para ingressos específicos de cards) */}
              {origin && !origin.toLowerCase().includes('cta') && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E3F]/10 border border-[#8B1E3F]/20 text-[#8B1E3F] text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{origin}</span>
                </div>
              )}

              {/* Título */}
              <h2
                className="text-2xl sm:text-[26px] font-bold text-[#3D1220] tracking-tight leading-tight m-0 mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Quase lá! Vamos garantir seu lugar?
              </h2>

              <p className="text-[#5C4A50] text-[13.5px] leading-relaxed mb-6">
                Informe seu nome e WhatsApp para confirmar a reserva e ser direcionado(a) com segurança à página oficial do Sympla.
              </p>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Campo Nome */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D1220] mb-1.5">
                    Nome *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A7A80]">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => {
                        setNome(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      placeholder="Ex: Ana Maria Silva"
                      disabled={loading}
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-[#E8D5CE] text-[#3D1220] text-sm focus:outline-none focus:border-[#8B1E3F] focus:ring-2 focus:ring-[#8B1E3F]/20 transition-all placeholder:text-[#8A7A80]/60"
                    />
                  </div>
                </div>

                {/* Campo WhatsApp */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3D1220] mb-1.5">
                    WhatsApp *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8A7A80]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={handlePhoneChange}
                      placeholder="(79) 99999-9999"
                      disabled={loading}
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-lg border border-[#E8D5CE] text-[#3D1220] text-sm focus:outline-none focus:border-[#8B1E3F] focus:ring-2 focus:ring-[#8B1E3F]/20 transition-all placeholder:text-[#8A7A80]/60"
                    />
                  </div>
                </div>

                {/* Mensagem de Erro */}
                {errorMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 rounded-md p-2.5"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                {/* Botão de Envio */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-4 px-6 rounded-lg font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                  style={{
                    backgroundColor: '#8B1E3F',
                    color: '#FDFBF7',
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) (e.currentTarget as HTMLElement).style.backgroundColor = '#6B1730';
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) (e.currentTarget as HTMLElement).style.backgroundColor = '#8B1E3F';
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
                      <span>Processando e abrindo Sympla...</span>
                    </>
                  ) : (
                    <>
                      <span>Prosseguir para o Sympla</span>
                      <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                    </>
                  )}
                </button>
              </form>

              {/* Informação de segurança */}
              <div className="mt-5 pt-4 border-t border-[#E8D5CE]/60 flex items-center justify-center gap-2 text-center text-xs text-[#8A7A80]">
                <Lock className="w-3.5 h-3.5 text-[#1B4332]" />
                <span>Ambiente Seguro. Seus dados nunca serão compartilhados.</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
