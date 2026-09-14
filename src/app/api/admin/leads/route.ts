import { NextResponse } from 'next/server';
import { redis, Lead } from '@/lib/redis';

export async function GET(request: Request) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    // Suporte a cabeçalho Authorization ou x-admin-password
    const authHeader = request.headers.get('authorization') || '';
    const customHeader = request.headers.get('x-admin-password') || '';
    
    const providedPassword = customHeader || authHeader.replace(/^Bearer\s+/i, '');

    if (!providedPassword || providedPassword !== adminPassword) {
      return NextResponse.json(
        { success: false, error: 'Não autorizado. Senha incorreta.' },
        { status: 401 }
      );
    }

    // Busca todos os leads da lista Redis
    const rawLeads = await redis.lrange('leads', 0, -1);

    const leads: Lead[] = rawLeads.map((item) => {
      if (typeof item === 'string') {
        try {
          return JSON.parse(item);
        } catch {
          return { id: 'unknown', nome: 'Erro ao decodificar', whatsapp: '', origem: '', data: '' };
        }
      }
      return item as Lead;
    });

    return NextResponse.json({ success: true, leads, count: leads.length });
  } catch (error) {
    console.error('Erro ao buscar leads no Redis:', error);
    return NextResponse.json(
      { success: false, error: 'Erro ao consultar banco de dados.' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  // Endpoint simples para validar a senha antes de carregar o dashboard
  try {
    const body = await request.json();
    const { password } = body;
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    if (password === adminPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Senha incorreta.' }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ success: false, error: 'Requisição inválida.' }, { status: 400 });
  }
}
