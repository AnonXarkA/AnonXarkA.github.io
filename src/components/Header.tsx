import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onNavigate: (index: number) => void;
  currentSection: number;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/", index: 0 },
    { name: "About", path: "/about", index: 1 },
    { name: "Education", path: "/education", index: 2 },
    { name: "Skills", path: "/skills", index: 3 },
    { name: "Publications", path: "/publications", index: 4 },
    { name: "Projects", path: "/projects", index: 5 },
    { name: "Experience", path: "/experience", index: 6 },
    { name: "Contact", path: "/contact", index: 7 },
  ];

  // const isActive = (path: string) => {
  //   return location.pathname === path;
  // };

  const isActive = (linkIndex: number) => linkIndex === currentSection;

  const handleNavClick = (index: number) => {
    onNavigate(index);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[50px] flex items-center justify-between px-4 md:px-16 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <button
        onClick={() => onNavigate(0)}
        className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
      >
        AnonXarkA
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNavClick(link.index)}
            className="relative text-white hover:text-blue-400 transition-colors duration-200 py-2"
          >
            {link.name}
            {isActive(link.index) && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={toggleMenu}>
        {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[50px] left-0 w-full bg-black bg-opacity-95 backdrop-blur-sm flex flex-col items-center py-4 md:hidden border-t border-gray-800"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.index)}
                className={`block w-full text-center py-3 transition-colors duration-200 ${
                  isActive(link.index)
                    ? "text-blue-400 bg-gray-900"
                    : "text-white hover:text-blue-400 hover:bg-gray-900"
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
