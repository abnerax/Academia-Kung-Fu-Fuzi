export interface Modality {
  id: string;
  name: string;
  category: 'tradicional' | 'combate' | 'infantil' | 'bem-estar';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  scheduleSummary: string;
  whatsappMessage: string;
  image: string;
  fallbackImage: string;
  tags: string[];
}

export interface ScheduleItem {
  day: string;
  dayShort: string;
  dayIndex: number;
  sessions: {
    modality: string;
    time: string;
    notes?: string;
  }[];
}

export interface OfficialImage {
  id: string;
  title: string;
  category: string;
  description: string;
  localPath: string;
  cdnUrl: string;
  tag: string;
  isHero?: boolean;
  isKidsSpecial?: boolean;
  isHistorical?: boolean;
}

export interface VideoShowcase {
  id: string;
  title: string;
  category: string;
  description: string;
  youtubeUrl: string;
  thumbnail: string;
  duration?: string;
}

export const ACADEMY_INFO = {
  name: "Academia Fuzi de Kung Fu",
  fullName: "Academia Fuzi de Kung Fu Wushu e Boxe Chinês",
  institutionalName: "Escola Fuzi Tradicional de Kung Fu, Wushu e Boxe Chinês",
  shortName: "Academia Fuzi",
  slogan: "Mais do que lutar. Evoluir em corpo, mente e disciplina.",
  description:
    "Conheça o Kung Fu tradicional, desenvolva suas habilidades e descubra uma prática que une movimento, concentração e disciplina. Encontre sua turma na Academia Fuzi, em Salto, SP.",
  institutionText:
    "Na Academia Fuzi, as artes marciais são uma oportunidade de aprender, praticar e evoluir continuamente. O treinamento reúne técnicas, movimento, concentração e disciplina, valorizando o respeito pelo professor, pelos colegas e pelo próprio processo de aprendizagem.",
  historyText:
    "Fundamentada na preservação das tradições marciais chinesas, a Academia Fuzi se destaca em Salto pela seriedade de seu método, disciplina nos treinamentos e ambiente acolhedor para praticantes de todas as idades.",
  
  city: "Salto, São Paulo, Brasil",
  neighborhood: "Jardim Arco Íris",
  address: "Rua Luiz Brito de Almeida, 1107, Jardim Arco Íris, Salto, SP, Brasil",
  addressShort: "Rua Luiz Brito de Almeida, 1107 - Salto, SP",
  
  // Official Contacts
  whatsappPhoneRaw: "5511994830840",
  whatsappPhoneFormatted: "(11) 99483-0840",
  whatsappUrl: "https://wa.me/5511994830840",
  instagramUrl: "https://www.instagram.com/fuzi.kungfu/",
  instagramHandle: "@fuzi.kungfu",
  email: "academiafuzi@gmail.com",
  youtubeUrl: "https://youtube.com/@machado_22.62",
  youtubeHandle: "@machado_22.62",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Luiz+Brito+de+Almeida+1107+Jardim+Arco+Iris+Salto+SP",

  // Verification note for client
  divergenceNotice: {
    title: "Conferência pré-publicação",
    description:
      "O WhatsApp configurado em todos os pontos de contato é o informado no briefing: (11) 99483-0840. A arte física de cronograma da academia apresenta outro número secundário para validação pré-impressão.",
  }
};

export const OFFICIAL_IMAGES: OfficialImage[] = [
  {
    id: "img-04-hero",
    title: "Kung Fu em Ação",
    category: "Hero / Destaque Principal",
    description: "Fotografia oficial transmitindo dinamismo, postura marcial, agilidade e a essência da tradição chinesa.",
    localPath: "/images/kungfu_acao_hero.png",
    cdnUrl: "https://i.postimg.cc/PfFMHTnZ/Poster-de-Kung-Fu-em-Acao.png",
    tag: "Destaque Principal",
    isHero: true,
  },
  {
    id: "img-01-kids",
    title: "Kung Fu Kids — Disciplina e Confiança",
    category: "Turma Infantil",
    description: "O treinamento infantil da Academia Fuzi fortalece a coordenação motora, concentração, respeito e disciplina em ambiente seguro.",
    localPath: "/images/kids_kungfu.png",
    cdnUrl: "https://i.postimg.cc/wjN2FPP1/Kung-Fu-Kids-Disciplina-e-Confianca.png",
    tag: "Kung Fu Kids",
    isKidsSpecial: true,
  },
  {
    id: "img-03-poster",
    title: "Pôster Oficial da Academia Fuzi",
    category: "Acervo da Escola",
    description: "Material oficial de divulgação e proposta marcial da Academia Fuzi de Kung Fu Wushu e Boxe Chinês.",
    localPath: "/images/poster_fuzi.png",
    cdnUrl: "https://i.postimg.cc/Zn0FNDpv/Poster-Academia-Fuzi-de-Kung-Fu.png",
    tag: "Acervo Fuzi",
  },
  {
    id: "img-05-historico",
    title: "Registro Visual da Academia Fuzi",
    category: "Acervo Institucional",
    description: "Arte oficial comemorativa preservada no acervo da escola. Observação: promoções e valores históricos não representam ofertas vigentes.",
    localPath: "/images/promocao_historico.png",
    cdnUrl: "https://i.postimg.cc/wjD5DNyR/Promocao-Academia-Fuzi-de-Kung-Fu.png",
    tag: "Acervo Histórico",
    isHistorical: true,
  },
];

