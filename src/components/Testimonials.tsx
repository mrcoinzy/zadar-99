
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  name: string;
  date: string;
  quote: string;
  className?: string;
}

const TestimonialCard = ({ name, date, quote, className }: TestimonialProps) => (
  <div className={cn('fancy-card group h-full', className)}>
    <div className="flex justify-between items-start mb-4">
      <Quote className="text-gold w-10 h-10 group-hover:animate-sway" />
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 fill-gold text-gold" />
        ))}
      </div>
    </div>
    <p className="italic text-lg mb-6">{quote}</p>
    <div className="text-right">
      <p className="font-medium text-deepBlue">{name}</p>
      <p className="text-sm text-gray-600">{date}</p>
    </div>
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center bg-deepBlue text-white p-6 rounded-3xl shadow-blue">
    <p className="text-4xl font-bold text-gold mb-2">{value}</p>
    <p className="text-sm font-medium">{label}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white relative">
      {/* Background blobs */}
      <div className="blob w-[25vw] h-[25vw] top-[20%] left-[5%] bg-sandBeige/30"></div>
      <div className="blob w-[20vw] h-[20vw] bottom-[10%] right-[5%] bg-deepBlue/10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deepBlue mb-4">
            Vendégeink <span className="gradient-text">véleménye</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nem csak mi mondjuk, hogy a legjobb választás vagyunk. Nézd meg, mit gondolnak rólunk korábbi vendégeink.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <TestimonialCard 
            name="Kiss Erika"
            date="2024. július"
            quote="Az első perctől éreztem, hogy itt tényleg VIP vendég vagyok. Zadarban minden rólam szólt, nem csak a foglalásról."
          />
          <TestimonialCard 
            name="Nagy Tamás"
            date="2023. augusztus"
            quote="Már az utazás előtt megkérdezték, mivel tehetik különlegessé a pihenésünket. Ilyet sehol máshol nem kaptam."
            className="md:translate-y-8"
          />
          <TestimonialCard 
            name="Tóth Bence"
            date="2024. június"
            quote="Annyira figyeltek minden apró részletre, hogy a következő nyaralást már le is foglaltuk náluk. Imádjuk Zadart!"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard value="9.9/10" label="Booking.com (120+ értékelés)" />
          <StatCard value="4.9/5" label="Google Reviews" />
          <StatCard value="500+" label="Elégedett vendég évente" />
          <StatCard value="98%" label="Visszatérési arány" />
        </div>

        <div className="text-center">
          <a href="#contact" className="gold-button inline-block">
            Kérdezz először – a foglalás nem kötelez semmire!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
