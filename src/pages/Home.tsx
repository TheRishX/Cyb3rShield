import { motion, useScroll, useTransform } from "motion/react";
import { Shield, Radar, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[921px] flex items-center justify-center overflow-hidden bg-surface perspective-1200 pt-20"
    >
      {/* 2D/3D Animated Thin Red Grid & Scanning Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Moving Thin Line Grid */}
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 grid-bg-thin opacity-30"
          style={{ width: '150%', height: '150%', top: '-25%', left: '-25%' }}
        />

        {/* 3 Scanning Lines */}
        <motion.div 
          animate={{ y: [-100, 1500] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-[1px]"
        />
        <motion.div 
          animate={{ y: [-500, 2000] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 blur-[2px]"
        />
        <motion.div 
          animate={{ x: [-100, 2000] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-40 blur-[1px]"
        />

        {/* Dark vignette */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_#0a0a0c_70%]" />
        
        {/* Hover Highlight Box */}
        <div 
          className="absolute border-2 border-primary animate-heartbeat pointer-events-none"
          style={{
            width: '80px',
            height: '80px',
            left: mousePos.x - 40,
            top: mousePos.y - 40,
            transition: 'left 0.1s ease-out, top 0.1s ease-out'
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-primary/30 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.15em] font-headline text-primary font-bold">System Active // Defensive Protocol</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.95]"
        >
          Defending <span className="bg-gradient-to-r from-primary to-error-container bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,85,69,0.3)]">Digital Assets.</span><br/>
          Securing What Matters.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-12"
        >
          Advanced tactical cybersecurity solutions designed for environments where precision is not optional.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="tel:+1234567890" className="inline-flex items-center justify-center bg-primary text-white px-10 py-4 font-headline uppercase tracking-widest text-sm rounded-sm font-bold shadow-[0_0_30px_rgba(255,85,69,0.3)] hover:scale-105 hover:bg-red-600 active:scale-95 transition-all">
            Get Secured
          </a>
          <Link to="/services" className="border border-primary/40 bg-black/40 backdrop-blur-sm text-primary px-10 py-4 font-headline uppercase tracking-widest text-sm rounded-sm font-bold hover:bg-primary/5 active:scale-95 transition-all">
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, active = false }: { icon: any, title: string, desc: string, active?: boolean }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative p-8 bg-zinc-900/50 border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden ${active ? 'md:-translate-y-6' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="scanning-line absolute left-0 right-0 h-[1px] bg-primary/20 opacity-0 group-hover:opacity-100" />
      
      <div className="w-12 h-12 bg-black border border-white/10 rounded flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="font-headline text-xl font-bold mb-4 tracking-tight">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed font-light mb-6">
        {desc}
      </p>

      <Link to="/services" className="flex items-center gap-2 text-primary font-headline text-[10px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
        Initiate Analysis <ArrowRight className="w-3 h-3" />
      </Link>
    </motion.div>
  );
};

const WorkingTerminal = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const commands = [
      "INITIALIZING DEFENSE SYSTEMS...",
      "SCANNING NETWORK INFRASTRUCTURE...",
      "THREAT DETECTED: UNKNOWN PACKET ORIGIN",
      "ISOLATING MALICIOUS PORT...",
      "FIREWALL REINFORCED",
      "ENCRYPTION KEY ROTATED",
      "SYSLOG UPDATED // CLEAN",
      "SYSTEM STATUS: SECURE"
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${commands[i % commands.length]}`].slice(-8));
      i++;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border border-white/10 rounded-lg overflow-hidden shadow-2xl font-mono">
      <div className="bg-zinc-900 px-4 py-2 border-b border-white/5 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Defensive Terminal v2.04</span>
      </div>
      <div className="p-6 h-[250px] overflow-hidden bg-[#050505]">
        <div className="space-y-2">
          {logs.map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xs text-primary/80"
            >
              <span className="text-zinc-600 mr-2">$</span> {log}
            </motion.div>
          ))}
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-primary inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="bg-surface font-sans">
      <main>
        <HeroSection />

        {/* Services Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/5 pb-8">
              <div>
                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 tracking-tight">Core Operations</h2>
                <p className="text-zinc-500 font-light">Tactical responses to evolving global threats.</p>
              </div>
              <Link to="/services" className="bg-primary text-white px-8 py-3 font-headline text-[10px] uppercase font-bold tracking-widest rounded-sm self-start md:self-auto hover:bg-primary/90 transition-colors">
                View All Operations
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                icon={Shield} 
                title="Penetration Testing" 
                desc="Simulated offensive operations designed to identify structural weaknesses before adversarial exploitation."
              />
              <ServiceCard 
                 icon={Radar} 
                 title="Risk Assessment" 
                 desc="Comprehensive evaluation of digital infrastructure to quantify and prioritize mitigation strategies."
                 active={true}
              />
              <ServiceCard 
                 icon={Cpu} 
                 title="Threat Intelligence" 
                 desc="Actionable insights derived from dark web monitoring and adversarial behavior modeling."
              />
            </div>
          </div>
        </section>

        {/* Analytics Section */}
        <section className="py-24 bg-surface-dim px-6 border-y border-white/5 relative overflow-hidden">
          {/* Subtle background scanner */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute inset-0 grid-bg" />
            <motion.div 
              animate={{ y: [0, 800] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-full h-24 bg-gradient-to-b from-primary/20 to-transparent"
            />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-primary">
                <Radar className="w-3 h-3 animate-pulse" /> Live Telemetry
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">Terminal Analytics</h2>
              <p className="text-zinc-400 font-light leading-relaxed text-lg">
                Real-time telemetry and deterministic threat modeling. Our infrastructure processes millions of data points to deliver sub-second response times in mission-critical environments.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Zero-Day Prevention",
                  "Heuristic Analysis",
                  "Automated Remediation",
                  "Packet Inspection"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-sm"
                  >
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-zinc-300 uppercase font-headline text-[10px] tracking-widest font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
              
              <div className="relative bg-zinc-950 p-1 rounded-sm border border-white/10 shadow-2xl overflow-hidden">
                {/* Visualizer Header */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scanning-line" />
                
                <WorkingTerminal />
                
                {/* Radar Overlay for engagement */}
                <div className="mt-1 p-4 border-t border-white/5 bg-black flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 border border-primary/30 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 origin-center bg-conic-gradient from-primary/40 to-transparent"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Signal Strength</div>
                      <div className="flex gap-1">
                        {[1, 1, 1, 0, 0].map((v, i) => (
                          <div key={i} className={`w-3 h-1 ${v ? 'bg-primary' : 'bg-zinc-800'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link to="/contact" className="text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20 px-4 py-2 hover:bg-primary/10 transition-colors">
                    Establish Connection
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};
