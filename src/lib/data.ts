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

export interface ScheduleItem {
  speaker: string;
  talk: string;
}

export interface ScheduleRow {
  time: string;
  items: ScheduleItem[];
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
        time: '17:20 às 18:30 · Encerramento Master',
        talk: 'Encerramento Magna: Coragem, Reinvenção e Protagonismo Feminino',
        talkDescription:
          'Uma apresentação emocionante e inspiradora de encerramento unindo trajetória de vida, superação, comunicação estratégica e a importância de assumir o palco da própria história com fé e determinação.',
        takeaways: [
          'Como manter a resiliência e se reinventar em diferentes momentos da carreira.',
          'A força do posicionamento pessoal e autenticidade na construção de marca.',
          'Ferramentas de comunicação para encantar, liderar e influenciar com propósito.',
          'Equilíbrio entre vida pública, família, fé e gestão de novos projetos.',
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
        time: '09:00 às 09:20 · Bloco Manhã',
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
        time: '09:20 às 09:40 · Bloco Manhã',
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
        socials: { instagram: 'https://instagram.com' },
      },
      {
        id: 'sp-carolines',
        name: 'Dra. Caroline Smith',
        role: 'Médica Ginecologista & Especialista em Longevidade Íntima',
        category: 'Saúde, Estética e Longevidade',
        time: '09:40 às 10:00 · Bloco Manhã',
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
        socials: { instagram: 'https://instagram.com' },
      },
      {
        id: 'sp-christiane',
        name: 'Christiane Espínola Bandeira de Mello',
        role: 'Cirurgiã Dentista / Esteticista e Cosmetóloga',
        category: 'Saúde, Estética e Longevidade',
        time: '14:20 às 15:00 · Bloco Tarde',
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
        time: '16:40 às 17:20 · Bloco Tarde',
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
        socials: { instagram: 'https://instagram.com' },
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
        time: '13:50 às 14:20 · Bloco Tarde',
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
        image: '/palestrantes/Leonardo Lima.jpg',
        socials: { instagram: 'https://instagram.com', linkedin: 'https://linkedin.com' },
      },
      {
        id: 'sp-italo',
        name: 'Italo Marcel',
        role: 'Consultor de Gestão Empresarial & Estratégia de Vendas',
        category: 'Negócios, Tecnologia e Gestão',
        time: '15:00 às 15:40 · Bloco Tarde',
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
        socials: { instagram: 'https://instagram.com', linkedin: 'https://linkedin.com' },
      },
      {
        id: 'sp-marcilio',
        name: 'Marcilio',
        role: 'Especialista em Direito Tributário & Soluções Corporativas',
        category: 'Negócios, Tecnologia e Gestão',
        time: '10:00 às 10:20 · Bloco Manhã',
        talk: 'Benefícios voltados a produtos e serviços relacionados à saúde da mulher e Reforma Tributária',
        talkDescription:
          'Uma análise clara dos impactos da Reforma Tributária nas empresas femininas e como utilizar benefícios legais para reduzir impostos e investir na empresa.',
        takeaways: [
          'Como se preparar estrategicamente para as mudanças da Reforma Tributária.',
          'Redução legal da carga tributária para clínicas, empresas e prestadoras de serviço.',
          'Incentivos fiscais aplicáveis à promoção de saúde e bem-estar corporativo.',
        ],
        bio: [
          'Marcilio é especialista em inteligência tributária e soluções corporativas, orientando empresários a maximizarem seus resultados operacionais com segurança jurídica.',
        ],
        quote: 'Planejamento tributário não é custo, é investimento direto no lucro da sua empresa.',
        socials: { linkedin: 'https://linkedin.com' },
      },
      {
        id: 'sp-antonio',
        name: 'Antonio',
        role: 'Especialista em Direito Tributário & Soluções Corporativas',
        category: 'Negócios, Tecnologia e Gestão',
        time: '10:00 às 10:20 · Bloco Manhã',
        talk: 'Benefícios voltados a produtos e serviços relacionados à saúde da mulher e Reforma Tributária',
        talkDescription:
          'Uma análise clara dos impactos da Reforma Tributária nas empresas femininas e como utilizar benefícios legais para reduzir impostos e investir na empresa.',
        takeaways: [
          'Como se preparar estrategicamente para as mudanças da Reforma Tributária.',
          'Redução legal da carga tributária para clínicas, empresas e prestadoras de serviço.',
          'Incentivos fiscais aplicáveis à promoção de saúde e bem-estar corporativo.',
        ],
        bio: [
          'Antonio é especialista em inteligência tributária e soluções corporativas, orientando empresários a maximizarem seus resultados operacionais com segurança jurídica.',
        ],
        quote: 'Planejamento tributário não é custo, é investimento direto no lucro da sua empresa.',
        socials: { linkedin: 'https://linkedin.com' },
      },
      {
        id: 'sp-ramonny',
        name: 'Dra. Ramonny',
        role: 'Advogada & Consultora em Compliance Empresarial',
        category: 'Negócios, Tecnologia e Gestão',
        time: '10:20 às 10:40 · Bloco Manhã',
        talk: 'Importância da NRJ para empresas e segurança jurídica',
        talkDescription:
          'Saiba como proteger a sua empresa de riscos trabalhistas e operacionais implementando normas de conformidade jurídica de forma prática e descomplicada.',
        takeaways: [
          'Principais vulnerabilidades jurídicas de empresas em crescimento.',
          'Como estruturar contratos e normas internas seguras.',
          'Prevenção de passivos trabalhistas e fortalecimento do patrimônio.',
        ],
        bio: [
          'Dra. Ramonny é advogada especialista em direito empresarial e gestão de riscos jurídicos para empreendedoras de pequeno e médio porte.',
        ],
        quote: 'Segurança jurídica é o alicerce indispensável para crescer sem medo.',
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
        time: '11:00 às 11:40 · Bloco Manhã',
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
        name: 'Gabriela Benevides',
        role: 'Especialista em Desenvolvimento Humano & Gestão Emocional',
        category: 'Mente, Genética e Equilíbrio',
        time: '11:00 às 11:40 · Bloco Manhã',
        talk: 'A mulher por trás da empreendedora de sucesso',
        talkDescription:
          'Uma conversa profunda sobre inteligência emocional, identidade e superação da síndrome da impostora para construir uma jornada profissional leve e vitoriosa.',
        takeaways: [
          'Como desatar nós emocionais que travam o crescimento profissional.',
          'Desenvolvimento de maturidade emocional no relacionamento com sócios e equipes.',
          'Alinhando ambição profissional com paz de espírito e presença familiar.',
        ],
        bio: [
          'Gabriela Benevides atua no desenvolvimento de líderes e empreendedoras, unindo comportamento, psicologia e inteligência emocional.',
        ],
        quote: 'Seu negócio nunca vai crescer mais rápido do que o seu desenvolvimento pessoal.',
        socials: { instagram: 'https://instagram.com' },
      },
      {
        id: 'sp-andre',
        name: 'Dr. Andre Yochi',
        role: 'Médico Especialista em Medicina Genômica & Saúde de Precisão',
        category: 'Mente, Genética e Equilíbrio',
        time: '11:40 às 12:10 · Bloco Manhã',
        talk: 'Seu DNA, seu maior patrimônio: como a genética pode transformar sua saúde e seu futuro',
        talkDescription:
          'Descubra como os testes genéticos e a medicina personalizada podem direcionar sua alimentação, suplementação e estilo de vida para prevenir doenças e otimizar seu futuro.',
        takeaways: [
          'Como a genômica pode personalizar seu plano de saúde e produtividade.',
          'Nutrigenética: os alimentos e nutrientes certos para a sua assinatura biológica.',
          'Prevenção de doenças crônicas e longevidade ativa baseada em dados reais do seu DNA.',
        ],
        bio: [
          'Dr. Andre Yochi é médico referência em medicina genômica e saúde de precisão, aplicando descobertas da ciência genética para alta performance e longevidade.',
        ],
        quote: 'Seus genes indicam tendências, mas suas escolhas diárias escrevem seu destino.',
        socials: { instagram: 'https://instagram.com', linkedin: 'https://linkedin.com' },
      },
      {
        id: 'sp-gabrielan',
        name: 'Dra. Gabriela Nabuco',
        role: 'Médica Psiquiatra',
        category: 'Mente, Genética e Equilíbrio',
        time: '16:00 às 16:40 · Bloco Tarde',
        talk: 'Pilares da saúde mental da mulher empreendedora',
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
        id: 'sp-carolineg',
        name: 'Psicóloga Caroline Guimarães',
        role: 'Psicóloga Organizacional & Saúde Emocional',
        category: 'Mente, Genética e Equilíbrio',
        time: '16:00 às 16:40 · Bloco Tarde',
        talk: 'Saúde da mulher empreendedora: como crescer sem adoecer',
        talkDescription:
          'Ferramentas de psicologia preventiva para identificar sinais de burnout, ansiedade e exaustão antes que afetem sua vida física e seus negócios.',
        takeaways: [
          'Identificação precoce de esgotamento e sobrecarga mental.',
          'Técnicas de regulação do estresse para momentos de alta demanda ou transição.',
          'Criando um ambiente de trabalho emocionalmente saudável para você e sua equipe.',
        ],
        bio: [
          'Caroline Guimarães é psicóloga especialista em comportamento humano e saúde mental no trabalho.',
        ],
        quote: 'Sucesso sem saúde mental não é conquista, é insustentabilidade.',
        socials: { instagram: 'https://instagram.com' },
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

// ─── Programação ──────────────────────────────────────────────────────────────

export const shift0Rows: ScheduleRow[] = [
  {
    time: '09:00 - 10:00',
    items: [
      { speaker: 'Dra. Raquel Dosea', talk: 'A Beleza Rara da Mulher Empoderada' },
      { speaker: 'Dra. Caroline Vicente', talk: 'A autoestima quando eu me escolho com estratégia' },
      { speaker: 'Dra. Caroline Smith', talk: 'Empoderamento Feminino: quando ciência, saúde íntima e longevidade caminham juntas' },
    ],
  },
  {
    time: '10:00 - 10:40',
    items: [
      { speaker: 'Marcilio', talk: 'Benefícios voltados a produtos e serviços relacionados à saúde da mulher e Reforma Tributária' },
      { speaker: 'Antonio', talk: 'Benefícios voltados a produtos e serviços relacionados à saúde da mulher e Reforma Tributária' },
      { speaker: 'Dra. Ramonny', talk: 'Importância da NRJ para empresas' },
    ],
  },
  {
    time: '11:00 - 11:40',
    items: [
      { speaker: 'Dr. Guilherme Britto', talk: 'A mulher por trás da empreendedora de sucesso' },
      { speaker: 'Gabriela Benevides', talk: 'A mulher por trás da empreendedora de sucesso' },
    ],
  },
  {
    time: '11:40 - 12:10',
    items: [
      { speaker: 'Dr. Andre Yochi', talk: 'Seu DNA, seu maior patrimônio: como a genética pode transformar sua saúde e seu futuro' },
    ],
  },
];

export const shift1Rows: ScheduleRow[] = [
  {
    time: '13:50 - 14:20',
    items: [
      { speaker: 'Leonardo Lima', talk: 'Como encher sua agenda de clientes vendendo todos os dias com IA' },
    ],
  },
  {
    time: '14:20 - 15:00',
    items: [
      { speaker: 'Christiane Espínola', talk: 'A nova era da Estética: tecnologia, bioestimuladores e longevidade com naturalidade' },
    ],
  },
  {
    time: '15:00 - 15:40',
    items: [
      { speaker: 'Italo Marcel', talk: 'Sua empresa não precisa vender mais, ela precisa vender melhor' },
    ],
  },
  {
    time: '16:00 - 16:40',
    items: [
      { speaker: 'Dra. Gabriela Nabuco', talk: 'Pilares da saúde mental da mulher empreendedora' },
      { speaker: 'Psicóloga Caroline Guimarães', talk: 'Saúde da mulher empreendedora: como crescer sem adoecer' },
    ],
  },
  {
    time: '16:40 - 17:20',
    items: [
      { speaker: 'Dra. Aline Fioravanti', talk: 'Autocuidado estratégico: como o MFAT pode integrar beleza, saúde e rotina profissional' },
    ],
  },
  {
    time: '17:20 - 18:30',
    items: [
      { speaker: 'Mara Maravilha', talk: 'Palestra de Encerramento do Evento' },
    ],
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


