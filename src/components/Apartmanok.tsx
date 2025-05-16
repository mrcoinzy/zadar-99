import React, { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { RevealOnScroll } from './ui/RevealOnScroll';
import { Bed, Bath, Home, ParkingSquare, Sun, Utensils, Wifi, KeyRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const apartmanok = [
  {
    id: 1,
    slug: 'adria-deluxe',
    name: 'Adria Deluxe',
    image: '/placeholder.svg',
    short: 'Tágas, tengerre néző luxus apartman, saját jacuzzival és napozóterasszal.',
    details: '2 hálószoba, 2 fürdő, prémium konyha, közvetlen tengerparti kilátás, okosotthon rendszer, privát parkoló.',
    features: [
      { icon: Home, text: '2 hálószoba' },
      { icon: Bath, text: '2 fürdő' },
      { icon: Utensils, text: 'Prémium konyha' },
      { icon: ParkingSquare, text: 'Privát parkoló' },
      { icon: Sun, text: 'Közvetlen tengerparti kilátás' },
      { icon: Wifi, text: 'Okosotthon rendszer' }
    ]
  },
  {
    id: 2,
    slug: 'sunset-loft',
    name: 'Sunset Loft',
    image: '/placeholder.svg',
    short: 'Modern, panorámás apartman, naplemente terasszal és designer bútorokkal.',
    details: '1 hálószoba, 1 fürdő, amerikai konyha, óriási üvegfal, smart TV, közvetlen strandkapcsolat.',
    features: [
      { icon: Home, text: '1 hálószoba' },
      { icon: Bath, text: '1 fürdő' },
      { icon: Utensils, text: 'Amerikai konyha' },
      { icon: Sun, text: 'Közvetlen strandkapcsolat' },
      { icon: Wifi, text: 'Smart TV' }
    ]
  },
  {
    id: 3,
    slug: 'mediterran-garden',
    name: 'Mediterrán Garden',
    image: '/images/elso_apartman.png',
    short: 'Hangulatos kertkapcsolatos apartman, mediterrán növényekkel és grillterasszal.',
    details: '2 hálószoba, 1 fürdő, teljesen felszerelt konyha, privát kert, kültéri étkező.',
    features: [
      { icon: Home, text: '2 hálószoba' },
      { icon: Bath, text: '1 fürdő' },
      { icon: Utensils, text: 'Teljesen felszerelt konyha' },
      { icon: ParkingSquare, text: 'Privát kert' },
      { icon: Utensils, text: 'Kültéri étkező' }
    ]
  }
];

const swipeConfidenceThreshold = 100;

export const Apartmanok = () => {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState<number[]>([]);
  const [showInfo, setShowInfo] = useState(false);
  const controls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const apartman = apartmanok[index];

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > swipeConfidenceThreshold) {
      setLiked([...liked, apartman.id]);
      setShowInfo(false);
      navigate(`/apartman/${apartman.slug}`);
    } else if (info.offset.x < -swipeConfidenceThreshold) {
      setShowInfo(false);
      setIndex((prev) => Math.min(prev + 1, apartmanok.length - 1));
    } else {
      controls.start({ x: 0, y: 0 });
    }
  };

  const handleTap = () => {
    setShowInfo((prev) => !prev);
  };

  const handleMouseEnter = () => setShowInfo(true);
  const handleMouseLeave = () => setShowInfo(false);

  return (
    <RevealOnScroll>
      <section id="apartmanok" className="py-12 sm:py-16 md:py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Bal oldali szöveg */}
          <div className="md:w-1/2 max-w-lg mb-8 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deepBlue mb-3 sm:mb-4">
              Találd meg a saját <span className="gradient-text">tengerparti luxusod</span>!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
              Itt nem csak apartmant választasz, hanem élményt – pont olyat, amire mindig is vágytál. Lapozz jobbra, ha szimpatikus egy apartman, vagy balra, ha nem az igazi – csak az marad a listádon, ami igazán tetszik. Pöccintsd meg a képet, vagy vidd rá az egered, hogy azonnal megismerd a részleteket. Minden apartmanunk saját stílussal, egyedi élménnyel és prémium felszereltséggel vár rád. Fedezd fel, válassz, és mi megvalósítjuk a tökéletes nyaralásod!
            </p>
          </div>
          {/* Jobb oldali swipe kártya */}
          <div className="md:w-1/2 flex justify-center items-center min-h-[420px]">
            {apartman ? (
              <motion.div
                ref={cardRef}
                className="relative w-[320px] h-[420px] bg-white rounded-3xl shadow-xl border border-gold/30 overflow-hidden cursor-pointer group"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={controls}
                whileTap={{ scale: 0.97 }}
                onTap={handleTap}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ touchAction: 'pan-x' }}
              >
                <img
                  src={apartman.image}
                  alt={apartman.name}
                  className="w-full h-full object-cover object-center transition-opacity duration-300"
                  draggable={false}
                />
                {/* Overlay info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showInfo ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white p-6"
                  style={{ pointerEvents: showInfo ? 'auto' : 'none' }}
                >
                  <h3 className="text-xl font-bold mb-4 text-center">{apartman.name}</h3>
                  <p className="text-base text-center mb-6 max-w-xs">{apartman.short}</p>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs mb-2">
                    {apartman.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex flex-row items-center bg-white/10 rounded-lg px-3 py-2 w-full">
                        {React.createElement(feature.icon, { size: 22, className: 'text-gold mr-2 flex-shrink-0' })}
                        <span className="text-sm text-left">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                    {apartman.features.slice(3, 6).map((feature, i) => (
                      <div key={i} className="flex flex-row items-center bg-white/10 rounded-lg px-3 py-2 w-full">
                        {React.createElement(feature.icon, { size: 22, className: 'text-gold mr-2 flex-shrink-0' })}
                        <span className="text-sm text-left">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                {/* Like/Nope badge */}
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  {liked.includes(apartman.id) && (
                    <span className="bg-gold text-white px-3 py-1 rounded-full font-bold shadow">Kedvenc</span>
                  )}
                </div>
              </motion.div>
            ) : (
              <div className="w-[320px] h-[420px] flex flex-col items-center justify-center bg-gray-100 rounded-3xl shadow-inner">
                <span className="text-lg font-bold text-gray-400 mb-2">Nincs több apartman</span>
                <span className="text-sm text-gray-400">Frissítsd az oldalt újra a választáshoz!</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}; 