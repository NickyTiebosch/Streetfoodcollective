import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { CONCEPTS } from '../constants';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-charcoal border-t border-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 
            onClick={() => handleNav('/')}
            className="text-xl font-serif font-bold mb-6 cursor-pointer"
          >
            STREET FOOD <span className="text-gold">COLLECTIVE</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Wij brengen de beste streetfood concepten naar jouw evenement. Van intieme bruiloften tot grootschalige festivals.
          </p>
          <div className="flex space-x-4">
            <Instagram className="text-gold hover:text-white cursor-pointer transition-colors" size={20} />
            <Facebook className="text-gold hover:text-white cursor-pointer transition-colors" size={20} />
          </div>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-6">Navigatie</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li onClick={() => handleNav('/')} className="hover:text-gold cursor-pointer transition-colors">Home</li>
            <li onClick={() => handleNav('/over-ons')} className="hover:text-gold cursor-pointer transition-colors">Over Ons</li>
            <li onClick={() => handleNav('/foodtrucks')} className="hover:text-gold cursor-pointer transition-colors">Foodtrucks</li>
            <li onClick={() => handleNav('/experience')} className="hover:text-gold cursor-pointer transition-colors">Experience</li>
            <li onClick={() => handleNav('/partners')} className="hover:text-gold cursor-pointer transition-colors">Partner Worden</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-6">Onze Concepten</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {CONCEPTS.map((concept) => (
              <li 
                key={concept.id}
                onClick={() => handleNav(`/foodtrucks/${concept.id}`)}
                className="hover:text-gold cursor-pointer transition-colors"
              >
                {concept.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-gold" />
              <span>info@streetfoodcollective.nl</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={16} className="text-gold" />
              <span>Den Bosch / Utrecht</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-gold" />
              <span>+31 (0) 6 123 456 78</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
        <span>&copy; 2024 Street Food Collective. All Rights Reserved.</span>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-gold cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;