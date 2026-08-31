// ─── Tipos ───────────────────────────────────────────────────────────────────

export interface SpeakerSocials {
  instagram?: string;
  linkedin?: string;
  website?: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  category: string;
  talk: string;
  time?: string;
  talkDescription?: string;
  takeaways?: string[];
  bio?: string[];
  quote?: string;
  image?: string;
  socials?: SpeakerSocials;
}

export interface SpeakerGroup {
  title: string;
  items: Speaker[];
}

export type ScheduleCategory =
  | 'credenciamento'
  | 'painel'
  | 'palestra'
  | 'conexao'
  | 'almoco'
  | 'coffeebreak'
  | 'encerramento';

export interface ScheduleItem {
  speaker?: string;
  talk?: string;
}

export interface ScheduleRow {
  time: string;
  categoryTitle?: string;
  categoryType?: ScheduleCategory;
  description?: string;
  items?: ScheduleItem[];
  icon?: 'coffee' | 'users' | 'lunch' | 'sparkle';
}

export interface FaqItem {
  q: string;
  a: string;
}

// ─── Palestrantes (Dados Completos para Visualização Individual) ─────────────

export const speakerGroups: SpeakerGroup[] = [
  {
    title: 'Encerramento Especial',
    items: [
      {
        id: 'sp-mara',
        name: 'Mara Maravilha',
        role: 'Apresentadora, Cantora, Empresária & Convidada Especial',
        category: 'Encerramento Especial',
        time: '18:00 às 19:30 · Encerramento Especial',
        talk: 'Uma conversa inspiradora sobre fé, propósito, superação, carreira e protagonismo feminino',
        talkDescription:
          'Uma conversa emocionante e inspiradora de encerramento unindo fé, propósito, superação, trajetória de carreira e a força do protagonismo feminino com coragem e determinação.',
        takeaways: [
          'Como manter a fé, resiliência e propósito em momentos de transição e crescimento.',
          'A força do posicionamento pessoal autêntico na construção de marca.',
          'Ferramentas de comunicação para encantar, liderar e influenciar com propósito.',
          'Equilíbrio entre vida pública, família, fé e novos projetos de negócios.',
        ],
        bio: [
          'Mara Maravilha é uma das comunicadoras e artistas mais icônicas da televisão brasileira, com décadas de atuação marcante no entretenimento, na música e na gestão de projetos culturais.',
          'Sua trajetória é pautada pela constante reinvenção profissional, garra empreendedora e uma capacidade única de se conectar genuinamente com o público feminino de todas as gerações.',
        ],
        quote: 'Coragem não é a ausência de medo, mas a certeza de que você é maior do que qualquer desafio.',
        image: '/palestrantes/Mara Maravilha.jpeg',
        socials: { instagram: 'https://instagram.com/maramaravilhaoficial' },
      },
    ],
  },
  {
    title: 'Saúde, Estética e Longevidade',
    items: [
      {
        id: 'sp-raquel',
        name: 'Dra. Raquel Dosea',
        role: 'Clínica & Esteta',
        category: 'Saúde, Estética e Longevidade',
        time: '09:00 às 10:00 · Painel de Abertura',
        talk: 'A Beleza Rara da Mulher Empoderada',
        talkDescription:
          'Uma imersão sobre como a estética avançada e a autoestima estratégica impactam a presença executiva e o posicionamento da mulher no ambiente de negócios.',
        takeaways: [
          'A ciência por trás do rejuvenescimento natural e harmonização sem exageros.',
          'Como a autoestima física potencializa a tomada de decisão e a postura de liderança.',
          'Rotinas práticas de autocuidado para mulheres de alta performance.',
        ],
        bio: [
          'Dra. Raquel Dosea é médica referência em procedimentos estéticos de alta precisão e longevidade feminina em Sergipe, combinando tecnologias de ponta com um olhar personalizado para realçar a beleza natural.',
        ],
        quote: 'Sua imagem deve refletir a força e a elegância da história que você construiu.',
        image: '/palestrantes/Raquel Dosea.jpg',
        socials: { instagram: 'https://instagram.com/dra_raqueldosea' },
      },
      {
        id: 'sp-carolinev',
        name: 'Dra. Caroline Vicente',
        role: 'Médica & Estrategista de Autoestima Feminina',
        category: 'Saúde, Estética e Longevidade',
        time: '09:00 às 10:00 · Painel de Abertura',
        talk: 'A autoestima quando eu me escolho com estratégia',
        talkDescription:
          'Descubra como colocar o autocuidado no centro da sua rotina diária para sustentar o crescimento profissional acelerado sem abrir mão da sua saúde e paz mental.',
        takeaways: [
          'Planejamento de tempo focado no bem-estar físico, emocional e estético.',
          'Eliminando a culpa da mulher empreendedora ao priorizar a si mesma.',
          'Estratégias de posicionamento pessoal alinhadas ao seu estilo de vida.',
        ],
        bio: [
          'Dra. Caroline Vicente atua na interseção entre saúde, estética e desenvolvimento pessoal, ajudando centenas de mulheres a recuperar a autoconfiança e o protagonismo da própria jornada.',
        ],
        quote: 'Se escolher não é egoísmo, é a base necessária para liderar com excelência.',
        image: '/palestrantes/Dra Caroline Vicent.jpeg',
        socials: { instagram: 'https://instagram.com/dracarolvicente' },
      },
      {
        id: 'sp-carolines',
        name: 'Dra. Caroline Smith',
        role: 'Médica Ginecologista & Especialista em Longevidade Íntima',
        category: 'Saúde, Estética e Longevidade',
        time: '09:00 às 10:00 · Painel de Abertura',
        talk: 'Empoderamento Feminino: ciência, saúde íntima e longevidade caminham juntas',
        talkDescription:
          'Desmistificando a saúde íntima e a longevidade feminina através da ciência avançada, tecnologia a laser e tratamentos de prevenção de alta eficácia.',
        takeaways: [
          'Avanços da medicina a laser e tratamentos íntimos preventivos.',
          'Como o equilíbrio hormonal afeta a disposição, clareza mental e vitalidade.',
          'Longevidade com qualidade de vida e liberdade em todas as fases da mulher.',
        ],
        bio: [
          'Dra. Caroline Smith é médica reconhecida pela abordagem humanizada e científica na saúde feminina, sendo pioneira em tecnologias para tratamentos corporais e íntimos.',
        ],
        quote: 'Conhecer o próprio corpo é a forma mais profunda de empoderamento.',
        image: '/palestrantes/Dra Caroline Smith.jpeg',
        socials: { instagram: 'https://instagram.com/dracarolinesmith' },
      },
      {
        id: 'sp-christiane',
        name: 'Christiane Espínola Bandeira de Mello',
        role: 'Cirurgiã Dentista / Esteticista e Cosmetóloga',
        category: 'Saúde, Estética e Longevidade',
        time: '14:40 às 15:20 · Bloco Tarde',
        talk: 'A nova era da Estética: tecnologia, bioestimuladores e longevidade com naturalidade',
        talkDescription:
          'Explore as tecnologias estéticas mais modernas do mundo, incluindo Laser CO2 e bioestimuladores de colágeno para resultados naturais e duradouros na pele.',
        takeaways: [
          'Como funcionam os bioestimuladores e o rejuvenescimento celular profundo.',
          'Aplicações práticas do Laser CO2 na renovação da pele da face.',
          'Estratégias de prevenção do envelhecimento precoce causado pelo estresse executivo.',
        ],
        bio: [
          'Christiane Espínola Bandeira de Mello é cirurgiã dentista, esteticista e cosmetóloga com vasta experiência em tecnologias avançadas para estímulo de colágeno, textura da pele e longevidade saudável.',
        ],
        quote: 'A verdadeira estética não transforma quem você é; ela ilumina sua melhor versão.',
        image: '/palestrantes/Christiane Espínola Bandeira de Mello.jfif',
        socials: { instagram: 'https://instagram.com/drachristianeespinola' },
      },
      {
        id: 'sp-aline',
        name: 'Dra. Aline Fioravanti',
        role: 'Médica & Especialista em MFAT Integrativo',
        category: 'Saúde, Estética e Longevidade',
        time: '17:10 às 17:50 · Bloco Tarde',
        talk: 'Autocuidado estratégico: como o MFAT pode integrar beleza, saúde e rotina profissional',
        talkDescription:
          'Uma apresentação inovadora sobre os benefícios do MFAT e protocolos integrativos para unir saúde do corpo, estética e gestão de desgaste profissional.',
        takeaways: [
          'O que é o protocolo MFAT e como ele atua no organismo.',
          'Integração de tratamentos estéticos de alta performance na rotina executiva.',
          'Redução da fadiga corporal através do autocuidado direcionado.',
        ],
        bio: [
          'Dra. Aline Fioravanti é médica com atuação focada em procedimentos integrativos que conectam beleza, saúde metabólica e produtividade contínua.',
        ],
        quote: 'Sua rotina profissional precisa alimentar sua saúde, não consumi-la.',
        image: '/palestrantes/Dra Aline Fioravanti.jpeg',
        socials: { instagram: 'https://instagram.com/dra.alinefioravanti' },
      },
      {
        id: 'sp-fernandoaraujo',
        name: 'Dr. Fernando Araújo',
        role: 'Cirurgião Plástico',
        category: 'Saúde, Estética e Longevidade',
        talk: 'Cirurgia Plástica, Autoestima e Empoderamento Feminino',
        talkDescription:
          'Uma abordagem médica e estética de excelência sobre o impacto transformador da cirurgia plástica na autoestima, autoconfiança e bem-estar da mulher moderna.',
        takeaways: [
          'Avanços da cirurgia plástica moderna com foco em naturalidade e segurança.',
          'Como a harmonia corporal potencializa a presença e a autoimagem feminina.',
          'Critérios médicos essenciais para a tomada de decisão consciente.',
        ],
        bio: [
          'Dr. Fernando Araújo é cirurgião plástico especialista em procedimentos de alta precisão estética e reparadora, atuando com excelência e cuidado humanizado na valorização da autoestima.',
        ],
        quote: 'A verdadeira transformação estética é aquela que eleva sua autoestima e reflete a sua essência com segurança.',
        socials: { instagram: 'https://instagram.com/fernandoaraujoplastica' },
      },
    ],
  },
  {
    title: 'Negócios, Tecnologia e Gestão',
    items: [
      {
        id: 'sp-leonardo',
        name: 'Leonardo Lima',
        role: 'Estrategista de Vendas com IA & Marketing Digital',
        category: 'Negócios, Tecnologia e Gestão',
        time: '14:00 às 14:40 · Bloco Tarde',
        talk: 'Como encher sua agenda de clientes vendendo todos os dias com IA',
        talkDescription:
          'Um passo a passo prático sobre como utilizar ferramentas de Inteligência Artificial para automatizar a captação de clientes, criar ofertas irresistíveis e fechar vendas continuamente.',
        takeaways: [
          'Ferramentas práticas de IA essenciais para pequenos e médios negócios.',
          'Como criar scripts de vendas autônomos que convertem no WhatsApp e Instagram.',
          'Estratégias de tráfego e agendamento contínuo sem gastar fortunas em anúncios.',
        ],
        bio: [
          'Leonardo Lima é especialista em crescimento acelerado de vendas com inteligência artificial, tendo ajudado centenas de empresas e profissionais autônomos a estruturarem processos comerciais modernos.',
        ],
        quote: 'A Inteligência Artificial não substitui pessoas; ela multiplica os resultados de quem sabe usá-la.',
        image: '/palestrantes/Leonardo Lima.png',
        socials: { instagram: 'https://instagram.com', linkedin: 'https://linkedin.com' },
      },
      {
        id: 'sp-italo',
        name: 'Italo Marcel',
        role: 'Consultor de Gestão Empresarial & Estratégia de Vendas',
        category: 'Negócios, Tecnologia e Gestão',
        time: '15:20 às 16:00 · Bloco Tarde',
        talk: 'Sua empresa não precisa vender mais, ela precisa vender melhor',
        talkDescription:
          'Entenda os pilares da lucratividade real: eficiência operacional, esteira de produtos de alto valor (Ticket Alto) e retenção de clientes fidelizados.',
        takeaways: [
          'Como aumentar sua margem de lucro sem precisar dobrar a carga de trabalho.',
          'Desenvolvimento de produtos e serviços Premium de alto valor percebido.',
          'Gestão de processos e liderança de equipes comerciais focadas em meta.',
        ],
        bio: [
          'Italo Marcel é mentor e consultor de empresas focado em posicionamento de alto valor, processos comerciais eficientes e crescimento sustentável de negócios.',
        ],
        quote: 'Faturamento é vaidade, lucro é sanidade e caixa é rei.',
        image: '/palestrantes/Italo Marcel.jpeg',
        socials: { instagram: 'https://instagram.com/italomarcel1', linkedin: 'https://linkedin.com' },
      },
      {
        id: 'sp-marcilio',
        name: 'Marcílio',
        role: 'Auditor Fiscal · Exatas Contabilidade',
        category: 'Negócios, Tecnologia e Gestão',
        talk: 'Benefícios voltados a produtos e serviços relacionados à saúde da mulher e Reforma Tributária',
        talkDescription:
          'Uma análise clara dos impactos da Reforma Tributária nas empresas femininas e como utilizar benefícios legais para reduzir impostos e investir na empresa.',
        takeaways: [
          'Como se preparar estrategicamente para as mudanças da Reforma Tributária.',
          'Redução legal da carga tributária para clínicas, empresas e prestadoras de serviço.',
          'Incentivos fiscais aplicáveis à promoção de saúde e bem-estar corporativo.',
        ],
        bio: [
          'Marcílio é auditor fiscal e especialista da Exatas Contabilidade, orientando empresários a maximizarem seus resultados operacionais com inteligência fiscal, conformidade tributária e segurança jurídica.',
        ],
        quote: 'Planejamento tributário e conformidade fiscal não são custos, são investimentos diretos no lucro da sua empresa.',
        image: '/palestrantes/marcilio.png',
        socials: { linkedin: 'https://linkedin.com' },
      },
      {
        id: 'sp-antonio',
        name: 'Antônio Soares',
        role: 'Contador · Exatas Contabilidade',
        category: 'Negócios, Tecnologia e Gestão',
        talk: 'Benefícios voltados a produtos e serviços relacionados à saúde da mulher e Reforma Tributária',
        talkDescription:
          'Uma análise clara dos impactos da Reforma Tributária nas empresas femininas e como utilizar benefícios legais para reduzir impostos e investir na empresa.',
        takeaways: [
          'Como se preparar estrategicamente para as mudanças da Reforma Tributária.',
          'Redução legal da carga tributária para clínicas, empresas e prestadoras de serviço.',
          'Incentivos fiscais aplicáveis à promoção de saúde e bem-estar corporativo.',
        ],
        bio: [
          'Antônio Soares é contador e sócio da Exatas Contabilidade, especialista em inteligência tributária, contabilidade estratégica e estruturação financeira para empresas em expansão.',
        ],
        quote: 'Planejamento contábil e tributário é a base sólida para o crescimento seguro e lucrativo do seu negócio.',
        image: '/palestrantes/antonio soares.png',
        socials: { linkedin: 'https://linkedin.com' },
      },
      {
        id: 'sp-mineiacarvalho',
        name: 'Mineia Carvalho',
        role: 'Especialista em Gestão de Pessoas & Liderança 360°',
        category: 'Negócios, Tecnologia e Gestão',
        time: '10:00 às 10:40 · Bloco Manhã',
        talk: 'Liderança 360° – O Equilíbrio Entre Negócios, Pessoas e Propósito e a Importância da NR1',
        talkDescription:
          'Como liderar equipes e organizações unindo inteligência emocional, foco no capital humano, propósito estratégico e a implementação prática da NR1 para ambientes de alta performance e bem-estar.',
        takeaways: [
          'Os pilares da Liderança 360° para engajar pessoas e sustentar resultados.',
          'O equilíbrio estratégico entre metas de negócios, bem-estar da equipe e propósito.',
          'A importância da NR1 na estruturação de processos e segurança nas empresas.',
        ],
        bio: [
          'Mineia Carvalho (@mineianc) é mentora e especialista em liderança e desenvolvimento de equipes, atuando no fortalecimento de gestores para liderarem com empatia, método e alto desempenho.',
        ],
        quote: 'Liderar é encontrar o equilíbrio entre resultados de negócios e o cuidado genuíno com as pessoas.',
        image: '/palestrantes/Mineia Carvalho.jpeg',
        socials: { instagram: 'https://instagram.com/mineianc' },
      },
      {
        id: 'sp-edercezario',
        name: 'Eder Cezario',
        role: 'Especialista em Gestão Estratégica, Liderança & Segurança do Trabalho',
        category: 'Negócios, Tecnologia e Gestão',
        time: '10:00 às 10:40 · Bloco Manhã',
        talk: 'Liderança 360° – O Equilíbrio Entre Negócios, Pessoas e Propósito e a Importância da NR1',
        talkDescription:
          'Uma imersão prática sobre liderança humanizada e a aplicação das diretrizes da NR1 na gestão de riscos e valorização do capital humano nas organizações.',
        takeaways: [
          'Implementação prática da NR1 e prevenção de riscos nas empresas.',
          'Como a cultura de segurança e cuidado impulsiona a produtividade organizacional.',
          'Estratégias de liderança para alinhar propósito empresarial e execução operacional.',
        ],
        bio: [
          'Eder Cezario é especialista em liderança estratégica e conformidade da NR1, ajudando líderes e empresas a construírem ambientes corporativos seguros, equilibrados e eficientes.',
        ],
        quote: 'Ambientes seguros e líderes conscientes são o alicerce de qualquer empresa que deseja crescer com solidez.',
        image: '/palestrantes/Eder Cezario.jpeg',
        socials: { instagram: 'https://instagram.com' },
      },
    ],
  },
  {
    title: 'Mente, Genética e Equilíbrio',
    items: [
      {
        id: 'sp-guilherme',
        name: 'Dr. Guilherme Britto',
        role: 'Especialista em Desenvolvimento Humano & Gestão Emocional',
        category: 'Mente, Genética e Equilíbrio',
        time: '10:50 às 11:30 · Bloco Manhã',
        talk: 'A mulher por trás da empreendedora de sucesso',
        talkDescription:
          'Uma conversa profunda sobre inteligência emocional, identidade e superação da síndrome da impostora para construir uma jornada profissional leve e vitoriosa.',
        takeaways: [
          'Como desatar nós emocionais que travam o crescimento profissional.',
          'Desenvolvimento de maturidade emocional no relacionamento com sócios e equipes.',
          'Alinhando ambição profissional com paz de espírito e presença familiar.',
        ],
        bio: [
          'Dr. Guilherme Britto atua no desenvolvimento de líderes e empreendedores, unindo neurociência, comportamento e valores de vida.',
        ],
        quote: 'Seu negócio nunca vai crescer mais rápido do que o seu desenvolvimento pessoal.',
        image: '/palestrantes/Guilherme Lima Britto Aragão.jpeg',
        socials: { instagram: 'https://instagram.com' },
      },
      {
        id: 'sp-gabrielab',
        name: 'Gabriela Benevides Reis Oliveira',
        role: 'Nutricionista Clínica & Hospitalar',
        category: 'Mente, Genética e Equilíbrio',
        time: '10:50 às 11:30 · Bloco Manhã',
        talk: 'A mulher por trás da empreendedora de sucesso',
        talkDescription:
          'Uma conversa profunda sobre saúde, nutrição e equilíbrio emocional para construir uma jornada profissional leve e sustentável.',
        takeaways: [
          'Como a nutrição clínica e a saúde intestinal influenciam a energia e o foco executivo.',
          'Construção de hábitos sustentáveis para mulheres de alta rotina e liderança.',
          'Alinhando ambição profissional com equilíbrio físico, mental e bem-estar.',
        ],
        bio: [
          'Graduada em Nutrição pelo Centro Universitário Estácio de Sergipe (2020).',
          'Pós-graduada em Nutrição Clínica, Hospitalar e Home Care pelo Instituto HIB (2022).',
          'Pós-graduanda em Nutrição em Gastroenterologia e Hepatologia pelo IPGS.',
        ],
        quote: 'Nutrir o corpo e a mente é a base sólida para sustentar uma jornada de sucesso.',
        image: '/palestrantes/Gabriela Benevides Reis Oliveira.jpeg',
        socials: { instagram: 'https://instagram.com/gabrielabenevidesnutri' },
      },
      {
        id: 'sp-andre',
        name: 'Dr. André Yoichi Kuwano',
        role: 'Urologista com atuação em cirurgia minimamente invasiva, cirurgia robótica e uro-oncologia',
        category: 'Mente, Genética e Equilíbrio',
        time: '11:30 às 12:00 · Bloco Manhã',
        talk: 'Seu DNA, seu maior patrimônio: como a genética pode transformar sua saúde e seu futuro',
        talkDescription:
          'Descubra como os testes genéticos, a cirurgia de precisão e os avanços da medicina moderna podem transformar sua saúde e garantir um futuro de longevidade e bem-estar.',
        takeaways: [
          'Como a genética e os testes genômicos orientam prevenções personalizadas.',
          'Cirurgia minimamente invasiva e robótica aplicadas à saúde preventiva.',
          'Estratégias de saúde para longevidade e alta performance.',
        ],
        bio: [
          'Dr. André Yoichi Kuwano é Urologista com atuação em cirurgia minimamente invasiva, cirurgia robótica e uro-oncologia, unindo tecnologia de ponta e medicina de precisão.',
        ],
        quote: 'Seu DNA é seu maior patrimônio: como a genética pode transformar sua saúde e seu futuro.',
        image: '/palestrantes/André Yoichi Kuwano.jpg',
        socials: { instagram: 'https://instagram.com/dr.andreyoichi' },
      },
      {
        id: 'sp-gabrielan',
        name: 'Dra. Gabriela Nabuco',
        role: 'Médica Psiquiatra',
        category: 'Mente, Genética e Equilíbrio',
        time: '16:30 às 17:10 · Bloco Tarde',
        talk: 'Saúde da mulher empreendedora: como crescer sem adoecer',
        talkDescription:
          'Ferramentas de medicina preventiva e psiquiatria para identificar sinais de burnout, ansiedade e exaustão antes que afetem sua vida física e seus negócios.',
        takeaways: [
          'Identificação precoce de esgotamento e sobrecarga mental.',
          'Técnicas de regulação do estresse para momentos de alta demanda ou transição.',
          'Criando um ambiente de trabalho emocionalmente saudável para você e sua equipe.',
        ],
        bio: [
          'Dra. Gabriela Nabuco é médica especialista em saúde mental feminina e orienta empreendedoras a manterem a saúde mental em dia durante o crescimento dos negócios.',
        ],
        quote: 'Sucesso sem saúde mental não é conquista, é insustentabilidade.',
        image: '/palestrantes/Gabriela Nabuco Melo Franco.jfif',
        socials: { instagram: 'https://instagram.com/dra.gabrielanabuco' },
      },
      {
        id: 'sp-ledanobile',
        name: 'Leda Maria Moyses Nobile',
        role: 'Psicóloga Clínica · CRP 19/2846',
        category: 'Mente, Genética e Equilíbrio',
        time: '16:30 às 17:10 · Bloco Tarde',
        talk: 'Saúde da mulher empreendedora: como crescer sem adoecer',
        talkDescription:
          'Estratégias da psicologia clínica e medicina comportamental para prevenção do esgotamento, manejo de estresse e fortalecimento da saúde mental da mulher no ambiente de negócios.',
        takeaways: [
          'Identificação precoce de esgotamento e sobrecarga mental no ambiente de negócios.',
          'Técnicas de regulação emocional e medicina comportamental para momentos de alta demanda.',
          'Construção de uma rotina emocionalmente sustentável para conciliar liderança e bem-estar.',
        ],
        bio: [
          'Psicóloga Clínica (CRP 19/2846).',
          'Mestre em Ciências da Saúde pela Universidade Federal de São Paulo (Unifesp).',
          'Especialista em Dependência Química pela Unifesp.',
          'Especialista em Medicina Comportamental pela Universidade Federal de São Paulo.',
          'Aprimoramento em Psico-oncologia pelo Hospital de Base de Bauru.',
          'Preceptora da residência de Psiquiatria do Hospital de Cirurgia.',
          'Supervisora clínica de Terapia Cognitivo-Comportamental (TCC).',
        ],
        quote: 'Cuidar da mente é o primeiro passo para construir uma trajetória profissional sólida e sustentável.',
        image: '/palestrantes/Leda Maria Moyses Nobile.jpeg',
        socials: { instagram: 'https://instagram.com/ledanobilepsi' },
      },
    ],
  },
];

