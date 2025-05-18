
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Legkoraibb végrehajtás - görgetés kezelése még a DOM betöltése előtt
// Biztosítsuk, hogy az alkalmazás mindig a tetejéről indul
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

// Kezdeti görgetés a tetejére - nincs animáció, azonnali
window.scrollTo(0, 0);

// DOM elem referenciák közvetlen beállítása
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

// Fontos betöltési események rögzítése
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// DOMContentLoaded eseményre is beállítjuk a görgetést
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

// Alkalmazás renderelése
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Renderelés után is biztosítjuk a felgörgetést
setTimeout(() => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}, 0);

// Még egy késleltetett görgetés a teljes biztonság érdekében
setTimeout(() => {
  window.scrollTo(0, 0);
}, 100);
