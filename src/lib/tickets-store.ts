import { unstable_cache } from 'next/cache';
import { redis } from '@/lib/redis';
import { defaultTickets, normalizeTickets, TicketConfig } from '@/lib/tickets';

const TICKETS_KEY = 'tickets';
export const TICKETS_CACHE_TAG = 'tickets';

async function readTickets(): Promise<TicketConfig[]> {
  const stored = await redis.get(TICKETS_KEY);
  return stored ? normalizeTickets(stored) : defaultTickets;
}

// Leitura direta, sempre atual (painel admin)
export async function getTickets(): Promise<TicketConfig[]> {
  try {
    return await readTickets();
  } catch (error) {
    console.error('Erro ao buscar ingressos no Redis:', error);
    return defaultTickets;
  }
}

// Leitura cacheada para a landing page continuar estática; o painel invalida
// a tag ao salvar. Erros ficam fora do cache para não fixar o padrão por engano.
const readTicketsCached = unstable_cache(readTickets, ['tickets'], {
  tags: [TICKETS_CACHE_TAG],
  revalidate: 300,
});

export async function getCachedTickets(): Promise<TicketConfig[]> {
  try {
    return await readTicketsCached();
  } catch (error) {
    console.error('Erro ao buscar ingressos no Redis:', error);
    return defaultTickets;
  }
}

export async function saveTickets(input: unknown): Promise<TicketConfig[]> {
  const tickets = normalizeTickets(input);
  await redis.set(TICKETS_KEY, tickets);
  return tickets;
}

export async function resetTickets(): Promise<TicketConfig[]> {
  await redis.del(TICKETS_KEY);
  return defaultTickets;
}
