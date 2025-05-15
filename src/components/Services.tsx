
import React from 'react';
import { 
  Car, Users, Utensils, CloudSun, Waves, 
  Heart, Wifi, Key, Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badgeText: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, badgeText, className }: ServiceCardProps) => (
  <div className={cn(
    'fancy-card relative group overflow-hidden h-full',
    className
  )}>
    <div className="absolute top-0 right-0 w-full h-full bg-gradient-sea opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
    <div className="text-deepBlue p-2 rounded-full bg-white shadow-blue w-fit mb-3 sm:mb-4 group-hover:animate-pulse">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-deepBlue mb-2 sm:mb-3">{title}</h3>
    <p className="mb-6 text-sm sm:text-base text-gray-700">{description}</p>
    <div className="absolute bottom-4 right-4 bg-gold text-customBlack text-xs py-1 px-3 rounded-full font-bold">
      {badgeText}
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Car className="w-5 h-5 sm:w-6 sm:h-6 text-deepBlue" />,
      title: "Saját zárt parkoló",
      description: "Biztonságos, privát parkoló minden vendégünknek, extra költség nélkül.",
      badgeText: "INGYENES"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-deepBlue" />,
      title: "Gyerekbarát kialakítás",
      description: "Speciális felszerelés kisbabáknak, játszótér és szórakozás a gyerekeknek.",
      badgeText: "CSALÁDOKNAK"
    },
    {
      icon: <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-deepBlue" />,
      title: "Gasztronómiai élmények",
      description: "Egyedi gasztronómiai ajánlások, akár speciális étrenddel érkezőknek is.",
      badgeText: "SZEMÉLYRE SZABOTT"
    },
    {
      icon: <CloudSun className="w-5 h-5 sm:w-6 sm:h-6 text-deepBlue" />,
      title: "Időjárás-garancia",
      description: "Ha esős napokat fogsz ki, ajándék éjszakával kompenzálunk.",
      badgeText: "GARANCIA"
    },
    {
      icon: <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-deepBlue" />,
      title: "Privát partszakasz",
      description: "Csak vendégeink számára fenntartott tengerparti terület, nyugodt pihenéssel.",
      badgeText: "EXKLUZÍV"
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-deepBlue" />,
      title: "Romantikus élmények",
      description: "Nászutasoknak és pároknak különleges szolgáltatásokkal kedveskedünk.",
      badgeText: "PÁROKNAK"
    },
    {
      icon: <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-deepBlue" />,
      title: "Ultra-gyors WiFi",
      description: "Stabil, gyors internet a teljes területen, hogy mindig kapcsolatban maradhass.",
      badgeText: "TECHNIKA"
    },
    {
      icon: <Key className="w-5 h-5 sm:w-6 sm:h-6 text-deepBlue" />,
      title: "Okos apartmanok",
      description: "Digitális zár, okos világítás és légkondicionálás minden szobában.",
      badgeText: "MODERN"
    },
    {
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-deepBlue" />,
      title: "Rugalmas foglalás",
      description: "Változtatható, lemondható foglalások külön díj nélkül, amikor csak szükséges.",
      badgeText: "KÉNYELMES"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-sandBeige-light relative">
      {/* Background blobs */}
      <div className="blob w-[30vw] h-[30vw] top-[-5%] right-[15%] bg-deepBlue/5"></div>
      <div className="blob w-[25vw] h-[25vw] bottom-[10%] left-[10%] bg-gold/5"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deepBlue mb-3 sm:mb-4">
            Minden, ami egy <span className="gradient-text">tökéletes</span> nyaraláshoz kell
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Szolgáltatásaink személyre szabottak, minden igényre van megoldásunk.
            Válaszd ki, mi a legfontosabb neked.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              badgeText={service.badgeText}
            />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <a href="#contact" className="gold-button inline-block text-sm sm:text-base">
            Írd meg, mi a legfontosabb – az ajánlatunkat teljesen rád szabjuk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
