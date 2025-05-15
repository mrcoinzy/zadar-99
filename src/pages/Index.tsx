
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import FOMO from '@/components/FOMO';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      <Services />
      <Experience />
      <FOMO />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
