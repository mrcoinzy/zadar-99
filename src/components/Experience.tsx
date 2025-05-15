
import React from 'react';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="blob w-[40vw] h-[40vw] top-[-10%] left-[-10%] bg-sandBeige/20"></div>
      <div className="blob w-[30vw] h-[30vw] bottom-[-5%] right-[5%] bg-deepBlue/10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
            Képzeld el a <span className="gradient-text">tökéletes</span> pihenést
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mit szólnál egy teljesen személyre szabott élményhez, ahol minden rólad szól?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-deepBlue mb-4">Reggeli a teraszon</h3>
            <p className="text-lg mb-6">
              Képzeld el: reggel a teraszodon ülve, a tenger illatával, pontosan olyan reggelit kapsz, 
              amilyet előre megbeszéltünk veled. Friss péksütemény, helyi specialitások, és persze 
              a tökéletes kávé, úgy, ahogy szereted.
            </p>
            <div className="bg-sandBeige p-4 rounded-xl shadow-blue inline-block">
              <p className="text-deepBlue font-medium italic">
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
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
              alt="Felfedezés és élmények"
              className="w-full h-auto object-cover rounded-3xl transform transition-transform duration-700 hover:scale-105"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-deepBlue mb-4">Felfedezés és élmények</h3>
            <p className="text-lg mb-6">
              Napközben felfedezheted Zadar óvárosát, helyi borokat kóstolhatsz, 
              a legjobb éttermekben ehetsz - mindezt a mi személyes ajánlásainkkal. 
              Segítünk megtervezni minden napot, hogy a legtöbbet hozd ki a nyaralásodból.
            </p>
            <div className="bg-sandBeige p-4 rounded-xl shadow-blue inline-block">
              <p className="text-deepBlue font-medium italic">
                "A privát városnézés és borkóstoló, amit ajánlottak, az utazásunk fénypontja volt. 
                Olyan helyekre jutottunk el, amiket turisták ritkán látnak."
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-deepBlue mb-4">Varázslatos esték</h3>
            <p className="text-lg mb-6">
              Este a saját teraszodon, pezsgővel lazíthatsz a jacuzziban. Amikor elcsendesedik minden, 
              csak a hullámok hangja van veled – te döntöd el, mi legyen a következő kaland: 
              naplemente a parton, privát vacsora vagy egy exkluzív masszázs a szobában.
            </p>
            <div className="bg-sandBeige p-4 rounded-xl shadow-blue inline-block">
              <p className="text-deepBlue font-medium italic">
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
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="gold-button inline-block">
            Írd le, hogyan nézne ki az álomnyaralásod – megvalósítjuk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
