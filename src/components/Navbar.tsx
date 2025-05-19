
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ShimmerButton } from './ui/shimmer-button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom'; 
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Egyszerű görgetés figyelés
  useEffect(() => {
    const checkScrollPosition = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Kezdeti ellenőrzés
    checkScrollPosition();
    
    // Eseménykezelő hozzáadása
    window.addEventListener('scroll', checkScrollPosition);
    
    // Tisztítás
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);
  
  // Oldal tetejére görgetés az új útvonalra lépéskor - használjuk a useLayoutEffect-et
  useLayoutEffect(() => {
    // Azonnali görgetés a tetejére
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Extra biztosíték
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gold/30'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between min-h-[70px]">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-montserrat font-bold relative">
              <span className="text-deepBlue">Villa</span>
              <span className="text-gold relative ml-1 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gold/50">Zadar</span>
            </span>
          </Link>

          {/* Desktop Menu - Redesigned with NavigationMenu from shadcn */}
          <div className="hidden md:flex items-center">
            <NavigationMenu className="mr-6">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#hero" 
                    className={cn(
                      "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      "text-deepBlue hover:bg-gold/10 hover:text-gold"
                    )}
                  >
                    Főoldal
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-deepBlue hover:bg-gold/10 hover:text-gold">Felfedezés</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <NavigationMenuLink 
                          href="#testimonials"
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                            "hover:bg-gold/10 hover:text-gold"
                          )}
                        >
                          <div className="text-sm font-medium text-deepBlue">Vélemények</div>
                          <div className="text-xs text-muted-foreground">Vendégeink élményei</div>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#services"
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                            "hover:bg-gold/10 hover:text-gold"
                          )}
                        >
                          <div className="text-sm font-medium text-deepBlue">Szolgáltatások</div>
                          <div className="text-xs text-muted-foreground">Amit kínálunk</div>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink 
                          href="#experience"
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                            "hover:bg-gold/10 hover:text-gold"
                          )}
                        >
                          <div className="text-sm font-medium text-deepBlue">Élmények</div>
                          <div className="text-xs text-muted-foreground">Különleges pillanatok</div>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <ShimmerButton asChild className="bg-gradient-to-r from-gold to-deepBlue border-none">
              <a href="#contact" className="text-center w-full sm:w-auto px-6">Kapcsolat</a>
            </ShimmerButton>
          </div>

          {/* Mobile Menu Button - Animated */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-deepBlue z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü megnyitása"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu - Reimagined with better animations */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/90 backdrop-blur-xl border-b border-gold/20"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <a
                    href="#hero"
                    className="block w-full text-deepBlue font-medium py-3 px-4 rounded-lg transition-colors hover:bg-gold/10 hover:text-gold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Főoldal
                  </a>
                </motion.div>
                
                {/* Mobile Accordion */}
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="border border-gold/10 rounded-lg overflow-hidden"
                >
                  <div className="w-full flex justify-between items-center p-4 text-deepBlue font-medium">
                    <span>Felfedezés</span>
                    <ChevronDown size={18} className="text-gold" />
                  </div>
                  
                  <div className="bg-gold/5 py-2">
                    <a
                      href="#testimonials"
                      className="block w-full text-deepBlue py-2 px-6 transition-colors hover:bg-gold/10 hover:text-gold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Vélemények
                    </a>
                    <a
                      href="#services"
                      className="block w-full text-deepBlue py-2 px-6 transition-colors hover:bg-gold/10 hover:text-gold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Szolgáltatások
                    </a>
                    <a
                      href="#experience"
                      className="block w-full text-deepBlue py-2 px-6 transition-colors hover:bg-gold/10 hover:text-gold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Élmények
                    </a>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4"
                >
                  <ShimmerButton 
                    asChild
                    className="w-full bg-gradient-to-r from-gold to-deepBlue border-none"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <a href="#contact" className="text-center w-full">Kapcsolat</a>
                  </ShimmerButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
