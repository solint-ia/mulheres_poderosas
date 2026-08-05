import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SponsorshipTiers from '@/components/SponsorshipTiers';
import {
  sponsorshipPillars,
  sponsorshipTiers,
  sponsorshipContacts,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'Seja Patrocinador — Dia das Mulheres Poderosas',
  description:
    'Associe sua marca ao maior movimento de Empreendedorismo Feminino 360° de Sergipe. Confira as Cotas Diamante, Ouro e Prata para patrocinar o evento em 24/10/2026 no Delmar Hotel.',
};

function renderPillarIcon(iconName: string) {
  switch (iconName) {
    case 'users':
      return (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 'eye':
      return (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      );
    case 'handshake':
      return (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'megaphone':
      return (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 58l-5-5H2v-6h4l5-5v16zm7-3a6 6 0 000-10v10zM15 3.055A9.001 9.001 0 0121 12a9.001 9.001 0 01-6 8.945V3.055z" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
  }
}

export default function PatrocinadoresPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#3D1220]">
      <Header />

      <main className="flex-1">
        {/* ─── Hero Section ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#3D1220] via-[#521628] to-[#6B1730] text-[#FDFBF7] py-16 sm:py-24 px-[clamp(16px,5vw,64px)] border-b border-[#D4AF37]/30">
          <div className="max-w-[1140px] mx-auto text-center flex flex-col items-center gap-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[12px] font-extrabold uppercase tracking-[0.18em]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              Oportunidade Comercial de Marca
            </div>

            <h1
              className="text-[clamp(32px,5vw,56px)] font-bold leading-[1.12] max-w-[900px] text-[#FDFBF7]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Seja Nosso Patrocinador e Faça Parte Deste Movimento
            </h1>

            <p className="text-[16px] sm:text-[19px] text-[#E8D5CE] max-w-[760px] leading-[1.6] font-normal m-0">
              Conecte sua marca a centenas de empresárias, líderes e tomadoras de decisão no maior evento de Empreendedorismo Feminino 360° de Sergipe.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <a
                href="#cotas"
                className="whitespace-nowrap text-[15px] font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all text-center border-2 border-[#D4AF37]"
                style={{ backgroundColor: '#D4AF37', color: '#3D1220' }}
              >
                Conhecer Cotas de Patrocínio
              </a>
              <a
                href={`${sponsorshipContacts.whatsappUrl}?text=Olá!%20Gostaria%20de%20receber%20a%20proposta%20comercial%20de%20patrocínio%20do%20Dia%20das%20Mulheres%20Poderosas.`}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-[15px] font-bold px-8 py-4 rounded-xl border-2 border-[#D4AF37] transition-all shadow-md hover:scale-105"
                style={{ backgroundColor: '#8B1E3F', color: '#FDFBF7' }}
              >
                Falar com a Comercialização
              </a>
            </div>
          </div>
        </section>

        {/* ─── Pilares do Patrocínio ───────────────────────────────────────── */}
        <section className="py-16 sm:py-20 px-[clamp(16px,5vw,64px)] bg-[#F7F1E8]">
          <div className="max-w-[1140px] mx-auto flex flex-col gap-12">
            <div className="text-center max-w-[680px] mx-auto">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#D4AF37]">
                Por Que Patrocinar?
              </span>
              <h2
                className="text-[28px] sm:text-[38px] font-bold text-[#3D1220] mt-2 m-0"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Retorno Estratégico para sua Marca
              </h2>
              <p className="text-[15px] text-[#5C4A50] mt-2 mb-0">
                Uma oportunidade única de posicionamento de mercado, relacionamento de alto nível e associação a valores de inovação e liderança.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsorshipPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[rgba(212,175,55,0.3)] shadow-sm hover:shadow-md transition-all flex flex-col gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3D1220]/5 border border-[#D4AF37]/30 flex items-center justify-center">
                    {renderPillarIcon(pillar.iconName)}
                  </div>
                  <h3
                    className="text-[19px] font-bold text-[#3D1220] m-0 mt-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-[#5C4A50] m-0">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Cotas de Patrocínio ────────────────────────────────────────── */}
        <section id="cotas" className="py-16 sm:py-24 px-[clamp(16px,5vw,64px)] bg-[#FDFBF7]">
          <div className="max-w-[1140px] mx-auto flex flex-col gap-14">
            <div className="text-center max-w-[700px] mx-auto">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#D4AF37]">
                Planos de Investimento
              </span>
              <h2
                className="text-[30px] sm:text-[42px] font-bold text-[#3D1220] mt-2 m-0"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Escolha a Cota Ideal Para Sua Empresa
              </h2>
              <p className="text-[15px] text-[#5C4A50] mt-2 mb-0">
                Vagas limitadas por cota para garantir máxima visibilidade e exclusividade aos patrocinadores oficiais.
              </p>
            </div>

            <SponsorshipTiers tiers={sponsorshipTiers} whatsappUrl={sponsorshipContacts.whatsappUrl} />
          </div>
        </section>

        {/* ─── Manifesto / Statement Section ─────────────────────────────── */}
        <section className="py-16 sm:py-20 px-[clamp(16px,5vw,64px)] bg-[#6B1730] text-[#FDFBF7] relative overflow-hidden border-t border-b border-[#D4AF37]/30">
          <div className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-6 relative z-10">
            <span className="text-[38px] leading-none text-[#D4AF37] font-serif select-none">“</span>
            <blockquote
              className="text-[22px] sm:text-[30px] font-bold leading-[1.35] m-0 text-[#FDFBF7]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mostre que sua marca acredita, apoia e valoriza o protagonismo feminino. Mulheres que se apoiam, transformam negócios, inspiram gerações e constroem histórias.
            </blockquote>
            <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#D4AF37] mt-2">
              — Dia das Mulheres Poderosas 2026
            </span>
          </div>
        </section>

        {/* ─── Contato e Comercialização ─────────────────────────────────── */}
        <section className="py-16 sm:py-20 px-[clamp(16px,5vw,64px)] bg-[#F7F1E8]">
          <div className="max-w-[960px] mx-auto rounded-3xl bg-white border border-[rgba(212,175,55,0.35)] shadow-xl p-8 sm:p-12 flex flex-col gap-8">
            <div className="text-center max-w-[640px] mx-auto flex flex-col gap-2">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#D4AF37]">
                Atendimento Comercial
              </span>
              <h2
                className="text-[28px] sm:text-[36px] font-bold text-[#3D1220] m-0"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Fale Diretamente com a Organização
              </h2>
              <p className="text-[15px] text-[#5C4A50] m-0">
                Realização por <strong>Maria Zélia Eventos e Representações</strong>. Entre em contato para personalizar pacotes de patrocínio ou exposição de estande.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* WhatsApp Card */}
              <a
                href={`${sponsorshipContacts.whatsappUrl}?text=Olá!%20Gostaria%20de%20informações%20sobre%20patrocínio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#F7F1E8] border border-[rgba(139,30,63,0.15)] hover:border-[#D4AF37] transition-all flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#123024] text-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[12px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                    WhatsApp Comercial
                  </span>
                  <span className="text-[16px] font-bold text-[#3D1220] mt-0.5 block">
                    {sponsorshipContacts.phone}
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${sponsorshipContacts.email}`}
                className="p-6 rounded-2xl bg-[#F7F1E8] border border-[rgba(139,30,63,0.15)] hover:border-[#D4AF37] transition-all flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#8B1E3F] text-[#FDFBF7] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[12px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                    E-mail Oficial
                  </span>
                  <span className="text-[13.5px] font-bold text-[#3D1220] mt-0.5 block break-all">
                    {sponsorshipContacts.email}
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={sponsorshipContacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#F7F1E8] border border-[rgba(139,30,63,0.15)] hover:border-[#D4AF37] transition-all flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#6B1730] text-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[12px] font-bold text-[#D4AF37] uppercase tracking-wider block">
                    Instagram Realizadora
                  </span>
                  <span className="text-[14.5px] font-bold text-[#3D1220] mt-0.5 block">
                    {sponsorshipContacts.instagram}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
