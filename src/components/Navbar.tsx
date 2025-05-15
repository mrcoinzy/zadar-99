
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-montserrat font-bold text-deepBlue">
            <span className="text-gold">Villa</span> Zadar
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="text-deepBlue hover:text-gold transition-colors font-medium">
            Főoldal
          </a>
          <a href="#testimonials" className="text-deepBlue hover:text-gold transition-colors font-medium">
            Vélemények
          </a>
          <a href="#services" className="text-deepBlue hover:text-gold transition-colors font-medium">
            Szolgáltatások
          </a>
          <a href="#experience" className="text-deepBlue hover:text-gold transition-colors font-medium">
            Élmények
          </a>
          <a href="#contact" className="gold-button">
            Kapcsolat
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-deepBlue p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#hero"
              className="text-deepBlue hover:text-gold transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Főoldal
            </a>
            <a
              href="#testimonials"
              className="text-deepBlue hover:text-gold transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vélemények
            </a>
            <a
              href="#services"
              className="text-deepBlue hover:text-gold transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Szolgáltatások
            </a>
            <a
              href="#experience"
              className="text-deepBlue hover:text-gold transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Élmények
            </a>
            <a
              href="#contact"
              className="gold-button text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kapcsolat
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
