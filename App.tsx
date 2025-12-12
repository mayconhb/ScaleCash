import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Comparison } from './components/Comparison';
import { Steps } from './components/Steps';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { LP } from './components/LP';

type PageView = 'landing' | 'login' | 'lp';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('landing');

  // Verifica a URL (pathname ou hash) ao carregar
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      if (path === '/lp' || hash === '#lp') {
        setCurrentView('lp');
      } else if (path === '/login' || hash === '#login') {
        setCurrentView('login');
      }
    };

    handleUrlChange();
    
    // Opcional: ouvir mudanças de hash se o usuário alterar manualmente
    window.addEventListener('hashchange', handleUrlChange);
    return () => window.removeEventListener('hashchange', handleUrlChange);
  }, []);

  // Função para rolar para a seção de preços quando vier do Login
  const navigateToPricing = () => {
    setCurrentView('landing');
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-500/30 relative">
      
      {/* GLOBAL BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-60"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen opacity-60"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="relative z-10">
        
        {currentView === 'lp' ? (
          <LP />
        ) : currentView === 'login' ? (
          <Login 
            onBack={() => setCurrentView('landing')} 
            onRegister={navigateToPricing} 
          />
        ) : (
          <>
            <Navbar onLoginClick={() => setCurrentView('login')} />
            <main>
              <Hero />
              <Features />
              <Comparison />
              <Steps />
              <div id="testimonials">
                <Testimonials />
              </div>
              <Pricing />
              <FAQ />
            </main>
            <Footer />
          </>
        )}

      </div>

      {/* DEV NAVIGATION CONTROLS - Botões flutuantes para teste */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 bg-slate-900/90 p-2 rounded-lg border border-slate-700 backdrop-blur shadow-xl">
        <span className="text-[10px] text-slate-400 font-bold uppercase text-center mb-1">Dev Menu</span>
        <button 
          onClick={() => setCurrentView('landing')}
          className={`text-xs px-3 py-1.5 rounded transition-colors font-medium ${currentView === 'landing' ? 'bg-brand-500 text-slate-900' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentView('lp')}
          className={`text-xs px-3 py-1.5 rounded transition-colors font-medium ${currentView === 'lp' ? 'bg-brand-500 text-slate-900' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
        >
          Ver /lp
        </button>
        <button 
          onClick={() => setCurrentView('login')}
          className={`text-xs px-3 py-1.5 rounded transition-colors font-medium ${currentView === 'login' ? 'bg-brand-500 text-slate-900' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
        >
          Login
        </button>
      </div>

    </div>
  );
}

export default App;