export const PILLARS = [
  {
    number: "01",
    title: "Tradição Marcial Chinesa",
    desc: "Preservação da linhagem, das posturas ancestrais e dos princípios técnicos do Kung Fu Wushu.",
  },
  {
    number: "02",
    title: "Disciplina e Autocontrole",
    desc: "Treinamento focado em respeito mútuo, perseverança e domínio mental nas adversidades.",
  },
  {
    number: "03",
    title: "Condicionamento e Habilidade",
    desc: "Desenvolvimento de flexibilidade, agilidade, coordenação motora e força funcional.",
  },
  {
    number: "04",
    title: "Para Crianças e Adultos",
    desc: "Turmas estruturadas para diferentes faixas etárias, respeitando o ritmo e o momento de cada aluno.",
  },
  {
    number: "05",
    title: "Evolução Contínua",
    desc: "Progresso individual construído com dedicação gradual, consistência e paciência nos treinos.",
  },
];

export const BENEFITS = [
  {
    title: "Condicionamento físico e coordenação motora",
    desc: "Exercícios que trabalham postura, reflexos, equilíbrio e resistência muscular de maneira integrada.",
  },
  {
    title: "Disciplina e constância",
    desc: "A prática regular estimula o compromisso pessoal, a rotina saudável e a superação dos próprios limites.",
  },
  {
    title: "Concentração e atenção",
    desc: "Exercícios de forma e técnicas exigem foco no momento presente, auxiliando na clareza mental diária.",
  },
  {
    title: "Desenvolvimento técnico e consciência corporal",
    desc: "Compreensão de alinhamento articular, controle de respiração e domínio de cada movimento.",
  },
  {
    title: "Respeito, autocontrole e convivência",
    desc: "Ambiente que valoriza a etiqueta marcial, a empatia com os parceiros de treino e a humildade.",
  },
];

