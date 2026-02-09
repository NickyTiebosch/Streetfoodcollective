
import React from 'react';
import { Camera, Music, Heart, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">The <span className="text-gold italic">Experience</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Wij creëren geen catering.
Wij creëren ervaringen.
Van de eerste geur tot de laatste hap, van de chaos van een festival tot de finesse van een private gathering – alles klopt.

Rauw, ongefilterd en vol energie, maar met high-end precisie.
Dit is streetfood met attitude. Voor mensen die durven.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="space-y-8">
            <img src="https://i.imgur.com/KLczhQk.png" className="rounded-2xl w-full h-[300px] object-cover" alt="Vibe 1" />
            <img src="https://i.imgur.com/rh7Bk0m.png" className="rounded-2xl w-full h-[500px] object-cover" alt="Vibe 2" />
          </div>
          <div className="space-y-8 md:pt-16">
            <img src="https://i.imgur.com/fX0LnSF.png" className="rounded-2xl w-full h-[500px] object-cover" alt="Vibe 3" />
            <img src="https://i.imgur.com/o41A3U3.png" className="rounded-2xl w-full h-[300px] object-cover" alt="Vibe 4" />
          </div>
          <div className="space-y-8">
            <img src="https://i.imgur.com/nR9dbfA.png" className="rounded-2xl w-full h-[300px] object-cover" alt="Vibe 5" />
            <img src="https://i.imgur.com/HDFSzHN.png" className="rounded-2xl w-full h-[500px] object-cover" alt="Vibe 6" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div>
            <Camera className="text-gold mx-auto mb-6" size={32} />
            <h4 className="font-bold uppercase tracking-widest mb-2">Visuele Impact</h4>
            <p className="text-gray-500 text-sm">Onze trucks zijn dé eyecatcher op elk terrein.</p>
          </div>
          <div>
            <Music className="text-gold mx-auto mb-6" size={32} />
            <h4 className="font-bold uppercase tracking-widest mb-2">Sfeer & Muziek</h4>
            <p className="text-gray-500 text-sm">Wij brengen onze eigen sound-systems mee voor de juiste vibe.</p>
          </div>
          <div>
            <Heart className="text-gold mx-auto mb-6" size={32} />
            <h4 className="font-bold uppercase tracking-widest mb-2">Passie</h4>
            <p className="text-gray-500 text-sm">Chefs die van hun ambacht houden en dat uitstralen.</p>
          </div>
          <div>
            <Zap className="text-gold mx-auto mb-6" size={32} />
            <h4 className="font-bold uppercase tracking-widest mb-2">Dynamiek</h4>
            <p className="text-gray-500 text-sm">Snelle service zonder in te leveren op kwaliteit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
