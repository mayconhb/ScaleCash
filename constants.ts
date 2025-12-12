import { PricingPlan, Testimonial, FaqItem } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'semiannual',
    name: 'Semestral',
    monthlyPrice: 47,
    totalPrice: 282,
    period: '/mês',
    features: [
      'Tudo do plano Trimestral',
      'Maior desconto (Mais de 50% OFF)',
      'Mentoria gravada de Scale',
      'Grupo VIP de Networking'
    ],
    buttonText: 'Garantir Melhor Oferta',
    savings: 'Economize R$ 300,00 por ano',
    isPopular: true
  },
  {
    id: 'quarterly',
    name: 'Trimestral',
    monthlyPrice: 67,
    totalPrice: 201,
    period: '/mês',
    features: [
      'Tudo do plano Mensal',
      'Economia de 30%',
      'Acesso antecipado a novas features',
      'Suporte Prioritário'
    ],
    buttonText: 'Assinar Trimestral',
    isPopular: false
  },
  {
    id: 'monthly',
    name: 'Mensal',
    monthlyPrice: 97,
    period: '/mês',
    features: [
      'Acesso total ao banco de anúncios',
      '10 Novas ofertas vencedoras por dia',
      'Análise de Copy e Criativo',
      'Suporte via Email'
    ],
    buttonText: 'Assinar Mensal',
    isPopular: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Gestor de Tráfego",
    avatar: "https://picsum.photos/100/100?random=1",
    content: "Eu perdia horas na biblioteca de anúncios tentando achar o que funcionava. Com o ScaleCash, eu só copio a estrutura e rodo. Meu ROI subiu 40% na primeira semana.",
    results: "+R$ 12.000 de lucro"
  },
  {
    id: 2,
    name: "Fernanda Lima",
    role: "Dropshipper",
    avatar: "https://picsum.photos/100/100?random=2",
    content: "A curadoria é impecável. Não é só jogar um monte de anúncio, eles explicam POR QUE está vendendo. O plano semestral se pagou no primeiro teste.",
    results: "ROAS 3.5x consistente"
  },
  {
    id: 3,
    name: "Igor Santana",
    role: "Produtor Digital",
    avatar: "https://picsum.photos/100/100?random=3",
    content: "Ferramenta obrigatória para quem não quer queimar dinheiro testando oferta ruim. A análise de copy que vem junto vale mais que o preço da assinatura.",
    results: "Escalou para 6 dígitos"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Como funciona a entrega das ofertas?",
    answer: "Nossa equipe e algoritmos monitoram o Meta Ads 24/7. Toda segunda-feira você recebe um relatório detalhado com as ofertas que estão escalando há mais de 7 dias (prova de validação), incluindo criativos, copys e landing pages."
  },
  {
    question: "Serve para qual nicho?",
    answer: "Cobrimos os principais nichos de alta conversão: Black, White, Físicos, Digitais (PLR), Dropshipping e Lead Generation. Filtramos o que tem escala real."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! Você tem total controle sobre sua assinatura. Além disso, oferecemos uma garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro."
  },
  {
    question: "O valor é cobrado mensalmente nos planos longos?",
    answer: "Nos planos Trimestral e Semestral, o valor é cobrado de uma vez (R$ 201 ou R$ 282), garantindo o desconto massivo na diluição mensal. Isso permite que invistamos mais na qualidade das ofertas para você."
  }
];