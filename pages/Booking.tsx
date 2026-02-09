
import React, { useState } from 'react';
import { CONCEPTS } from '../constants';
import { Send, Calendar, Users, Briefcase, DollarSign } from 'lucide-react';

const Booking: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <Send className="text-dark" size={32} />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4">Bedankt voor je aanvraag!</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We hebben je gegevens ontvangen en nemen binnen 24 uur contact met je op om de culinaire mogelijkheden te bespreken.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="text-gold uppercase tracking-widest text-sm font-bold border-b border-gold pb-1"
          >
            Terug naar home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Laten we iets <span className="text-gold">bijzonders</span> neerzetten.</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Heb je een bruiloft, bedrijfsfeest of festival? Vul het onderstaande formulier in en wij maken een voorstel op maat. Onze service stopt niet bij het eten; wij denken graag mee over de gehele ervaring.
          </p>
          
          <div className="space-y-10">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center shrink-0">
                <span className="text-gold font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Selecteer je concept</h4>
                <p className="text-sm text-gray-500">Kies uit een van onze 6 unieke foodtrucks of laat ons een mix voorstellen.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center shrink-0">
                <span className="text-gold font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Details & Planning</h4>
                <p className="text-sm text-gray-500">Geef ons door voor hoeveel personen je catering zoekt en op welke datum.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center shrink-0">
                <span className="text-gold font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Vrijblijvende Offerte</h4>
                <p className="text-sm text-gray-500">Binnen 24 uur ontvang je een gedetailleerd voorstel in je inbox.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-charcoal p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Naam</label>
                <input required type="text" className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none transition-all" placeholder="Jouw naam" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Email</label>
                <input required type="email" className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none transition-all" placeholder="info@bedrijf.nl" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Datum Evenement</label>
                <div className="relative">
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input required type="date" className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Aantal Gasten</label>
                <div className="relative">
                  <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <select className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none appearance-none transition-all">
                    <option>25 - 50 personen</option>
                    <option>50 - 150 personen</option>
                    <option>150 - 500 personen</option>
                    <option>500+ personen</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Type Evenement</label>
                <div className="relative">
                  <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <select className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none appearance-none transition-all">
                    <option>Bruiloft</option>
                    <option>Bedrijfsfeest</option>
                    <option>Privé Feest</option>
                    <option>Festival / Publiek</option>
                    <option>Anders</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Budget Indicatie</label>
                <div className="relative">
                  <DollarSign className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <select className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none appearance-none transition-all">
                    <option>€1.000 - €2.500</option>
                    <option>€2.500 - €5.000</option>
                    <option>€5.000 - €10.000</option>
                    <option>€10.000+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold font-bold">Selecteer Concept(en)</label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {CONCEPTS.map(c => (
                  <label key={c.id} className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-gold bg-dark border-white/10 rounded" />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{c.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold font-bold">Bericht / Speciale Wensen</label>
              <textarea rows={4} className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none transition-all" placeholder="Vertel ons meer over je visie..."></textarea>
            </div>

            <button type="submit" className="w-full bg-gold text-dark font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-white transition-all transform hover:scale-[1.02] shadow-xl">
              Verstuur Aanvraag
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