export const MODALITIES: Modality[] = [
  {
    id: "kung-fu-tradicional",
    name: "Kung Fu Tradicional",
    category: "tradicional",
    categoryLabel: "Tradição & Técnica",
    shortDesc: "Aprendizagem das técnicas tradicionais, coordenação, concentração e disciplina através de formas e posturas.",
    fullDesc: "Destaque para o aprendizado das técnicas clássicas das artes marciais chinesas, refinamento de movimentos, flexibilidade, concentração e evolução técnica constante através da prática repetitiva e consciente.",
    scheduleSummary: "Seg e Qua: 18h e 19h30 · Sex: 18h e 19h",
    whatsappMessage: "Olá! Gostaria de receber informações sobre as aulas de Kung Fu Tradicional da Academia Fuzi.",
    image: "/images/kungfu_acao_hero.png",
    fallbackImage: "https://i.postimg.cc/PfFMHTnZ/Poster-de-Kung-Fu-em-Acao.png",
    tags: ["Formas Tradicionais", "Posturas e Defesa", "Evolução Técnica"],
  },
  {
    id: "kung-fu-kids",
    name: "Kung Fu Kids",
    category: "infantil",
    categoryLabel: "Público Infantil",
    shortDesc: "Prática voltada ao desenvolvimento motor, atenção, respeito aos colegas e disciplina em ambiente acolhedor.",
    fullDesc: "Apresenta a arte marcial às crianças com metodologia adequada, estimulando a coordenação, o respeito pelo professor e pelos companheiros de treino, a atenção e a disciplina como hábitos positivos de vida.",
    scheduleSummary: "Ter e Qui: 17h e 19h · Sáb: 10h",
    whatsappMessage: "Olá! Gostaria de receber informações sobre as aulas de Kung Fu Kids da Academia Fuzi.",
    image: "/images/kids_kungfu.png",
    fallbackImage: "https://i.postimg.cc/wjN2FPP1/Kung-Fu-Kids-Disciplina-e-Confianca.png",
    tags: ["Desenvolvimento Motor", "Disciplina & Respeito", "Atenção & Foco"],
  },
  {
    id: "sanda-boxe-chines",
    name: "Sanda (Boxe Chinês)",
    category: "combate",
    categoryLabel: "Combate Esportivo",
    shortDesc: "Prática esportiva dinâmica que reúne técnicas de socos, chutes, projeções e condicionamento físico rigoroso.",
    fullDesc: "Modalidade de combate esportivo das artes marciais chinesas com foco em movimentação rápida, técnicas de ataque e defesa, trabalho com luvas e aparadores, e alto gasto calórico com disciplina marcial.",
    scheduleSummary: "Ter e Qui: 20h · Sáb: 10h",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os treinos de Sanda (Boxe Chinês) na Academia Fuzi.",
    image: "/images/poster_fuzi.png",
    fallbackImage: "https://i.postimg.cc/Zn0FNDpv/Poster-Academia-Fuzi-de-Kung-Fu.png",
    tags: ["Combate Esportivo", "Golpes & Projeções", "Condicionamento Físico"],
  },
  {
    id: "manha-kung-fu-sanda",
    name: "Kung Fu e Sanda Matinal",
    category: "tradicional",
    categoryLabel: "Horário Especial",
    shortDesc: "Treinamento no início do dia para quem busca incluir a energia da arte marcial na rotina antes do trabalho ou estudos.",
    fullDesc: "Turma matutina com integração de técnicas de Kung Fu e Boxe Chinês, ideal para despertar a disposição física, manter regularidade e treinar com foco no início da manhã.",
    scheduleSummary: "Seg, Qua e Sex: 07h30",
    whatsappMessage: "Olá! Gostaria de informações sobre o horário matinal de Kung Fu e Sanda (07h30) da Academia Fuzi.",
    image: "/images/kungfu_acao_hero.png",
    fallbackImage: "https://i.postimg.cc/PfFMHTnZ/Poster-de-Kung-Fu-em-Acao.png",
    tags: ["Treino Matinal", "Energia e Disposição", "Seg, Qua e Sex"],
  },
  {
    id: "tai-chi-silencio",
    name: "Tai Chi / Treino do Silêncio",
    category: "bem-estar",
    categoryLabel: "Equilíbrio & Consciência",
    shortDesc: "Movimentos controlados, postura, equilíbrio, respiração ritmada e cultivo da atenção serena.",
    fullDesc: "Prática com foco na fluidez dos movimentos corporais, no equilíbrio, na atenção plena e na respiração coordenada, proporcionando uma experiência de concentração profunda e relaxamento ativo.",
    scheduleSummary: "Ter e Qui: 09h",
    whatsappMessage: "Olá! Gostaria de receber informações sobre as aulas de Tai Chi / Treino do Silêncio da Academia Fuzi.",
    image: "/images/poster_fuzi.png",
    fallbackImage: "https://i.postimg.cc/Zn0FNDpv/Poster-Academia-Fuzi-de-Kung-Fu.png",
    tags: ["Atenção Plena", "Equilíbrio Corporal", "Movimento Consciente"],
  },
  {
    id: "alongamento-marcial",
    name: "Alongamento Marcial",
    category: "bem-estar",
    categoryLabel: "Mobilidade Corporal",
    shortDesc: "Trabalho específico de mobilidade articular, amplitude de movimento e preparação muscular funcional.",
    fullDesc: "Sessões dedicadas ao ganho de amplitude articular, alívio de tensões posturais e flexibilidade aplicada aos movimentos marciais e à qualidade de vida cotidiana.",
    scheduleSummary: "Ter e Qui: 18h",
    whatsappMessage: "Olá! Gostaria de saber detalhes sobre as aulas de Alongamento Marcial na Academia Fuzi.",
    image: "/images/kungfu_acao_hero.png",
    fallbackImage: "https://i.postimg.cc/PfFMHTnZ/Poster-de-Kung-Fu-em-Acao.png",
    tags: ["Flexibilidade", "Mobilidade Articular", "Prevenção & Saúde"],
  },
  {
    id: "aula-no-parque",
    name: "Aula no Parque",
    category: "tradicional",
    categoryLabel: "Ao Ar Livre",
    shortDesc: "Treinamento realizado ao ar livre aos domingos pela manhã, conectando técnica marcial e espaço natural.",
    fullDesc: "Encontro especial de fim de semana aberto à integração dos alunos em contato com o ar livre, praticando formas, respiração e condicionamento com luz natural e solo livre.",
    scheduleSummary: "Domingo: 09h",
    whatsappMessage: "Olá! Gostaria de mais informações sobre a Aula no Parque aos domingos da Academia Fuzi.",
    image: "/images/poster_fuzi.png",
    fallbackImage: "https://i.postimg.cc/Zn0FNDpv/Poster-Academia-Fuzi-de-Kung-Fu.png",
    tags: ["Ao Ar Livre", "Domingo de Manhã", "Integração Marcial"],
  },
];

