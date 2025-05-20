
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bed, Bath, Home, ParkingSquare, Sun, Utensils, Wifi, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const apartmanok = [
  {
    slug: 'adria-deluxe',
    name: 'Adria Deluxe',
    image: '/placeholder.svg',
    short: 'Tágas, tengerre néző luxus apartman, saját jacuzzival és napozóterasszal.',
    features: [
      { icon: Home, text: '2 hálószoba' },
      { icon: Bath, text: '2 fürdő' },
      { icon: Utensils, text: 'Prémium konyha' },
      { icon: ParkingSquare, text: 'Privát parkoló' },
      { icon: Sun, text: 'Tengerparti kilátás' },
      { icon: Wifi, text: 'Okosotthon' },
    ]
  },
  {
    slug: 'sunset-loft',
    name: 'Diklo Ivica Apartman',
    image: '/images/elso_apartman.png',
    short: 'Hangulatos kertkapcsolatos apartman, mediterrán növényekkel és grillterasszal.',
    features: [
      { icon: Home, text: '2 hálószoba' },
      { icon: Bath, text: '1 fürdő' },
      { icon: Utensils, text: 'Teljesen felszerelt konyha' },
      { icon: ParkingSquare, text: 'Privát parkoló' },
      { icon: Utensils, text: 'Kültéri étkező' },
    ]
  },
  {
    slug: 'mediterran-garden',
    name: 'Zadar Riviera',
    image: '/lovable-uploads/0160d8b9-488e-4c98-9eb4-793e9a769917.png',
    short: 'Tágas, tengerre néző luxus apartman, saját medencével és napozóterasszal.',
    features: [
      { icon: Home, text: '2 hálószoba' },
      { icon: Bath, text: '1 fürdő' },
      { icon: Utensils, text: 'Teljesen felszerelt konyha' },
      { icon: ParkingSquare, text: 'Ingyenes Privát parkoló' },
    ]
  }
];

// Typescript type definition for the global flag function
declare global {
  interface Window {
    setNavigationFromSwipe?: () => void;
  }
}

export const ApartmanokSwipe = ({ excludeSlug }: { excludeSlug?: string }) => {
  const filtered = apartmanok.filter(a => a.slug !== excludeSlug);
  const navigate = useNavigate();

  const handleCardClick = (slug: string) => {
    // Set the flag so the destination page knows we came from the swipe component
    if (window.setNavigationFromSwipe) {
      window.setNavigationFromSwipe();
    }
    navigate(`/apartman/${slug}`);
  };

  if (filtered.length === 0) {
    return (
      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-bold text-deepBlue mb-2">További apartmanok</h2>
        <p className="text-gray-500">Nincs több apartman a listán. Nézd meg a többi szekciót!</p>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deepBlue mb-3 sm:mb-4 text-center md:text-left">
          További <span className="gradient-text">apartmanok</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl text-center md:text-left">
          Ha még nem találtad meg az igazit, lapozz tovább! Minden apartmanunk egyedi élményt nyújt, prémium felszereltséggel.
        </p>
        
        <div className="w-full max-w-3xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {filtered.map((apartman) => (
                <CarouselItem key={apartman.slug} className="basis-full md:basis-full">
                  <div 
                    className="w-full md:w-[90%] mx-auto bg-white rounded-3xl shadow-xl border border-gold/30 overflow-hidden group transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                    onClick={() => handleCardClick(apartman.slug)}
                  >
                    <img
                      src={apartman.image}
                      alt={apartman.name}
                      className="w-full h-56 object-cover object-center transition-opacity duration-300"
                      draggable={false}
                    />
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-deepBlue mb-2 text-left">{apartman.name}</h3>
                        <p className="text-base text-gray-700 mb-4 text-left">{apartman.short}</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {apartman.features.map((feature, i) => (
                          <div key={i} className="flex flex-row items-center gap-1 text-gold bg-gold/10 rounded px-2 py-1 text-xs">
                            {React.createElement(feature.icon, { size: 16 })}
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative static left-0 -translate-y-0" />
              <CarouselNext className="relative static right-0 -translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
