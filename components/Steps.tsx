import React from 'react';
import { Search, PenTool, Banknote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Steps: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simples como deve ser
            </h2>
            <p className="text-slate-400 text-lg">
              Do zero à primeira venda em tempo recorde.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Linha pontilhada de conexão (Apenas Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-700/60 -z-10" aria-hidden="true" />

          {/* Passo 1 */}
          <ScrollReveal delay={0} distance="40px">
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-brand-500/30 flex items-center justify-center mb-8 shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)] relative z-10 group-hover:scale-110 group-hover:border-brand-400 group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] transition-all duration-300">
                <Search className="w-10 h-10 text-brand-400 group-hover:text-brand-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">1. Escolha</h3>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Acesse nosso banco de dados atualizado diariamente e escolha uma oferta que já está validada.
              </p>
            </div>
          </ScrollReveal>

          {/* Passo 2 */}
          <ScrollReveal delay={200} distance="40px">
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-brand-500/30 flex items-center justify-center mb-8 shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)] relative z-10 group-hover:scale-110 group-hover:border-brand-400 group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] transition-all duration-300">
                <PenTool className="w-10 h-10 text-brand-400 group-hover:text-brand-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">2. Modele</h3>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Baixe os criativos, copie os textos e ajuste para a sua estrutura em minutos.
              </p>
            </div>
          </ScrollReveal>

          {/* Passo 3 */}
          <ScrollReveal delay={400} distance="40px">
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-brand-500/30 flex items-center justify-center mb-8 shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)] relative z-10 group-hover:scale-110 group-hover:border-brand-400 group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] transition-all duration-300">
                <Banknote className="w-10 h-10 text-brand-400 group-hover:text-brand-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">3. Lucre</h3>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Suba a campanha no Meta Ads com a certeza de estar rodando algo que o mercado deseja.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};