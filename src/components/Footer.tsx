import React from 'react';
import { Facebook, Twitter, MapPin, Youtube } from 'lucide-react';

const Footer = () => {
  // Removed the useEffect that was setting document body styles
  
  return (
    <footer className="bg-deepBlue text-white pt-12 sm:pt-16 pb-0 overflow-hidden m-0 border-t-[1px] border-t-gold mt-0 w-full relative">
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="mb-4">
              <span className="text-xl sm:text-2xl font-montserrat font-bold">
                <span className="text-gold">Villa</span> Zadar
              </span>
            </div>
            <p className="mb-6 text-white/80 text-sm sm:text-base">
              Exkluzív apartmanok a horvát tengerparton, ahol minden részlet rólad szól.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/zadarkiadoapartmanokraczattila" className="bg-white/10 hover:bg-gold/20 p-1.5 sm:p-2 rounded-full transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.youtube.com/@zadarszallas/featured" className="bg-white/10 hover:bg-gold/20 p-1.5 sm:p-2 rounded-full transition-colors">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              {/* <a href="#" className="bg-white/10 hover:bg-gold/20 p-1.5 sm:p-2 rounded-full transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a> */}
            </div>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gold mb-3 sm:mb-4">Linkek</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
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
            <h3 className="text-base sm:text-lg font-bold text-gold mb-3 sm:mb-4">Elérhetőségek</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gold flex-shrink-0" />
                <span>Zadar, Horvátország</span>
              </li>
              <li>
                <a href="tel:+36205805343" className="hover:text-gold transition-colors">
                +36 20 580 5343
                </a>
              </li>
              <li>
                <a href="mailto:zadarszallas@gmail.com" className="hover:text-gold transition-colors">
                zadarszallas@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gold mb-3 sm:mb-4">Hírlevél</h3>
            <p className="mb-3 sm:mb-4 text-white/80 text-sm sm:text-base">
              Iratkozz fel hírlevelünkre a legújabb ajánlatokért és tippekért!
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email címed"
                className="w-full px-3 py-2 sm:px-4 sm:py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2 sm:px-4 sm:py-2 bg-gold text-deepBlue font-bold rounded-lg hover:bg-white transition-colors text-sm sm:text-base"
              >
                Feliratkozás
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-white/10 text-center text-white/60 text-xs sm:text-sm pb-6">
          <p>&copy; {new Date().getFullYear()} Villa Zadar. Minden jog fenntartva.</p>
          <p>Készítte az oldalt: <a href="https://ailaszlo.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">AI László</a></p>
        </div>
      </div>
      
      {/* Extra padding to ensure footer extends to bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-deepBlue"></div>
      
      {/* Background extension */}
      <div className="absolute inset-0 -z-10 bg-deepBlue"></div>
    </footer>
  );
};

export default Footer;
