import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import React, { useState, useRef, useEffect } from "react";
import { Shield, PhoneCall, Crosshair, Lock, Network, Users } from "lucide-react";
import { SEO } from "../components/SEO";

// The Module details for zooming in
const MODULE_DETAILS = {
  pentest: {
    title: "Penetration Testing",
    subtitle: "(Web, API, Mobile)",
    icon: Crosshair,
    description: "We conduct comprehensive penetration testing to identify vulnerabilities in applications before they can be exploited by attackers. Our security experts simulate real-world attack scenarios to uncover weaknesses in web applications, APIs, and mobile applications.",
    items: [
      {
        title: "Scope includes",
        items: [
          "Web Application Security Testing",
          "API Security Testing (REST / GraphQL)",
          "Mobile Application Security (Android & iOS)",
          "Authentication and authorization testing",
          "Business logic and input validation testing",
          "Configuration and infrastructure security checks"
        ]
      },
      {
        title: "Deliverables",
        items: [
          "Detailed vulnerability assessment report",
          "Proof-of-concept (PoC) exploitation where applicable",
          "Risk severity classification (Critical/High/Medium)",
          "Remediation guidance and secure coding recommendations"
        ]
      }
    ],
    color: "from-red-500 to-red-900"
  },
  governance: {
    title: "Security Policy & Governance",
    subtitle: "(SOPs, RCA, Security Documentation)",
    icon: Network,
    description: "Strong governance and well-defined policies are critical for maintaining a secure organization. We assist organizations in establishing clear security frameworks, documentation, and procedures aligned with industry standards.",
    items: [
      {
        title: "Services include",
        items: [
          "Information Security Policies and Procedures",
          "Standard Operating Procedures (SOPs)",
          "Root Cause Analysis (RCA) for security incidents",
          "Security process documentation and best practices",
          "Security architecture and process reviews"
        ]
      }
    ],
    color: "from-orange-500 to-red-600"
  },
  training: {
    title: "Security Training & Awareness",
    subtitle: null,
    icon: Users,
    description: "Human awareness plays a vital role in preventing cyber incidents. We provide targeted training programs designed to help development teams, QA teams, and employees understand modern security risks and best practices.",
    items: [
      {
        title: "Training topics include",
        items: [
          "OWASP Top 10 vulnerabilities",
          "Secure coding practices",
          "Application security fundamentals",
          "Emerging threats and attack techniques",
          "Cyber Hygiene Generic awareness sessions"
        ]
      }
    ],
    color: "from-rose-500 to-red-800"
  }
};

type ModuleId = keyof typeof MODULE_DETAILS | null;

