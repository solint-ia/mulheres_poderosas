'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Lock,
  Download,
  Search,
  RefreshCw,
  LogOut,
  MessageCircle,
  Users,
  Ticket,
  Clock,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Filter
} from 'lucide-react';
import { Lead } from '@/lib/redis';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('ALL');

  // Recupera sessão salva no navegador durante a visita
  useEffect(() => {
    const savedPass = sessionStorage.getItem('admin_pwd');
    if (savedPass) {
      setPassword(savedPass);
      fetchLeads(savedPass);
    }
  }, []);

  const fetchLeads = async (pwdToUse: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/leads', {
        headers: {
          'x-admin-password': pwdToUse,
        },
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setLeads(data.leads || []);
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_pwd', pwdToUse);
        setAuthError('');
      } else {
        setIsAuthenticated(false);
        sessionStorage.removeItem('admin_pwd');
        setAuthError(data.error || 'Senha incorreta.');
      }
    } catch {
      setAuthError('Erro ao comunicar com o servidor.');
    } finally {
      setLoading(false);
      setIsVerifying(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setAuthError('Digite a senha de administrador.');
      return;
    }
    setIsVerifying(true);
    setAuthError('');
    fetchLeads(password);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_pwd');
    setPassword('');
    setIsAuthenticated(false);
    setLeads([]);
  };

  // Lista de origens únicas para filtro
  const uniqueOrigins = useMemo(() => {
    const set = new Set(leads.map((l) => l.origem || 'Outro'));
    return Array.from(set);
  }, [leads]);

  // Filtragem dos leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const term = searchTerm.toLowerCase();
      const matchSearch =
        lead.nome?.toLowerCase().includes(term) ||
        lead.whatsapp?.includes(term) ||
        lead.origem?.toLowerCase().includes(term);

      const matchOrigin = selectedOrigin === 'ALL' || lead.origem === selectedOrigin;

      return matchSearch && matchOrigin;
    });
  }, [leads, searchTerm, selectedOrigin]);

  // Estatísticas rápidas
  const stats = useMemo(() => {
    const total = leads.length;
    const today = new Date().toISOString().slice(0, 10);
    const todayCount = leads.filter((l) => l.data?.startsWith(today)).length;

    // Contagem de ingressos
    const ticketCounts: Record<string, number> = {};
    leads.forEach((l) => {
      const key = l.origem || 'Geral';
      ticketCounts[key] = (ticketCounts[key] || 0) + 1;
    });

    const topTicket = Object.entries(ticketCounts).sort((a, b) => b[1] - a[1])[0];

    return {
      total,
      todayCount,
      topTicket: topTicket ? `${topTicket[0]} (${topTicket[1]})` : 'Nenhum ainda',
    };
  }, [leads]);

  // Exportar para CSV formatado compatível com Excel (UTF-8 com BOM)
  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert('Nenhum dado para exportar.');
      return;
    }

    const headers = ['Nome', 'WhatsApp', 'WhatsApp Limpo', 'Ingresso / Origem do Clique', 'Data e Hora'];
    const rows = filteredLeads.map((l) => {
      const cleanPhone = (l.whatsapp || '').replace(/\D/g, '');
      const formattedDate = l.data
        ? new Date(l.data).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
        : '';
      return [
        `"${(l.nome || '').replace(/"/g, '""')}"`,
        `"${(l.whatsapp || '').replace(/"/g, '""')}"`,
        `"${cleanPhone}"`,
        `"${(l.origem || '').replace(/"/g, '""')}"`,
        `"${formattedDate}"`,
      ].join(';');
    });

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const todayStr = new Date().toISOString().slice(0, 10);
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_mulheres_poderosas_${todayStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Formatação de link para WhatsApp direto
  const getWhatsAppLink = (lead: Lead) => {
    const raw = (lead.whatsapp || '').replace(/\D/g, '');
    const phoneWithDDI = raw.startsWith('55') ? raw : `55${raw}`;
    const message = encodeURIComponent(
      `Olá ${lead.nome}! Vi que você demonstrou interesse no ${lead.origem} para o Dia das Mulheres Poderosas. Como posso te ajudar a garantir sua vaga?`
    );
    return `https://wa.me/${phoneWithDDI}?text=${message}`;
  };

  // ─────────────────────────────────────────────────────────────
  // TELA 1: LOGIN POR SENHA
  // ─────────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#E8D5CE] p-8">
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#8B1E3F]/10 border border-[#8B1E3F]/20 flex items-center justify-center text-[#8B1E3F] mb-3">
              <Lock className="w-7 h-7" />
            </div>
            <h1
              className="text-2xl font-bold text-[#3D1220] m-0"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Painel Administrativo
            </h1>
            <p className="text-xs text-[#8A7A80] mt-1">
              Dia das Mulheres Poderosas · Acesso Restrito
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#3D1220] mb-1.5">
                Senha de Acesso
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha mestra"
                className="w-full px-4 py-3 bg-[#FDFBF7] rounded-lg border border-[#E8D5CE] text-[#3D1220] text-sm focus:outline-none focus:border-[#8B1E3F] focus:ring-2 focus:ring-[#8B1E3F]/20 transition-all"
              />
            </div>

            {authError && (
              <p className="text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 rounded-md p-2.5">
                {authError}
              </p>
            )}

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-3.5 px-4 rounded-lg font-bold text-sm uppercase tracking-wider text-white transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-75 cursor-pointer"
              style={{ backgroundColor: '#8B1E3F' }}
            >
              {isVerifying ? 'Verificando...' : 'Acessar Leads'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // TELA 2: DASHBOARD DOS LEADS
  // ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#3D1220]">
      {/* Topo do Painel */}
      <header className="bg-white border-b border-[#E8D5CE] sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#8B1E3F]/10 text-[#8B1E3F]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1
                className="text-xl sm:text-2xl font-bold text-[#3D1220] m-0"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Leads · Dia das Mulheres Poderosas
              </h1>
              <span className="text-xs text-[#8A7A80]">
                Armazenado no Upstash Redis · Atualizado em tempo real
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchLeads(password)}
              disabled={loading}
              className="p-2.5 rounded-lg border border-[#E8D5CE] text-[#5C4A50] hover:bg-black/5 transition-all text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              title="Atualizar lista"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#8B1E3F]' : ''}`} />
              <span className="hidden sm:inline">Atualizar</span>
            </button>

            <button
              onClick={handleExportCSV}
              disabled={leads.length === 0}
              className="px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider text-[#3D1220] border-2 border-[#D4AF37] bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#8B1E3F]" />
              <span>Exportar CSV</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2.5 rounded-lg border border-[#E8D5CE] text-rose-600 hover:bg-rose-50 transition-all text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              title="Sair do painel"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-xl border border-[#E8D5CE] shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B1E3F]/10 text-[#8B1E3F] flex items-center justify-center flex-none">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A7A80]">
                Total de Leads
              </span>
              <p className="text-2xl font-black text-[#3D1220] m-0">{stats.total}</p>
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl border border-[#E8D5CE] shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-none">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A7A80]">
                Capturados Hoje
              </span>
              <p className="text-2xl font-black text-[#3D1220] m-0">{stats.todayCount}</p>
            </div>
          </div>

          <div className="p-5 bg-white rounded-xl border border-[#E8D5CE] shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 text-[#8B1E3F] flex items-center justify-center flex-none">
              <Ticket className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A7A80]">
                Ingresso Mais Clicado
              </span>
              <p className="text-sm font-bold text-[#3D1220] m-0 truncate max-w-[200px]" title={stats.topTicket}>
                {stats.topTicket}
              </p>
            </div>
          </div>
        </div>

        {/* Barra de Filtro e Busca */}
        <div className="p-4 bg-white rounded-xl border border-[#E8D5CE] shadow-xs flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-[#8A7A80] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nome, telefone ou ingresso..."
              className="w-full pl-10 pr-4 py-2 bg-[#FDFBF7] rounded-lg border border-[#E8D5CE] text-xs focus:outline-none focus:border-[#8B1E3F] text-[#3D1220]"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#8A7A80]" />
            <select
              value={selectedOrigin}
              onChange={(e) => setSelectedOrigin(e.target.value)}
              className="px-3 py-2 bg-[#FDFBF7] rounded-lg border border-[#E8D5CE] text-xs text-[#3D1220] focus:outline-none focus:border-[#8B1E3F]"
            >
              <option value="ALL">Todos os Ingressos / Origens</option>
              {uniqueOrigins.map((orig) => (
                <option key={orig} value={orig}>
                  {orig}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tabela de Leads */}
        <div className="bg-white rounded-xl border border-[#E8D5CE] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#F7F1E8] border-b border-[#E8D5CE] text-[#5C4A50] uppercase tracking-wider font-bold">
                  <th className="py-3.5 px-4">Data / Horário</th>
                  <th className="py-3.5 px-4">Nome do Interessado</th>
                  <th className="py-3.5 px-4">WhatsApp</th>
                  <th className="py-3.5 px-4">Ingresso / Botão Clicado</th>
                  <th className="py-3.5 px-4 text-right">Ação Rápida</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8D5CE]/60">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-[#8A7A80]">
                      {loading
                        ? 'Carregando leads do Redis...'
                        : 'Nenhum lead encontrado com os filtros atuais.'}
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => {
                    const formattedDate = lead.data
                      ? new Date(lead.data).toLocaleString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      : '—';

                    return (
                      <tr key={lead.id} className="hover:bg-[#FDFBF7] transition-colors">
                        <td className="py-3.5 px-4 whitespace-nowrap text-[#8A7A80] font-mono">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>{formattedDate}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-[#3D1220] whitespace-nowrap">
                          {lead.nome}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-medium text-[#5C4A50] whitespace-nowrap">
                          {lead.whatsapp}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span
                            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold"
                            style={{
                              backgroundColor: lead.origem?.includes('VIP')
                                ? '#D4AF3720'
                                : lead.origem?.includes('Legacy')
                                ? '#8B1E3F18'
                                : '#E8D5CE50',
                              color: lead.origem?.includes('VIP')
                                ? '#8B1E3F'
                                : lead.origem?.includes('Legacy')
                                ? '#3D1220'
                                : '#5C4A50',
                              border: lead.origem?.includes('VIP')
                                ? '1px solid #D4AF3780'
                                : '1px solid #E8D5CE',
                            }}
                          >
                            {lead.origem}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <a
                            href={getWhatsAppLink(lead)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Chamar no WhatsApp</span>
                            <ExternalLink className="w-3 h-3 opacity-70" />
                          </a>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 bg-[#F7F1E8] border-t border-[#E8D5CE] text-xs text-[#8A7A80] flex justify-between items-center">
            <span>
              Exibindo <strong>{filteredLeads.length}</strong> de <strong>{leads.length}</strong> leads
            </span>
            <span>Upstash Redis Database</span>
          </div>
        </div>
      </main>
    </div>
  );
}
