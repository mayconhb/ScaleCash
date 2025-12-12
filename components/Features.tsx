import React from 'react';
import { Zap, Copy, BarChart3, Target } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-brand-400" />,
    title: "Mineração Automática",
    description: "Nossos bots varrem o Meta Ads 24/7 para encontrar apenas as ofertas que estão escalando agressivamente."
  },
  {
    icon: <Copy className="w-6 h-6 text-brand-400" />,
    title: "Cópia Validada",
    description: "Receba a estrutura exata da copy, headline e criativo que está convertendo milhões."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-brand-400" />,
    title: "Análise de Métricas",
    description: "Entenda por que a oferta vende com nossa análise detalhada de engajamento e tempo de veiculação."
  },
  {
    icon: <Target className="w-6 h-6 text-brand-400" />,
    title: "Nichos Inexplorados",
    description: "Descubra oceanos azuis antes da concorrência e posicione-se como líder."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <ScrollReveal>
            <p className="text-brand-500 font-bold text-sm tracking-widest uppercase mb-4">
              O ARSENAL COMPLETO
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Tudo o que você precisa para <span className="text-brand-500">Escalar</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Não entregamos apenas "ideias". Entregamos a inteligência por trás do dinheiro que está sendo feito agora.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up" distance="40px">
              <div 
                className="h-full p-8 rounded-xl bg-gradient-to-b from-slate-800/40 to-slate-950/80 backdrop-blur-md border border-slate-700/50 hover:border-brand-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.15)]"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-brand-500/10 group-hover:border-brand-500/30 transition-colors shadow-lg shadow-black/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};