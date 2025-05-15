import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Bed, Bath, Home, ParkingSquare, Sun, Utensils, Wifi, KeyRound, Bot, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import TestimonialsWithMarquee from '@/components/TestimonialsWithMarquee';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ApartmanokSwipe } from '@/components/ApartmanokSwipe';
import Contact from '@/components/Contact';

const apartmanok = [
  {
    slug: 'adria-deluxe',
    name: 'Adria Deluxe',
    image: '/placeholder.svg',
    gallery: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    short: 'Tágas, tengerre néző luxus apartman, saját jacuzzival és napozóterasszal.',
    details: '2 hálószoba, 2 fürdő, prémium konyha, közvetlen tengerparti kilátás, okosotthon rendszer, privát parkoló.',
    features: [
      { icon: Home, text: '2 hálószoba' },
      { icon: Bath, text: '2 fürdő' },
      { icon: Utensils, text: 'Prémium konyha' },
      { icon: ParkingSquare, text: 'Privát parkoló' },
      { icon: Sun, text: 'Közvetlen tengerparti kilátás' },
      { icon: Wifi, text: 'Okosotthon rendszer' }
    ]
  },
  {
    slug: 'sunset-loft',
    name: 'Sunset Loft',
    image: '/placeholder.svg',
    gallery: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    short: 'Modern, panorámás apartman, naplemente terasszal és designer bútorokkal.',
    details: '1 hálószoba, 1 fürdő, amerikai konyha, óriási üvegfal, smart TV, közvetlen strandkapcsolat.',
    features: [
      { icon: Home, text: '1 hálószoba' },
      { icon: Bath, text: '1 fürdő' },
      { icon: Utensils, text: 'Amerikai konyha' },
      { icon: Sun, text: 'Közvetlen strandkapcsolat' },
      { icon: Wifi, text: 'Smart TV' }
    ]
  },
  {
    slug: 'mediterran-garden',
    name: 'Mediterrán Garden',
    image: '/placeholder.svg',
    gallery: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    short: 'Hangulatos kertkapcsolatos apartman, mediterrán növényekkel és grillterasszal.',
    details: '2 hálószoba, 1 fürdő, teljesen felszerelt konyha, privát kert, kültéri étkező.',
    features: [
      { icon: Home, text: '2 hálószoba' },
      { icon: Bath, text: '1 fürdő' },
      { icon: Utensils, text: 'Teljesen felszerelt konyha' },
      { icon: ParkingSquare, text: 'Privát kert' },
      { icon: Utensils, text: 'Kültéri étkező' }
    ]
  }
];

const rozaOptions = [
  { label: 'Apartman leírás', value: 'leiras' },
  { label: 'Elérhetőségek', value: 'elerhetoseg' },
  { label: 'Szállás foglalása online', value: 'foglalas' },
  { label: 'Gyakran ismételt kérdések', value: 'gyik' },
];

