import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-900/50 bg-[#020617] relative z-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} ScaleCash. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};