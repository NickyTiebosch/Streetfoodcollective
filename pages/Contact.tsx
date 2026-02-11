
import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

// Web3Forms Access Key - Haal deze op via https://web3forms.com/
// 1. Ga naar https://web3forms.com/
// 2. Verifieer je e-mail: info@streetfoodcollective.nl
// 3. Kopieer je Access Key en plak deze hieronder
// De key kan publiek zijn - dat is veilig!
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Web3Forms - Werkt automatisch, geen configuratie nodig (behalve access key)
      if (WEB3FORMS_ACCESS_KEY) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: formData.subject || 'Contactformulier Streetfood Collective',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || 'Niet opgegeven',
            message: formData.message,
            // Stuur direct naar info@streetfoodcollective.nl
            to_email: 'info@streetfoodcollective.nl'
          })
        });

        const result = await response.json();

        if (result.success) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
          setIsSubmitting(false);
          return;
        } else {
          throw new Error(result.message || 'Verzenden mislukt');
        }
      }

      // Fallback: Netlify Forms (werkt alleen op live Netlify site)
      const netlifyPayload = {
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        subject: formData.subject || 'Contactformulier Streetfood Collective',
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
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
        setIsSubmitting(false);
        return;
      }

      // Laatste fallback: mailto
      throw new Error('E-mailservice niet geconfigureerd');

    } catch (err) {
      console.error('Verzenden mislukt:', err);
      
      // Fallback: mailto naar info@streetfoodcollective.nl
      const subject = encodeURIComponent(formData.subject || 'Contactformulier Streetfood Collective');
      const body = encodeURIComponent(
        `Naam: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telefoon: ${formData.phone || 'Niet opgegeven'}\n\n` +
        `Bericht:\n${formData.message}`
      );
      
      if (!WEB3FORMS_ACCESS_KEY) {
        setError('E-mailservice niet geconfigureerd. Je e-mailclient wordt geopend. Voeg VITE_WEB3FORMS_ACCESS_KEY toe aan .env.local (zie instructies in code).');
      } else {
        setError('Er is iets misgegaan. Je e-mailclient wordt geopend als fallback.');
      }
      
      window.location.href = `mailto:info@streetfoodcollective.nl?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Contacteer <span className="text-gold italic">Ons</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Vragen, suggesties of gewoon even kletsen over de culinaire invulling van je volgende event? We staan voor je klaar.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="bg-charcoal/50 border border-white/5 rounded-[40px] p-12 backdrop-blur-xl">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">Stuur een bericht</h2>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-gold/10 border border-gold/30 rounded-lg flex items-center space-x-3 text-gold">
                <CheckCircle size={20} />
                <span>Bedankt! Je bericht is verzonden. We nemen zo snel mogelijk contact met je op.</span>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest font-bold mb-3 text-gray-400">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-dark border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-all"
                    placeholder="Jouw naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest font-bold mb-3 text-gray-400">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-dark border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-all"
                    placeholder="jouw@email.nl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-widest font-bold mb-3 text-gray-400">
                    Telefoon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-dark border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-all"
                    placeholder="+31 6 123 456 78"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm uppercase tracking-widest font-bold mb-3 text-gray-400">
                    Onderwerp *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-dark border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-all"
                  >
                    <option value="">Selecteer onderwerp</option>
                    <option value="Offerte aanvraag">Offerte aanvraag</option>
                    <option value="Algemene vraag">Algemene vraag</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Anders">Anders</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-widest font-bold mb-3 text-gray-400">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-dark border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-all resize-none"
                  placeholder="Vertel ons over je event, vragen of ideeën..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-dark py-6 rounded-full font-black uppercase tracking-[0.3em] text-sm hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl shadow-gold/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin"></div>
                    <span>Verzenden...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Verstuur aanvraag</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="bg-charcoal p-10 rounded-3xl border border-white/5 text-center group hover:border-gold/30 transition-all">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold transition-all">
              <Mail className="text-gold group-hover:text-dark" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Mail Ons</h3>
            <p className="text-gray-400 mb-6 text-sm">Voor al je algemene vragen en offertes.</p>
            <a href="mailto:info@streetfoodcollective.nl" className="text-gold font-bold hover:text-white transition-colors">info@streetfoodcollective.nl</a>
          </div>

          <div className="bg-charcoal p-10 rounded-3xl border border-white/5 text-center group hover:border-gold/30 transition-all">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold transition-all">
              <Phone className="text-gold group-hover:text-dark" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">Bel Ons</h3>
            <p className="text-gray-400 mb-6 text-sm">Liever direct iemand aan de lijn? Ma t/m Vr 09:00 - 18:00.</p>
            <a href="tel:+31612345678" className="text-gold font-bold hover:text-white transition-colors">+31 (0) 6 123 456 78</a>
          </div>

          <div className="bg-charcoal p-10 rounded-3xl border border-white/5 text-center group hover:border-gold/30 transition-all">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-gold transition-all">
              <MessageCircle className="text-gold group-hover:text-dark" size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">WhatsApp</h3>
            <p className="text-gray-400 mb-6 text-sm">Snel een vraag stellen via WhatsApp.</p>
            <span className="text-gold font-bold hover:text-white transition-colors cursor-pointer">Stuur een bericht</span>
          </div>
        </div>

        <div className="mt-32 h-[400px] w-full rounded-3xl overflow-hidden grayscale border border-white/5">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1500" className="w-full h-full object-cover" alt="Map placeholder" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
