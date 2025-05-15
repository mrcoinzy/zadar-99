
import React from 'react';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      {/* Background blobs */}
      <div className="blob w-[35vw] h-[35vw] top-[10%] right-[-10%] bg-gold/5"></div>
      <div className="blob w-[25vw] h-[25vw] bottom-[10%] left-[5%] bg-deepBlue/5"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
            Lépj <span className="gradient-text">kapcsolatba</span> velünk
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mondd el nekünk, mikor jönnél, kivel, mi a legfontosabb számodra? 
            Személyre szabott ajánlatot készítünk neked.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="fancy-card flex items-start">
              <div className="mr-4 p-2 bg-deepBlue rounded-full">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-deepBlue mb-2">Gyors válasz garantálva</h3>
                <p className="text-gray-700">
                  30 percen belül visszahívunk vagy válaszolunk üzenetedre, 
                  minden részletet átbeszélünk.
                </p>
              </div>
            </div>
            
            <div className="fancy-card flex items-start">
              <div className="mr-4 p-2 bg-deepBlue rounded-full">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-deepBlue mb-2">Chat & Üzenet</h3>
                <p className="text-gray-700">
                  WhatsApp, Messenger vagy e-mail – ahogy neked a legkényelmesebb.
                </p>
                <p className="mt-2">
                  <a href="#" className="text-gold font-medium hover:underline">WhatsApp</a>
                  {' · '}
                  <a href="#" className="text-gold font-medium hover:underline">Messenger</a>
                </p>
              </div>
            </div>
            
            <div className="fancy-card flex items-start">
              <div className="mr-4 p-2 bg-deepBlue rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-deepBlue mb-2">Telefonos egyeztetés</h3>
                <p className="text-gray-700">
                  Hívj minket közvetlenül, vagy kérj visszahívást a számodra megfelelő időpontban.
                </p>
                <p className="mt-2">
                  <a href="tel:+36301234567" className="text-gold font-medium hover:underline">+36 30 123 4567</a>
                </p>
              </div>
            </div>
            
            <div className="fancy-card flex items-start">
              <div className="mr-4 p-2 bg-deepBlue rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-deepBlue mb-2">E-mail</h3>
                <p className="text-gray-700">
                  Küldj nekünk részletes levelet, és mi ugyanolyan részletességgel válaszolunk.
                </p>
                <p className="mt-2">
                  <a href="mailto:info@villazadar.com" className="text-gold font-medium hover:underline">
                    info@villazadar.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="fancy-card">
            <h3 className="text-2xl font-bold text-deepBlue mb-6">Küldd el kérdéseidet</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Név
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deepBlue focus:border-transparent"
                    placeholder="Teljes neved"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deepBlue focus:border-transparent"
                    placeholder="Email címed"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefonszám
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deepBlue focus:border-transparent"
                    placeholder="Telefonszámod"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Tervezett időpont
                  </label>
                  <input
                    type="text"
                    id="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deepBlue focus:border-transparent"
                    placeholder="Mikor szeretnél utazni?"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Üzenet
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deepBlue focus:border-transparent"
                  placeholder="Írd le, mire vagy kíváncsi, milyen igényeid vannak..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="gold-button w-full"
              >
                Küldés
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                A foglalás csak az egyeztetés után történik, 
                minden igényedet teljesítjük előtte!
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
