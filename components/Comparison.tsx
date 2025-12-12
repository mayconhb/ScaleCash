import React from 'react';
import { X, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Comparison: React.FC = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A Maneira Antiga vs. A Maneira ScaleCash
            </h2>
            <p className="text-slate-400 text-lg">
              Por que continuar cavando se nós já encontramos o ouro para você?
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Negativo (Jeito Difícil) - Vermelho Intensificado */}
          <ScrollReveal direction="left" delay={0} distance="50px">
            <div className="h-full p-8 rounded-2xl border border-red-500/40 bg-gradient-to-b from-red-950/20 to-slate-950/90 backdrop-blur-xl hover:border-red-500/60 transition-all duration-300 group shadow-[0_0_40px_-10px_rgba(220,38,38,0.15)] hover:shadow-[0_0_50px_-10px_rgba(220,38,38,0.25)]">
              <div className="flex items-center gap-4 mb-8 border-b border-red-500/20 pb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0 group-hover:bg-red-500/30 transition-colors">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-100 group-hover:text-red-400 transition-colors">O jeito difícil <br/><span className="text-sm font-normal text-red-200/60">(Sem ScaleCash)</span></h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Horas perdidas rolando o Ad Library sem direção.",
                  "Gastar R$ 2.000+ testando produtos que ninguém quer.",
                  "Bloqueios no Facebook por usar criativos ruins.",
                  "Dúvida constante se a oferta vai converter ou não."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="mt-1 shrink-0">
                       <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Card Positivo (Jeito Inteligente) */}
          <ScrollReveal direction="right" delay={200} distance="50px">
            <div className="relative h-full p-8 rounded-2xl border border-brand-500/50 bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl hover:border-brand-400 transition-all duration-300 shadow-[0_0_40px_-15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.3)] group transform hover:-translate-y-1">
              
              {/* Glow Effect behind */}
              <div className="absolute inset-0 bg-brand-500/5 rounded-2xl pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-8 border-b border-brand-500/20 pb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]">
                  <Check className="w-7 h-7 text-brand-400" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">O jeito inteligente <br/><span className="text-sm font-normal text-brand-500/80">(Com ScaleCash)</span></h3>
              </div>
              
              <ul className="space-y-6 relative z-10">
                {[
                  "Acesso imediato a produtos validados com alto ROI.",
                  "Economia de verba: teste apenas o que já funciona.",
                  "Estrutura completa: Copy, Criativo e Página de Vendas.",
                  "Foco total em escalar, não em \"adivinhar\"."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0 bg-brand-500/20 rounded-full p-0.5">
                        <Check className="w-3.5 h-3.5 text-brand-400" strokeWidth={3} />
                    </div>
                    <span className="text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};