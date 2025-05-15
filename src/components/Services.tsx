
import React from 'react';
import { 
  Car, Users, Utensils, CloudSun, Waves, 
  Heart, Wifi, Key, Calendar, Search 
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
    <div className="text-deepBlue p-2 rounded-full bg-white shadow-blue w-fit mb-4 group-hover:animate-pulse">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-deepBlue mb-3">{title}</h3>
    <p className="mb-6 text-gray-700">{description}</p>
    <div className="absolute bottom-4 right-4 bg-gold text-customBlack text-xs py-1 px-3 rounded-full font-bold">
      {badgeText}
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6 text-deepBlue" />,
      title: "Saját zárt parkoló",
      description: "Biztonságos, privát parkoló minden vendégünknek, extra költség nélkül.",
      badgeText: "INGYENES"
    },
    {
      icon: <Users className="w-6 h-6 text-deepBlue" />,
      title: "Gyerekbarát kialakítás",
      description: "Speciális felszerelés kisbabáknak, játszótér és szórakozás a gyerekeknek.",
      badgeText: "CSALÁDOKNAK"
    },
    {
      icon: <Utensils className="w-6 h-6 text-deepBlue" />,
      title: "Gasztronómiai élmények",
      description: "Egyedi gasztronómiai ajánlások, akár speciális étrenddel érkezőknek is.",
      badgeText: "SZEMÉLYRE SZABOTT"
    },
    {
      icon: <CloudSun className="w-6 h-6 text-deepBlue" />,
      title: "Időjárás-garancia",
      description: "Ha esős napokat fogsz ki, ajándék éjszakával kompenzálunk.",
      badgeText: "GARANCIA"
    },
    {
      icon: <Waves className="w-6 h-6 text-deepBlue" />,
      title: "Privát partszakasz",
      description: "Csak vendégeink számára fenntartott tengerparti terület, nyugodt pihenéssel.",
      badgeText: "EXKLUZÍV"
    },
    {
      icon: <Heart className="w-6 h-6 text-deepBlue" />,
      title: "Romantikus élmények",
      description: "Nászutasoknak és pároknak különleges szolgáltatásokkal kedveskedünk.",
      badgeText: "PÁROKNAK"
    },
    {
      icon: <Wifi className="w-6 h-6 text-deepBlue" />,
      title: "Ultra-gyors WiFi",
      description: "Stabil, gyors internet a teljes területen, hogy mindig kapcsolatban maradhass.",
      badgeText: "TECHNIKA"
    },
    {
      icon: <Key className="w-6 h-6 text-deepBlue" />,
      title: "Okos apartmanok",
      description: "Digitális zár, okos világítás és légkondicionálás minden szobában.",
      badgeText: "MODERN"
    },
    {
      icon: <Calendar className="w-6 h-6 text-deepBlue" />,
      title: "Rugalmas foglalás",
      description: "Változtatható, lemondható foglalások külön díj nélkül, amikor csak szükséges.",
      badgeText: "KÉNYELMES"
    }
  ];

  return (
    <section id="services" className="py-20 bg-sandBeige-light relative">
      {/* Background blobs */}
      <div className="blob w-[30vw] h-[30vw] top-[-5%] right-[15%] bg-deepBlue/5"></div>
      <div className="blob w-[25vw] h-[25vw] bottom-[10%] left-[10%] bg-gold/5"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
            Minden, ami egy <span className="gradient-text">tökéletes</span> nyaraláshoz kell
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Szolgáltatásaink személyre szabottak, minden igényre van megoldásunk.
            Válaszd ki, mi a legfontosabb neked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="mt-12 text-center">
          <a href="#contact" className="gold-button inline-block">
            Írd meg, mi a legfontosabb – az ajánlatunkat teljesen rád szabjuk!
          </a>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Services;
