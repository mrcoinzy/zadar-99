
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('testimonials');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background blobs */}
      <div className="blob w-[40vw] h-[40vw] top-[-10%] right-[-10%] bg-gold/10"></div>
      <div className="blob w-[30vw] h-[30vw] bottom-[-10%] left-[10%] bg-deepBlue/10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Ébredj a tengerparti <span className="gradient-text">luxusban</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Zadar apartmanjaiban nem csak szállást kapsz, hanem olyan élményt, 
            amire egész évben visszavágysz. Itt minden rólad szól, minden részlet személyre szabott.
          </p>
          <a href="#testimonials" className="gold-button inline-block animate-pulse">
            Mutasd, mi vár rám Zadarban
          </a>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce p-2"
      >
        <ChevronDown size={36} />
      </button>

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

export default Hero;
