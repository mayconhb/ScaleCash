import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // em milissegundos
  duration?: number; // em milissegundos
  distance?: string; // ex: "30px"
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 800,
  distance = "30px",
  direction = "up",
  fullWidth = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // Reduzido para disparar assim que 5% do elemento estiver visível
        rootMargin: '0px 0px -20px 0px' // Margem inferior ajustada para disparar um pouco antes do fim da tela
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getInitialTransform = () => {
    switch(direction) {
      case 'up': return `translate3d(0, ${distance}, 0)`;
      case 'down': return `translate3d(0, -${distance}, 0)`;
      case 'left': return `translate3d(-${distance}, 0, 0)`;
      case 'right': return `translate3d(${distance}, 0, 0)`;
      default: return 'none';
    }
  };

  return (
    <div 
      ref={ref}
      className={className}
      style={{
        width: fullWidth ? '100%' : 'fit-content',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : getInitialTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};