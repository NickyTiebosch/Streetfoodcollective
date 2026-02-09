
import React from 'react';
import { ShieldCheck, Zap, Flame, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-dark min-h-screen text-white">
      {/* Introductie: Het Manifest */}
      <section id="about-hero" className="relative py-32 px-6 overflow-hidden border-b border-white/5">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-8">HET MANIFEST</h2>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-10 leading-[0.9] tracking-tighter">
            Catering is dood. <br />
            <span className="text-gold italic">Beleving leeft.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto italic">
            "De meeste cateraars serveren voedsel. Wij serveren herinneringen die blijven plakken als rook aan een leren jas. Streetfood Collective is het antwoord op de grijze massa van de evenementenwereld."
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,162,77,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      </section>

      {/* Wie wij zijn / Wat wij doen */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-8 tracking-tight uppercase">EEN LEGER AAN SMAAK-ICONEN</h3>
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                Streetfood Collective is geen toevallige verzameling wagens. Wij zijn een zorgvuldig geselecteerd collectief van premium foodconcepten. Elke truck in onze vloot is een icoon op zich, met een eigen gezicht, eigen chefs en een compromisloze culinaire identiteit.
              </p>
              <p>
                Van de rauwe energie van een smash burger tot de verfijnde finesse van high-end tapas; wij brengen de dynamiek van de straat naar locaties waar normaal alleen witte handschoentjes komen. We breken de regels van traditionele hospitality, maar behouden de discipline van een sterrenkeuken.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://i.imgur.com/fX0LnSF.png" className="rounded-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Action" />
              <img src="https://i.imgur.com/rh7Bk0m.png" className="rounded-2xl h-80 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Focus" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://i.imgur.com/nR9dbfA.png" className="rounded-2xl h-80 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Vibe" />
              <img src="https://i.imgur.com/KLczhQk.png" className="rounded-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Prep" />
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Streetfood Collective */}
      <section className="py-24 px-6 bg-charcoal/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4">DE GRONDWET</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter">WAAROM IEDEREEN ONS WIL</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 border border-white/5 bg-dark rounded-[32px] hover:border-gold/30 transition-all group">
              <Zap className="text-gold mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">Snelheid is de Standaard</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Geen rijen. Geen gedoe. Onze processen zijn geoptimaliseerd om enorme volumes te draaien zonder dat de kwaliteit wankelt.</p>
            </div>
            <div className="p-10 border border-white/5 bg-dark rounded-[32px] hover:border-gold/30 transition-all group">
              <Flame className="text-gold mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">Echt Vuur, Echte Smaak</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Wij doen niet aan opwarmen. We bereiden alles vers, live en met de beste lokale ingrediënten voor de ogen van je gasten.</p>
            </div>
            <div className="p-10 border border-white/5 bg-dark rounded-[32px] hover:border-gold/30 transition-all group">
              <Target className="text-gold mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">Visuele Dominantie</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Onze vloot steelt de show. Elke truck is een architecturaal statement dat de esthetiek van je event direct naar een hoger plan tilt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor Opdrachtgevers */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold mb-8 uppercase tracking-tight">VOOR DE BESLISSER DIE DURFT</h3>
          <p className="text-gray-400 text-lg mb-12 font-light">
            Stop met pleasen, start met imponeren. Wij ontzorgen de organisatie volledig, zodat jij de glorie kunt opeisen. Of het nu een directieborrel is of een festival voor duizenden; wij regelen de culinaire chaos met militaire precisie.
          </p>
          <ul className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest font-bold text-gold">
            <li className="flex items-center"><ShieldCheck size={16} className="mr-2" /> Full-service ontzorging</li>
            <li className="flex items-center"><ShieldCheck size={16} className="mr-2" /> Schaalbaar tot 5000+ gasten</li>
            <li className="flex items-center"><ShieldCheck size={16} className="mr-2" /> Exclusieve concepten</li>
          </ul>
        </div>
      </section>

      {/* Voor Investeerders & Partners */}
      <section className="py-24 px-6 bg-gold text-dark">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-2/3">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter">SCHAALBAAR SUCCES.</h2>
            <p className="text-dark/80 text-xl font-semibold italic mb-10 leading-relaxed">
              Streetfood Collective is meer dan een cateringbedrijf; het is een merkplatform in een snelle groeifase. Wij bouwen aan een netwerk van onstuitbare food-merken met een bewezen ROI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <TrendingUp size={24} className="shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-widest mb-1">Groeipotentieel</h4>
                  <p className="text-sm text-dark/70">Een bewezen model met sterke jaarcijfers en een exponentieel groeiende vraag.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap size={24} className="shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold uppercase text-sm tracking-widest mb-1">Innovatie</h4>
                  <p className="text-sm text-dark/70">Continue ontwikkeling van nieuwe concepten op basis van data en markttrends.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="bg-dark p-10 rounded-[40px] shadow-2xl text-white">
              <h3 className="text-2xl font-serif font-bold mb-6">Partner worden?</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Wij zoeken strategische partners en investeerders die begrijpen dat hospitality de komende jaren draait om karakter en schaalbaarheid.
              </p>
              <button className="w-full bg-gold text-dark py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-all text-sm">
                Aanvragen Memorandum
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
