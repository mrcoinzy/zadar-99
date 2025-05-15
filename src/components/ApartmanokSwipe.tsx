import React, { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Bed, Bath, Home, ParkingSquare, Sun, Utensils, Wifi, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    name: 'Sunset Loft',
    image: '/placeholder.svg',
    short: 'Modern, panorámás apartman, naplemente terasszal és designer bútorokkal.',
    features: [
      { icon: Home, text: '1 hálószoba' },
      { icon: Bath, text: '1 fürdő' },
      { icon: Utensils, text: 'Amerikai konyha' },
      { icon: Sun, text: 'Panoráma' },
      { icon: Wifi, text: 'Smart TV' },
    ]
  },
  {
    slug: 'mediterran-garden',
    name: 'Mediterrán Garden',
    image: '/placeholder.svg',
    short: 'Hangulatos kertkapcsolatos apartman, mediterrán növényekkel és grillterasszal.',
    features: [
      { icon: Home, text: '2 hálószoba' },
      { icon: Bath, text: '1 fürdő' },
      { icon: Utensils, text: 'Felszerelt konyha' },
      { icon: ParkingSquare, text: 'Privát kert' },
      { icon: Sun, text: 'Grillterasz' },
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
  const [startIndex, setStartIndex] = useState(0);
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const navigate = useNavigate();

  const visibleCount = 3;
  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + visibleCount < filtered.length;

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -60 && canGoRight) {
      setStartIndex((prev) => Math.min(prev + 1, filtered.length - visibleCount));
    } else if (info.offset.x > 60 && canGoLeft) {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    }
    setDragging(false);
  };

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleLeft = () => {
    if (canGoLeft) setStartIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleRight = () => {
    if (canGoRight) setStartIndex((prev) => Math.min(prev + 1, filtered.length - visibleCount));
  };

  const handleCardClick = (slug: string) => {
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deepBlue mb-3 sm:mb-4">
          További <span className="gradient-text">apartmanok</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl text-center">
          Ha még nem találtad meg az igazit, lapozz tovább! Minden apartmanunk egyedi élményt nyújt, prémium felszereltséggel.
        </p>
        <div className="text-center text-sm text-gray-500 mb-4">
          <p>Csúsztass balra vagy jobbra az apartmanok között, vagy használd a nyilakat!</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleLeft}
            disabled={!canGoLeft}
            className={`rounded-full p-2 bg-gold/80 hover:bg-gold transition disabled:opacity-30 disabled:cursor-not-allowed shadow-lg`}
            aria-label="Előző apartmanok"
          >
            <ChevronLeft size={28} />
          </button>
          <motion.div
            ref={cardRef}
            className="flex gap-6"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            animate={controls}
            style={{ touchAction: 'pan-x', cursor: dragging ? 'grabbing' : 'grab' }}
          >
            {filtered.slice(startIndex, startIndex + visibleCount).map((apartman, idx) => (
              <div
                key={apartman.slug}
                className="w-[320px] h-[420px] bg-white rounded-3xl shadow-xl border border-gold/30 overflow-hidden group transition-all duration-300 flex-shrink-0 cursor-pointer hover:scale-105"
                onClick={() => handleCardClick(apartman.slug)}
              >
                <img
                  src={apartman.image}
                  alt={apartman.name}
                  className="w-full h-2/5 object-cover object-center transition-opacity duration-300"
                  draggable={false}
                />
                <div className="p-6 flex flex-col h-3/5 justify-between">
                  <h3 className="text-xl font-bold text-deepBlue mb-2">{apartman.name}</h3>
                  <p className="text-base text-gray-700 mb-4">{apartman.short}</p>
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
            ))}
          </motion.div>
          <button
            onClick={handleRight}
            disabled={!canGoRight}
            className={`rounded-full p-2 bg-gold/80 hover:bg-gold transition disabled:opacity-30 disabled:cursor-not-allowed shadow-lg`}
            aria-label="Következő apartmanok"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}; 