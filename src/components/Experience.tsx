import React from 'react';
import { ShimmerButton } from './ui/shimmer-button';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="blob w-[40vw] h-[40vw] top-[-10%] left-[-10%] bg-sandBeige/20"></div>
      <div className="blob w-[30vw] h-[30vw] bottom-[-5%] right-[5%] bg-deepBlue/10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deepBlue mb-3 sm:mb-4">
            Képzeld el a <span className="gradient-text">tökéletes</span> pihenést
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Mit szólnál egy teljesen személyre szabott élményhez, ahol minden rólad szól?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-deepBlue mb-3 sm:mb-4">Reggeli a teraszon</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Képzeld el: reggel a teraszodon ülve, a tenger illatával, pontosan olyan reggelit kapsz, 
              amilyet előre megbeszéltünk veled. Friss péksütemény, helyi specialitások, és persze 
              a tökéletes kávé, úgy, ahogy szereted.
            </p>
            <div className="bg-sandBeige p-3 sm:p-4 rounded-xl shadow-blue inline-block max-w-full">
              <p className="text-deepBlue font-medium italic text-sm sm:text-base">
                "A reggelink a teraszon mindent jelentett. A kilátás, a nyugalom, a személyes 
                figyelem... Tökéletes kezdete volt minden napunknak."
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-float">
            <img
              src="https://images.unsplash.com/photo-1482275548304-a58859dc31b7?auto=format&fit=crop&q=80"
              alt="Reggeli a teraszon"
              className="w-full h-auto object-cover rounded-3xl transform transition-transform duration-700 hover:scale-105"
              style={{ maxHeight: '400px', minHeight: '250px', objectPosition: 'center' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-16">
          <div className="rounded-3xl overflow-hidden shadow-float">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
              alt="Felfedezés és élmények"
              className="w-full h-auto object-cover rounded-3xl transform transition-transform duration-700 hover:scale-105"
              style={{ maxHeight: '400px', minHeight: '250px', objectPosition: 'center' }}
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-deepBlue mb-3 sm:mb-4">Felfedezés és élmények</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Napközben felfedezheted Zadar óvárosát, helyi borokat kóstolhatsz, 
              a legjobb éttermekben ehetsz - mindezt a mi személyes ajánlásainkkal. 
              Segítünk megtervezni minden napot, hogy a legtöbbet hozd ki a nyaralásodból.
            </p>
            <div className="bg-sandBeige p-3 sm:p-4 rounded-xl shadow-blue inline-block max-w-full">
              <p className="text-deepBlue font-medium italic text-sm sm:text-base">
                "A privát városnézés és borkóstoló, amit ajánlottak, az utazásunk fénypontja volt. 
                Olyan helyekre jutottunk el, amiket turisták ritkán látnak."
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-deepBlue mb-3 sm:mb-4">Varázslatos esték</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Este a saját teraszodon, pezsgővel lazíthatsz a jacuzziban. Amikor elcsendesedik minden, 
              csak a hullámok hangja van veled – te döntöd el, mi legyen a következő kaland: 
              naplemente a parton, privát vacsora vagy egy exkluzív masszázs a szobában.
            </p>
            <div className="bg-sandBeige p-3 sm:p-4 rounded-xl shadow-blue inline-block max-w-full">
              <p className="text-deepBlue font-medium italic text-sm sm:text-base">
                "A parti naplementés vacsora, amit szerveztek nekünk, életünk egyik legromantikusabb 
                élménye volt. Sosem fogom elfelejteni."
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-float">
            <img
              src="https://images.unsplash.com/photo-1528156739598-89a2b3a2c153?auto=format&fit=crop&q=80"
              alt="Varázslatos esték"
              className="w-full h-auto object-cover rounded-3xl transform transition-transform duration-700 hover:scale-105"
              style={{ maxHeight: '400px', minHeight: '250px', objectPosition: 'center' }}
            />
          </div>
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <ShimmerButton asChild>
            <a href="#contact" className="inline-block text-sm sm:text-base text-black">Írd le, hogyan nézne ki az álomnyaralásod – megvalósítjuk!</a>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
};

export default Experience;
