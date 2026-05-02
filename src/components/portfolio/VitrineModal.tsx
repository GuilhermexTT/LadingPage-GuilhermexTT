"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { PortfolioCategory, PortfolioProject } from "@/data/portfolio";
import { X, ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// ─────────────────────────────────────────────────────────────
//  VITRINE MODAL — exibe todos os projetos de uma categoria
// ─────────────────────────────────────────────────────────────
interface VitrineModalProps {
  category: PortfolioCategory | null;
  onClose: () => void;
  onSelectProject: (project: PortfolioProject) => void;
}

export function VitrineModal({ category, onClose, onSelectProject }: VitrineModalProps) {
  return (
    <AnimatePresence>
      {category && (
        <>
          {/* Backdrop */}
          <motion.div
            key="vitrine-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="vitrine-modal"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0A1628 0%, #020813 100%)",
              boxShadow: "0 0 80px rgba(0, 212, 255, 0.15)",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-4 px-6 md:px-10 py-5 border-b border-white/8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 14px rgba(0,212,255,0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#8B9DC3] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.button>

              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.emoji}</span>
                <div>
                  <h2 className="text-xl font-bold text-white leading-none">{category.title}</h2>
                  <p className="text-[#8B9DC3] text-sm mt-0.5">{category.subtitle}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="ml-auto w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#8B9DC3] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">
              {category.projects.length === 0 ? (
                // Estado vazio
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="flex flex-col items-center justify-center h-full gap-5 text-center"
                >
                  <div className="text-6xl select-none">🚧</div>
                  <h3 className="text-2xl font-bold text-white">Em breve</h3>
                  <p className="text-[#8B9DC3] max-w-md">
                    Os projetos desta categoria serão adicionados em breve. Volte logo!
                  </p>
                </motion.div>
              ) : (
                // Grid de projetos
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                  {category.projects.map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      delay={i * 0.07}
                      onClick={() => onSelectProject(project)}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────────
//  PROJECT CARD — dentro da vitrine
// ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  delay,
  onClick,
}: {
  project: PortfolioProject;
  delay: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -6,
        boxShadow: "0 0 30px rgba(0, 212, 255, 0.4), 0 0 80px rgba(0, 212, 255, 0.12)",
        borderColor: "rgba(0, 212, 255, 0.6)",
        transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
      }}
      onClick={onClick}
      className="rounded-[1.25rem] overflow-hidden border border-[rgba(0,212,255,0.25)] cursor-pointer flex flex-col"
      style={{
        background: "rgba(255,255,255,0.04)",
        boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)",
      }}
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />

        {/* Badge de mídia */}
        {project.media.length > 0 && (
          <span className="absolute bottom-3 right-3 px-2 py-1 rounded-full text-xs font-bold bg-black/60 text-[#00D4FF] border border-[#00D4FF]/30 backdrop-blur-sm">
            {project.media[0].type === "video" ? "▶ Vídeo" : `🖼 ${project.media.length} foto${project.media.length > 1 ? "s" : ""}`}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-white font-bold text-base leading-tight">{project.title}</h3>
        <p className="text-[#8B9DC3] text-sm leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#8B9DC3]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────
//  PROJECT DETAIL MODAL — galeria de fotos/vídeos
// ─────────────────────────────────────────────────────────────
interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  categoryEmoji?: string;
  onClose: () => void;
  onBack: () => void;
}

export function ProjectDetailModal({
  project,
  categoryEmoji,
  onClose,
  onBack,
}: ProjectDetailModalProps) {
  const [mediaIndex, setMediaIndex] = useState(0);

  if (!project) return null;

  const hasMedia = project.media.length > 0;
  const currentMedia = project.media[mediaIndex];

  const prev = () => setMediaIndex((i) => (i - 1 + project.media.length) % project.media.length);
  const next = () => setMediaIndex((i) => (i + 1) % project.media.length);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="detail-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="detail-modal"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-[70] flex flex-col rounded-[1.75rem] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0d1e38 0%, #060e1a 100%)",
              border: "1px solid rgba(0, 212, 255, 0.35)",
              boxShadow: "0 0 60px rgba(0, 212, 255, 0.25), 0 0 120px rgba(0, 212, 255, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/8 flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#8B9DC3] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.button>

              <span className="text-xl">{categoryEmoji}</span>
              <h2 className="text-white font-bold text-lg flex-1 truncate">{project.title}</h2>

              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-black"
                  style={{ background: "linear-gradient(135deg, #00C6FF, #0072FF)" }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Ver ao vivo
                </motion.a>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#8B9DC3] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto flex flex-col lg:flex-row gap-0">

              {/* Galeria */}
              <div className="lg:flex-1 flex flex-col">
                {hasMedia ? (
                  <>
                    {/* Mídia principal */}
                    <div className="relative flex-1 min-h-[240px] bg-black/40 flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={mediaIndex}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.25 }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          {currentMedia.type === "image" ? (
                            <img
                              src={currentMedia.url || project.thumbnail}
                              alt={currentMedia.caption || project.title}
                              className="w-full h-full object-contain max-h-[400px]"
                            />
                          ) : (
                            <div className="w-full aspect-video max-h-[400px]">
                              {currentMedia.url ? (
                                currentMedia.url.endsWith(".mp4") ? (
                                  <video
                                    key={currentMedia.url}
                                    src={currentMedia.url}
                                    className="w-full h-full object-contain"
                                    controls
                                    playsInline
                                    preload="metadata"
                                    title={currentMedia.caption || project.title}
                                  />
                                ) : (
                                  <iframe
                                    src={currentMedia.url}
                                    className="w-full h-full"
                                    allowFullScreen
                                    title={currentMedia.caption || project.title}
                                  />
                                )
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-6">
                                  <span className="text-5xl">🎬</span>
                                  <p className="text-[#8B9DC3] text-sm">Vídeo em breve</p>
                                </div>
                              )}
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* Setas de navegação */}
                      {project.media.length > 1 && (
                        <>
                          <button
                            onClick={prev}
                            className="absolute left-3 w-9 h-9 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={next}
                            className="absolute right-3 w-9 h-9 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}

                      {/* Caption */}
                      {currentMedia.caption && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 text-[#8B9DC3] text-xs backdrop-blur-sm">
                          {currentMedia.caption}
                        </div>
                      )}
                    </div>

                    {/* Miniaturas */}
                    {project.media.length > 1 && (
                      <div className="flex gap-2 p-3 overflow-x-auto border-t border-white/8">
                        {project.media.map((m, i) => (
                          <button
                            key={i}
                            onClick={() => setMediaIndex(i)}
                            className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                              i === mediaIndex
                                ? "border-[#00D4FF] opacity-100"
                                : "border-transparent opacity-50 hover:opacity-80"
                            }`}
                          >
                            {m.type === "image" ? (
                              <img src={m.url || project.thumbnail} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full bg-white/5 flex items-center justify-center text-lg">▶</div>
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Sem mídia
                  <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center p-8">
                    <span className="text-5xl select-none">🖼️</span>
                    <p className="text-[#8B9DC3]">Fotos e vídeos serão adicionados em breve.</p>
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full max-w-sm rounded-xl opacity-60 object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Painel de info */}
              <div className="lg:w-80 p-6 flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-white/8 flex-shrink-0">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-[#8B9DC3] text-sm leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <p className="text-xs text-[#8B9DC3] uppercase tracking-widest mb-2 font-semibold">Tecnologias</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-[#00D4FF]/20 text-[#00D4FF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0,180,255,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-black text-sm"
                    style={{ background: "linear-gradient(135deg, #00C6FF, #0072FF)" }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver ao vivo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
