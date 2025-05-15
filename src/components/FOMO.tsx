import React from 'react';
import { Clock, Gift, Award, CalendarCheck } from 'lucide-react';
import { ShimmerButton } from './ui/shimmer-button';

const FOMO = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-deepBlue relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=60')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-deepBlue via-deepBlue/90 to-deepBlue"></div>
      
      {/* Gold particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-gold/30"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 5}s linear infinite`,
          }}
        ></div>
      ))}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-3xl border border-gold/50 shadow-gold">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Limitált <span className="text-gold">exkluzív ajánlat</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Zadar élménye nem mindenkinek jár – idén már csak 3 exkluzív időpont szabad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 sm:mb-8">
            <div className="flex items-start">
              <div className="mr-3 sm:mr-4 p-1.5 sm:p-2 bg-gold/20 rounded-full flex-shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Limitált időpontok</h3>
                <p className="text-sm sm:text-base text-white/80">
                  Az év legszebb időszakaira már csak néhány apartmanunk szabad, gyors döntéssel 
                  még biztosíthatod a helyedet.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-3 sm:mr-4 p-1.5 sm:p-2 bg-gold/20 rounded-full flex-shrink-0">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">VIP üdvözlőcsomag</h3>
                <p className="text-sm sm:text-base text-white/80">
                  Ha most jelentkezel, különleges welcome csomaggal várunk: helyi bor, 
                  kézműves ajándék, személyre szabott útiterv.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-3 sm:mr-4 p-1.5 sm:p-2 bg-gold/20 rounded-full flex-shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Kiváltságos bánásmód</h3>
                <p className="text-sm sm:text-base text-white/80">
                  Minden foglalást személyesen igazolunk vissza – itt tényleg kiváltságos vendég vagy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-3 sm:mr-4 p-1.5 sm:p-2 bg-gold/20 rounded-full flex-shrink-0">
                <CalendarCheck className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Rugalmas feltételek</h3>
                <p className="text-sm sm:text-base text-white/80">
                  Foglalj most kockázatmentesen - ha változna a terved, rugalmasan kezeljük a módosításokat.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-base sm:text-lg text-white mb-4 sm:mb-6">
              Már csak <span className="text-gold font-bold">3 exkluzív időpont</span> maradt a nyári 
              szezonra - ne hagyd, hogy mások lefoglalják előled!
            </p>
            <ShimmerButton asChild>
              <a href="#contact" className="inline-block animate-pulse text-sm sm:text-base text-black">Ne dönts azonnal – kérdezz először!</a>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FOMO;
