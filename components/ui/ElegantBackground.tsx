'use client';

import React, { useEffect, useState } from 'react';

interface ElegantBackgroundProps {
  className?: string;
}

const ElegantBackground: React.FC<ElegantBackgroundProps> = ({
  className = '',
}) => {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(!document.body.classList.contains('dark'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Fond dégradé principal - adapté au thème */}
      <div 
        className="absolute inset-0"
        style={{
          background: isLight 
            ? 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 25%, #fde68a 50%, #fef3c7 75%, #fffbeb 100%)'
            : 'linear-gradient(135deg, #0a0f1a 0%, #0c1220 25%, #080c14 50%, #0a0f1a 75%, #0c1220 100%)'
        }}
      />
      
      {/* Lignes géométriques subtiles */}
      <div className="absolute inset-0">
        {/* Ligne horizontale principale */}
        <div 
          className="absolute top-1/4 left-0 w-full h-px opacity-10"
          style={{
            background: isLight
              ? 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.8), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.8), transparent)'
          }}
        />
        
        {/* Ligne diagonale */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            background: isLight
              ? 'linear-gradient(45deg, transparent 49%, rgba(245, 158, 11, 0.5) 49.5%, rgba(245, 158, 11, 0.5) 50.5%, transparent 51%)'
              : 'linear-gradient(45deg, transparent 49%, rgba(157, 78, 221, 0.5) 49.5%, rgba(157, 78, 221, 0.5) 50.5%, transparent 51%)',
            transform: 'scale(2) rotate(15deg)',
            transformOrigin: 'center'
          }}
        />
        
        {/* Ligne verticale */}
        <div 
          className="absolute top-0 right-1/3 w-px h-full opacity-8"
          style={{
            background: isLight
              ? 'linear-gradient(180deg, transparent, rgba(252, 211, 77, 0.4), transparent)'
              : 'linear-gradient(180deg, transparent, rgba(6, 255, 165, 0.4), transparent)'
          }}
        />
      </div>

      {/* Points de grille très subtils */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: isLight
            ? 'radial-gradient(circle at 2px 2px, rgba(245,158,11,0.3) 1px, transparent 0)'
            : 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Zones de lumière douce */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-10 left-4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: isLight
              ? 'radial-gradient(circle, rgba(251, 191, 36, 0.35), transparent 70%)'
              : 'radial-gradient(circle, rgba(0, 243, 255, 0.3), transparent 70%)'
          }}
        />
        
        <div 
          className="absolute bottom-20 right-4 w-80 h-80 rounded-full opacity-8 blur-3xl"
          style={{
            background: isLight
              ? 'radial-gradient(circle, rgba(245, 158, 11, 0.35), transparent 70%)'
              : 'radial-gradient(circle, rgba(157, 78, 221, 0.3), transparent 70%)'
          }}
        />
        
        <div 
          className="absolute top-1/2 left-[6%] w-64 h-64 rounded-full opacity-6 blur-3xl transform -translate-y-1/2"
          style={{
            background: isLight
              ? 'radial-gradient(circle, rgba(252, 211, 77, 0.32), transparent 70%)'
              : 'radial-gradient(circle, rgba(6, 255, 165, 0.3), transparent 70%)'
          }}
        />
      </div>

      {/* Overlay subtil pour unifier */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: isLight
            ? 'radial-gradient(ellipse at center, transparent 20%, rgba(255, 251, 235, 0.4) 100%)'
            : 'radial-gradient(ellipse at center, transparent 20%, rgba(8, 12, 20, 0.4) 100%)'
        }}
      />
    </div>
  );
};

export default ElegantBackground;