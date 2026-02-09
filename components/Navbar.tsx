import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, ChevronDown, Instagram, Mail } from 'lucide-react';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.cssText = `position: fixed; top: -${scrollY}px; width: 100%;`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  const handleNav = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full transition-all duration-500 px-6 flex items-center justify-between z-[9999] ${isScrolled || isOpen ? 'h-20 bg-black/90 backdrop-blur-2xl border-b border-gold/15' : 'h-24 bg-gradient-to-b from-black/60 to-transparent'}`}>
        <div onClick={() => handleNav('/')} className="cursor-pointer font-serif font-bold text-xl md:text-2xl text-white z-[10001]">
          STREET FOOD <span className="text-gold">COLLECTIVE</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group py-2">
              <button onClick={() => !item.subItems && handleNav(item.path)} className={`flex items-center space-x-1 text-[11px] font-black uppercase tracking-[0.3em] transition-all ${currentPath.startsWith(item.path) && item.path !== '/' ? 'text-gold' : 'text-white/70 hover:text-white'}`}>
                <span>{item.label}</span>
                {item.subItems && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />}
              </button>
              {item.subItems && (
                <div className="absolute left-0 top-full pt-4 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-charcoal border border-white/10 rounded-2xl p-6 shadow-2xl min-w-[280px] backdrop-blur-2xl">
                    {item.subItems.map((sub) => (
                      <button key={sub.label} onClick={() => handleNav(sub.path)} className={`block w-full text-left px-4 py-3 rounded-xl transition-all text-xs font-semibold ${currentPath === sub.path ? 'bg-gold text-dark' : 'text-white/60 hover:bg-gold hover:text-dark'}`}>
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <button onClick={() => handleNav('/booking')} className="bg-gold text-dark px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all">Boek Nu</button>
        </div>

        {/* Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden w-14 h-14 rounded-full transition-all flex items-center justify-center z-[10001] border ${isOpen ? 'bg-gold text-dark border-gold rotate-90' : 'bg-black/80 text-white border-gold/40'}`}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black transition-all duration-700 md:hidden z-[9998] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`} style={{ height: '100dvh' }}>
        <div className="flex flex-col h-full px-8 pt-32 pb-12 overflow-y-auto">
          {NAV_ITEMS.map((item, idx) => (
            <div key={item.label} className="border-b border-white/5 py-4">
              <div className="flex justify-between items-center" onClick={() => item.subItems ? setMobileExpanded(mobileExpanded === item.label ? null : item.label) : handleNav(item.path)}>
                <span className={`text-3xl font-serif font-bold ${currentPath.startsWith(item.path) && item.path !== '/' ? 'text-gold' : 'text-white'}`}>{item.label}</span>
                {item.subItems && <ChevronDown className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180 text-gold' : 'text-white/30'}`} />}
              </div>
              {item.subItems && mobileExpanded === item.label && (
                <div className="mt-4 flex flex-col space-y-2 p-4 bg-white/5 rounded-2xl">
                  {item.subItems.map(sub => (
                    <button key={sub.label} onClick={() => handleNav(sub.path)} className={`text-left text-lg py-3 ${currentPath === sub.path ? 'text-gold font-bold' : 'text-white/40'}`}>{sub.label}</button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={() => handleNav('/booking')} className="mt-auto bg-gold text-dark py-6 rounded-2xl font-black uppercase tracking-[0.3em]">BOEK NU</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;