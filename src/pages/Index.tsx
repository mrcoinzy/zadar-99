import React, { useEffect } from 'react';
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

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Navbar />
      <RevealOnScroll><Hero /></RevealOnScroll>
      <RevealOnScroll><Testimonials /></RevealOnScroll>
      <RevealOnScroll><Apartmanok /></RevealOnScroll>
      <RevealOnScroll><Services /></RevealOnScroll>
      <RevealOnScroll><Experience /></RevealOnScroll>
      <RevealOnScroll><FOMO /></RevealOnScroll>
      <RevealOnScroll><Contact /></RevealOnScroll>
    </motion.div>
  );
};

export default Index;
