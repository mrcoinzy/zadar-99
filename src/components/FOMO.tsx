
import React from 'react';
import { Clock, Gift, Award, CalendarCheck } from 'lucide-react';

const FOMO = () => {
  return (
    <section className="py-16 bg-deepBlue relative overflow-hidden">
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
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gold/50 shadow-gold">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Limitált <span className="text-gold">exkluzív ajánlat</span>
            </h2>
            <p className="text-xl text-white/90">
              Zadar élménye nem mindenkinek jár – idén már csak 3 exkluzív időpont szabad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-gold/20 rounded-full">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Limitált időpontok</h3>
                <p className="text-white/80">
                  Az év legszebb időszakaira már csak néhány apartmanunk szabad, gyors döntéssel 
                  még biztosíthatod a helyedet.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-gold/20 rounded-full">
                <Gift className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">VIP üdvözlőcsomag</h3>
                <p className="text-white/80">
                  Ha most jelentkezel, különleges welcome csomaggal várunk: helyi bor, 
                  kézműves ajándék, személyre szabott útiterv.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-gold/20 rounded-full">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Kiváltságos bánásmód</h3>
                <p className="text-white/80">
                  Minden foglalást személyesen igazolunk vissza – itt tényleg kiváltságos vendég vagy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-gold/20 rounded-full">
                <CalendarCheck className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Rugalmas feltételek</h3>
                <p className="text-white/80">
                  Foglalj most kockázatmentesen - ha változna a terved, rugalmasan kezeljük a módosításokat.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-white mb-6">
              Már csak <span className="text-gold font-bold">3 exkluzív időpont</span> maradt a nyári 
              szezonra - ne hagyd, hogy mások lefoglalják előled!
            </p>
            <a href="#contact" className="gold-button inline-block animate-pulse">
              Ne dönts azonnal – kérdezz először!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FOMO;
