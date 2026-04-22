import { motion, useScroll, useTransform } from "motion/react";
import React, { useState, useEffect } from "react";
import { PhoneCall, Terminal, Crosshair, Shield, Activity, Network } from "lucide-react";
import { SEO } from "../components/SEO";

const TerminalText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-3 font-mono text-xs md:text-sm text-primary/80"
    >
      <span className="text-zinc-600">%</span>
      <span>{text}</span>
    </motion.div>
  );
};

export const About = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const [nodes, setNodes] = useState<{ id: number, x: number, y: number, size: number, delay: number }[]>([]);

  useEffect(() => {
    // Generate background system nodes
    const generatedNodes = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2
    }));
    setNodes(generatedNodes);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white font-sans overflow-hidden perspective-1200 relative pt-20">
      <SEO 
        title="About Cyb3r Shield | Cybersecurity Experts"
        description="Learn about Cyb3r Shield, Asia's premier cybersecurity company. We deliver mission-critical security services, zero-trust architecture, and unyielding defense."
        url="https://cyb3rshield.com/about"
      />
      
      {/* 4D BACKGROUND SYSTEM */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep 3D Grid Zoom-In Effect */}
        <motion.div 
          initial={{ scale: 2, opacity: 0, translateZ: 1000 }}
          animate={{ scale: 1, opacity: 0.3, translateZ: 0 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="absolute inset-0 preserve-3d"
        >
          <motion.div 
            className="absolute inset-0 grid-bg-thin"
            animate={{
              rotateX: [60, 65, 60],
              translateY: [0, -50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ width: '200%', height: '200%', left: '-50%', top: '-20%', transformOrigin: 'center top' }}
          />
        </motion.div>
        
        {/* Floating Intelligence Nodes */}
        {nodes.map(node => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0], 
              scale: [0, 1, 0.5],
              y: [0, -30, 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 3, 
              repeat: Infinity, 
              delay: node.delay,
              ease: "easeInOut" 
            }}
            className="absolute bg-primary rounded-full blur-[1px] shadow-[0_0_10px_rgba(255,26,26,0.8)]"
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%`,
              width: node.size,
              height: node.size
            }}
          />
        ))}

        {/* Parallax Connection Lines */}
        <motion.svg style={{ y: yBg }} className="absolute inset-0 w-full h-full opacity-20 translate-z-[-100px]">
          <motion.path 
            d="M 10 90 Q 50 10 90 90" 
            fill="transparent" 
            stroke="#FF1A1A" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </motion.svg>

        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_#0B0B0D_85%]" />
      </div>

      {/* FLOAT CALL TO ACTION */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="tel:+1234567890" className="relative group flex items-center gap-3 bg-primary hover:bg-red-700 text-white px-6 py-4 rounded-full font-headline tracking-widest text-xs font-bold uppercase shadow-[0_0_20px_rgba(255,26,26,0.3)] hover:shadow-[0_0_30px_rgba(255,26,26,0.6)] transition-all active:scale-95">
          <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-50" />
          <PhoneCall className="w-4 h-4 animate-pulse" />
          Call Now
        </a>
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* SECTION 1: SYSTEM ENTRY (WHO WE ARE) */}
        <section className="min-h-[85vh] flex items-center pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Cinematic Entry */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-primary mb-8 glow-border">
                <Terminal className="w-3 h-3 animate-pulse" /> Connection Established
              </div>
              
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-gradient-to-br from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent transform-style-3d lg:perspective-1000">
                <motion.span 
                  initial={{ rotateX: 20, rotateY: -20, opacity: 0 }}
                  animate={{ rotateX: 0, rotateY: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="block inline-block"
                >
                  Inside the Mind
                </motion.span>
                <br/>
                <motion.span 
                  initial={{ rotateX: 20, rotateY: -20, opacity: 0 }}
                  animate={{ rotateX: 0, rotateY: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                  className="block text-primary drop-shadow-[0_0_20px_rgba(255,26,26,0.4)]"
                >
                  of Cyber Defense.
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-lg md:text-xl text-zinc-400 font-light max-w-xl leading-relaxed"
              >
                Recognized as Asia's premier cybersecurity vanguard, Cyb3r Shield is not just a company—it is a live, thinking defense engine. We are an elite collective of offensive architects and security researchers protecting the continent's most critical digital infrastructures.
              </motion.p>
            </motion.div>

            {/* Right: Active Terminal Feed */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, z: -100 }}
              animate={{ opacity: 1, scale: 1, z: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="bg-black/40 border border-white/10 rounded-lg backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.8)] relative preserve-3d group overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
              <div className="flex items-center gap-3 border-b border-white/10 p-4 bg-black/60">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono font-bold">
                  root@cyb3r-shield:~# CORE_SYS
                </div>
              </div>
              <div className="p-8 font-mono space-y-4 h-[300px] overflow-hidden relative">
                <TerminalText text="INITIALIZING REGIONAL COMMAND NODE..." delay={1.5} />
                <TerminalText text="MOUNTING APAC DEFENSE PROTOCOLS [OK]" delay={2} />
                <TerminalText text="AGGREGATING CONTINENTAL THREAT DATA..." delay={2.5} />
                <TerminalText text="DECRYPTING VANGUARD DIRECTIVES..." delay={3} />
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4 }}
                  className="mt-6 p-4 border border-primary/20 bg-primary/5 rounded space-y-2 text-sm text-zinc-300"
                >
                  <div className="text-primary font-bold">» STATUS: ASIA'S PREMIER CYBER COMMAND</div>
                  <p>Born from the underground. Engineered for the enterprise. We deploy nation-state level offensive security and absolute zero trust architecture to protect the region's most critical assets.</p>
                </motion.div>
                
                {/* Foreground scanning line in terminal */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scanning-line" />
              </div>
            </motion.div>

          </div>
        </section>

        {/* SECTION 2: CORE PROTOCOLS */}
        <section className="py-24 border-t border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="text-center mb-20">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">The Vanguard Standard</h2>
            <p className="text-zinc-500 uppercase tracking-widest text-sm font-bold">Why We Lead Asia's Cyber Defense</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Zero Trust Architecture", icon: Shield, desc: "Assume breach. Verify cryptographically. We implement unparalleled security perimeters that eliminate lateral movement and neutralize internal threats globally." },
              { title: "Elite Offensive Tactics", icon: Crosshair, desc: "Powered by Asia's top-tier Red Team. We simulate sophisticated nation-state attacks to identify and remediate your vulnerabilities before adversaries exploit them." },
              { title: "Sub-Second Telemetry", icon: Activity, desc: "Unmatched visibility. Our engines process billions of regional threat signals in real-time to deliver deterministic, immediate threat neutralization." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-zinc-900/40 border border-white/5 p-8 rounded-lg relative group hover:border-primary/20 transition-colors"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
                <div className="w-14 h-14 rounded-md bg-black border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,26,26,0.3)] transition-all">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: FINAL DEPLOYMENT SYSTEM */}
        <section className="py-32 relative text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto relative z-10 border border-primary/20 bg-black/60 backdrop-blur-md p-16 rounded-xl shadow-[0_0_40px_rgba(255,26,26,0.15)]"
          >
            <Network className="w-16 h-16 text-primary mx-auto mb-8 drop-shadow-[0_0_20px_rgba(255,26,26,0.8)]" />
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6">Partner With Asia's Best.</h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed text-balance">
              Align your enterprise with elite, uncompromising tactical security. Establish direct communication with our regional defense architects today and secure your legacy.
            </p>
            <a href="tel:+1234567890" className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 font-headline uppercase tracking-widest text-sm rounded-sm font-bold shadow-[0_0_30px_rgba(255,26,26,0.4)] hover:scale-105 hover:bg-red-600 active:scale-95 transition-all">
              <PhoneCall className="w-5 h-5" />
              Summon The Command
            </a>
          </motion.div>
        </section>

      </main>
    </div>
  );
};
