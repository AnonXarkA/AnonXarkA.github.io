// src/components/Layout.tsx
import React from "react";
// --- CORRECTED IMPORTS ---
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { BackgroundOverlay } from "./BackgroundOverlay.tsx";
// -------------------------
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  onNavigate?: (index: number) => void;
  currentSection?: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigate, currentSection = 0 }) => {
  const location = useLocation();

  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white font-orbitron">
      <BackgroundOverlay />
      {onNavigate && <Header onNavigate={onNavigate} currentSection={currentSection} />}
      <main className="relative z-20 min-h-[calc(100vh-120px)] pt-[50px] flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex flex-col justify-center items-center"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};