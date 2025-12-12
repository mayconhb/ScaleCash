import React from 'react';
import { Button } from './Button';
import { Search, Menu, Infinity, ChevronDown, Monitor, X, SlidersHorizontal, Check, MoreHorizontal } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

// Componente auxiliar para o Card estilo Mobile
const MobileAdLibraryCard: React.FC<{
  searchTerm: string;
  advertiserName: string;
  advertiserAvatar: string;
  resultCount: string;
  date: string;
  className?: string;
  innerClassName?: string;
  delay?: number;
}> = ({ searchTerm, advertiserName, advertiserAvatar, resultCount, date, className = "", innerClassName = "", delay = 0 }) => (
  <ScrollReveal delay={delay} distance="40px" direction="up" className={`w-full max-w-[280px] mx-auto ${className}`}>
    <div className={`bg-white text-slate-900 rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/50 border border-slate-200 select-none transition-all duration-500 ${innerClassName}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
         <div className="flex items-center gap-1.5">
           <Infinity className="w-5 h-5 text-[#0064e0]" strokeWidth={2.5} />
           <span className="font-bold text-lg tracking-tight text-[#1c2b33]">Meta</span>
         </div>
         <Menu className="text-[#1c2b33] w-5 h-5" />
      </div>

      <div className="p-3 space-y-3">
        {/* Filters Row */}
        <div className="flex gap-2">
           <div className="bg-[#e4e6eb] px-2 py-1.5 rounded-md text-[11px] font-semibold flex items-center gap-1 text-[#050505]">
              Tudo <ChevronDown size={12} className="text-[#65676b]"/>
           </div>
           <div className="bg-[#e4e6eb] px-2 py-1.5 rounded-md text-[11px] font-semibold flex items-center gap-2 text-[#050505] flex-1 whitespace-nowrap overflow-hidden">
              <Monitor size={12} className="text-[#050505]"/> Todos os anúncios <ChevronDown size={12} className="text-[#65676b] ml-auto"/>
           </div>
        </div>

        {/* Search Input */}
        <div className="relative">
           <Search className="absolute left-3 top-2.5 text-[#65676b] w-3.5 h-3.5" />
           <input 
             type="text" 
             value={searchTerm} 
             readOnly 
             className="w-full bg-white border border-[#ccd0d5] rounded-full py-2 pl-8 pr-8 text-[13px] text-[#050505] placeholder-[#65676b] focus:outline-none shadow-sm"
           />
           <X className="absolute right-3 top-2.5 text-[#65676b] w-3.5 h-3.5 cursor-pointer" />
        </div>

        {/* Advertiser Info */}
        <div className="flex items-center gap-2.5 pt-1 pb-0.5">
           <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-100 shadow-sm shrink-0">
             <img src={advertiserAvatar} alt="" className="w-full h-full object-cover" />
           </div>
           <span className="font-bold text-[15px] text-[#050505] leading-tight">{advertiserName}</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-5 border-b border-[#ced0d4]">
           <div className="pb-2 border-b-[2px] border-[#0064e0] text-[#0064e0] font-semibold text-[13px]">Anúncios</div>
           <div className="pb-2 text-[#65676b] font-semibold text-[13px]">Sobre</div>
        </div>

        {/* Results Info */}
        <div className="pt-1">
           <p className="text-[13px] font-bold text-[#050505] mb-3">{resultCount}</p>
           <button className="flex items-center gap-2 bg-[#e4e6eb] px-3 py-1.5 rounded-full text-[13px] font-semibold text-[#050505]">
              <SlidersHorizontal size={14} /> Filtros (1)
           </button>
        </div>

        {/* Date */}
        <p className="text-[11px] text-[#65676b] font-normal">{date}</p>
      </div>

      {/* Ad Status Footer Snippet (Partial view mimick) */}
      <div className="mt-1 mx-3 p-3 bg-white border border-[#ced0d4] rounded-t-xl shadow-sm pb-6 border-b-0 relative">
         <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
               <div className="w-3.5 h-3.5 rounded-full bg-[#e8f5e9] flex items-center justify-center">
                  <Check size={8} className="text-[#31a24c]" strokeWidth={4} />
               </div>
               <span className="text-[11px] font-semibold text-[#050505]">Ativo</span>
            </div>
            <MoreHorizontal className="text-[#65676b] w-4 h-4" />
         </div>
         {/* Fake Ad Content Hint */}
         <div className="space-y-2 opacity-50">
            <div className="h-2.5 bg-[#e4e6eb] rounded w-3/4"></div>
            <div className="h-2.5 bg-[#e4e6eb] rounded w-1/2"></div>
         </div>
         {/* Fade gradient to make it look cut off */}
         <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  </ScrollReveal>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-24 overflow-hidden min-h-screen flex flex-col justify-center">
      
      <div className="container mx-auto px-4 text-center z-10 relative">
        
        {/* Title */}
        <ScrollReveal delay={100}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white max-w-5xl mx-auto drop-shadow-2xl">
            Copie as Ofertas que Estão <br className="hidden md:block" />
            <span className="gradient-text">Imprimindo Dinheiro</span> Agora
          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            O ScaleCash é o micro-SaaS para quem tem preguiça de espionar. Receba a nata do Meta Ads, validada e pronta para modelar. Pare de queimar verba testando o que não funciona.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button className="w-full sm:w-auto text-lg px-8 py-4 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)] transition-all duration-300 hover:-translate-y-1" withIcon>
              Quero Ver as Ofertas
            </Button>
          </div>
        </ScrollReveal>

        {/* MOCKUP CONTAINER - PREMIUM 3D PERSPECTIVE */}
        <div className="relative max-w-5xl mx-auto mt-8 [perspective:2000px]">
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-500/15 blur-[100px] rounded-full pointer-events-none -z-10"></div>

          {/* Cards Grid with Perspective Logic on Desktop, Flex on Mobile */}
          <div className="flex md:grid md:grid-cols-3 items-center md:justify-center gap-6 md:gap-0 overflow-x-auto md:overflow-visible pb-12 md:pb-0 px-4 md:px-0 snap-x snap-mandatory no-scrollbar w-full">
            
            {/* LEFT CARD (Rotated Right) */}
            <MobileAdLibraryCard 
              searchTerm="Homens De Alto Nível"
              advertiserName="Homens De Alto Nível"
              advertiserAvatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
              resultCount="~72 resultados"
              date="Lançados em dezembro de 2024"
              className="z-10 md:-mr-12 shrink-0 snap-center"
              innerClassName="bg-slate-50 opacity-100 md:opacity-60 md:hover:opacity-100 md:scale-90 md:[transform:rotateY(15deg)_translateZ(-50px)] md:origin-right md:hover:[transform:rotateY(5deg)_scale(0.95)] hover:z-20 border-slate-300"
              delay={400}
            />

            {/* CENTER CARD (Prominent) */}
            <MobileAdLibraryCard 
              searchTerm="Digesti: Cortisol Detox"
              advertiserName="Digesti: Cortisol Detox"
              advertiserAvatar="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=150&q=80"
              resultCount="~120 resultados"
              date="Lançados em dezembro de 2024"
              className="z-30 shrink-0 snap-center"
              innerClassName="md:scale-110 shadow-[0_0_60px_-15px_rgba(16,185,129,0.5)] border-brand-500/30 ring-1 ring-brand-500/20"
              delay={500}
            />

            {/* RIGHT CARD (Rotated Left) */}
            <MobileAdLibraryCard 
              searchTerm="Andressa Uras"
              advertiserName="Andressa Uras"
              advertiserAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
              resultCount="~170 resultados"
              date="Lançados em dezembro de 2024"
              className="z-10 md:-ml-12 shrink-0 snap-center"
              innerClassName="bg-slate-50 opacity-100 md:opacity-60 md:hover:opacity-100 md:scale-90 md:[transform:rotateY(-15deg)_translateZ(-50px)] md:origin-left md:hover:[transform:rotateY(-5deg)_scale(0.95)] hover:z-20 border-slate-300"
              delay={600}
            />

          </div>
        </div>
      </div>
    </section>
  );
};