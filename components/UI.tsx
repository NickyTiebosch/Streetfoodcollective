import React from 'react';

export const SectionHeader: React.FC<{ 
  tag: string; 
  title: string | React.ReactNode; 
  light?: boolean;
  center?: boolean;
}> = ({ tag, title, light, center }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <h3 className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4">{tag}</h3>
    <h2 className={`text-4xl md:text-6xl font-serif font-bold leading-tight ${light ? 'text-white' : ''}`}>
      {title}
    </h2>
  </div>
);

export const GoldButton: React.FC<{ 
  onClick?: () => void; 
  children: React.ReactNode; 
  outline?: boolean;
  full?: boolean;
}> = ({ onClick, children, outline, full }) => {
  const base = "px-12 py-5 rounded-full text-lg font-bold uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-2xl transition-all";
  const styles = outline 
    ? "bg-white/10 border border-white/30 text-white hover:bg-white hover:text-dark backdrop-blur-md"
    : "bg-gold text-dark hover:bg-white shadow-gold/40";
  
  return (
    <button onClick={onClick} className={`${base} ${styles} ${full ? 'w-full' : 'w-full md:w-auto'}`}>
      {children}
    </button>
  );
};