// Helper para buscar palestrante por ID
export function getSpeakerById(id: string): Speaker | undefined {
  for (const group of speakerGroups) {
    const found = group.items.find((item) => item.id === id);
    if (found) return found;
  }
  return undefined;
}

// Helper para listar todos os palestrantes planos
export function getAllSpeakers(): Speaker[] {
  return speakerGroups.flatMap((group) => group.items);
}

// ─── Programação Oficial (Baseada no Flyer Oficial do Evento) ──────────────────

export const shift0Rows: ScheduleRow[] = [
  {
    time: '08:00 às 09:00',
    categoryTitle: 'CREDENCIAMENTO E WELCOME COFFEE',
    categoryType: 'credenciamento',
    description: 'Recepção dos participantes, entrega do kit oficial, networking e visita aos expositores.',
    icon: 'coffee',
  },
  {
    time: '09:00 às 10:00',
    categoryTitle: 'PAINEL DE ABERTURA',
    categoryType: 'painel',
    items: [
      { speaker: 'Dra. Raquel Dosea', talk: 'A Beleza Rara da Mulher Empoderada' },
      { speaker: 'Dra. Caroline Vicente', talk: 'A autoestima quando eu me escolho com estratégia' },
      { speaker: 'Dra. Caroline Smith', talk: 'Empoderamento Feminino: quando ciência, saúde íntima e longevidade caminham juntas.' },
    ],
  },
  {
    time: '10:00 às 10:40',
    categoryTitle: 'PALESTRA',
    categoryType: 'palestra',
    items: [
      {
        speaker: 'Mineia Carvalho e Eder Cezario',
        talk: 'Liderança 360° – O Equilíbrio Entre Negócios, Pessoas e Propósito e a Importância da NR1',
      },
    ],
  },
  {
    time: '10:40 às 10:50',
    categoryTitle: 'MOMENTO CONEXÃO',
    categoryType: 'conexao',
    description: 'Networking entre participantes, visita aos patrocinadores e expositores.',
    icon: 'users',
  },
  {
    time: '10:50 às 11:30',
    categoryTitle: 'PALESTRA',
    categoryType: 'palestra',
    items: [
      {
        speaker: 'Dr. Guilherme Britto e Gabriela Benevides (Nutricionista)',
        talk: 'A mulher por trás da empreendedora de sucesso.',
      },
    ],
  },
  {
    time: '11:30 às 12:00',
    categoryTitle: 'PALESTRA',
    categoryType: 'palestra',
    items: [
      {
        speaker: 'Dr. André Yoichi',
        talk: 'Seu DNA, seu maior patrimônio: como a genética pode transformar sua saúde e seu futuro.',
      },
    ],
  },
  {
    time: '12:00 às 14:00',
    categoryTitle: 'INTERVALO PARA ALMOÇO',
    categoryType: 'almoco',
    description: 'Momento para almoço, descanso e networking.',
    icon: 'lunch',
  },
];

