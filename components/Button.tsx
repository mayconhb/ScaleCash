import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  withIcon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  
  const variants = {
    primary: "bg-brand-500 hover:bg-brand-400 text-slate-950 shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] focus:ring-brand-500",
    secondary: "bg-white text-slate-900 hover:bg-slate-100 focus:ring-white",
    outline: "border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white bg-transparent focus:ring-slate-500"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>
  );
};