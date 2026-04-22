import React from "react";
import { motion } from "motion/react";
import { SEO } from "./SEO";

interface LegalLayoutProps {
  title: string;
  description: string;
  url: string;
  children: React.ReactNode;
}

export const LegalLayout = ({ title, description, url, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white font-sans pt-32 pb-24 relative overflow-hidden">
      <SEO 
        title={`${title} | Cyb3r Shield`}
        description={description}
        url={`https://cyb3rshield.com${url}`}
      />
      
      {/* Subtle animated network grid */}
      <div className="absolute inset-0 grid-bg-thin opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-16 border-b border-white/10 pb-10"
        >
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-4">{title}</h1>
          <div className="flex items-center gap-3 text-xs font-mono text-primary uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            System Protocol Verified
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }} 
          className="space-y-12 text-zinc-400 font-light leading-relaxed"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
