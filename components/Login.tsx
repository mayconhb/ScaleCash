import React from 'react';
import { Button } from './Button';
import { Rocket, ArrowLeft, Lock, Mail } from 'lucide-react';

interface LoginProps {
  onRegister: () => void;
  onBack: () => void;
}

export const Login: React.FC<LoginProps> = ({ onRegister, onBack }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-20">
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para o início
      </button>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]">
              <Rocket className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Scale<span className="text-brand-400">Cash</span>
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          
          {/* Top decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 to-brand-400"></div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Bem-vindo de volta</h2>
            <p className="text-slate-400 text-sm">Acesse o banco de dados de ofertas validadas.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-2 ml-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within:text-brand-500 transition-colors" />
                <input 
                  type="email" 
                  placeholder="seu@email.com"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 ml-1">
                <label className="block text-xs font-bold text-slate-300 uppercase">Senha</label>
                <a href="#" className="text-xs text-brand-400 hover:text-brand-300 hover:underline">Esqueceu a senha?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-500 group-focus-within:text-brand-500 transition-colors" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                />
              </div>
            </div>

            <Button fullWidth className="py-3.5 mt-2">
              Entrar na Plataforma
            </Button>
          </form>

          {/* Footer / Register Call */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="text-slate-400 text-sm">
              Ainda não é assinante?{' '}
              <button 
                onClick={onRegister}
                className="text-brand-400 font-bold hover:text-brand-300 hover:underline transition-colors focus:outline-none"
              >
                Crie sua conta
              </button>
            </p>
          </div>

        </div>
        
        <p className="text-center text-slate-600 text-xs mt-6">
          Protegido por criptografia SSL de ponta a ponta.
        </p>
      </div>
    </div>
  );
};