export const shift1Rows: ScheduleRow[] = [
  {
    time: '14:00 às 14:40',
    categoryTitle: 'PALESTRA',
    categoryType: 'palestra',
    items: [
      {
        speaker: 'Leonardo Lima',
        talk: 'Como encher sua agenda de clientes vendendo todos os dias com IA.',
      },
    ],
  },
  {
    time: '14:40 às 15:20',
    categoryTitle: 'PALESTRA',
    categoryType: 'palestra',
    items: [
      {
        speaker: 'Dra. Christiane Espínola',
        talk: 'A nova era da Estética: tecnologia, bioestimuladores e longevidade com naturalidade.',
      },
    ],
  },
  {
    time: '15:20 às 16:00',
    categoryTitle: 'PALESTRA',
    categoryType: 'palestra',
    items: [
      {
        speaker: 'Italo Marcel',
        talk: 'Sua empresa não precisa vender mais, ela precisa vender melhor.',
      },
    ],
  },
  {
    time: '16:00 às 16:30',
    categoryTitle: 'COFFEE BREAK & NETWORKING',
    categoryType: 'coffeebreak',
    description: 'Momento para visita aos patrocinadores, conexões e experiências.',
    icon: 'coffee',
  },
  {
    time: '16:30 às 17:10',
    categoryTitle: 'PALESTRA',
    categoryType: 'palestra',
    items: [
      {
        speaker: 'Dra. Gabriela Nabuco e Psicóloga Leda Nobile',
        talk: 'Saúde da mulher empreendedora: como crescer sem adoecer.',
      },
    ],
  },
  {
    time: '17:10 às 17:50',
    categoryTitle: 'PALESTRA',
    categoryType: 'palestra',
    items: [
      {
        speaker: 'Dra. Aline Fioravanti',
        talk: 'Autocuidado estratégico: como o MFAT pode integrar beleza, saúde e rotina profissional.',
      },
    ],
  },
  {
    time: '18:00 às 19:30',
    categoryTitle: 'ENCERRAMENTO ESPECIAL',
    categoryType: 'encerramento',
    items: [
      {
        speaker: 'Mara Maravilha',
        talk: 'Uma conversa inspiradora sobre fé, propósito, superação, carreira e protagonismo feminino.',
      },
    ],
    icon: 'sparkle',
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqItems: FaqItem[] = [
  {
    q: 'Onde fica o Delmar Hotel?',
    a: 'O evento será realizado no Delmar Hotel, localizado na Av. Santos Dumont, 1500 - Coroa do Meio, Aracaju - SE, CEP 49035-730.',
  },
  {
    q: 'Como funciona a compra pelo Sympla?',
    a: 'Todos os botões de ingresso levam à página oficial do evento no Sympla, onde a compra é processada com segurança e você recebe a confirmação por e-mail.',
  },
  {
    q: 'Como escolho meu programa no ingresso Legacy?',
    a: 'No momento da compra do ingresso Master Legacy, você seleciona 1 dos 4 programas exclusivos: Harmonização Facial, Laser CO2 na face, Laser CO2 na parte íntima ou Gestão Empresarial.',
  },
  {
    q: 'Qual a diferença entre os ingressos?',
    a: 'Essential dá acesso completo à programação. Signature soma conforto, proximidade e um jantar exclusivo. Legacy acrescenta um programa de desenvolvimento individual escolhido por você.',
  },
];

// ─── Ingressos ────────────────────────────────────────────────────────────────

export const legacyPrograms = [
  { title: 'Harmonização Facial', speaker: 'Dra. Carol Vicente ou Dra. Raquel' },
  { title: 'Laser CO2 na Face', speaker: 'Christiane Espínola' },
  { title: 'Laser CO2 Íntimo', speaker: 'Dra. Caroline Smith' },
  { title: 'Gestão Empresarial', speaker: 'Italo Marcel' },
];

// ─── Audience cards ───────────────────────────────────────────────────────────

export const audienceCards = [
  '...tem um projeto parado no papel esperando o momento certo.',
  '...quer crescer profissionalmente, mas sente falta de novas referências.',
  '...quer estar perto de mulheres que também estão construindo algo.',
  '...sabe que precisa investir mais em si mesma.',
  '...está em busca de novas oportunidades e conexões.',
  '...sente que chegou a hora do próximo passo.',
];

// ─── Experiência cards ────────────────────────────────────────────────────────

export const experienceCards = [
  {
    title: 'Palestras & conteúdo',
    desc: 'Conhecimento direto de especialistas em negócios, saúde, tecnologia e liderança.',
    size: 'small',
  },
  {
    title: 'Networking estratégico',
    desc: 'Intervalos pensados para aproximar você de outras mulheres que também estão construindo algo, sem pressa, com propósito.',
    size: 'large',
  },
  {
    title: 'Área de expositores',
    desc: 'Marcas e serviços para descobrir e experimentar durante os intervalos.',
    size: 'small',
  },
  {
    title: 'Vivências práticas',
    desc: 'Momentos hands-on para colocar o que você aprender em movimento.',
    size: 'small',
  },
  {
    title: 'Kit & encontros especiais',
    desc: 'Kit oficial, brindes e sorteios dos patrocinadores ao longo do dia.',
    size: 'small',
  },
];

// ─── Pilares ──────────────────────────────────────────────────────────────────

export const pillars = [
  { label: 'Negócios', desc: 'Empreendedorismo e crescimento com estratégia.', offset: false },
  { label: 'Saúde', desc: 'Bem-estar, autoestima e cuidado com propósito.', offset: true },
  { label: 'Tecnologia', desc: 'Inovação e futuro a favor do seu negócio.', offset: false },
  { label: 'Liderança', desc: 'Posicionamento, coragem e protagonismo.', offset: true },
];

// ─── Patrocinadores & Cotas de Patrocínio ────────────────────────────────────

export interface SponsorshipBenefitCategory {
  title: string;
  items: string[];
}

export interface SponsorshipTier {
  id: string;
  name: string;
  price: string;
  maxSponsors?: string;
  popular?: boolean;
  color: string;
  borderColor: string;
  badge?: string;
  highlights: string[];
  categories: SponsorshipBenefitCategory[];
}

export interface SponsorshipPillar {
  title: string;
  desc: string;
  iconName: string;
}

export const sponsorshipPillars: SponsorshipPillar[] = [
  {
    title: 'Público Qualificado',
    desc: 'Conexão direta com empreendedoras, executivas e tomadoras de decisão de Sergipe e região.',
    iconName: 'users',
  },
  {
    title: 'Grande Visibilidade',
    desc: 'Exposição de marca em painéis, backdrop oficial, telão HD e materiais impressos de alto impacto.',
    iconName: 'eye',
  },
  {
    title: 'Relacionamento & Networking',
    desc: 'Espaço exclusivo para estandes, mesas expositoras e interação nos momentos de coffee break.',
    iconName: 'handshake',
  },
  {
    title: 'Divulgação & Conteúdo',
    desc: 'Vídeo institucional no palco, menção do mestre de cerimônias e ativação com Mara Maravilha.',
    iconName: 'megaphone',
  },
  {
    title: 'Propósito Forte',
    desc: 'Associe sua marca à transformação, inovação e protagonismo no empreendedorismo feminino.',
    iconName: 'award',
  },
];

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    id: 'diamante',
    name: 'Cota Diamante',
    price: 'R$ 10.000',
    maxSponsors: 'Máximo 4 patrocinadores',
    popular: true,
    badge: 'Mais Completa & Exclusiva',
    color: '#3D1220',
    borderColor: '#D4AF37',
    highlights: [
      'Stand Premium para exposição na feira (melhor localização)',
      '01 Vídeo Institucional (30s) exibido no telão principal',
      'Divulgação exclusiva da marca por Mara Maravilha',
      'Menção nominal pelo mestre de cerimônias no palco',
      'Logo em destaque no backdrop, telão, site e impressos',
      '08 Ingressos Tradicionais + 02 Ingressos VIP (com Jantar)',
    ],
    categories: [
      {
        title: 'Divulgação',
        items: [
          'Logo em destaque em todo material de divulgação',
          'Logo no backdrop oficial do evento',
          'Logo no telão antes, durante os intervalos e encerramento',
          'Logo em destaque no site oficial',
          'Marca em todos os materiais impressos (crachá, bloco de notas)',
        ],
      },
      {
        title: 'Experiência',
        items: [
          'Stand Premium para exposição na feira',
          'Melhor localização do evento',
          'Direito de distribuir brindes e materiais aos participantes',
          'Inclusão de item promocional no kit oficial',
        ],
      },
      {
        title: 'Marketing',
        items: [
          '01 vídeo institucional (até 30 segundos) exibido no telão',
          'Menção nominal pelo mestre de cerimônias',
          'Divulgação da marca pela Mara Maravilha durante ação promocional',
          'Participação nos releases enviados à imprensa',
        ],
      },
      {
        title: 'Relacionamento',
        items: [
          '08 Ingressos Tradicionais (Essential)',
          '02 Ingressos VIP (Signature com Jantar incluso)',
          'Networking exclusivo com palestrantes e convidadas',
        ],
      },
    ],
  },
  {
    id: 'ouro',
    name: 'Cota Ouro',
    price: 'R$ 5.000',
    maxSponsors: 'Máximo 8 patrocinadores',
    popular: false,
    color: '#F7F1E8',
    borderColor: '#D4AF37',
    highlights: [
      'Mesa Expositora na área do evento + distribuição de brindes',
      'Menção nominal pelo mestre de cerimônias',
      'Logo em destaque no backdrop oficial (tamanho intermediário)',
      'Exposição da marca no telão durante os intervalos',
      'Marca em destaque no site oficial do evento',
      '05 Ingressos Tradicionais (Essential)',
    ],
    categories: [
      {
        title: 'Divulgação',
        items: [
          'Logo em destaque nos materiais de divulgação',
          'Logo no backdrop oficial (tamanho intermediário)',
          'Logo no telão durante os intervalos',
          'Marca no site oficial',
        ],
      },
      {
        title: 'Experiência',
        items: [
          'Mesa Expositora na área do evento',
          'Distribuição de panfletos e brindes',
        ],
      },
      {
        title: 'Marketing',
        items: ['Menção nominal pelo mestre de cerimônias'],
      },
      {
        title: 'Relacionamento',
        items: ['05 Ingressos Tradicionais (Essential)'],
      },
    ],
  },
  {
    id: 'prata',
    name: 'Cota Prata',
    price: 'R$ 2.000',
    popular: false,
    color: '#F7F1E8',
    borderColor: '#C0C0C0',
    highlights: [
      'Logo em todo material digital de divulgação',
      'Logo no painel oficial de patrocinadores',
      'Exposição da marca no telão durante os intervalos',
      '02 Ingressos Tradicionais (Essential)',
    ],
    categories: [
      {
        title: 'Divulgação',
        items: [
          'Logo em todo material digital',
          'Logo no painel de patrocinadores',
          'Logo no telão durante os intervalos',
        ],
      },
      {
        title: 'Relacionamento',
        items: ['02 Ingressos Tradicionais (Essential)'],
      },
    ],
  },
];

export const sponsorshipContacts = {
  phone: '(79) 99831-7137',
  whatsappUrl: 'https://wa.me/5579998317137',
  email: 'contato@mariazeliaeventos.com.br',
  emailSecundario: 'mariazelia.eventos@gmail.com',
  instagram: '@mariazelia.eventos',
  instagramUrl: 'https://instagram.com/mariazelia.eventos',
};

export const companyInfo = {
  razaoSocial: 'MARIA ZELIA EVENTOS & REPRESENTACOES LTDA',
  cnpj: '68.174.950/0001-76',
  administradora: 'Mariana Silva Rocha',
  cidade: 'São Cristóvão / SE',
  banco: '0260 - Nu Pagamentos S.A.',
  agencia: '0001',
  conta: '116065832-4',
  chavePix: '68.174.950/0001-76',
};


