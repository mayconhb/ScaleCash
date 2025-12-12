import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Perguntas Frequentes
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 50} direction="up" distance="20px">
              <div 
                className={`border rounded-xl transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-brand-500/50 bg-slate-900/80 backdrop-blur-sm' 
                    : 'border-slate-800 bg-slate-900/30 hover:border-slate-700'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  <span className="font-medium text-slate-200">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};