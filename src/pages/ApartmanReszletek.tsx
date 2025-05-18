import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Bed, Bath, Home, ParkingSquare, Sun, Utensils, Wifi, KeyRound, Bot, Phone, Mail, Facebook, Ship, X, ChevronLeft, ChevronRight, ArrowLeft, TreeDeciduous, AirVent, Tv, Tent } from 'lucide-react';
import { motion } from 'framer-motion';
import TestimonialsWithMarquee from '@/components/TestimonialsWithMarquee';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ApartmanokSwipe } from '@/components/ApartmanokSwipe';
import Contact from '@/components/Contact';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const apartmanok = [
  {
    slug: 'adria-deluxe',
    name: 'Zadar Riviera',
    image: '/lovable-uploads/0160d8b9-488e-4c98-9eb4-793e9a769917.png',
    gallery: [
      '/lovable-uploads/0160d8b9-488e-4c98-9eb4-793e9a769917.png', 
      '/lovable-uploads/b198b498-391d-4455-8afb-c97ee2aec0fa.png', 
      '/lovable-uploads/68c13429-6dab-4dba-9d4c-f918a9909f99.png',
      '/lovable-uploads/93c00875-6bd8-445c-82ee-19964e606fe7.png',
      '/lovable-uploads/89d41de0-6c5a-4778-a9e2-1f408b066517.png'
    ],
    short: 'Pihenj a Zadar Riviéra egyik legkedveltebb, zöldövezeti részén, csupán 9 perc sétára (vagy 1 perc autóval) a lassan mélyülő, kristálytiszta tengerparttól.',
    details: 'A földszinten található, teljesen felszerelt, modern apartman ideális választás családoknak vagy pároknak, akik csendes, panorámás, mégis mindenhez közeli helyet keresnek.',
    features: [
      { icon: Sun, text: 'Medence & panoráma' },
      { icon: TreeDeciduous, text: 'Közvetlen zöldövezet' },
      { icon: AirVent, text: 'Klíma, ingyenes Wi-Fi, LCD TV' },
      { icon: Utensils, text: 'Felszerelt konyha' },
      { icon: Tent, text: 'Privát terasz' },
      { icon: ParkingSquare, text: 'Ingyenes privát parkoló' },
      { icon: Bed, text: '1 hálószoba (2 kétszemélyes ágy), nappali + pótágyazható kanapé, modern fürdőszoba/WC' }
    ],
    prices: {
      high: '80 EUR/nap/4 fő (2 felnőtt + 2 gyerek)',
      low: '40–60 EUR/nap/4 fő'
    },
    extra: 'Örök tengeri hajóvezetői jogosítvány akár egy nap alatt, nyaralás közben – kérdezz bátran a részletekről!'
  },
  {
    slug: 'sunset-loft',
    name: 'Elit Apartmanház Zadar – 100 méterre a tengertől, Diklo strandnegyedében',
    image: '/lovable-uploads/c3d24d50-db97-4ac5-997f-d3b830815510.png',
    gallery: [
      '/lovable-uploads/c3d24d50-db97-4ac5-997f-d3b830815510.png', 
      '/lovable-uploads/d3b39d06-1387-426b-bad8-8d07952d5d8d.png', 
      '/lovable-uploads/a6d2236b-5739-49c0-ada2-d8ad4124439f.png',
      '/lovable-uploads/ed62bbae-a24c-4263-9a3f-98ec368b3876.png',
      '/lovable-uploads/a4a68a41-913a-47c6-83f0-9b0d6754f10e.png',
      '/lovable-uploads/f0765b71-c723-411a-b0c6-4707c2f748ac.png',
    ],
    short: 'Az apartman több szobás, panorámás apartmanház tengerre néző terasszal Zadar egyik legnépszerűbb, elit strandövezetében – mindössze 100 méterre a parttól!',
    details: 'Modern, kényelmes felszereltség, csendes zöldövezetben, ideális választás pároknak, családoknak vagy baráti társaságoknak, akik minőségi nyaralásra vágynak.',
    features: [
      { icon: Home, text: 'Több hálószobás, több fürdőszobás, tágas apartmanok' },
      { icon: Sun, text: 'Lenyűgöző panoráma, tengerre néző, berendezett terasz' },
      { icon: Bed, text: 'Ideális pároknak, családoknak, baráti társaságoknak' },
      { icon: Wifi, text: 'Ingyenes Wi-Fi és klíma minden apartmanban' },
      { icon: Utensils, text: 'Modern, kényelmes felszereltség, csendes zöldövezetben' }
    ],
    prices: {
      high: '2–3 főre: 70–80 EUR/éj',
      low: '4 főre: 100–120 EUR/éj',
      extra: 'Egyedi kedvezmények, szezonális ajánlatok'
    },
    extra: 'Örök tengeri hajóvezetői jogosítvány akár egy nap alatt, nyaralás közben – kérdezz bátran a részletekről!'
  },
  {
    slug: 'mediterran-garden',
    name: 'Diklo Ivica Apartmanház',
    image: '/images/diklo/diklo-terasz.jpg',
    gallery: [
      '/images/diklo/masodikkep.jpg',
      '/images/diklo/harmadikkep.jpg',
      '/images/diklo/negyedikkep.jpg',
      '/images/diklo/otodikkep.jpg',
      '/images/diklo/hatodikkep.jpg',
    ],
    short: `Fedezd fel a Diklo Ivica apartmanházat Zadar egyik legszebb, elit strandnegyedében, mindössze 250 méterre a lassan mélyülő, aprókavicsos tengerparttól!
A környéken számos hangulatos étterem és kávézó vár, hogy igazán tartalmas legyen a pihenésed.`,
    details: `Vadonatúj, modern bútorzat. Ingyenes, gyors wifi. Klíma minden helyiségben. Nagy képernyős műholdas TV. Teljesen felszerelt konyha. Kényelmes nappali, tágas fürdőszoba. Saját terasz, tengeri kilátással. Az ár tartalmazza a klímát, idegenforgalmi adót, wifi-t, műholdas TV-t.`,
    features: [
      { icon: Home, text: '2 hálószoba' },
      { icon: Bath, text: '1 fürdő' },
      { icon: Utensils, text: 'Teljesen felszerelt konyha' },
      { icon: (props: any) => <SunsetIcon className="w-1 h-1 text-gold" {...props} />, text: 'Tengerre néző szoba' },
      { icon: Utensils, text: 'Kültéri étkező, nagy teraszal' }
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

// Messenger SVG ikon komponens
const MessengerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" {...props}>
    <circle cx="16" cy="16" r="16" fill="#0084FF"/>
    <path d="M8.5 20.5L13.5 15.5L17 19L22.5 13.5L17.5 18.5L14 15L8.5 20.5Z" fill="#fff"/>
  </svg>
);

// Naplemente (Sunset) SVG ikon komponens
const SunsetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 18a5 5 0 0 0-10 0" />
    <line x1="12" y1="9" x2="12" y2="2" />
    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
    <line x1="1" y1="18" x2="3" y2="18" />
    <line x1="21" y1="18" x2="23" y2="18" />
    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
    <line x1="23" y1="22" x2="1" y2="22" />
    <polyline points="16 5 12 9 8 5" />
  </svg>
);

const ApartmanReszletek = () => {
  const { slug } = useParams();
  const apartman = apartmanok.find(a => a.slug === slug);
  const navigate = useNavigate();
  const location = useLocation();
  const [rozaState, setRozaState] = useState<'alap'|'leiras'|'elerhetoseg'|'gyik'>('alap');
  const [leirasAnim, setLeirasAnim] = useState(false);
  const leirasRef = useRef<HTMLDivElement>(null);
  const isNavigationFromSwipe = useRef(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
    <div className="min-h-screen flex flex-col items-center bg-white py-8 sm:py-12 px-3 sm:px-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 items-start">
        {/* Bal oldal: apartman adatok */}
        <div className="flex-1 w-full flex flex-col items-center md:items-start">
          {/* Vissza a főoldalra gomb */}
          <a
            href="/"
            className="flex items-center gap-2 mb-4 font-semibold rounded-xl py-2 px-4 shadow bg-black text-white hover:bg-gray-900 transition-colors w-fit text-left"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Vissza a főoldalra</span>
          </a>
          {/* Főkép */}
          <img
            src={apartman.image}
            alt={apartman.name}
            className="w-full h-60 sm:h-80 object-cover object-center rounded-2xl mb-4 shadow cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => {
              const idx = apartman.gallery.findIndex(img => img === apartman.image);
              setLightboxIndex(idx >= 0 ? idx : 0);
              setLightboxOpen(true);
            }}
          />
          {/* Galéria */}
          <div className="flex gap-2 sm:gap-4 mb-6 overflow-x-auto pb-2 w-full">
            {apartman.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={apartman.name + ' galéria'}
                className="w-24 h-20 sm:w-32 sm:h-24 object-cover object-center rounded-xl shadow cursor-pointer transition-transform hover:scale-105 flex-shrink-0"
                onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
              />
            ))}
          </div>
          {/* Lightbox modal */}
          {lightboxOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadein p-2 sm:p-4">
              <button
                className="absolute top-2 right-2 sm:top-6 sm:right-6 text-white bg-black/60 rounded-full p-1 sm:p-2 hover:bg-black/80 transition-colors z-50"
                onClick={() => setLightboxOpen(false)}
                aria-label="Bezárás"
              >
                <X size={24} className="sm:w-8 sm:h-8" />
              </button>
              <button
                className="absolute left-2 sm:left-4 md:left-12 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-1 sm:p-2 hover:bg-black/70 transition-colors z-50"
                onClick={() => setLightboxIndex((lightboxIndex - 1 + apartman.gallery.length) % apartman.gallery.length)}
                aria-label="Előző kép"
              >
                <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
              </button>
              <img
                src={apartman.gallery[lightboxIndex]}
                alt={apartman.name + ' nagy kép'}
                className="max-h-[80vh] max-w-[90vw] rounded-xl sm:rounded-2xl shadow-lg border-2 sm:border-4 border-white object-contain animate-fadein"
                onClick={e => e.stopPropagation()}
              />
              <button
                className="absolute right-2 sm:right-4 md:right-12 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-1 sm:p-2 hover:bg-black/70 transition-colors z-50"
                onClick={() => setLightboxIndex((lightboxIndex + 1) % apartman.gallery.length)}
                aria-label="Következő kép"
              >
                <ChevronRight size={24} className="sm:w-8 sm:h-8" />
              </button>
              {/* Lightbox háttérre kattintva zárás */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setLightboxOpen(false)}
              />
            </div>
          )}
          {/* Név, leírás, részletek */}
          <h1 className="text-2xl sm:text-3xl font-bold text-deepBlue mb-2 text-center md:text-left">{apartman.name}</h1>
          <div ref={leirasRef} className={`transition-all duration-200 mb-4 text-base sm:text-lg text-gray-700 text-center md:text-left rounded-xl px-2 py-1 ${leirasAnim ? 'border-4 border-green-500 animate-[roza-blink_0.6s_ease-in-out_3]' : ''}`}>{apartman.short}</div>
          <p className="text-sm sm:text-base text-gray-500 mb-6 text-center md:text-left">{apartman.details}</p>
          {/* Jellemzők */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-4 justify-center md:justify-start">
            {apartman.features.map((feature, i) => (
              <div key={i} className="flex flex-row items-center gap-2 text-deepBlue/90 text-sm sm:text-base">
                {React.createElement(feature.icon, { className: 'w-4 h-4 sm:w-5 sm:h-5 text-gold' })}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* Árak */}
          {'prices' in apartman && (
            <div className="w-full bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 mb-6">
              <h3 className="font-bold text-green-700 mb-2 text-sm sm:text-base">Árak:</h3>
              <p className="text-green-800 text-sm sm:text-base"><span className="font-semibold">{apartman.slug === 'sunset-loft' ? '' : 'Július-augusztus:'}</span> {apartman.prices.high}</p>
              <p className="text-green-800 text-sm sm:text-base"><span className="font-semibold">{apartman.slug === 'sunset-loft' ? '' : 'Elő- és utószezon:'}</span> {apartman.prices.low}</p>
              {apartman.prices.extra && (
                <p className="text-green-800 mt-1 text-sm sm:text-base">{apartman.prices.extra}</p>
              )}
            </div>
          )}
          
          {/* Extra élmény */}
          {'extra' in apartman && (
            <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-6">
              <h3 className="font-bold text-blue-700 mb-2 text-sm sm:text-base">Extra élmény:</h3>
              <p className="text-blue-800 flex items-center gap-2 text-sm sm:text-base">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                {apartman.extra}
              </p>
            </div>
          )}
          
          {/* CTA */}
          <a
            href={`/fizetes/${apartman.slug}`}
            className="font-bold rounded-xl py-2 px-4 sm:px-6 shadow bg-black text-white hover:bg-gray-900 transition-colors mt-2 mb-6 block text-center md:text-left w-full md:w-auto text-sm sm:text-base"
          >
            Igen, ezt az apartmant szeretném!
          </a>
        </div>
        {/* Jobb oldal: Róza asszisztens */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full md:w-[340px] flex flex-col items-center md:items-end mt-4 md:mt-0"
        >
          <div className="flex flex-col items-center md:items-end w-full">
            <div className="flex items-center mb-4 w-full justify-center md:justify-end">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-gold to-yellow-200 flex items-center justify-center shadow-lg border-3 sm:border-4 border-white mr-2 sm:mr-3">
                <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow" />
              </div>
              <div className="bg-white rounded-2xl shadow px-3 sm:px-4 py-2 sm:py-3 text-deepBlue font-medium text-sm sm:text-base w-full max-w-[260px] sm:max-w-xs border border-gold/30 min-h-[64px] flex items-center">
                {rozaBubble}
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full sm:max-w-xs md:w-[260px]">
              {/* Ingyenes foglalás shimmer CTA */}
              <ShimmerButton asChild>
                <a
                  href={`/fizetes/${apartman.slug}`}
                  className="w-full text-center font-semibold rounded-xl py-2 px-4 shadow text-white bg-gold/90 hover:bg-gold transition-colors text-sm sm:text-base"
                >
                  Ingyenes foglalás
                </a>
              </ShimmerButton>
              {/* Messenger kapcsolat */}
              <a
                href="https://m.me/zadarszallas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold rounded-xl py-2 px-3 sm:px-4 shadow transition-colors text-sm sm:text-base"
              >
                <span>Privát kérdésed van? Írj Messengeren!</span>
              </a>
              {/* Facebook csoport */}
              <a
                href="https://www.facebook.com/groups/1327638613936773"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full bg-blue-50 hover:bg-blue-100 text-blue-900 font-semibold rounded-xl py-2 px-3 sm:px-4 shadow transition-colors text-xs sm:text-sm"
              >
                <span>Csatlakozz Facebook csoportunkhoz!</span>
              </a>
              {/* További Róza gombok */}
              <button
                className={`w-full font-semibold rounded-xl py-2 px-3 sm:px-4 shadow transition-colors text-left text-sm sm:text-base ${rozaState==='leiras' ? 'bg-green-500 text-white animate-[roza-blink_0.6s_ease-in-out_3]' : 'bg-gold/90 hover:bg-gold text-white'}`}
                onClick={() => setRozaState('leiras')}
              >
                Apartman leírás
              </button>
              <button
                className={`w-full font-semibold rounded-xl py-2 px-3 sm:px-4 shadow transition-colors text-left text-sm sm:text-base ${rozaState==='elerhetoseg' ? 'bg-gold text-white ring-2 ring-gold' : 'bg-gold/90 hover:bg-gold text-white'}`}
                onClick={() => setRozaState('elerhetoseg')}
              >
                Elérhetőségek
              </button>
              <button
                className={`w-full font-semibold rounded-xl py-2 px-3 sm:px-4 shadow transition-colors text-left text-sm sm:text-base ${rozaState==='gyik' ? 'bg-gold text-white ring-2 ring-gold' : 'bg-gold/90 hover:bg-gold text-white'}`}
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
        .animate-fadein {
          animation: fadein 0.3s;
        }
        @keyframes fadein {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ApartmanReszletek;
