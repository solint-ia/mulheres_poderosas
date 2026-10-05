'use client';

import React, { useEffect, useState } from 'react';
import { Loader2, Plus, RotateCcw, Save, Trash2 } from 'lucide-react';
import { TicketConfig } from '@/lib/tickets';

const inputClass =
  'w-full px-3 py-2 bg-[#FDFBF7] rounded-lg border border-[#E8D5CE] text-xs text-[#3D1220] focus:outline-none focus:border-[#8B1E3F] focus:ring-2 focus:ring-[#8B1E3F]/20 transition-all';

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#5C4A50] mb-1">{label}</span>
      {children}
      {hint && <span className="block text-[11px] text-[#8A7A80] mt-1">{hint}</span>}
    </label>
  );
}

export default function TicketsEditor({ password }: { password: string }) {
  const [tickets, setTickets] = useState<TicketConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [message, setMessage] = useState<{ type: 'ok' | 'error'; text: string } | null>(null);

  const request = async (method: 'GET' | 'PUT' | 'DELETE', body?: unknown) => {
    const res = await fetch('/api/admin/tickets', {
      method,
      headers: {
        'x-admin-password': password,
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.error || 'Erro ao comunicar com o servidor.');
    return data.tickets as TicketConfig[];
  };

  useEffect(() => {
    request('GET')
      .then(setTickets)
      .catch((err: Error) => setMessage({ type: 'error', text: err.message }))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateTicket = (id: string, patch: Partial<TicketConfig>) => {
    setTickets((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)));
    setDirty(true);
    setMessage(null);
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      setTickets(await request('PUT', { tickets }));
      setDirty(false);
      setMessage({ type: 'ok', text: 'Ingressos salvos. O site já exibe as novas informações.' });
    } catch (err) {
      setMessage({ type: 'error', text: (err as Error).message });
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    setSaving(true);
    setMessage(null);
    try {
      setTickets(await request('DELETE'));
      setDirty(false);
      setMessage({ type: 'ok', text: 'Ingressos restaurados para os textos padrão.' });
    } catch (err) {
      setMessage({ type: 'error', text: (err as Error).message });
    } finally {
      setSaving(false);
      setConfirmReset(false);
    }
  };

  if (loading) {
    return (
      <div className="py-16 text-center text-xs text-[#8A7A80] flex items-center justify-center gap-2">
        <Loader2 className="w-4 h-4 animate-spin text-[#8B1E3F]" />
        Carregando ingressos do Redis...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Barra de ações */}
      <div className="p-4 bg-white rounded-xl border border-[#E8D5CE] shadow-xs flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-[#5C4A50] m-0 max-w-xl">
          Edite os textos, preços e benefícios de cada ingresso. As alterações aparecem no site assim que você salvar.
        </p>

        <div className="flex items-center gap-2">
          {confirmReset ? (
            <>
              <span className="text-xs font-semibold text-rose-700">Apagar as edições salvas?</span>
              <button
                type="button"
                disabled={saving}
                onClick={handleReset}
                className="px-3 py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all cursor-pointer disabled:opacity-60"
              >
                Sim, restaurar
              </button>
              <button
                type="button"
                disabled={saving}
                onClick={() => setConfirmReset(false)}
                className="px-3 py-2 rounded-lg border border-[#E8D5CE] text-[#5C4A50] hover:bg-black/5 text-xs font-bold transition-all cursor-pointer"
              >
                Cancelar
              </button>
            </>
          ) : (
            <button
              type="button"
              disabled={saving}
              onClick={() => setConfirmReset(true)}
              className="px-3 py-2.5 rounded-lg border border-[#E8D5CE] text-[#5C4A50] hover:bg-black/5 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restaurar padrão</span>
            </button>
          )}

          <button
            type="button"
            disabled={saving || !dirty}
            onClick={handleSave}
            className="px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-white transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#8B1E3F' }}
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>{saving ? 'Salvando...' : 'Salvar alterações'}</span>
          </button>
        </div>
      </div>

      {message && (
        <p
          className={`text-xs font-semibold rounded-lg p-3 border m-0 ${
            message.type === 'ok'
              ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
              : 'text-rose-700 bg-rose-50 border-rose-200'
          }`}
        >
          {message.text}
        </p>
      )}

      {/* Um card de edição por ingresso */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="p-5 bg-white rounded-xl border border-[#E8D5CE] shadow-xs space-y-3.5">
            <h2
              className="text-lg font-bold text-[#3D1220] m-0"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {ticket.name || 'Ingresso'}
            </h2>

            <Field label="Nome do ingresso">
              <input
                className={inputClass}
                value={ticket.name}
                maxLength={60}
                onChange={(e) => updateTicket(ticket.id, { name: e.target.value })}
              />
            </Field>

            <Field label="Selo acima do nome">
              <input
                className={inputClass}
                value={ticket.label}
                maxLength={60}
                onChange={(e) => updateTicket(ticket.id, { label: e.target.value })}
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Preço (R$)" hint="Só o valor, ex.: 497">
                <input
                  className={inputClass}
                  value={ticket.price}
                  maxLength={20}
                  onChange={(e) => updateTicket(ticket.id, { price: e.target.value })}
                />
              </Field>
              <Field label="Complemento" hint="Opcional, ex.: + 2 kg de alimento">
                <input
                  className={inputClass}
                  value={ticket.extra}
                  maxLength={60}
                  onChange={(e) => updateTicket(ticket.id, { extra: e.target.value })}
                />
              </Field>
            </div>

            <Field label="Descrição">
              <textarea
                className={`${inputClass} resize-y`}
                rows={3}
                value={ticket.description}
                maxLength={300}
                onChange={(e) => updateTicket(ticket.id, { description: e.target.value })}
              />
            </Field>

            <Field label="Título da lista de benefícios" hint="Opcional">
              <input
                className={inputClass}
                value={ticket.benefitsTitle}
                maxLength={120}
                onChange={(e) => updateTicket(ticket.id, { benefitsTitle: e.target.value })}
              />
            </Field>

            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#5C4A50] mb-1">
                Benefícios
              </span>
              <div className="space-y-2">
                {ticket.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <input
                      className={inputClass}
                      value={benefit}
                      maxLength={200}
                      aria-label={`Benefício ${i + 1}`}
                      onChange={(e) =>
                        updateTicket(ticket.id, {
                          benefits: ticket.benefits.map((b, j) => (j === i ? e.target.value : b)),
                        })
                      }
                    />
                    <button
                      type="button"
                      onClick={() =>
                        updateTicket(ticket.id, { benefits: ticket.benefits.filter((_, j) => j !== i) })
                      }
                      className="p-1.5 rounded-md text-[#8A7A80] hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer flex-none"
                      title="Remover benefício"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                disabled={ticket.benefits.length >= 20}
                onClick={() => updateTicket(ticket.id, { benefits: [...ticket.benefits, ''] })}
                className="mt-2 px-3 py-1.5 rounded-md border border-dashed border-[#8B1E3F]/40 text-[#8B1E3F] hover:bg-[#8B1E3F]/5 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Adicionar benefício</span>
              </button>
            </div>

            <Field label="Texto do botão">
              <input
                className={inputClass}
                value={ticket.buttonText}
                maxLength={60}
                onChange={(e) => updateTicket(ticket.id, { buttonText: e.target.value })}
              />
            </Field>
          </div>
        ))}
      </div>
    </div>
  );
}
