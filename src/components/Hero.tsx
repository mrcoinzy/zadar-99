
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { AuroraBackground } from './ui/AuroraBackground';
import { ShimmerButton } from './ui/shimmer-button';

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('testimonials');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AuroraBackground className="relative overflow-hidden" fullHeight={true}>
      {/* Background blobs eltávolítva, AuroraBackground helyettesíti */}
      <div className="container mx-auto px-4 md:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-black mb-3 sm:mb-6 leading-tight uppercase">
            <span className="block">Ébredj</span>
            <span className="block">a tengerparti</span>
            <span className="gradient-text block text-black">luxusban</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-black/90 mb-4 sm:mb-8">
            Zadar apartmanjaiban nem csak szállást kapsz, hanem olyan élményt, 
            amire egész évben visszavágysz. Itt minden rólad szól, minden részlet személyre szabott.
          </p>
          <ShimmerButton asChild>
            <a href="#testimonials" className="inline-block animate-pulse text-xs sm:text-base text-black">
              Mutasd, mi vár rám Zadarban
            </a>
          </ShimmerButton>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 sm:pb-8 z-20">
        <button
          onClick={scrollToNextSection}
          className="text-black animate-bounce p-2"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={30} />
        </button>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
