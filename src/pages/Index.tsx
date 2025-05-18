
import React from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import FOMO from '@/components/FOMO';
import Contact from '@/components/Contact';
import { Apartmanok } from '@/components/Apartmanok';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="testimonials"><RevealOnScroll><Testimonials /></RevealOnScroll></div>
      <div id="apartmanok"><RevealOnScroll><Apartmanok /></RevealOnScroll></div>
      <div id="services"><RevealOnScroll><Services /></RevealOnScroll></div>
      <div id="experience"><RevealOnScroll><Experience /></RevealOnScroll></div>
      <div id="fomo"><RevealOnScroll><FOMO /></RevealOnScroll></div>
      <div id="contact"><RevealOnScroll><Contact /></RevealOnScroll></div>
      <Footer />
    </motion.div>
  );
};

export default Index;
