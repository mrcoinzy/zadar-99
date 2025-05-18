
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Biztosítsuk, hogy az alkalmazás mindig a tetejéről indul
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}

// Kezdeti görgetés a tetejére
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(<App />);
