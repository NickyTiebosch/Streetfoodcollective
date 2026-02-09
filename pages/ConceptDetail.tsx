import React from 'react';
import { CONCEPTS } from '../constants';
import { ArrowLeft, Star, Users, Clock, Layout } from 'lucide-react';

interface ConceptDetailProps {
  conceptId: string;
  onNavigate: (path: string) => void;
}

const ConceptDetail: React.FC<ConceptDetailProps> = ({ conceptId, onNavigate }) => {
  const concept = CONCEPTS.find(c => c.id === conceptId);

  if (!concept) {
    return (
      <div className="pt-40 text-center text-white h-screen">
        <h1 className="text-4xl font-serif">Concept niet gevonden</h1>
        <button onClick={() => onNavigate('/foodtrucks')} className="mt-8 text-gold uppercase tracking-widest text-sm font-bold">Terug naar overzicht</button>
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen text-white">
      {/* Hero Section - High Impact with Full Color */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={concept.heroImage} 
            className="w-full h-full object-cover animate-fade-in transition-transform duration-[10000ms] hover:scale-105" 
            alt={concept.name} 
          />
          {/* Layered overlays for maximum color depth and text legibility */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark/90"></div>
        </div>
        
        {/* Top padding to ensure content starts below fixed navbar */}
        <div className="relative z-10 text-center px-6 max-w-7xl pt-20">
          <button 
            onClick={() => onNavigate('/foodtrucks')}
            className="group flex items-center text-white/80 hover:text-gold uppercase tracking-[0.3em] text-[10px] font-black mb-8 md:mb-12 mx-auto transition-all bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Terug naar de vloot
          </button>
          
          {/* Title is now strictly the food truck name as requested */}
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-serif font-bold mb-6 tracking-tighter uppercase leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            {concept.name}
          </h1>
          
          {/* Tagline is now the "brutal and tasty" quote */}
          <p className="text-lg md:text-2xl lg:text-3xl font-light italic text-gold/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            {concept.tagline}
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left: Content */}
        <div className="lg:col-span-7 space-y-16">
          <section>
            <h2 className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-8">HET CONCEPT</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              {concept.longDescription && concept.longDescription.length > 0 ? (
                concept.longDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <p>{concept.description}</p>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-8">WAAR DIT CONCEPT UITBLINKT</h2>
            <ul className="space-y-6">
              {[
                { title: "Snelheid", desc: "Door onze geoptimaliseerde workflows draaien we hoge volumes zonder kwaliteitsverlies." },
                { title: "Publieksfavoriet", desc: "Een universele hit bij zowel festivalbezoekers als zakelijke gasten." },
                { title: "Iconische Uitstraling", desc: "De truck is ontworpen om direct sfeer en karakter aan je terrein te geven." },
                { title: "Schaalbaarheid", desc: "Perfect inzetbaar voor kleine groepen én massa-events." }
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4 group">
                  <div className="mt-1 bg-gold/10 p-2 rounded-lg group-hover:bg-gold transition-colors">
                    <Star size={16} className="text-gold group-hover:text-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-widest">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-8">GESCHIKT VOOR</h2>
            <div className="flex flex-wrap gap-4">
              {["Festivals", "Bedrijfsevents", "Bruiloften", "Pop-up concepten", "Productlanceringen"].map((tag) => (
                <span key={tag} className="px-6 py-3 border border-white/10 rounded-full text-xs uppercase tracking-widest font-bold bg-charcoal/30 hover:border-gold/50 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Practical & Booking */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 space-y-8">
            <div className="bg-charcoal/50 border border-white/5 p-10 rounded-[40px] backdrop-blur-xl">
              <h3 className="text-xl font-serif font-bold mb-8 uppercase tracking-[0.2em]">Praktisch & Professioneel</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-center space-x-4">
                  <Clock className="text-gold" size={20} />
                  <div>
                    <h5 className="text-xs uppercase font-bold tracking-widest text-gray-500">Doorloopsnelheid</h5>
                    <p className="text-sm">Hoog — Ideaal voor piekbelasting</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Layout className="text-gold" size={20} />
                  <div>
                    <h5 className="text-xs uppercase font-bold tracking-widest text-gray-500">Benodigde Ruimte</h5>
                    <p className="text-sm">Gemiddeld (Standaard Foodtruck-unit)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="text-gold" size={20} />
                  <div>
                    <h5 className="text-xs uppercase font-bold tracking-widest text-gray-500">Betrouwbaarheid</h5>
                    <p className="text-sm">Volledig gecertificeerd & professionele crew</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-lg font-serif italic mb-10 text-gray-400">
                  "Kwaliteit die blijft hangen, lang nadat de truck vertrokken is."
                </p>
                <button 
                  onClick={() => onNavigate('/booking')}
                  className="w-full bg-gold text-dark py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-gold/20"
                >
                  Boek dit concept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptDetail;