"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        boxShadow: "0 0 20px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.25), 0 0 100px rgba(0, 212, 255, 0.1)",
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 0 30px rgba(0, 212, 255, 0.75), 0 0 80px rgba(0, 212, 255, 0.4), 0 0 120px rgba(0, 212, 255, 0.15)",
        borderColor: "rgba(0, 212, 255, 0.75)",
        transition: { duration: 0.15, ease: [0.22, 1, 0.36, 1] },
      }}
      className={cn("bento-card", className)}
    >
      {children}
    </motion.div>
  );
}

interface TechCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function TechCard({ children, className, delay = 0 }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 0 22px rgba(0, 212, 255, 0.3)",
        borderColor: "rgba(0, 212, 255, 0.35)",
        transition: { duration: 0.12, ease: [0.22, 1, 0.36, 1] },
      }}
      className={cn("tech-card", className)}
    >
      {children}
    </motion.div>
  );
}

export function ListCard({ children, className, delay = 0 }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 0 18px rgba(0, 212, 255, 0.25)",
        borderColor: "rgba(0, 212, 255, 0.3)",
        transition: { duration: 0.12, ease: [0.22, 1, 0.36, 1] },
      }}
      className={cn("list-card", className)}
    >
      {children}
    </motion.div>
  );
}
