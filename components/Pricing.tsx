import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Lock, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quanto vale ter acesso a produtos que faturam 6 dígitos?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-24">
          {PRICING_PLANS.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 150} direction="up" distance="60px" className="h-full">
              <div 
                className={`relative h-full rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-slate-900/80 backdrop-blur-xl border-2 border-brand-500 shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] z-10 scale-105 md:scale-100 md:hover:scale-105' 
                    : 'bg-gradient-to-b from-slate-800/40 to-slate-950/80 backdrop-blur-md border border-slate-700/50 hover:border-brand-500/30 hover:-translate-y-2'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-brand-400 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wide shadow-lg whitespace-nowrap">
                    MAIS VENDIDO
                  </div>
                )}
                
                {/* Header */}
                <div className="mb-8 mt-2">
                  <h3 className={`text-xl font-bold mb-4 ${plan.isPopular ? 'text-white' : 'text-slate-100'}`}>{plan.name}</h3>
                  
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-sm font-bold text-slate-400 mb-6">R$</span>
                    <span className="text-7xl font-bold text-white leading-none tracking-tight">{plan.monthlyPrice}</span>
                    <span className="text-lg text-slate-400 font-medium mb-1">{plan.period}</span>
                  </div>

                  <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide">
                    {plan.id === 'monthly' 
                      ? 'COBRADO MENSALMENTE' 
                      : `COBRADO R$ ${plan.totalPrice} A CADA ${plan.id === 'quarterly' ? '3' : '6'} MESES`
                    }
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-5 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 min-w-[18px]">
                          <Check className={`w-5 h-5 ${plan.isPopular ? 'text-brand-500' : 'text-slate-500'}`} strokeWidth={3} />
                      </div>
                      <span className="text-slate-300 text-[15px] font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <button 
                    className={`w-full py-4 rounded-lg font-bold text-base transition-all duration-300 ${
                      plan.isPopular 
                        ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40' 
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  {plan.savings && plan.isPopular && (
                    <p className="text-brand-500 text-xs font-medium text-center mt-3 animate-pulse">
                      {plan.savings}
                    </p>
                  )}

                  {/* Guarantee Badge */}
                  <div className={`flex items-center justify-center gap-1.5 mt-4 ${plan.isPopular ? 'opacity-80' : 'opacity-60'}`}>
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span className="text-xs text-slate-400 font-medium">Garantia de 7 dias</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Guarantee Section (No Card Style) */}
        <ScrollReveal delay={300} direction="up" distance="30px">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
             
             {/* Icon Glow Container */}
             <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-brand-500 blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
                <div className="relative w-20 h-20 bg-slate-900 border border-brand-500/30 rounded-full flex items-center justify-center shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] z-10">
                   <ShieldCheck className="w-10 h-10 text-brand-500" />
                </div>
             </div>

             <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
               Garantia Blindada de 7 Dias
             </h3>
             
             <div className="w-16 h-1 bg-brand-500/30 rounded-full mb-6"></div>

             <p className="text-slate-400 leading-relaxed text-base md:text-lg max-w-2xl">
               O risco é todo nosso. Assine agora, explore o banco de dados e copie as ofertas. 
               Se você achar que o ScaleCash não colocou dinheiro no seu bolso, basta enviar um e-mail 
               e devolvemos <span className="text-brand-400 font-bold">100% do seu investimento</span>. 
               Sem perguntas, sem burocracia.
             </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};