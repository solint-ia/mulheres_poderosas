import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSpeakerById, getAllSpeakers } from '@/lib/data';
import { SYMPLA_URL } from '@/lib/constants';

function getInitials(name: string): string {
  const parts = name.replace(/^(Dr\.|Dra\.|Dr)\s/i, '').split(' ');
  return parts.slice(0, 2).map((p) => p[0]).join('').toUpperCase();
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const speakers = getAllSpeakers();
  return speakers.map((sp) => ({
    id: sp.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const speaker = getSpeakerById(id);
  if (!speaker) return { title: 'Palestrante não encontrado' };

  return {
    title: `${speaker.name} — Dia das Mulheres Poderosas`,
    description: `Confira a apresentação de ${speaker.name} sobre "${speaker.talk}" no Dia das Mulheres Poderosas em 24/10/2026 no Delmar Hotel, Aracaju/SE.`,
  };
}

export default async function SpeakerDetailPage({ params }: PageProps) {
  const { id } = await params;
  const speaker = getSpeakerById(id);

  if (!speaker) {
    notFound();
  }

  const allSpeakers = getAllSpeakers();
  const relatedSpeakers = allSpeakers.filter(
    (sp) => sp.category === speaker.category && sp.id !== speaker.id
  );

  const initials = getInitials(speaker.name);
  const isMara = speaker.id === 'sp-mara';

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#3D1220]">
      <Header />

      <main className="flex-1 px-[clamp(16px,5vw,64px)] py-[clamp(32px,5vw,64px)] max-w-[1200px] mx-auto w-full flex flex-col gap-10">
        {/* Navigation Back Link */}
        <div>
          <Link
            href="/#palestrantes"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-[#8B1E3F] hover:text-[#6B1730] transition-colors py-2 px-3 rounded-lg hover:bg-[#8B1E3F]/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para todos os palestrantes
          </Link>
        </div>

        {/* Speaker Profile Header & Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Media Header & Quick Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Square 1:1 Image or Fallback */}
            <div
              className={`w-full aspect-square rounded-2xl overflow-hidden relative shadow-xl border-2 ${
                isMara ? 'border-[#D4AF37] ring-4 ring-[#D4AF37]/30' : 'border-[rgba(212,175,55,0.4)]'
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  isMara
                    ? 'from-[#6B1730] via-[#8B1E3F] to-[#3D1220]'
                    : 'from-[#F7F1E8] via-[#E8D5CE] to-[#E2C7BC]'
                }`}
              />

              {speaker.image ? (
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-center relative z-10"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center relative z-10 p-6 text-center">
                  <span
                    className={`font-bold tracking-widest text-[56px] sm:text-[64px] select-none ${
                      isMara ? 'text-[#D4AF37]' : 'text-[#8B1E3F]'
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {initials}
                  </span>
                  <span
                    className={`text-[11px] uppercase font-bold tracking-[0.2em] mt-2 ${
                      isMara ? 'text-[#FDFBF7]' : 'text-[#3D1220]'
                    }`}
                  >
                    Palestrante Confirmado
                  </span>
                </div>
              )}

              {isMara && (
                <div className="absolute top-4 right-4 z-20 bg-[#D4AF37] text-[#3D1220] text-[11px] font-extrabold uppercase px-3.5 py-1.5 rounded-full shadow-lg tracking-wider border border-[#FDFBF7]">
                  Convidada Especial
                </div>
              )}
            </div>

            {/* Basic Info & Socials Card */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-[#F7F1E8] border border-[rgba(212,175,55,0.3)] shadow-sm">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#D4AF37]">
                  {speaker.category}
                </span>
                <h1
                  className="text-[28px] sm:text-[34px] font-bold text-[#3D1220] m-0 mt-1 leading-[1.15]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {speaker.name}
                </h1>
                <p
                  className="text-[16px] sm:text-[17px] font-medium text-[#8B1E3F] m-0 mt-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
                >
                  {speaker.role}
                </p>
              </div>

              {speaker.time && (
                <div className="flex items-center gap-2 text-[13px] font-bold text-[#3D1220] bg-white px-3.5 py-2 rounded-lg border border-[rgba(139,30,63,0.15)]">
                  <svg className="w-4 h-4 text-[#8B1E3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{speaker.time}</span>
                </div>
              )}

              {speaker.socials?.instagram && (
                <a
                  href={speaker.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[13.5px] font-bold py-2.5 px-4 rounded-lg shadow-sm hover:bg-[#6B1730] transition-colors"
                  style={{ color: '#FDFBF7', backgroundColor: '#8B1E3F' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Siga no Instagram</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Talk Deep-Dive & Bio */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Talk Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(212,175,55,0.3)] shadow-md flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-[#D4AF37]" />
                <span className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-[#D4AF37]">
                  Tema da Palestra
                </span>
              </div>

              <h2
                className="text-[24px] sm:text-[30px] font-bold text-[#3D1220] m-0 leading-[1.25]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {speaker.talk}
              </h2>

              {speaker.talkDescription && (
                <p className="text-[15.5px] leading-[1.75] text-[#5C4A50] m-0 font-normal">
                  {speaker.talkDescription}
                </p>
              )}

              {/* Takeaways List */}
              {speaker.takeaways && speaker.takeaways.length > 0 && (
                <div className="mt-2 flex flex-col gap-3 pt-5 border-t border-[rgba(139,30,63,0.1)]">
                  <span className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#8B1E3F]">
                    O que você vai aprender nesta apresentação:
                  </span>
                  <div className="flex flex-col gap-2.5">
                    {speaker.takeaways.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-[14.5px] text-[#3D1220] leading-[1.6]">
                        <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#8B1E3F] flex items-center justify-center flex-none mt-0.5 text-[12px] font-bold">
                          ✓
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bio Section */}
            {speaker.bio && speaker.bio.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(212,175,55,0.25)] shadow-sm flex flex-col gap-4">
                <h3
                  className="text-[22px] font-bold text-[#3D1220] m-0"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Sobre {speaker.name}
                </h3>
                {speaker.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-[15px] leading-[1.75] text-[#5C4A50] m-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Quote Card */}
            {speaker.quote && (
              <div className="p-6 sm:p-7 rounded-2xl bg-[#6B1730] text-[#FDFBF7] border border-[#D4AF37]/40 shadow-lg flex flex-col gap-3 relative overflow-hidden">
                <span className="text-[40px] leading-none text-[#D4AF37] font-serif select-none">“</span>
                <p
                  className="text-[18px] sm:text-[20px] leading-[1.5] italic font-medium m-0 relative z-10"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {speaker.quote}
                </p>
                <span className="text-[13px] font-bold text-[#D4AF37] tracking-wider uppercase mt-1">
                  — {speaker.name}
                </span>
              </div>
            )}

            {/* High-Conversion Call to Action */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#123024] to-[#1B4332] text-[#FDFBF7] border border-[#D4AF37]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#D4AF37]">
                  Garanta sua vaga
                </span>
                <h4 className="text-[20px] sm:text-[22px] font-bold text-[#FDFBF7] m-0" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Assista a esta e a outras palestras em 24/10
                </h4>
                <p className="text-[13.5px] text-[#E8D5CE] m-0">
                  Evento presencial no Delmar Hotel em Aracaju/SE.
                </p>
              </div>

              <a
                href={SYMPLA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto whitespace-nowrap text-[14.5px] font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all text-center"
                style={{ backgroundColor: '#8B1E3F', color: '#FDFBF7' }}
              >
                Garantir Meu Ingresso
              </a>
            </div>
          </div>
        </div>

        {/* Related Speakers in Same Category */}
        {relatedSpeakers.length > 0 && (
          <div className="flex flex-col gap-6 pt-10 border-t border-[rgba(139,30,63,0.15)]">
            <h3
              className="text-[24px] font-bold text-[#3D1220] m-0"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Outras palestras em {speaker.category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSpeakers.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/palestrantes/${rel.id}`}
                  className="group flex flex-col rounded-xl bg-white border border-[rgba(212,175,55,0.3)] shadow-sm hover:shadow-md transition-all overflow-hidden p-5 gap-3"
                >
                  <div className="text-[17px] font-bold text-[#3D1220] group-hover:text-[#8B1E3F] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {rel.name}
                  </div>
                  <div className="text-[14px] font-medium text-[#8B1E3F] italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {rel.talk}
                  </div>
                  <div className="text-[12px] font-bold text-[#D4AF37] uppercase tracking-wider mt-1 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Ver detalhes</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
