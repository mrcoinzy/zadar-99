import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Kovács Dóra',
    quote: 'A Villa Zadarban minden nap igazi luxusélmény volt. A hullámzó tengerparti reggelek örökre emlékezetesek maradnak!',
    highlight: 'luxusélmény',
    date: '2024. augusztus'
  },
  {
    name: 'Szabó Gergő',
    quote: 'A családommal tökéletes nyaralásban volt részünk. A személyzet minden kívánságunkat teljesítette.',
    highlight: 'tökéletes nyaralás',
    date: '2023. július'
  },
  {
    name: 'Németh Zsófia',
    quote: 'A privát partszakasz és a prémium felszereltség miatt biztosan visszatérünk! Ilyen vendégszeretetet ritkán tapasztalni.',
    highlight: 'prémium felszereltség',
    date: '2024. június'
  },
  {
    name: 'Farkas Balázs',
    quote: 'A foglalás egyszerű, a kommunikáció gyors és barátságos. A helyszín minden várakozásunkat felülmúlta.',
    highlight: 'felülmúlta',
    date: '2024. május'
  },
  {
    name: 'Tóth Eszter',
    quote: 'A gyerekek imádták a jacuzzit, mi pedig a nyugalmat és a panorámát. Mindenkinek ajánlom!',
    highlight: 'nyugalmat és a panorámát',
    date: '2023. szeptember'
  },
  {
    name: 'Varga László',
    quote: 'A Villa Zadarban minden részlet személyre szabott. A hullámzó színek és a vendégszeretet felejthetetlen.',
    highlight: 'személyre szabott',
    date: '2024. július'
  },
];

const Marquee = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-hidden w-full">
    <div className="flex items-center animate-marquee whitespace-nowrap gap-8">
      {children}
      {children}
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 48s linear infinite;
      }
    `}</style>
  </div>
);

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-wave font-bold">
    {children}
    <style>{`
      @keyframes gradient-wave {
        0%,100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .animate-gradient-wave {
        animation: gradient-wave 3s ease-in-out infinite;
      }
    `}</style>
  </span>
);

const TestimonialsWithMarquee = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white relative">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deepBlue mb-3 sm:mb-4">
          Vendégeink <GradientText>véleménye</GradientText>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Akik már <GradientText>megtapasztalták</GradientText> a Villa Zadar élményt, mindig visszavágynak. Olvasd el, miért választanak minket újra és újra!
        </p>
      </div>
      <Marquee>
        {testimonials.map((t, i) => (
          <div key={i} className="min-w-[380px] max-w-sm bg-white border border-gold/20 rounded-2xl shadow-lg px-6 py-5 mx-2 flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
              <Quote className="text-gold w-6 h-6" />
              <div className="flex">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
            </div>
            <p className="italic text-base mb-3 break-words whitespace-normal">
              {t.quote.split(t.highlight).map((part, idx, arr) => idx < arr.length-1 ? <>{part}<GradientText>{t.highlight}</GradientText></> : part)}
            </p>
            <div className="text-right">
              <p className="font-medium text-deepBlue">{t.name}</p>
              <p className="text-xs text-gray-600">{t.date}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  </section>
);

export default TestimonialsWithMarquee; 