import { NextResponse } from 'next/server';
import { redis, Lead } from '@/lib/redis';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, whatsapp, origem } = body;

    if (!nome || typeof nome !== 'string' || nome.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Por favor, informe seu nome.' },
        { status: 400 }
      );
    }

    // Validação mínima de telefone (ao menos 10 dígitos)
    const digitsOnly = (whatsapp || '').replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Por favor, informe um WhatsApp válido.' },
        { status: 400 }
      );
    }

    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      nome: nome.trim(),
      whatsapp: whatsapp.trim(),
      origem: origem || 'Botão Ingressos',
      data: new Date().toISOString(),
    };

    // Armazena no início da lista Redis para termos ordenação cronológica decrescente
    await redis.lpush('leads', JSON.stringify(lead));

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error('Erro ao salvar lead no Redis:', error);
    // Retornamos 500 mas com mensagem informativa para o frontend tratar
    return NextResponse.json(
      { success: false, error: 'Erro interno ao processar lead.' },
      { status: 500 }
    );
  }
}