export const WEEK_SCHEDULE: ScheduleItem[] = [
  {
    day: "Segunda-feira",
    dayShort: "Seg",
    dayIndex: 1,
    sessions: [
      { modality: "Kung Fu e Sanda (Matinal)", time: "07:30" },
      { modality: "Kung Fu Tradicional", time: "18:00" },
      { modality: "Kung Fu Tradicional", time: "19:30" },
    ],
  },
  {
    day: "Terça-feira",
    dayShort: "Ter",
    dayIndex: 2,
    sessions: [
      { modality: "Tai Chi / Treino do Silêncio", time: "09:00" },
      { modality: "Kung Fu Kids", time: "17:00" },
      { modality: "Alongamento Marcial", time: "18:00" },
      { modality: "Kung Fu Kids", time: "19:00" },
      { modality: "Sanda (Boxe Chinês)", time: "20:00" },
    ],
  },
  {
    day: "Quarta-feira",
    dayShort: "Qua",
    dayIndex: 3,
    sessions: [
      { modality: "Kung Fu e Sanda (Matinal)", time: "07:30" },
      { modality: "Kung Fu Tradicional", time: "18:00" },
      { modality: "Kung Fu Tradicional", time: "19:30" },
    ],
  },
  {
    day: "Quinta-feira",
    dayShort: "Qui",
    dayIndex: 4,
    sessions: [
      { modality: "Tai Chi / Treino do Silêncio", time: "09:00" },
      { modality: "Kung Fu Kids", time: "17:00" },
      { modality: "Alongamento Marcial", time: "18:00" },
      { modality: "Kung Fu Kids", time: "19:00" },
      { modality: "Sanda (Boxe Chinês)", time: "20:00" },
    ],
  },
  {
    day: "Sexta-feira",
    dayShort: "Sex",
    dayIndex: 5,
    sessions: [
      { modality: "Kung Fu e Sanda (Matinal)", time: "07:30" },
      { modality: "Kung Fu Tradicional", time: "18:00" },
      { modality: "Kung Fu Tradicional", time: "19:00" },
    ],
  },
  {
    day: "Sábado",
    dayShort: "Sáb",
    dayIndex: 6,
    sessions: [
      { modality: "Kung Fu Kids", time: "10:00" },
      { modality: "Sanda (Boxe Chinês)", time: "10:00" },
    ],
  },
  {
    day: "Domingo",
    dayShort: "Dom",
    dayIndex: 0,
    sessions: [
      { modality: "Aula no Parque", time: "09:00", notes: "Treino especial ao ar livre" },
    ],
  },
];

export const VIDEOS_SHOWCASE: VideoShowcase[] = [
  {
    id: "vid-1",
    title: "Demonstrações Marciais e Formas Tradicionais",
    category: "Kung Fu Tradicional",
    description: "Sequências técnicas, movimentos de punho e armas tradicionais chinesas praticadas na escola.",
    youtubeUrl: "https://youtube.com/@machado_22.62",
    thumbnail: "/images/kungfu_acao_hero.png",
    duration: "YouTube Oficial",
  },
  {
    id: "vid-2",
    title: "Dança do Leão e Apresentações Culturais",
    category: "Cultura Chinesa",
    description: "Apresentações comemorativas e tradição da Dança do Leão realizadas pelo Prof. Machado e alunos.",
    youtubeUrl: "https://youtube.com/@machado_22.62",
    thumbnail: "/images/poster_fuzi.png",
    duration: "YouTube Oficial",
  },
  {
    id: "vid-3",
    title: "Treinamentos e Cotidiano no Dojo",
    category: "Rotina da Academia",
    description: "Veja o ambiente de treino, o acolhimento aos iniciantes e a evolução contínua dos alunos em Salto.",
    youtubeUrl: "https://youtube.com/@machado_22.62",
    thumbnail: "/images/kungfu_acao_hero.png",
    duration: "YouTube Oficial",
  },
];
