import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dia das Mulheres Poderosas — Empreendedorismo Feminino 360°',
  description:
    'O encontro 360° que reconecta Negócios, Saúde, Tecnologia, Estética e Liderança Feminina. 24 de Outubro de 2026 · Delmar Hotel, Aracaju/SE. Garanta seu ingresso agora.',
  keywords: [
    'Dia das Mulheres Poderosas',
    'Empreendedorismo Feminino',
    'Evento Aracaju',
    'Liderança Feminina',
    'Saúde Feminina',
    'Tecnologia',
    'Delmar Hotel',
  ],
  authors: [{ name: 'Maria Zélia Eventos e Representações' }],
  openGraph: {
    title: 'Dia das Mulheres Poderosas — 24/10/2026 · Aracaju/SE',
    description:
      'Palestrantes especialistas em negócios, saúde, tecnologia e liderança. Um dia inteiro de conteúdo rico, vivência e conexão.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: '/assets/logo-icon.png',
    apple: '/assets/logo-icon.png',
  },
};

import { Providers } from '@/components/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${playfair.variable} ${cormorant.variable} ${jakarta.variable}`}
    >
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