export const Services = () => {
  const { scrollYProgress } = useScroll();
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 1.5]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [activeModule, setActiveModule] = useState<ModuleId>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Background threats visualization
  const [threats, setThreats] = useState<{ id: number, x: number, y: number }[]>([]);

  useEffect(() => {
    // Generate random threats
    const interval = setInterval(() => {
      if (document.hidden) return;
      setThreats(prev => {
        const newThreats = [...prev.slice(-10), {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100
        }];
        return newThreats;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0B0B0D] text-white font-sans overflow-hidden perspective-1200 relative">
      <SEO 
        title="Penetration Testing & Security Solutions | Cyb3r Shield"
        description="Protect your business with expert penetration testing, security governance, and training. Secure your systems with Cyb3r Shield today."
        url="https://cyb3rshield.com/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Cybersecurity Consulting",
          "provider": {
            "@type": "Organization",
            "name": "Cyb3r Shield"
          }
        }}
      />
      
      {/* Background 4D Grid & Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0 grid-bg-thin opacity-30"
          animate={{
            rotateX: [60, 65, 60],
            translateY: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ width: '200%', height: '200%', left: '-50%', top: '-20%', transformOrigin: 'center top' }}
        />
        
        {/* Connection lines simulating attack paths */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.line 
            x1="0%" y1="0%" x2="100%" y2="100%" 
            stroke="#FF1A1A" strokeWidth="2"
            animate={{ strokeDashoffset: [1000, 0] }}
            strokeDasharray="20 40"
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <motion.line 
            x1="100%" y1="20%" x2="0%" y2="80%" 
            stroke="#FF1A1A" strokeWidth="1"
            animate={{ strokeDashoffset: [1000, 0] }}
            strokeDasharray="10 30"
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Floating threat nodes */}
        {threats.map(threat => (
          <motion.div
            key={threat.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0.5] }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="absolute w-2 h-2 bg-red-500 rounded-full blur-[1px]"
            style={{ left: `${threat.x}%`, top: `${threat.y}%` }}
          />
        ))}

        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_#0B0B0D_80%]" />
      </div>

      {/* Persistent CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="tel:+1234567890" className="relative group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full font-headline tracking-widest text-xs font-bold uppercase shadow-[0_0_20px_rgba(255,26,26,0.3)] hover:shadow-[0_0_30px_rgba(255,26,26,0.6)] transition-all">
          <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-50" />
          <PhoneCall className="w-4 h-4 animate-pulse" />
          Call Now
        </a>
      </div>

      {/* Zoom In View for Active Module */}
      <AnimatePresence>
        {activeModule && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, z: -500 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            exit={{ opacity: 0, scale: 1.2, z: 500 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0B0B0D]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 bottom-0 left-1/2 w-full h-full -translate-x-1/2 bg-gradient-to-b from-red-500/10 to-transparent blur-3xl opacity-50" />
              <div className="w-full h-[2px] bg-red-500/50 scanning-line" />
            </div>

            <button 
              onClick={() => setActiveModule(null)}
              className="absolute top-24 left-10 text-zinc-400 hover:text-white font-headline text-sm uppercase tracking-widest flex items-center gap-2 border border-white/10 px-4 py-2 rounded bg-white/5 active:scale-95 transition-all z-50"
            >
              Exit Subsystem
            </button>

            <div className="max-w-4xl w-full relative z-10 border border-white/10 bg-black/50 p-12 rounded backdrop-blur-lg shadow-[0_0_50px_rgba(255,26,26,0.15)] flex flex-col max-h-[85vh]">
               <div className="flex items-start gap-6 mb-8 border-b border-white/10 pb-8 flex-shrink-0">
                 {React.createElement(MODULE_DETAILS[activeModule].icon, { className: "w-16 h-16 text-primary drop-shadow-[0_0_15px_rgba(255,26,26,0.6)] flex-shrink-0" })}
                 <div>
                   <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter text-white mb-2">{MODULE_DETAILS[activeModule].title}</h2>
                   {MODULE_DETAILS[activeModule].subtitle && (
                     <div className="text-zinc-500 font-headline uppercase tracking-widest text-sm mb-4">{MODULE_DETAILS[activeModule].subtitle}</div>
                   )}
                   <p className="text-zinc-300 text-sm font-light leading-relaxed max-w-2xl">{MODULE_DETAILS[activeModule].description}</p>
                 </div>
               </div>

               <div className="overflow-y-auto pr-4 space-y-8 flex-grow custom-scrollbar">
                 {MODULE_DETAILS[activeModule].items.map((group, groupIdx) => (
                   <div key={groupIdx}>
                     <h3 className="font-headline text-primary uppercase tracking-widest text-xs font-bold mb-4">{group.title}</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {group.items.map((item, i) => (
                         <motion.div 
                           key={i}
                           initial={{ opacity: 0, x: -20 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ delay: (groupIdx * 0.2) + (i * 0.05) }}
                           className="flex items-start gap-4 bg-white/5 border border-white/5 p-4 rounded group hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default"
                         >
                           <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1 bg-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(255,26,26,0.8)] transition-all" />
                           <span className="font-headline uppercase tracking-wider text-xs text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                         </motion.div>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        
        {/* SECTION 1 - IMMERSIVE HERO */}
        <section className="min-h-[90vh] flex items-center justify-center pt-24 px-6 relative">
          <motion.div 
            style={{ scale: scaleHero, opacity: opacityHero }}
            className="text-center max-w-4xl"
          >
            <div className="inline-block border border-primary/30 bg-primary/10 px-6 py-2 rounded-full font-headline text-primary text-xs uppercase tracking-widest mb-8 animate-pulse backdrop-blur-md">
              System Breach Detected // Engaging Active Defense
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
              Enter the<br/> Security Layer
            </h1>
            <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
              Our organization provides specialized cybersecurity services designed to help businesses identify vulnerabilities, strengthen security posture, and ensure compliance with industry best practices.
            </p>
          </motion.div>
        </section>

        {/* SECTION 2 - 4D INTERACTIVE MODULES */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Tactical Operations</h2>
               <p className="text-zinc-500 uppercase tracking-widest text-sm">Select a module to view subsystem details</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 perspective-1200">
              {/* Pentest Module */}
              <motion.div 
                whileHover={{ rotateY: 5, rotateX: 5, z: 50, scale: 1.05 }}
                onClick={() => setActiveModule("pentest")}
                className="group relative cursor-pointer preserve-3d"
              >
                {/* 3D Cube effect background */}
                <div className="absolute inset-0 bg-red-900/20 rounded blur-sm" style={{ transform: 'translateZ(-20px)' }} />
                <div className="relative bg-black border border-white/10 p-10 rounded shadow-[0_0_30px_rgba(255,26,26,0.1)] group-hover:shadow-[0_0_40px_rgba(255,26,26,0.3)] group-hover:border-primary/50 transition-all duration-300 preserve-3d">
                  
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                  
                  <Crosshair className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-primary transition-colors">Penetration Testing</h3>
                  <div className="h-2 w-12 bg-primary/20 mb-6 group-hover:bg-primary transition-colors" />
                  
                  {/* Fake UI data streams */}
                  <div className="space-y-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="h-1 w-full bg-white/5 rounded overflow-hidden">
                      <div className="h-full w-1/3 bg-primary" />
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded overflow-hidden">
                      <div className="h-full w-2/3 bg-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Governance Module */}
              <motion.div 
                whileHover={{ rotateY: -5, rotateX: 5, z: 50, scale: 1.05 }}
                onClick={() => setActiveModule("governance")}
                className="group relative cursor-pointer pt-12 preserve-3d"
              >
                <div className="absolute inset-0 top-12 bg-orange-900/20 rounded blur-sm" style={{ transform: 'translateZ(-20px)' }} />
                <div className="relative bg-black border border-white/10 p-10 rounded shadow-[0_0_30px_rgba(255,26,26,0.1)] group-hover:shadow-[0_0_40px_rgba(255,26,26,0.3)] group-hover:border-primary/50 transition-all duration-300">
                  <Network className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-primary transition-colors">Security Governance</h3>
                  <div className="grid grid-cols-3 gap-2 opacity-30 group-hover:opacity-100 transition-opacity mt-8">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className="h-2 bg-primary/40 rounded-sm" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Training Module */}
              <motion.div 
                whileHover={{ rotateY: -10, rotateX: 5, z: 50, scale: 1.05 }}
                onClick={() => setActiveModule("training")}
                className="group relative cursor-pointer md:-mt-12 preserve-3d"
              >
                <div className="absolute inset-0 bg-rose-900/20 rounded blur-sm" style={{ transform: 'translateZ(-20px)' }} />
                <div className="relative bg-black border border-white/10 p-10 rounded shadow-[0_0_30px_rgba(255,26,26,0.1)] group-hover:shadow-[0_0_40px_rgba(255,26,26,0.3)] group-hover:border-primary/50 transition-all duration-300">
                  <Users className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-headline text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-primary transition-colors">Security Training</h3>
                  <div className="flex items-center gap-2 mt-8 opacity-30 group-hover:opacity-100 transition-opacity">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <div className="h-[1px] flex-grow bg-primary/50" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <div className="h-[1px] flex-grow bg-primary/50" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 3 - FINAL SYSTEM LOCK */}
        <section className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-primary/5 border-t border-primary/20 backdrop-blur-3xl" />
           <div className="max-w-4xl mx-auto text-center relative z-10 bg-black/60 p-16 rounded-lg border border-primary/30 shadow-[0_0_50px_rgba(255,26,26,0.2)] backdrop-blur-lg">
             <Shield className="w-20 h-20 text-primary mx-auto mb-8 drop-shadow-[0_0_15px_rgba(255,26,26,0.8)]" />
             <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-6">System Secured.<br/>Stay Protected.</h2>
             <p className="text-lg md:text-xl text-zinc-400 font-light mb-12 max-w-3xl leading-relaxed text-balance">
               Through a combination of proactive testing, governance consulting, advanced security tooling, and security awareness programs, we help organizations strengthen their overall cybersecurity posture and protect critical digital assets from evolving threats.
             </p>
             <a href="tel:+1234567890" className="inline-block bg-primary hover:bg-red-600 text-white px-12 py-5 font-headline text-sm uppercase tracking-widest font-bold shadow-[0_0_30px_rgba(255,26,26,0.4)] hover:shadow-[0_0_40px_rgba(255,26,26,0.6)] hover:scale-105 active:scale-95 transition-all">
                Call Now And Secure Your Systems
             </a>
           </div>
        </section>

      </main>
    </div>
  );
};
