import React from 'react';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import MultiStepContactForm from './MultiStepContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white relative">
      {/* Background blobs */}
      <div className="blob w-[35vw] h-[35vw] top-[10%] right-[-10%] bg-gold/5"></div>
      <div className="blob w-[25vw] h-[25vw] bottom-[10%] left-[5%] bg-deepBlue/5"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deepBlue mb-3 sm:mb-4">
            Lépj <span className="gradient-text">kapcsolatba</span> velünk
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Mondd el nekünk, mikor jönnél, kivel, mi a legfontosabb számodra? 
            Személyre szabott ajánlatot készítünk neked.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="fancy-card flex flex-col sm:flex-row sm:items-start">
              <div className="mb-3 sm:mb-0 sm:mr-4 p-2 bg-deepBlue rounded-full self-start">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-deepBlue mb-2">Gyors válasz garantálva</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  30 percen belül visszahívunk vagy válaszolunk üzenetedre, 
                  minden részletet átbeszélünk.
                </p>
              </div>
            </div>
            
            <div className="fancy-card flex flex-col sm:flex-row sm:items-start">
              <div className="mb-3 sm:mb-0 sm:mr-4 p-2 bg-deepBlue rounded-full self-start">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-deepBlue mb-2">Chat & Üzenet</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  WhatsApp, Messenger vagy e-mail – ahogy neked a legkényelmesebb.
                </p>
                <p className="mt-2 text-sm sm:text-base">
                  <a href="#" className="text-gold font-medium hover:underline">WhatsApp</a>
                  {' · '}
                  <a href="#" className="text-gold font-medium hover:underline">Messenger</a>
                </p>
              </div>
            </div>
            
            <div className="fancy-card flex flex-col sm:flex-row sm:items-start">
              <div className="mb-3 sm:mb-0 sm:mr-4 p-2 bg-deepBlue rounded-full self-start">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-deepBlue mb-2">Telefonos egyeztetés</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Hívj minket közvetlenül, vagy kérj visszahívást a számodra megfelelő időpontban.
                </p>
                <p className="mt-2 text-sm sm:text-base">
                  <a href="tel:+36205805343" className="text-gold font-medium hover:underline">+36 20 580 5343</a>
                </p>
              </div>
            </div>
            
            <div className="fancy-card flex flex-col sm:flex-row sm:items-start">
              <div className="mb-3 sm:mb-0 sm:mr-4 p-2 bg-deepBlue rounded-full self-start">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-deepBlue mb-2">E-mail</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Küldj nekünk részletes levelet, és mi ugyanolyan részletességgel válaszolunk.
                </p>
                <p className="mt-2 text-sm sm:text-base">
                  <a href="mailto:zadarszallas@gmail.com" className="text-gold font-medium hover:underline">
                    zadarszallas@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Új többlépcsős űrlap komponens */}
          <MultiStepContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
