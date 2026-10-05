// ─── Ingressos (conteúdo editável pelo painel admin) ──────────────────────────
// Os valores abaixo são o padrão; o que for salvo no painel fica no Redis e
// sobrescreve estes textos. O visual de cada card continua definido no código.

export type TicketId = 'essential' | 'signature' | 'solidario';

export interface TicketConfig {
  id: TicketId;
  label: string;
  name: string;
  price: string;
  extra: string;
  description: string;
  benefitsTitle: string;
  benefits: string[];
  buttonText: string;
}

export const TICKET_IDS: TicketId[] = ['essential', 'signature', 'solidario'];

const essentialBenefits = [
  'Acesso a toda a programação e a todas as palestras',
  'Kit oficial do participante',
  'Certificado digital',
  'Acesso à área de expositores',
  'Networking durante os intervalos',
  'Participação nos sorteios promovidos pelos patrocinadores',
];

export const defaultTickets: TicketConfig[] = [
  {
    id: 'essential',
    label: 'Ingresso Tradicional',
    name: 'Essential',
    price: '300',
    extra: '',
    description: 'Viva a experiência do Dia das Mulheres Poderosas com acesso total às palestras.',
    benefitsTitle: '',
    benefits: essentialBenefits,
    buttonText: 'Garantir Essential',
  },
  {
    id: 'signature',
    label: 'Ingresso VIP',
    name: 'Signature',
    price: '497',
    extra: '',
    description: 'Mais conforto, assentos privilegiados e proximidade dos palestrantes.',
    benefitsTitle: 'Inclui todos os benefícios do Essential, mais:',
    benefits: [
      'Jantar com os palestrantes',
      'Assento reservado nas primeiras fileiras, com mesa',
      'Acesso aos palestrantes',
      'Networking exclusivo com palestrantes e patrocinadores',
    ],
    buttonText: 'Garantir Signature VIP',
  },
  {
    id: 'solidario',
    label: 'Ingresso Solidário',
    name: 'Essencial Solidário',
    price: '147',
    extra: '+ 2 kg de alimento',
    description: 'Além de viver essa experiência incrível, você também contribui com quem mais precisa.',
    benefitsTitle: 'Inclui todos os benefícios do Essential:',
    benefits: essentialBenefits,
    buttonText: 'Garantir Essencial Solidário',
  },
];

const text = (value: unknown, fallback: string, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : fallback;

// Garante os 3 ingressos, na ordem fixa, com todos os campos preenchidos —
// qualquer coisa ausente ou inválida volta para o padrão.
export function normalizeTickets(input: unknown): TicketConfig[] {
  const list = Array.isArray(input) ? input : [];
  return defaultTickets.map((def) => {
    const raw = list.find((t) => t && typeof t === 'object' && t.id === def.id) as
      | Partial<Record<keyof TicketConfig, unknown>>
      | undefined;
    if (!raw) return def;

    const benefits = Array.isArray(raw.benefits)
      ? raw.benefits
          .filter((b): b is string => typeof b === 'string')
          .map((b) => b.trim().slice(0, 200))
          .filter(Boolean)
          .slice(0, 20)
      : def.benefits;

    return {
      id: def.id,
      label: text(raw.label, def.label, 60),
      name: text(raw.name, def.name, 60) || def.name,
      price: text(raw.price, def.price, 20) || def.price,
      extra: text(raw.extra, def.extra, 60),
      description: text(raw.description, def.description, 300),
      benefitsTitle: text(raw.benefitsTitle, def.benefitsTitle, 120),
      benefits,
      buttonText: text(raw.buttonText, def.buttonText, 60) || def.buttonText,
    };
  });
}

// Texto que identifica o ingresso no lead capturado (coluna "Origem" do painel)
export function ticketLeadOrigin(ticket: TicketConfig) {
  const extra = ticket.extra ? ` ${ticket.extra}` : '';
  return `Ingresso ${ticket.name} (R$ ${ticket.price}${extra})`;
}

// Menor preço entre os ingressos, já no formato exibido (ex.: "147")
export function lowestTicketPrice(tickets: TicketConfig[]) {
  const parse = (price: string) => Number(price.replace(/\./g, '').replace(',', '.'));
  const valid = tickets.filter((t) => Number.isFinite(parse(t.price)));
  if (valid.length === 0) return tickets[0]?.price ?? '';
  return valid.reduce((min, t) => (parse(t.price) < parse(min.price) ? t : min)).price;
}
