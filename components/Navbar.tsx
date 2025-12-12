import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X, Rocket } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center">
            <Rocket className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Scale<span className="text-brand-400">Cash</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Como funciona</a>
          <a href="#testimonials" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Depoimentos</a>
          <a href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Planos</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="primary" className="py-2 px-4 text-sm" onClick={onLoginClick}>
            Acessar Agora
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-4 flex flex-col gap-4">
           <a href="#features" className="text-slate-300 hover:text-white p-2 border-b border-slate-800/50" onClick={() => setIsMobileMenuOpen(false)}>Como funciona</a>
           <a href="#pricing" className="text-slate-300 hover:text-white p-2 border-b border-slate-800/50" onClick={() => setIsMobileMenuOpen(false)}>Planos</a>
           <Button fullWidth onClick={() => { setIsMobileMenuOpen(false); onLoginClick(); }}>Acessar Agora</Button>
        </div>
      )}
    </nav>
  );
};