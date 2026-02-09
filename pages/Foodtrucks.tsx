import React, { useEffect, useRef, useState } from 'react';
import { CONCEPTS } from '../constants';
import { Utensils, CheckCircle2 } from 'lucide-react';

interface FoodtrucksProps {
  onSelectConcept: (id: string) => void;
}

const AnimatedMenuItem: React.FC<{ item: string; index: number; isVisible: boolean }> = ({ item, index, isVisible }) => {
  return (
    <div 
      className={`flex items-center space-x-3 group transition-all duration-700 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <CheckCircle2 size={16} className="text-gold group-hover:scale-150 transition-transform duration-300" />
      <span className="text-gray-300 hover:text-white transition-colors text-lg font-light tracking-wide">{item}</span>
    </div>
  );
};

const ConceptSection: React.FC<{ concept: any; index: number; onSelect: (id: string) => void }> = ({ concept, index, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="absolute -inset-6 border border-gold/10 rounded-[40px] z-0 group-hover:border-gold/30 transition-all duration-700"></div>
        <div className="overflow-hidden rounded-[40px] relative z-10 shadow-2xl cursor-pointer" onClick={() => onSelect(concept.id)}>
          <img 
            src={concept.cardImage} 
            alt={concept.name} 
            className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-all duration-[2000ms]"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 bg-gold text-dark p-10 rounded-[40px] z-20 shadow-2xl hidden md:block rotate-3 group-hover:rotate-0 transition-transform duration-500">
          <span className="text-[10px] uppercase font-black tracking-[0.4em] block mb-2 opacity-60">STATION NO.</span>
          <span className="text-5xl font-serif font-black tracking-tighter">0{index + 1}</span>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2">
        <span className="text-gold text-xs font-black uppercase tracking-[0.5em] block mb-6 text-center">{concept.tagline}</span>
        <h2 className="text-5xl md:text-8xl font-serif font-bold mb-10 leading-none tracking-tighter uppercase">{concept.name}</h2>
        <div className="mb-12">
          <p className="text-gray-400 text-xl leading-relaxed italic border-l-4 border-gold/40 pl-8">
            "{concept.description}"
          </p>
        </div>

        {/* Menu Items Grid with Animation */}
        <div className="bg-charcoal/40 border border-white/5 rounded-[40px] p-12 backdrop-blur-xl relative overflow-hidden group/card hover:border-gold/20 transition-all duration-500">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full"></div>
          <div className="flex items-center space-x-4 mb-10">
            <Utensils className="text-gold" size={24} />
            <h3 className="text-xl font-serif font-bold uppercase tracking-[0.3em]">HET ARSENAAL</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {concept.menuItems?.map((item: string, i: number) => (
              <AnimatedMenuItem key={item} item={item} index={i} isVisible={isVisible} />
            ))}
          </div>
          
          <button 
            onClick={() => onSelect(concept.id)}
            className="mt-16 w-full py-6 bg-transparent border-2 border-gold/50 text-gold uppercase tracking-[0.3em] text-[10px] font-black hover:bg-gold hover:text-dark transition-all duration-300 rounded-full"
          >
            Bekijk volledig concept
          </button>
        </div>
      </div>
    </div>
  );
};

const Foodtrucks: React.FC<FoodtrucksProps> = ({ onSelectConcept }) => {
  return (
    <div className="pt-40 pb-40 bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-40 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-serif font-black opacity-[0.02] select-none pointer-events-none uppercase">FLEET</div>
          <h3 className="text-gold uppercase tracking-[0.8em] text-[10px] font-black mb-6">ARSENAAL</h3>
          <h1 className="text-5xl md:text-[8rem] font-serif font-bold mb-10 leading-[0.85] tracking-tighter uppercase">
            WIJ SERVEREN GEEN ETEN.<br />
            <span className="text-gold italic">WIJ ZETTEN DE TOON.</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-light italic">
            "Streetfood dat opvalt, werkt en blijft hangen."
          </p>
        </div>

        <div className="space-y-60">
          {CONCEPTS.map((concept, index) => (
            <ConceptSection 
              key={concept.id} 
              concept={concept} 
              index={index} 
              onSelect={onSelectConcept}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foodtrucks;