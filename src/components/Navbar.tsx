import { Shield, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isServices = location.pathname === "/services";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 font-headline">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-primary fill-primary/20 drop-shadow-[0_0_10px_rgba(255,85,69,0.5)]" />
          <span className="text-xl font-bold tracking-tighter text-primary uppercase glow-text">Cyb3r Shield</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-500">
          <Link 
            to="/" 
            className={`transition-colors ${isHome ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary"}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`transition-colors ${isServices ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary"}`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors ${isAbout ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary"}`}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors ${isContact ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary"}`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-primary transition-colors" />
          <a href="tel:+1234567890" className="bg-primary text-white px-6 py-2 text-[10px] uppercase font-bold tracking-widest rounded-sm hover:bg-primary/90 transition-all active:scale-95 glow-border">
            Call Us
          </a>
        </div>
      </div>
    </nav>
  );
};
