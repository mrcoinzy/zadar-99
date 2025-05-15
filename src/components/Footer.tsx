
import React from 'react';
import { Facebook, Instagram, Twitter, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deepBlue text-white pt-16 pb-8 relative">
      {/* Top border instead of wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-montserrat font-bold">
                <span className="text-gold">Villa</span> Zadar
              </span>
            </div>
            <p className="mb-6 text-white/80">
              Exkluzív apartmanok a horvát tengerparton, ahol minden részlet rólad szól.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-gold/20 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gold/20 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gold/20 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Linkek</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="hover:text-gold transition-colors">Főoldal</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold transition-colors">Vélemények</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Szolgáltatások</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-gold transition-colors">Élmények</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">Kapcsolat</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Elérhetőségek</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gold" />
                <span>Zadar, Horvátország</span>
              </li>
              <li>
                <a href="tel:+36301234567" className="hover:text-gold transition-colors">
                  +36 30 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@villazadar.com" className="hover:text-gold transition-colors">
                  info@villazadar.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Hírlevél</h3>
            <p className="mb-4 text-white/80">
              Iratkozz fel hírlevelünkre a legújabb ajánlatokért és tippekért!
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email címed"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gold text-deepBlue font-bold rounded-lg hover:bg-white transition-colors"
              >
                Feliratkozás
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Villa Zadar. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
