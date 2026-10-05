import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { getTickets, resetTickets, saveTickets, TICKETS_CACHE_TAG } from '@/lib/tickets-store';

function isAuthorized(request: Request) {
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  const authHeader = request.headers.get('authorization') || '';
  const customHeader = request.headers.get('x-admin-password') || '';
  const providedPassword = customHeader || authHeader.replace(/^Bearer\s+/i, '');
  return !!providedPassword && providedPassword === adminPassword;
}

// A landing page é cacheada; expira os dados e força a regeneração da página
function refreshLandingPage() {
  revalidateTag(TICKETS_CACHE_TAG, { expire: 0 });
  revalidatePath('/');
}

const unauthorized = () =>
  NextResponse.json({ success: false, error: 'Não autorizado. Senha incorreta.' }, { status: 401 });

export async function GET(request: Request) {
  if (!isAuthorized(request)) return unauthorized();
  const tickets = await getTickets();
  return NextResponse.json({ success: true, tickets });
}

export async function PUT(request: Request) {
  if (!isAuthorized(request)) return unauthorized();

  try {
    const body = await request.json();
    if (!Array.isArray(body?.tickets)) {
      return NextResponse.json(
        { success: false, error: 'Dados dos ingressos inválidos.' },
        { status: 400 }
      );
    }

    const tickets = await saveTickets(body.tickets);
    refreshLandingPage();
    return NextResponse.json({ success: true, tickets });
  } catch (error) {
    console.error('Erro ao salvar ingressos no Redis:', error);
    return NextResponse.json(
      { success: false, error: 'Erro ao salvar ingressos no banco de dados.' },
      { status: 500 }
    );
  }
}

// Apaga a versão salva e volta aos textos padrão do código
export async function DELETE(request: Request) {
  if (!isAuthorized(request)) return unauthorized();

  try {
    const tickets = await resetTickets();
    refreshLandingPage();
    return NextResponse.json({ success: true, tickets });
  } catch (error) {
    console.error('Erro ao restaurar ingressos no Redis:', error);
    return NextResponse.json(
      { success: false, error: 'Erro ao restaurar ingressos no banco de dados.' },
      { status: 500 }
    );
  }
}
