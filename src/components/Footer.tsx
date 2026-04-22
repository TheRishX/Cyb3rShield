import { Link } from "react-router-dom";
import { Shield, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="relative bg-[#0B0B0D] border-t border-primary/20 pt-16 mt-20 overflow-hidden font-sans">
      {/* Subtle animated network grid/dots */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* 1. BRAND + CTA (LEFT / PRIMARY FOCUS) */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <Shield className="w-8 h-8 text-primary fill-primary/20 group-hover:drop-shadow-[0_0_15px_rgba(255,26,26,0.8)] transition-all duration-300" />
              <span className="text-xl font-bold tracking-tighter text-white uppercase group-hover:glow-text transition-all duration-300">Cyb3r Shield</span>
            </Link>
            <p className="text-sm font-headline tracking-widest text-zinc-500 uppercase">
              Securing Digital Systems with Precision
            </p>
            <div className="pt-4">
              <a href="tel:+1234567890" className="inline-flex items-center gap-3 bg-primary text-white px-6 py-4 font-headline uppercase tracking-widest text-[11px] rounded-sm font-bold shadow-[0_0_15px_rgba(255,26,26,0.2)] hover:shadow-[0_0_25px_rgba(255,26,26,0.6)] hover:bg-red-600 active:scale-95 transition-all group relative">
                <div className="absolute inset-0 border border-primary animate-ping opacity-50" style={{ animationDuration: '3s' }} />
                <PhoneCall className="w-4 h-4" />
                Call Now – Secure Your Business
              </a>
            </div>
          </div>

          {/* 2. NAVIGATION (MIDDLE) */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="font-headline text-white font-bold tracking-widest uppercase mb-6 text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> System Index
            </h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-500 uppercase tracking-wider text-[11px]">
              {[ 
                { name: 'Home', path: '/' }, 
                { name: 'Services', path: '/services' }, 
                { name: 'About Us', path: '/about' }, 
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="hover:text-white transition-colors relative group block w-fit"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. LEGAL & POLICIES (RIGHT) */}
          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="font-headline text-white font-bold tracking-widest uppercase mb-6 text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Defense Protocols
            </h4>
            <ul className="space-y-4 text-sm font-medium text-zinc-500 uppercase tracking-wider text-[11px]">
              {[
                { label: 'Terms & Conditions', path: '/terms-and-conditions' },
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Security Policy', path: '/security-policy' },
                { label: 'Disclaimer', path: '/disclaimer' }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="hover:text-zinc-300 transition-colors hover:drop-shadow-[0_0_5px_rgba(255,26,26,0.3)] block w-fit"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* 4. BOTTOM TRUST STRIP */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/10 relative bg-black/80 backdrop-blur-md px-6 py-6"
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <p>© 2026 Cyb3r Shield. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-primary/50" />
            Built with a security-first approach
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