const gyik = [
  {
    title: 'FOGLALÁS, IDŐPONTOK',
    qas: [
      { q: 'Hogyan tudok apartmant foglalni?', a: 'Egyszerűen csak írd meg, mikor szeretnél jönni, és melyik apartman tetszik. Pár perc alatt visszajelzünk, egyeztetjük a részleteket, és már kész is a foglalás!' },
      { q: 'Meddig kell előre foglalni?', a: 'Minél hamarabb írsz, annál biztosabb, hogy szabad az általad választott időpont. A legnépszerűbb hetek gyorsan betelnek – ne várj az utolsó pillanatig!' },
      { q: 'Foglalás után mikor kapok visszaigazolást?', a: 'Azonnal visszajelzünk e-mailben vagy chaten, hogy minden rendben van-e. Nálunk nem kell napokat várnod!' },
    ]
  },
  {
    title: 'ÁRAK, FIZETÉS',
    qas: [
      { q: 'Mennyibe kerül egy éjszaka?', a: 'Az árak szezon és apartman típus szerint változnak. Írd meg, mikor jönnél, és rögtön küldöm a pontos ajánlatot!' },
      { q: 'Hogyan tudok fizetni?', a: 'Átutalás, bankkártya vagy készpénz – ahogy neked a legkényelmesebb.' },
      { q: 'Kell előleget fizetni?', a: 'Igen, általában egy kis előleggel biztosíthatod a foglalást, de rugalmasak vagyunk, szólj, ha másra van szükséged!' },
      { q: 'Visszakapom az előleget, ha mégsem tudok jönni?', a: 'A lemondási feltételek mindig vendégbarátak – minden részletet egyeztetünk veled, így nem érhet meglepetés.' },
    ]
  },
  {
    title: 'FELSZERELTSÉG, SZOLGÁLTATÁSOK',
    qas: [
      { q: 'Van saját parkoló?', a: 'Igen, minden vendégünknek zárt, privát parkolót biztosítunk.' },
      { q: 'Van wifi az apartmanban?', a: 'Természetesen, ingyenes és gyors wifi minden apartmanban.' },
      { q: 'Mit találok az apartmanban?', a: 'Prémium felszereltség, klíma, teljesen felszerelt konyha, jacuzzi (ahol van), törölköző, ágynemű, okos TV – csak pihenj és élvezd!' },
      { q: 'Gyerekkel vagy kisbabával is jöhetek?', a: 'Igen, bababarátak vagyunk – kérhetsz babaágyat, etetőszéket, játékokat is.' },
      { q: 'Lehet kutyát vagy macskát hozni?', a: 'Előzetes egyeztetés alapján igen, néhány apartmanban szeretettel látjuk a házikedvenceket!' },
    ]
  },
  {
    title: 'ELHELYEZKEDÉS, KÖRNYÉK',
    qas: [
      { q: 'Hol található az apartman?', a: 'Zadar tengerparti részén, közvetlenül a víz mellett – minden fontos hely, bolt, étterem percekre van.' },
      { q: 'Van privát partszakasz?', a: 'Igen, csak a vendégeink használhatják a partszakaszt – nincs tömeg, csak nyugalom és napsütés!' },
      { q: 'Milyen programokat ajánlotok a közelben?', a: 'Tudunk segíteni túrában, hajókirándulásban, bor- és gasztroélményekben is – csak kérdezz!' },
    ]
  },
  {
    title: 'IDŐJÁRÁS, GARANCIA',
    qas: [
      { q: 'Mi történik, ha rossz az idő?', a: 'Nálunk nem érhet csalódás – ha az időjárás keresztülhúzná a terveid, ajándék extra éjszakát kapsz tőlünk!' },
      { q: 'Mit ajánlotok esős napokra?', a: 'Zadarban akkor sem fogsz unatkozni: exkluzív wellness, helyi borok, fedett programok, vagy csak egy igazi pihenős nap a jacuzziban.' },
    ]
  },
  {
    title: 'CHECK-IN, CHECK-OUT',
    qas: [
      { q: 'Mikor lehet érkezni és távozni?', a: 'Érkezés általában délután 3-tól, távozás délelőtt 10-ig. Előzetes egyeztetéssel rugalmasak vagyunk – jelezz, ha korábban érkeznél vagy később mennél!' },
    ]
  },
  {
    title: 'BIZTONSÁG, EXTRA SZOLGÁLTATÁSOK',
    qas: [
      { q: 'Biztonságos a környék?', a: 'Igen, Zadar egyik legnyugodtabb, legbiztonságosabb részén vagyunk.' },
      { q: 'Tudtok reptéri transzfert intézni?', a: 'Természetesen, szólj, mikor érkezel, és megszervezzük!' },
      { q: 'Lehet extra meglepetést kérni (pl. szülinapra, évfordulóra)?', a: 'Persze, csak írd meg az elképzelésed – legyen virág, bor, romantikus díszítés vagy bármi más, minden kívánságodra nyitottak vagyunk!' },
    ]
  },
  {
    title: 'KAPCSOLAT, SEGÍTSÉG',
    qas: [
      { q: 'Hogyan tudlak elérni, ha kérdésem van?', a: 'Itt chaten, WhatsAppon, telefonon vagy e-mailben is bármikor elérsz minket. Mindig gyorsan válaszolunk!' },
      { q: 'Mi történik, ha valami gond van az apartmanban?', a: 'Rögtön segítünk, akár azonnal is. Nálunk tényleg fontos vagy – a vendégélmény az első!' },
    ]
  },
  {
    title: 'EXTRA, AMIVEL KIEMELKEDSZ',
    qas: [
      { q: 'Mi történik, ha az utolsó pillanatban változik a programom?', a: 'Rugalmasan kezeljük, mindig a te igényeid az elsők. Jelezz, és biztosan találunk megoldást!' },
      { q: 'Mi a legjobb dolog Zadarban, amit csak kevesen tudnak?', a: 'Kérj tőlünk személyre szabott tippet! Imádjuk megosztani a kedvenc helyeinket, amiket csak a helyiek ismernek.' },
      { q: 'Van-e extra, amitől igazán különleges lehet a nyaralásom?', a: 'VIP csomag, privát program, személyes welcome, helyi ajándékok – csak kérdezz, mindent megoldunk!' },
    ]
  },
];

