import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ShimmerButton } from './ui/shimmer-button';
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-gold/20'
            : 'bg-gradient-to-b from-white/80 to-transparent'
        )}
        style={{
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : undefined,
          backdropFilter: isScrolled ? 'blur(16px)' : undefined,
        }}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between min-h-[64px]">
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
            <ShimmerButton asChild>
              <a href="#contact" className="text-center w-full sm:w-auto">Kapcsolat</a>
            </ShimmerButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-deepBlue p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü megnyitása"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/90 backdrop-blur-xl shadow-lg border-b border-gold/20"
              style={{
                WebkitBackdropFilter: 'blur(16px)',
                backdropFilter: 'blur(16px)',
              }}
            >
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
                <ShimmerButton asChild>
                  <a
                    href="#contact"
                    className="text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Kapcsolat
                  </a>
                </ShimmerButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
