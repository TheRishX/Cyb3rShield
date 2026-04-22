import { motion, useScroll, useTransform } from "motion/react";
import React, { useState, useEffect } from "react";
import { PhoneCall, Terminal, Lock, Send, ShieldCheck, Mail, User } from "lucide-react";
import { SEO } from "../components/SEO";

const TerminalText = ({ text, delay = 0, onComplete }: { text: string, delay?: number, onComplete?: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      onAnimationComplete={onComplete}
      className="flex items-center gap-3 font-mono text-xs md:text-sm text-primary/80"
    >
      <span className="text-zinc-600">%</span>
      <span>{text}</span>
    </motion.div>
  );
};

export const Contact = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const [nodes, setNodes] = useState<{ id: number, x: number, y: number, delay: number }[]>([]);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    // Generate background nodes focusing towards the center
    const generatedNodes = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setNodes(generatedNodes);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("sent");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white font-sans overflow-hidden perspective-1200 relative pt-20">
      <SEO 
        title="Contact Cybersecurity Experts | Cyb3r Shield"
        description="Initiate a secure connection with Cyb3r Shield. Contact our cybersecurity experts for enterprise defense, penetration testing, and incident response."
        url="https://cyb3rshield.com/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Cyb3r Shield",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1234567890",
              "contactType": "customer service"
            }
          }
        }}
      />
      
      {/* 4D BACKGROUND SYSTEM: CONNECTION HUB */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Infinite Grid Background */}
        <motion.div 
          className="absolute inset-0 grid-bg-thin opacity-20"
          animate={{
            rotateX: [60, 65, 60],
            translateY: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ width: '200%', height: '200%', left: '-50%', top: '-20%', transformOrigin: 'center top', transformStyle: 'preserve-3d' }}
        />

        {/* Parallax Connection Hub Lines */}
        <motion.svg style={{ y: yBg }} className="absolute inset-0 w-full h-full opacity-30">
          <motion.circle 
            cx="50%" cy="50%" r="300"
            fill="transparent" 
            stroke="#FF1A1A" 
            strokeWidth="1"
            strokeDasharray="4 8"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", transformOrigin: "center" }}
          />
           <motion.circle 
            cx="50%" cy="50%" r="500"
            fill="transparent" 
            stroke="#FF1A1A" 
            strokeWidth="0.5"
            animate={{ rotate: -360, scale: [1, 1.05, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear", transformOrigin: "center" }}
          />
          {nodes.map(node => (
             <motion.line 
               key={`line-${node.id}`}
               x1={`${node.x}%`} y1={`${node.y}%`} x2="50%" y2="50%" 
               stroke="#FF1A1A" strokeWidth="0.5"
               initial={{ opacity: 0 }}
               animate={{ opacity: [0, 0.4, 0] }}
               transition={{ duration: 3, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
             />
          ))}
        </motion.svg>
        
        {/* Signal Nodes */}
        {nodes.map(node => (
          <motion.div
            key={`node-${node.id}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1.5, 0.5]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              delay: node.delay,
              ease: "easeOut" 
            }}
            className="absolute w-2 h-2 bg-primary rounded-full blur-[1px] shadow-[0_0_10px_rgba(255,26,26,1)]"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          />
        ))}

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0B0B0D_70%)]" />
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* SECTION 1: CONNECTION INIT (HERO) */}
        <section className="pt-16 pb-20 flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 2, translateZ: 500 }}
            animate={{ opacity: 1, scale: 1, translateZ: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mb-10 text-primary flex justify-center drop-shadow-[0_0_30px_rgba(255,26,26,0.8)]"
          >
            <ShieldCheck className="w-24 h-24" />
          </motion.div>

          <div className="bg-black/60 border border-primary/30 p-4 rounded-md font-mono mb-12 shadow-[0_0_20px_rgba(255,26,26,0.15)] backdrop-blur-sm min-w-[300px] text-left inline-block relative preserve-3d">
            <div className="absolute inset-0 bg-primary/5 opacity-50 blur-xl" />
            <TerminalText text="Incoming Connection Request..." delay={0.5} />
            <TerminalText text="Authenticating Client Signature..." delay={1.5} />
            <TerminalText text="Routing to Secure Channel [SUCCESS]" delay={2.5} />
            <div className="absolute top-0 w-full h-[1px] bg-primary/50 scanning-line" />
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent"
          >
            Your Security Line Is Open
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-6"
          >
            Connect directly with Asia's elite cybersecurity architects. Establish immediate contact to secure your critical infrastructure.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 1 }}
            className="flex items-center justify-center gap-6 text-sm font-headline tracking-widest uppercase text-zinc-500 font-bold"
          >
            <span><span className="text-primary mr-1">»</span> Immediate Response</span>
            <span><span className="text-primary mr-1">»</span> 100% Confidential</span>
          </motion.div>

        </section>

        {/* SECTION 2: CONTACT INTERFACE */}
        <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          
          {/* PRIMARY CONNECTION NODE (CALL) */}
          <div className="flex flex-col items-center justify-center lg:items-end lg:pr-16 relative preserve-3d">
             <div className="text-center group perspective-1000">
               <motion.a 
                 href="tel:+1234567890"
                 whileHover={{ scale: 1.05, rotateX: 10, rotateY: -10 }}
                 whileTap={{ scale: 0.95 }}
                 className="relative flex items-center justify-center w-64 h-64 rounded-full bg-black border-4 border-primary/40 text-primary shadow-[0_0_100px_rgba(255,26,26,0.3)] hover:shadow-[0_0_150px_rgba(255,26,26,0.6)] hover:bg-primary/10 transition-all duration-300 isolate preserve-3d z-10"
               >
                 {/* Intense multiple pulse rings */}
                 <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-30" style={{ animationDuration: '2s' }} />
                 <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                 
                 <div className="absolute -inset-10 bg-[radial-gradient(circle,_rgba(255,26,26,0.3)_0%,_transparent_70%)] rounded-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                 
                 <div className="flex flex-col items-center gap-4">
                   <PhoneCall className="w-16 h-16 animate-pulse" />
                   <span className="font-headline font-bold text-lg uppercase tracking-widest text-white group-hover:text-primary transition-colors">Initiate Call</span>
                 </div>
               </motion.a>
               <p className="mt-8 text-zinc-400 text-sm font-headline tracking-widest uppercase glow-text">Direct Secure Access Node</p>
             </div>
          </div>

          {/* SECONDARY CONNECTION (FORM) */}
          <div className="relative z-10 lg:pl-16 lg:border-l border-white/5">
            <div className="bg-black/50 border border-white/10 p-10 rounded-xl backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.5)] group">
               <div className="flex items-center gap-3 mb-8">
                 <Terminal className="w-5 h-5 text-primary" />
                 <h2 className="font-headline text-2xl font-bold tracking-tight">Log Secure Request</h2>
               </div>
               
               <p className="text-zinc-500 text-sm mb-8 font-light">Prefer text? Send an encrypted request and our command center will establish contact.</p>

               <form onSubmit={handleFormSubmit} className="space-y-6">
                 <div className="space-y-4">
                   {/* Name Field */}
                   <div className="relative group/field focus-within:border-primary/50 transition-colors border border-white/10 rounded-sm bg-black overflow-hidden flex items-center px-4">
                     <User className="w-4 h-4 text-zinc-500 group-focus-within/field:text-primary transition-colors" />
                     <input 
                       type="text" 
                       placeholder="Identity / Entity Name" 
                       required
                       className="w-full bg-transparent border-none text-white p-4 focus:outline-none placeholder:text-zinc-700 font-mono text-sm"
                     />
                     <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-focus-within/field:scale-y-100 origin-top transition-transform duration-300" />
                   </div>

                   {/* Email Field */}
                   <div className="relative group/field focus-within:border-primary/50 transition-colors border border-white/10 rounded-sm bg-black overflow-hidden flex items-center px-4">
                     <Mail className="w-4 h-4 text-zinc-500 group-focus-within/field:text-primary transition-colors" />
                     <input 
                       type="email" 
                       placeholder="Secure Contact Vector (Email)" 
                       required
                       className="w-full bg-transparent border-none text-white p-4 focus:outline-none placeholder:text-zinc-700 font-mono text-sm"
                     />
                     <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-focus-within/field:scale-y-100 origin-top transition-transform duration-300" />
                   </div>

                   {/* Message Field */}
                   <div className="relative group/field focus-within:border-primary/50 transition-colors border border-white/10 rounded-sm bg-black overflow-hidden flex items-start px-4 pt-4">
                     <Lock className="w-4 h-4 text-zinc-500 group-focus-within/field:text-primary transition-colors mt-0.5" />
                     <textarea 
                       placeholder="Incident details or operational requirements..." 
                       required
                       rows={4}
                       className="w-full bg-transparent border-none text-white px-4 pb-4 focus:outline-none placeholder:text-zinc-700 font-mono text-sm resize-none"
                     />
                     <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-focus-within/field:scale-y-100 origin-top transition-transform duration-300" />
                   </div>
                 </div>

                 <button 
                   disabled={formState !== "idle"}
                   type="submit" 
                   className="w-full bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-4 font-headline uppercase tracking-widest text-sm font-bold shadow-[0_0_20px_rgba(255,26,26,0.2)] hover:shadow-[0_0_30px_rgba(255,26,26,0.6)] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {formState === "idle" && <><Send className="w-4 h-4" /> Transmit Signal</>}
                   {formState === "sending" && <span className="animate-pulse">Encrypting Payload...</span>}
                   {formState === "sent" && <><ShieldCheck className="w-4 h-4" /> Signal Secured</>}
                 </button>
               </form>
            </div>
          </div>
        </section>

        {/* SECTION 3: FINAL CONNECTION LOCK */}
        <section className="py-24 mb-10 border-t border-primary/20 relative mt-16">
          <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10"
           >
             <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-zinc-300 mb-8 backdrop-blur-md">
                <Lock className="w-3 h-3 text-primary animate-pulse" /> Final Verification
             </div>
             
             <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6">Don’t Let Vulnerabilities Stay Unchecked</h2>
             <p className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
               A single conversation can prevent critical security risks. The system is live. Lock down your digital perimeter now.
             </p>
             
             <a href="tel:+1234567890" className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-5 font-headline uppercase tracking-widest text-sm rounded-sm font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all group">
               <PhoneCall className="w-5 h-5 group-hover:text-primary transition-colors" />
               Call Now and Secure Your Systems
             </a>
           </motion.div>
        </section>

      </main>
    </div>
  );
};