const ApartmanReszletek = () => {
  const { slug } = useParams();
  const apartman = apartmanok.find(a => a.slug === slug);
  const navigate = useNavigate();
  const location = useLocation();
  const [rozaState, setRozaState] = useState<'alap'|'leiras'|'elerhetoseg'|'gyik'>('alap');
  const [leirasAnim, setLeirasAnim] = useState(false);
  const leirasRef = useRef<HTMLDivElement>(null);
  const isNavigationFromSwipe = useRef(false);

  // Oldal betöltésekor felgördít a tetejére, de csak ha nem swipe navigációból érkezünk
  useEffect(() => {
    // Csak akkor görgetünk, ha újonnan érkeztünk az oldalra, nem swipe-ból
    if (!isNavigationFromSwipe.current) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    
    // Új navigációnál alaphelyzetbe állítjuk a flag-et
    isNavigationFromSwipe.current = false;
  }, [slug]);

  // Exportáljuk a flagbeállító függvényt, hogy a swipe komponens használhassa
  window.setNavigationFromSwipe = () => {
    isNavigationFromSwipe.current = true;
  };

  // Leírás villogó border animáció
  React.useEffect(() => {
    if (rozaState === 'leiras') {
      setLeirasAnim(true);
      const timeout = setTimeout(() => setLeirasAnim(false), 1800);
      return () => clearTimeout(timeout);
    }
  }, [rozaState]);

  if (!apartman) {
    return <div className="min-h-screen flex items-center justify-center text-xl">Nincs ilyen apartman.</div>;
  }

  // Róza szövegbuborék tartalom
  let rozaBubble = (
    <p className="whitespace-normal text-left">Szia, <b>Róza</b> vagyok, Zadar digitális asszisztense. Tudok valamiben segíteni?</p>
  );
  if (rozaState === 'leiras') {
    rozaBubble = <span style={{color: '#22c55e'}}>Zölddel megvilágítottam a leírás részét.</span>;
  }
  if (rozaState === 'elerhetoseg') {
    rozaBubble = (
      <div className="flex flex-col gap-2">
        <span className="flex items-center gap-2"><Phone className="text-gold" size={18}/>+36-20-580-5343</span>
        <span className="flex items-center gap-2"><Mail className="text-gold" size={18}/>zadarszallas@gmail.com</span>
      </div>
    );
  }
  if (rozaState === 'gyik') {
    rozaBubble = (
      <div className="max-h-72 overflow-y-auto text-sm pr-2">
        {gyik.map(cat => (
          <div key={cat.title} className="mb-3">
            <div className="font-bold text-gold mb-1">{cat.title}</div>
            {cat.qas.map((qa, i) => (
              <div key={i} className="mb-1">
                <span className="font-semibold">{qa.q}</span><br/>
                <span className="text-gray-700">{qa.a}</span>
              </div>
            ))}
          </div>
        ))}
        <div className="mt-2 text-xs text-gray-500">Ha bármilyen más kérdésed van, ne habozz írni! Mindig gyorsan, személyre szabottan válaszolunk, hogy a nyaralásod tényleg felejthetetlen legyen.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-12 px-2">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Bal oldal: apartman adatok */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          {/* Főkép */}
          <img src={apartman.image} alt={apartman.name} className="w-full max-w-2xl h-80 object-cover object-center rounded-2xl mb-4 shadow" />
          {/* Galéria */}
          <div className="flex gap-4 mb-6">
            {apartman.gallery.map((img, i) => (
              <img key={i} src={img} alt={apartman.name + ' galéria'} className="w-32 h-24 object-cover object-center rounded-xl shadow" />
            ))}
          </div>
          {/* Név, leírás, részletek */}
          <h1 className="text-3xl font-bold text-deepBlue mb-2 text-center md:text-left">{apartman.name}</h1>
          <div ref={leirasRef} className={`transition-all duration-200 mb-4 text-lg text-gray-700 text-center md:text-left rounded-xl px-2 py-1 ${leirasAnim ? 'border-4 border-green-500 animate-[roza-blink_0.6s_ease-in-out_3]' : ''}`}>{apartman.short}</div>
          <p className="text-base text-gray-500 mb-6 text-center md:text-left">{apartman.details}</p>
          {/* Jellemzők */}
          <div className="flex flex-wrap gap-6 mb-4">
            {apartman.features.map((feature, i) => (
              <div key={i} className="flex flex-row items-center gap-2 text-deepBlue/90 text-base">
                {React.createElement(feature.icon, { size: 22, className: 'text-gold' })}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Jobb oldal: Róza asszisztens */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full md:w-[340px] flex flex-col items-center md:items-end mt-8 md:mt-0"
        >
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-yellow-200 flex items-center justify-center shadow-lg border-4 border-white mr-3">
                <Bot className="w-10 h-10 text-white drop-shadow" />
              </div>
              <div className="bg-white rounded-2xl shadow px-4 py-3 text-deepBlue font-medium text-base w-full md:max-w-xs max-w-sm border border-gold/30 min-h-[64px] flex items-center">
                {rozaBubble}
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-[260px]">
              <button
                className={`w-full font-semibold rounded-xl py-2 px-4 shadow transition-colors text-left ${rozaState==='leiras' ? 'bg-green-500 text-white animate-[roza-blink_0.6s_ease-in-out_3]' : 'bg-gold/90 hover:bg-gold text-white'}`}
                onClick={() => setRozaState('leiras')}
              >
                Apartman leírás
              </button>
              <button
                className={`w-full font-semibold rounded-xl py-2 px-4 shadow transition-colors text-left ${rozaState==='elerhetoseg' ? 'bg-gold text-white ring-2 ring-gold' : 'bg-gold/90 hover:bg-gold text-white'}`}
                onClick={() => setRozaState('elerhetoseg')}
              >
                Elérhetőségek
              </button>
              <button
                className="w-full bg-gold/90 hover:bg-gold text-white font-semibold rounded-xl py-2 px-4 shadow transition-colors text-left"
                onClick={() => navigate(`/fizetes/${apartman.slug}`)}
              >
                Szállás foglalása online
              </button>
              <button
                className={`w-full font-semibold rounded-xl py-2 px-4 shadow transition-colors text-left ${rozaState==='gyik' ? 'bg-gold text-white ring-2 ring-gold' : 'bg-gold/90 hover:bg-gold text-white'}`}
                onClick={() => setRozaState('gyik')}
              >
                Gyakran ismételt kérdések
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <RevealOnScroll>
        <TestimonialsWithMarquee />
      </RevealOnScroll>
      <RevealOnScroll>
        <ApartmanokSwipe excludeSlug={apartman.slug} />
      </RevealOnScroll>
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
      <style>{`
        @keyframes roza-blink {
          0%, 100% { box-shadow: 0 0 0 0 #22c55e; border-color: #22c55e; }
          50% { box-shadow: 0 0 0 6px #22c55e44; border-color: #22c55e; }
        }
      `}</style>
    </div>
  );
};

export default ApartmanReszletek; 