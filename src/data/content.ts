export type NavItem = { label: string; href: string; external?: boolean };
export type SegmentOption = { value: string; label: string };
export type FaqItem = { question: string; answer: string };

const whatsappNumber =
  import.meta.env.PUBLIC_WHATSAPP_NUMBER?.trim() || "5532988602090";

export const site = {
  name: "Sellout",
  legalName: "Sellout Tecnologia",
  url:
    import.meta.env.PUBLIC_SITE_URL?.trim() ||
    "https://sellouttecnologia.com.br",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  address: "Rua Osório de Almeida, 999/101 — Poço Rico, Juiz de Fora/MG",
  nav: [
    { label: "O que você enxerga", href: "#visibilidade" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Para quem é", href: "#segmentos" },
    { label: "Dúvidas", href: "#duvidas" },
  ] satisfies NavItem[],
  legacyLinks: [
    {
      label: "Blog",
      href: "https://sellouttecnologia.com.br/blog/",
      external: true,
    },
    {
      label: "Quem Somos",
      href: "https://sellouttecnologia.com.br/quem-somos/",
      external: true,
    },
    {
      label: "O Produto",
      href: "https://sellouttecnologia.com.br/o-produto/",
      external: true,
    },
  ] satisfies NavItem[],
};

export const visibilityItems = [
  {
    title: "Venda por distribuidor",
    description:
      "Compare o que está saindo por canal e identifique onde a operação pede atenção.",
  },
  {
    title: "Giro por produto e SKU",
    description:
      "Entenda quais itens avançam, quais perderam ritmo e onde existe estoque com baixa saída.",
  },
  {
    title: "Desempenho por região",
    description:
      "Enxergue diferenças de demanda e direcione melhor a atuação comercial em cada mercado.",
  },
  {
    title: "Estoque e possíveis rupturas",
    description:
      "Acompanhe os dados disponíveis na rede para encontrar situações que exigem análise.",
  },
  {
    title: "Performance dos canais",
    description:
      "Avalie distribuidores com base na movimentação da ponta, não apenas no volume comprado.",
  },
  {
    title: "Evolução das vendas",
    description:
      "Transforme dados recorrentes em contexto para decisões de vendas, marketing e supply chain.",
  },
];

export const processItems = [
  {
    number: "01",
    title: "Conectamos sua rede",
    description:
      "Estruturamos a coleta das informações geradas por distribuidores e canais participantes.",
  },
  {
    number: "02",
    title: "Centralizamos os dados",
    description:
      "Arquivos e formatos diferentes passam a fazer parte de uma estrutura única de trabalho.",
  },
  {
    number: "03",
    title: "Tratamos as informações",
    description:
      "Organizamos, higienizamos e padronizamos os dados para reduzir inconsistências.",
  },
  {
    number: "04",
    title: "Aplicamos suas regras",
    description:
      "Produtos, canais e critérios são considerados conforme a realidade da sua operação.",
  },
  {
    number: "05",
    title: "Entregamos uma visão consolidada",
    description:
      "Sua equipe acompanha o sell-out diário por meio de informações estruturadas em BI.",
  },
  {
    number: "06",
    title: "O dado apoia a decisão",
    description:
      "Comercial, trade, canais, supply chain e diretoria passam a trabalhar com mais contexto.",
  },
];

export const comparisonItems = [
  {
    before: "Você sabe quanto vendeu para o distribuidor.",
    after: "Você acompanha o que efetivamente está sendo vendido na ponta.",
  },
  {
    before: "Alto volume de compra pode parecer alta performance.",
    after: "A performance considera a movimentação realizada pelo canal.",
  },
  {
    before: "Estoque parado pode demorar para ser identificado.",
    after: "A equipe ganha visibilidade sobre estoque e giro dos produtos.",
  },
  {
    before: "Relatórios chegam em formatos e momentos diferentes.",
    after: "Os dados são tratados, padronizados e centralizados.",
  },
  {
    before: "Áreas diferentes trabalham com versões diferentes da realidade.",
    after: "A indústria trabalha com uma visão mais estruturada da operação.",
  },
];

export const segments: SegmentOption[] = [
  { value: "farmaceutica", label: "Indústria farmacêutica" },
  {
    value: "medico-hospitalar",
    label: "Material médico-hospitalar e equipamentos",
  },
  {
    value: "agroquimicos",
    label: "Agroquímicos e insumos agrícolas",
  },
  {
    value: "higiene-cosmeticos",
    label: "Higiene, limpeza e cosméticos",
  },
  { value: "bebidas", label: "Bebidas" },
  { value: "autopecas", label: "Autopeças" },
  {
    value: "quimicos-tintas",
    label: "Químicos industriais e tintas",
  },
  {
    value: "materiais-construcao",
    label: "Materiais elétricos e de construção",
  },
  {
    value: "eletroeletronicos",
    label: "Eletroeletrônicos, ferramentas e bens duráveis leves",
  },
  { value: "pet-veterinario", label: "Pet e veterinário" },
  { value: "outro", label: "Outro segmento" },
];

export const teamBenefits = [
  {
    title: "Comercial",
    description:
      "Priorize distribuidores, produtos e regiões que merecem maior atenção.",
  },
  {
    title: "Trade Marketing",
    description:
      "Use informações da ponta para apoiar campanhas, incentivos e ações comerciais.",
  },
  {
    title: "Inteligência de Mercado",
    description:
      "Transforme dados dispersos entre canais em uma base organizada para análise.",
  },
  {
    title: "Gestão de Canais",
    description:
      "Compare a movimentação dos distribuidores e acompanhe a evolução da rede.",
  },
  {
    title: "Supply Chain",
    description:
      "Ganhe contexto para analisar estoque, giro, abastecimento e possíveis rupturas.",
  },
  {
    title: "Diretoria",
    description:
      "Entenda o comportamento do produto depois que ele sai da indústria.",
  },
];

export const objections = [
  {
    title: "“Já temos ERP.”",
    description:
      "O ERP controla a operação da indústria e o sell-in. A Sellout complementa essa visão com as informações geradas na rede de distribuição.",
  },
  {
    title: "“Já usamos BI.”",
    description:
      "O BI apresenta os dados que recebe. A Sellout atua antes dessa visualização: coleta, trata, padroniza e prepara as informações dos canais.",
  },
  {
    title: "“Já recebemos relatórios.”",
    description:
      "Receber arquivos não elimina o trabalho de organizar formatos, validar informações e consolidar a rede antes da análise.",
  },
  {
    title: "“Cada distribuidor trabalha de um jeito.”",
    description:
      "Esse é justamente o desafio. O projeto considera a realidade dos canais para estruturar uma visão mais organizada da operação.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "O que é sell-out?",
    answer:
      "Sell-out representa a venda realizada pelo distribuidor, revendedor ou outro canal para o próximo elo da cadeia ou para o cliente final. Ele mostra o que efetivamente está saindo do canal.",
  },
  {
    question: "Qual é a diferença entre sell-in e sell-out?",
    answer:
      "Sell-in é a venda da indústria para o distribuidor. Sell-out é a movimentação de venda realizada pelo distribuidor na ponta. Acompanhar os dois oferece uma visão mais completa do canal.",
  },
  {
    question: "A Sellout substitui meu ERP?",
    answer:
      "Não. A solução complementa os sistemas usados pela indústria ao estruturar informações provenientes da rede de distribuição.",
  },
  {
    question: "A Sellout é apenas um BI?",
    answer:
      "Não. A visualização é uma parte da solução. Antes dela existe o processo de captura, tratamento, organização e padronização dos dados dos canais.",
  },
  {
    question: "Preciso substituir meus sistemas atuais?",
    answer:
      "A necessidade de integração e configuração depende da estrutura de cada empresa. O projeto considera os sistemas e processos já existentes.",
  },
  {
    question: "A Sellout trabalha com distribuidores diferentes?",
    answer:
      "A plataforma foi desenvolvida para operações que precisam consolidar informações de diferentes canais. O formato é avaliado conforme a rede da indústria.",
  },
  {
    question: "Que tipo de informação posso acompanhar?",
    answer:
      "Depende dos dados disponíveis, mas a solução busca ampliar a visibilidade sobre vendas, produtos, distribuidores, regiões, estoque e performance dos canais.",
  },
  {
    question:
      "A plataforma ajuda a identificar estoque parado ou risco de ruptura?",
    answer:
      "Ao centralizar dados de movimentação e estoque disponíveis na rede, a solução pode evidenciar produtos, regiões e situações que exigem análise da equipe.",
  },
  {
    question: "Como funciona a contratação?",
    answer:
      "Primeiro entendemos a rede, a disponibilidade dos dados e os objetivos da indústria. A partir desse diagnóstico, a equipe avalia o projeto e apresenta a solução adequada.",
  },
  {
    question: "Como os dados são tratados em relação à LGPD?",
    answer:
      "A Sellout considera requisitos de segurança e tratamento adequado das informações. Os controles aplicáveis a cada projeto são esclarecidos durante o diagnóstico.",
  },
];

export const revenueOptions = [
  "Até R$ 1 milhão",
  "Acima de R$ 1 milhão até R$ 3 milhões",
  "Acima de R$ 3 milhões até R$ 5 milhões",
  "Acima de R$ 5 milhões até R$ 10 milhões",
  "Acima de R$ 10 milhões",
];

export const channelOptions = [
  "Menos de 20%",
  "De 20% a 49%",
  "De 50% a 79%",
  "De 80% a 90%",
  "Mais de 90%",
];

export const challengeOptions = [
  "Identificar produtos com maior ou menor giro",
  "Comparar a performance dos distribuidores",
  "Identificar estoque parado ou possível ruptura",
  "Descobrir regiões com maior potencial de vendas",
  "Centralizar e padronizar os dados recebidos",
  "Direcionar campanhas, investimentos e equipes comerciais",
];
