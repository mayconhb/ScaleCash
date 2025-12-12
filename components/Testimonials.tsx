import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Quem usa, <span className="text-brand-400">escala</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 100} direction="up" distance="40px">
              <div className="bg-gradient-to-b from-slate-800/40 to-slate-950/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 relative hover:border-brand-500/30 transition-all duration-300 h-full hover:shadow-lg hover:shadow-brand-900/10 group">
                <div className="absolute top-8 right-8 bg-slate-800/50 p-2 rounded-lg border border-slate-700/50 group-hover:border-brand-500/20 transition-colors">
                   <Quote className="text-slate-500 group-hover:text-brand-500/50 w-5 h-5 transition-colors" />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full border-2 border-slate-700 group-hover:border-brand-500/50 transition-colors"
                  />
                  <div>
                    <h4 className="font-bold text-white group-hover:text-brand-100 transition-colors">{t.name}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 italic leading-relaxed">
                  "{t.content}"
                </p>
                
                <div className="pt-6 border-t border-slate-800/80">
                  <p className="text-brand-400 font-bold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                    Resultado: {t.results}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};