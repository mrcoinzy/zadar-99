
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Minden görgetéssel kapcsolatos beállítást a legkorábban végzünk el
// Biztosítsuk, hogy az alkalmazás mindig a tetejéről indul
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

// Kezdeti görgetés a tetejére - nincs animáció, azonnali
window.scrollTo(0, 0);

// Fontos: először görgetünk, aztán renderelünk
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

// DOMContentLoaded eseményre is beállítjuk a görgetést
document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

const root = createRoot(document.getElementById("root")!);

// Először rendereljük az alkalmazást
root.render(<App />);

// Renderelés után is biztosítjuk a felgörgetést
setTimeout(() => {
  window.scrollTo(0, 0);
}, 0);
