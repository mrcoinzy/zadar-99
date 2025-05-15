
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
      className="relative flex items-center overflow-hidden min-h-[80vh] md:min-h-screen"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background blobs */}
      <div className="blob w-[40vw] h-[40vw] top-[-10%] right-[-10%] bg-gold/10"></div>
      <div className="blob w-[30vw] h-[30vw] bottom-[-10%] left-[10%] bg-deepBlue/10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-3 sm:mb-6">
            Ébredj a tengerparti <span className="gradient-text">luxusban</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-8">
            Zadar apartmanjaiban nem csak szállást kapsz, hanem olyan élményt, 
            amire egész évben visszavágysz. Itt minden rólad szól, minden részlet személyre szabott.
          </p>
          <a href="#testimonials" className="gold-button inline-block animate-pulse text-xs sm:text-base">
            Mutasd, mi vár rám Zadarban
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 sm:pb-8">
        <button
          onClick={scrollToNextSection}
          className="text-white animate-bounce p-2"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={30} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
