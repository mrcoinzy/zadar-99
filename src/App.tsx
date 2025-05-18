
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useLayoutEffect, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ApartmanReszletek from "./pages/ApartmanReszletek";

const queryClient = new QueryClient();

// ScrollToTop komponens, amely minden navigációkor felgörget
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  
  // useLayoutEffect a DOM manipulációhoz - ez a renderelés előtt fut le
  useLayoutEffect(() => {
    // Azonnali görgetés a tetejére - első prioritású
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Ne legyen animáció, azonnali görgetés
    });
  }, [pathname, navigationType]);
  
  // useEffect a renderelés utáni biztonsági futtatáshoz
  useEffect(() => {
    // Extra biztosíték - késleltetett futtatás
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    
    // Második késleltetett futtatás a 100%-os biztossághoz
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }, [pathname]);
  
  return null;
};

const App = () => {
  // Alkalmazás első betöltésekor is görgetünk
  useEffect(() => {
    // Azonnali görgetés a tetejére
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Második késleltetett futtatás
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
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
};

export default App;
