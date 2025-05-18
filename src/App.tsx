
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useLayoutEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ApartmanReszletek from "./pages/ApartmanReszletek";

const queryClient = new QueryClient();

// ScrollToTop komponens, amely minden navigációkor felgörget
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  
  useLayoutEffect(() => {
    // PUSH (új oldal betöltés), REPLACE (átirányítás) vagy POP (előre/hátra navigálás) esetén is görgetünk
    if (navigationType !== 'REPLACE') {
      // Biztosítjuk, hogy a lap tetejére görgessen az összes esetben
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Ne legyen animáció, azonnali görgetés
      });
      
      // Extra biztosíték - ha az első nem működne
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  }, [pathname, navigationType]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="apartman/:slug" element={<ApartmanReszletek />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
