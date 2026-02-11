
import React, { useState } from 'react';
import { CONCEPTS } from '../constants';
import { Send, Calendar, Users, Briefcase, DollarSign, CheckCircle } from 'lucide-react';

// Web3Forms Access Key - zelfde als Contact pagina
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '25 - 50 personen',
    eventType: 'Bruiloft',
    budget: '€1.000 - €2.500',
    concepts: [] as string[],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConceptChange = (conceptId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      concepts: checked
        ? [...prev.concepts, conceptId]
        : prev.concepts.filter(id => id !== conceptId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Web3Forms - Werkt automatisch, geen configuratie nodig (behalve access key)
      if (WEB3FORMS_ACCESS_KEY) {
        const conceptsText = formData.concepts.length > 0
          ? formData.concepts.join(', ')
          : 'Geen specifieke concepten geselecteerd';

        const message = `
Boekingsaanvraag van streetfoodcollective.nl

Naam: ${formData.name}
E-mail: ${formData.email}
Datum evenement: ${formData.date}
Aantal gasten: ${formData.guests}
Type evenement: ${formData.eventType}
Budget indicatie: ${formData.budget}
Geselecteerde concepten: ${conceptsText}

Bericht / Speciale wensen:
${formData.message || 'Geen bericht opgegeven'}
        `.trim();

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `Boekingsaanvraag: ${formData.eventType} op ${formData.date}`,
            from_name: formData.name,
            from_email: formData.email,
            message: message,
            to_email: 'info@streetfoodcollective.nl'
          })
        });

        const result = await response.json();

        if (result.success) {
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            date: '',
            guests: '25 - 50 personen',
            eventType: 'Bruiloft',
            budget: '€1.000 - €2.500',
            concepts: [],
            message: ''
          });
        } else {
          throw new Error(result.message || 'Verzenden mislukt');
        }
      } else {
        // Fallback: Netlify Forms
        const netlifyPayload = {
          'form-name': 'booking',
          name: formData.name,
          email: formData.email,
          date: formData.date,
          guests: formData.guests,
          eventType: formData.eventType,
          budget: formData.budget,
          concepts: formData.concepts.join(', '),
          message: formData.message,
          'bot-field': ''
        };

        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(netlifyPayload).toString()
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            date: '',
            guests: '25 - 50 personen',
            eventType: 'Bruiloft',
            budget: '€1.000 - €2.500',
            concepts: [],
            message: ''
          });
        } else {
          throw new Error('Verzenden mislukt');
        }
      }
    } catch (err) {
      console.error('Verzenden mislukt:', err);
      setError('Er is iets misgegaan bij het verzenden. Probeer het opnieuw of stuur direct een e-mail naar info@streetfoodcollective.nl');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle className="text-dark" size={32} />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4">Bedankt voor je aanvraag!</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We hebben je gegevens ontvangen en nemen binnen 24 uur contact met je op om de culinaire mogelijkheden te bespreken.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="text-gold uppercase tracking-widest text-sm font-bold border-b border-gold pb-1 hover:text-white transition-colors"
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
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Naam</label>
                <input 
                  required 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none transition-all text-white" 
                  placeholder="Jouw naam" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Email</label>
                <input 
                  required 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none transition-all text-white" 
                  placeholder="info@bedrijf.nl" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Datum Evenement</label>
                <div className="relative">
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                  <input 
                    required 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none transition-all text-white pr-12" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gold font-bold">Aantal Gasten</label>
                <div className="relative">
                  <Users className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none appearance-none transition-all text-white pr-12"
                  >
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
                  <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                  <select 
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none appearance-none transition-all text-white pr-12"
                  >
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
                  <DollarSign className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none appearance-none transition-all text-white pr-12"
                  >
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
                    <input 
                      type="checkbox" 
                      checked={formData.concepts.includes(c.id)}
                      onChange={(e) => handleConceptChange(c.id, e.target.checked)}
                      className="w-5 h-5 accent-gold bg-dark border-white/10 rounded" 
                    />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{c.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold font-bold">Bericht / Speciale Wensen</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 focus:border-gold outline-none transition-all text-white resize-none" 
                placeholder="Vertel ons meer over je visie..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gold text-dark font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-white transition-all transform hover:scale-[1.02] shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin"></div>
                  <span>Verzenden...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Verstuur Aanvraag</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
