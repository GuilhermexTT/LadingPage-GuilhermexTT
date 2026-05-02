"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard, TechCard, ListCard } from "@/components/BentoCard";
import { SiReact, SiNodedotjs, SiTailwindcss, SiN8N } from "react-icons/si";
import { Bot, Cloud, MapPin } from "lucide-react";

// ── DADOS DOS PROJETOS ─────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "E-commerce Automation",
    description: "Sistema completo de automação para e-commerce com integração de n8n,...",
    category: "Automation",
    tags: ["n8n", "Node.js", "API Integration"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
  },
  {
    id: 2,
    title: "AI Chatbot Platform",
    description: "Plataforma de chatbot inteligente com processamento de linguagem natural e...",
    category: "AI & Automation",
    tags: ["AI", "React", "Python"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description: "Dashboard interativo para análise de dados em tempo real com visualizações dinâmicas e...",
    category: "Web Development",
    tags: ["React", "Tailwind", "Charts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: 4,
    title: "Cloud Migration Suite",
    description: "Suite completa de ferramentas para migração e gerenciamento de infraestrutura cloud...",
    category: "Cloud Solutions",
    tags: ["AWS", "Docker", "Terraform"],
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
  },
  {
    id: 5,
    title: "Workflow Optimizer",
    description: "Plataforma de otimização de workflows com automação inteligente e integração com ERPs...",
    category: "Automation",
    tags: ["n8n", "API", "Node.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    id: 6,
    title: "Mobile App Backend",
    description: "API robusta e escalável para aplicações mobile com autenticação e arquitetura...",
    category: "Backend Development",
    tags: ["Node.js", "PostgreSQL", "REST API"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
];

const FILTERS = ["Todos", "Automation", "AI & Automation", "Web Development", "Cloud Solutions", "Backend Development"];

const categoryColor: Record<string, string> = {
  "Automation":          "bg-[#00D4FF] text-black",
  "AI & Automation":     "bg-[#00D4FF] text-black",
  "Web Development":     "bg-[#00D4FF] text-black",
  "Cloud Solutions":     "bg-[#00D4FF] text-black",
  "Backend Development": "bg-[#00D4FF] text-black",
};

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 20 }}
      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -6,
        boxShadow: "0 0 30px rgba(0, 212, 255, 0.35), 0 0 80px rgba(0, 212, 255, 0.1)",
        borderColor: "rgba(0, 212, 255, 0.55)",
        transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
      }}
      className="bento-card overflow-hidden flex flex-col cursor-pointer"
      style={{
        boxShadow: "0 0 20px rgba(0, 212, 255, 0.25), 0 0 60px rgba(0, 212, 255, 0.1)",
      }}
    >
      {/* Imagem de capa com badge */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {/* Gradiente para leitura */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
        {/* Badge de categoria */}
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${categoryColor[project.category] ?? "bg-[#00D4FF] text-black"}`}>
          {project.category}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
        <p className="text-[#8B9DC3] text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#8B9DC3]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = activeFilter === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen flex flex-col items-center px-4 md:px-8 py-14 md:py-20 gap-20">

      {/* ══════════════════════════════════════════════════
          SEÇÃO 1 — TECH STACK
      ══════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-5">
          Guilherme Carvalho
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#00D4FF]" />
          <span className="text-[#00D4FF] text-lg font-medium tracking-wide">Dev &amp; Automação</span>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#00D4FF]" />
        </div>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-5">
        <BentoCard className="lg:col-span-2 p-7" delay={0.15}>
          <h2 className="text-2xl font-bold text-white mb-1">Stack Tecnológica</h2>
          <p className="text-[#8B9DC3] text-sm mb-7">Ferramentas de ponta para máxima performance</p>
          <div className="grid grid-cols-2 gap-4">
            <TechCard className="p-6 flex flex-col items-center justify-center gap-3" delay={0.25}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center shadow-lg">
                <SiReact className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-sm">React</p>
                <p className="text-[#8B9DC3] text-xs mt-0.5">Modern UI library</p>
              </div>
            </TechCard>
            <TechCard className="p-6 flex flex-col items-center justify-center gap-3" delay={0.3}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00B4CC] to-[#00D4FF] flex items-center justify-center shadow-lg">
                <SiN8N className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-sm">n8n</p>
                <p className="text-[#8B9DC3] text-xs mt-0.5">Workflow automation</p>
              </div>
            </TechCard>
            <TechCard className="p-6 flex flex-col items-center justify-center gap-3" delay={0.35}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#9D4EDD] flex items-center justify-center shadow-lg">
                <SiNodedotjs className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-sm">Node.js</p>
                <p className="text-[#8B9DC3] text-xs mt-0.5">Backend runtime</p>
              </div>
            </TechCard>
            <TechCard className="p-6 flex flex-col items-center justify-center gap-3" delay={0.4}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center shadow-lg">
                <SiTailwindcss className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-sm">Tailwind</p>
                <p className="text-[#8B9DC3] text-xs mt-0.5">CSS framework</p>
              </div>
            </TechCard>
          </div>
        </BentoCard>

        <BentoCard className="lg:col-span-1 p-7 flex flex-col" delay={0.2}>
          <h2 className="text-2xl font-bold text-white mb-1">Agentes IA &amp; Cloud</h2>
          <p className="text-[#8B9DC3] text-sm mb-7">Soluções inteligentes de automação</p>
          <div className="flex flex-col gap-4 flex-1">
            <ListCard className="p-4 flex items-center gap-4" delay={0.3}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#60A5FA] flex items-center justify-center flex-shrink-0 shadow-md">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Agentes de IA</p>
                <p className="text-[#8B9DC3] text-xs mt-0.5">Automação inteligente</p>
              </div>
            </ListCard>
            <ListCard className="p-4 flex items-center gap-4" delay={0.37}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0369A1] to-[#38BDF8] flex items-center justify-center flex-shrink-0 shadow-md">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Deploy em Nuvem</p>
                <p className="text-[#8B9DC3] text-xs mt-0.5">Infraestrutura escalável</p>
              </div>
            </ListCard>
          </div>
        </BentoCard>
      </div>


      {/* ══════════════════════════════════════════════════
          SEÇÃO 2 — SOBRE MIM
      ══════════════════════════════════════════════════ */}
      <div className="w-full max-w-6xl">
        <BentoCard className="p-8 md:p-10" delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-7 mb-10">
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-white/10">
                <img
                  src="/profile.jpg"
                  alt="Guilherme Carvalho"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#052e16]/80 border border-green-500/30 text-green-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to work
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Hello, World! <span>👋</span>
              </h2>
              <div className="flex items-center gap-1.5 text-[#8B9DC3] text-sm mb-5">
                <MapPin className="w-4 h-4 text-[#00D4FF]" />
                <span>São Paulo, Brasil</span>
              </div>
              <p className="text-[#94A3B8] text-base leading-relaxed max-w-3xl">
                Desenvolvedor full-stack apaixonado por automação e inteligência artificial. Especializado em criar soluções inovadoras que transformam processos complexos em workflows eficientes. Com expertise em React, Node.js e n8n, construo aplicações modernas que unem design elegante e performance excepcional.
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />
          <div className="grid grid-cols-3 gap-4 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <p className="text-4xl md:text-5xl font-bold text-[#00D4FF] mb-1">5+</p>
              <p className="text-[#8B9DC3] text-sm">Anos de Experiência</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <p className="text-4xl md:text-5xl font-bold text-[#00D4FF] mb-1">50+</p>
              <p className="text-[#8B9DC3] text-sm">Projetos Entregues</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#C084FC] mb-1">100%</p>
              <p className="text-[#8B9DC3] text-sm">Clientes Satisfeitos</p>
            </motion.div>
          </div>
        </BentoCard>
      </div>


      {/* ══════════════════════════════════════════════════
          SEÇÃO 3 — MEUS TRABALHOS (PORTFÓLIO)
      ══════════════════════════════════════════════════ */}
      <div className="w-full max-w-6xl flex flex-col items-center gap-10">

        {/* Título centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Meus Trabalhos</h2>
          <p className="text-[#8B9DC3] text-base">Projetos desenvolvidos com paixão e dedicação</p>
        </motion.div>

        {/* Pills de filtro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-3"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer
                ${activeFilter === filter
                  ? "bg-[#00D4FF] text-black border-[#00D4FF] shadow-[0_0_18px_rgba(0,212,255,0.5)]"
                  : "bg-white/5 text-[#94A3B8] border-white/10 hover:border-[#00D4FF]/40 hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid de projetos com AnimatePresence para transição de filtro */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.07} />
            ))}
          </AnimatePresence>
        </div>

      </div>


      {/* ══════════════════════════════════════════════════
          SEÇÃO 4 — CONTATO / CTA
      ══════════════════════════════════════════════════ */}
      <div className="w-full max-w-6xl pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            y: -6,
            boxShadow: "0 0 60px rgba(0, 212, 255, 0.55), 0 0 120px rgba(0, 212, 255, 0.2)",
            borderColor: "rgba(0, 212, 255, 0.75)",
            transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
          }}
          className="bento-card p-12 md:p-16 flex flex-col items-center text-center gap-8"
          style={{
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.35), 0 0 100px rgba(0, 212, 255, 0.15)",
            borderColor: "rgba(0, 212, 255, 0.45)",
          }}
        >
          {/* Título */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Vamos Construir Algo Incrível
            </h2>
            <p className="text-[#8B9DC3] text-base md:text-lg max-w-lg leading-relaxed">
              Pronto para transformar suas ideias em realidade? Entre em contato e vamos criar soluções inovadoras juntos.
            </p>
          </div>

          {/* Ícones sociais */}
          <div className="flex items-center gap-4">
            {[
              { href: "mailto:guilherme@email.com",     icon: <MailIcon /> },
              { href: "https://github.com/",             icon: <GithubIcon /> },
              { href: "https://linkedin.com/",           icon: <LinkedinIcon /> },
              { href: "https://wa.me/5511999999999",           icon: <WhatsappIcon /> },
            ].map(({ href, icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 18px rgba(0, 212, 255, 0.5)",
                  borderColor: "rgba(0, 212, 255, 0.6)",
                  transition: { duration: 0.12 },
                }}
                className="w-12 h-12 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Botão Get In Touch */}
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 180, 255, 0.6)",
              transition: { duration: 0.15 },
            }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-3.5 rounded-full font-bold text-black text-base cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)",
              boxShadow: "0 0 20px rgba(0, 180, 255, 0.4)",
            }}
          >
            Entrar em Contato
          </motion.a>
        </motion.div>
      </div>

    </main>
  );
}

/* ── Ícones SVG inline ─────────────────────────────────── */
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function WhatsappIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}
