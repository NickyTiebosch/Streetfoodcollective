import React from 'react';
import { ChevronRight, Quote, Flame, Zap, ShieldAlert } from 'lucide-react';
import { CONCEPTS } from '../constants';
import { SectionHeader, GoldButton } from '../components/UI';

const Feature: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-12 border border-white/5 rounded-[40px] hover:border-gold/50 transition-all bg-charcoal/30 group">
    <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
    <h4 className="text-3xl font-serif font-bold mb-6 uppercase tracking-tighter">{title}</h4>
    <p className="text-gray-400 leading-relaxed font-light text-lg">{desc}</p>
  </div>
);

const Home: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://i.imgur.com/fX0LnSF.png" className="w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-block px-4 py-1 border border-gold/50 bg-dark/40 backdrop-blur-sm rounded-full mb-8">
             <h2 className="text-gold uppercase tracking-[0.4em] text-xs font-bold">STREETFOOD COLLECTIVE</h2>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">Where streetfood meets <br /><span className="text-gold italic">experience.</span></h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium">Meerdere unieke foodtrucks, één krachtig collectief. Wij brengen premium streetfood naar festivals, bedrijfsevents, borrels en privé gelegenheden. Smaak, beleving en professionaliteit.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <GoldButton onClick={() => onNavigate('/booking')}>Direct een offerte</GoldButton>
            <GoldButton onClick={() => onNavigate('/foodtrucks')} outline>Bekijk de vloot</GoldButton>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature icon={<Flame size={48} />} title="Geen Bullshit" desc="Wij doen niet aan concessies. Alleen de meest verse ingrediënten, rauw en eerlijk bereid voor je neus. Smaak is onze religie." />
          <Feature icon={<Zap size={48} />} title="Iconische Vloot" desc="Onze trucks zijn geen wagens, het zijn architecturale statements. Ontworpen om de show te stelen, op elk terrein." />
          <Feature icon={<ShieldAlert size={48} />} title="Full Control" desc="Van festivalveld tot directiekamer; wij regelen de chaos met militaire precisie. Jij hoeft alleen maar de glorie op te eisen." />
        </div>
      </section>

      <section className="py-32 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeader tag="OVER ONS" title={<>Gedreven door passie <br/><span className="text-gold italic">voor echt eten.</span></>} />
            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"De lekkerste herinneringen worden niet gemaakt aan een tafel, maar staand bij een rokende foodtruck met een goed glas in de hand."</p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">Streetfood Collective is ontstaan vanuit de droom om de ongedwongen sfeer van een foodfestival te combineren met de kwaliteit en service van een high-end hospitality. Wij brengen de levendige chaos van de straat naar jouw locatie, maar met de discipline van een sterrenkeuken.</p>
            <button onClick={() => onNavigate('/over-ons')} className="flex items-center text-gold uppercase tracking-widest text-sm font-bold group border-b border-gold/0 hover:border-gold transition-all pb-1">
              Lees ons verhaal <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="relative">
            <img src="https://i.imgur.com/rh7Bk0m.png" className="rounded-2xl shadow-2xl aspect-square object-cover" alt="Prep" />
            <div className="absolute -bottom-10 -left-10 bg-gold p-8 rounded-2xl hidden md:block shadow-2xl z-20">
              <Quote className="text-dark mb-4" size={32} fill="currentColor" />
              <p className="text-dark font-serif text-xl italic max-w-xs">"Kwaliteit zonder compromis, op elke locatie in Nederland."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-charcoal">
        <SectionHeader tag="ONZE CONCEPTEN" title="Ontdek de collectie." center />
        <div className="grid grid-cols-1 md:grid-cols-3">
          {CONCEPTS.slice(0, 3).map((concept) => (
            <div
              key={concept.id}
              className="group relative h-[650px] overflow-hidden border-r border-white/5 last:border-0 cursor-pointer"
              onClick={() => onNavigate(`/foodtrucks/${concept.id}`)}
            >
              <img
                src={concept.cardImage}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt={concept.name}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
              <div className="absolute bottom-0 left-0 p-12 w-full transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold block mb-4 text-center">
                  {concept.tagline}
                </span>
                <h3 className="text-3xl font-serif font-bold mb-6 text-white">{concept.name}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 mb-8 line-clamp-3">
                  {concept.description}
                </p>
                <div className="text-white text-xs uppercase tracking-widest font-bold border-b border-white/20 pb-2 w-fit">
                  Bekijk concept
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="booking-cta"
        className="pt-40 pb-56 bg-dark text-white text-center relative overflow-hidden border-t border-gold/20"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold rounded-full blur-[150px] animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="absolute top-10 left-0 w-full overflow-hidden opacity-10 whitespace-nowrap">
          <div className="marquee text-4xl font-bold uppercase tracking-[1em]">
            NO SLOPPY SNACKS • ONLY REAL FIRE • NO SLOPPY SNACKS • ONLY REAL FIRE • NO SLOPPY SNACKS • ONLY REAL FIRE •
          </div>
        </div>

        <div className="relative z-10 px-6 max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-9xl font-serif font-bold mb-10 tracking-tighter leading-[0.9]">
            Klaar met die <br />
            <span className="text-gold italic">saaie hapjes?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-xl md:text-2xl font-light leading-relaxed">
            Vergeet die lauwe catering. Jouw gasten verdienen beter dan een klef broodje kruidenboter. Wij brengen de
            vlam, de trucks en de smaak die de boel opschudt.
          </p>
          <div className="flex flex-col items-center gap-8">
            <button
              onClick={() => onNavigate('/booking')}
              className="group relative bg-gold text-dark px-16 py-8 rounded-full text-2xl font-bold uppercase tracking-[0.2em] transition-all hover:bg-white hover:scale-110 active:scale-95 shadow-[0_0_50px_rgba(201,162,77,0.3)] hover:shadow-[0_0_80px_rgba(201,162,77,0.5)]"
            >
              Fix mijn event
              <div className="absolute inset-0 rounded-full border border-gold animate-ping opacity-20 group-hover:hidden" />
            </button>
            <p className="text-gold/60 text-xs uppercase tracking-[0.5em] font-bold">Let's make some noise</p>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-10 left-0 w-full overflow-hidden opacity-10 whitespace-nowrap">
          <div className="marquee-reverse text-4xl font-bold uppercase tracking-[1em]">
            RAW PASSION • ICONIC FLEET • RAW PASSION • ICONIC FLEET • RAW PASSION • ICONIC FLEET • RAW PASSION • ICONIC FLEET • RAW PASSION • ICONIC FLEET •
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;