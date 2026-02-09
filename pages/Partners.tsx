
import React from 'react';
import { TrendingUp, Globe, Users, ShieldCheck } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Partner <span className="text-gold italic">Worden?</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Street Food Collective is in een snelle groeifase. We zijn altijd op zoek naar gepassioneerde ondernemers, strategische partners en investeerders om ons netwerk verder uit te breiden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-12">
            <div className="flex space-x-6">
              <div className="bg-gold/10 p-4 rounded-xl shrink-0 h-fit">
                <TrendingUp className="text-gold" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-widest">Groei & Rendement</h3>
                <p className="text-gray-400 leading-relaxed">Wij hebben een bewezen businessmodel met sterke jaarcijfers en een groeiende vraag in de zakelijke en particuliere markt.</p>
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="bg-gold/10 p-4 rounded-xl shrink-0 h-fit">
                <Globe className="text-gold" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-widest">Netwerk Uitbreiding</h3>
                <p className="text-gray-400 leading-relaxed">Ben jij een locatiehouder of eventplanner? Laten we kijken hoe we elkaar kunnen versterken met onze premium catering.</p>
              </div>
            </div>
            <div className="flex space-x-6">
              <div className="bg-gold/10 p-4 rounded-xl shrink-0 h-fit">
                <Users className="text-gold" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-widest">White-Label Solutions</h3>
                <p className="text-gray-400 leading-relaxed">Wij bieden diverse mogelijkheden voor franchise of co-branding van onze succesvolle foodconcepten.</p>
              </div>
            </div>
          </div>
          <div className="bg-charcoal p-10 rounded-3xl border border-gold/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <ShieldCheck className="text-gold/20" size={100} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-6">Investeer in de Toekomst</h3>
            <p className="text-gray-400 mb-10">Ontvang ons investeringsmemorandum en ontdek hoe jij onderdeel kunt worden van de meest innovatieve cateringgroep van Nederland.</p>
            <form className="space-y-4">
              <input type="text" className="w-full bg-dark p-4 rounded-lg border border-white/10 outline-none focus:border-gold transition-all" placeholder="Volledige Naam" />
              <input type="email" className="w-full bg-dark p-4 rounded-lg border border-white/10 outline-none focus:border-gold transition-all" placeholder="Zakelijk Emailadres" />
              <button className="w-full bg-gold text-dark font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-white transition-all">
                Aanvragen Brochure
              </button>
            </form>
          </div>
        </div>

        <div className="bg-dark border border-white/5 rounded-3xl p-16 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">Direct contact met de directie?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">Heb je een concreet voorstel of wil je een persoonlijke afspraak maken om over participatie te praten?</p>
          <a href="mailto:info@streetfoodcollective.nl" className="inline-block border border-gold text-gold px-12 py-4 rounded-full uppercase tracking-widest font-bold hover:bg-gold hover:text-dark transition-all">
            Stuur een email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
