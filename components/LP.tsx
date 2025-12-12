import React from 'react';
import { Rocket, Check } from 'lucide-react';
import { Button } from './Button';

// Ícone do WhatsApp SVG inline para garantir fidelidade visual sem dependências extras
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const LP: React.FC = () => {
  const benefits = [
    "Novas ofertas todos os dias",
    "Vários nichos e idiomas",
    "Nutra e infoprodutos",
    "Cloaker quebrado",
    "Ofertas secretas dos grandes players",
    "Copie, cole e escale"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-20">
      
      {/* Central Container */}
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]">
            <Rocket className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-3xl font-bold text-white tracking-tight">
            Scale<span className="text-brand-400">Cash</span>
          </span>
        </div>

        {/* Headline */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2 tracking-wide">
            Copie as Ofertas que Estão <br />
            <span className="gradient-text">Imprimindo Dinheiro</span> Agora
          </h1>
        </div>

        {/* Benefits List */}
        <div className="w-full space-y-4 mb-12">
          {benefits.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-slate-900/60 border border-slate-700/50 p-4 rounded-xl backdrop-blur-sm hover:border-brand-500/30 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-lg font-medium text-slate-200">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA Button - Brand Green */}
        <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold text-lg py-4 rounded-full shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 uppercase tracking-wide">
          <WhatsAppIcon className="w-6 h-6" />
          ENTRAR NO GRUPO VIP
        </button>

        {/* Footer Text */}
        <p className="mt-8 text-slate-500 text-sm font-medium">
          Acesso imediato após a confirmação.
        </p>

      </div>
    </div>
  );
};