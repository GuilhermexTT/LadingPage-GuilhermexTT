// ══════════════════════════════════════════════════════════
//  DADOS DO PORTFÓLIO — edite aqui para adicionar projetos
// ══════════════════════════════════════════════════════════

export type ProjectMedia = {
  type: "image" | "video";
  /** Para imagem: URL da imagem. Para vídeo: URL do YouTube (embed) ou arquivo .mp4 */
  url: string;
  caption?: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  media: ProjectMedia[];
  liveUrl?: string;
};

export type PortfolioCategory = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  gradient: string;
  projects: PortfolioProject[];
};

// ── CATEGORIAS E PROJETOS ──────────────────────────────────
export const portfolioCategories: PortfolioCategory[] = [

  // ── LANDING PAGES ───────────────────────────────────────
  {
    id: "landing-pages",
    title: "Landing Pages",
    subtitle: "Sites e páginas de alta conversão",
    emoji: "🌐",
    gradient: "from-[#0072FF] to-[#00C6FF]",
    projects: [
      {
        id: "lp-drathaina",
        title: "Landing Page — Dra. Thaína Carvalho",
        description:
          "Landing page premium para clínica médica estética. Design sofisticado com seção de resultados antes/após, depoimentos, apresentação de procedimentos e CTA otimizado para conversão via WhatsApp.",
        thumbnail: "/lp-drathaina/1.png",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity CMS", "Figma", "Vercel"],
        liveUrl: "https://dra-thaina-carvalho.vercel.app/",
        media: [
          { type: "video", url: "/lp-drathaina/video.mp4",  caption: "Vídeo demonstrativo completo" },
          { type: "image", url: "/lp-drathaina/1.png",      caption: "Hero — Apresentação da Dra. Thaína" },
          { type: "image", url: "/lp-drathaina/2.png",      caption: "Seção de técnicas avançadas" },
          { type: "image", url: "/lp-drathaina/3.png",      caption: "Procedimentos e especialidades" },
          { type: "image", url: "/lp-drathaina/4.png",      caption: "Resultados antes & depois" },
          { type: "image", url: "/lp-drathaina/5.png",      caption: "Galeria de resultados" },
          { type: "image", url: "/lp-drathaina/6.png",      caption: "Depoimentos de pacientes" },
          { type: "image", url: "/lp-drathaina/7.png",      caption: "Sobre a Dra. Thaína" },
          { type: "image", url: "/lp-drathaina/8.png",      caption: "CTA e contato via WhatsApp" },
          { type: "image", url: "/lp-drathaina/9.png",      caption: "Rodapé" },
        ],
      },
    ],
  },

  // ── CHATBOTS & AGENTES IA ────────────────────────────────
  {
    id: "chatbots",
    title: "Chatbots & Agentes IA",
    subtitle: "Automação inteligente com Inteligência Artificial",
    emoji: "🤖",
    gradient: "from-[#7C3AED] to-[#3B82F6]",
    projects: [
      {
        id: "agente-whatsapp-simples",
        title: "Agente Simples de WhatsApp",
        description:
          "Agente de atendimento automatizado no WhatsApp para respostas rápidas, qualificação de leads e redirecionamento inteligente de clientes.",
        thumbnail:
          "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80",
        tags: ["WhatsApp", "n8n", "IA"],
        media: [
          // Adicione o vídeo aqui:
          // { type: "video", url: "https://www.youtube.com/embed/SEU_VIDEO_ID", caption: "Demonstração" },
        ],
      },
      {
        id: "agente-whatsapp-complexo",
        title: "Agente Complexo de WhatsApp",
        description:
          "Agente avançado com múltiplos fluxos de conversa, integração com CRM, memória de contexto e respostas personalizadas por IA generativa.",
        thumbnail:
          "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
        tags: ["WhatsApp", "n8n", "OpenAI", "CRM"],
        media: [
          // Adicione o vídeo aqui:
          // { type: "video", url: "https://www.youtube.com/embed/SEU_VIDEO_ID", caption: "Demonstração" },
        ],
      },
    ],
  },

  // ── DASHBOARDS ──────────────────────────────────────────
  {
    id: "dashboards",
    title: "Dashboards",
    subtitle: "Painéis de análise e visualização de dados",
    emoji: "📊",
    gradient: "from-[#059669] to-[#00D4FF]",
    projects: [
      {
        id: "dashboard-financeiro",
        title: "Dashboard de Organização Financeira",
        description:
          "Painel interativo para controle e visualização de finanças pessoais e empresariais em tempo real, com gráficos, categorias e metas.",
        thumbnail:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        tags: ["React", "Charts", "Tailwind", "Node.js"],
        media: [
          // Adicione as fotos aqui:
          // { type: "image", url: "/imagens/dashboard1.jpg", caption: "Visão geral" },
        ],
      },
    ],
  },
];
