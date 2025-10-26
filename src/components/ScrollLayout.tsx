// src/components/ScrollLayout.tsx

import  { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// --- CORRECTED IMPORTS ---
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { BackgroundOverlay } from "./BackgroundOverlay.tsx";
import { Home } from "../pages/Home.tsx";
import { About } from "../pages/About.tsx";
import { Education } from "../pages/Education.tsx";
import { Skills } from "../pages/Skills.tsx";
import { Publications } from "../pages/Publications.tsx";
import { Projects } from "../pages/Projects.tsx";
import { Experience } from "../pages/Experience.tsx";
import { Contact } from "../pages/Contact.tsx";
// --------------------------
import { motion } from "framer-motion";

const sections = [
  { id: "home", path: "/", component: Home },
  { id: "about", path: "/about", component: About },
  { id: "education", path: "/education", component: Education },
  { id: "skills", path: "/skills", component: Skills },
  { id: "publications", path: "/publications", component: Publications },
  { id: "projects", path: "/projects", component: Projects },
  { id: "experience", path: "/experience", component: Experience },
  { id: "contact", path: "/contact", component: Contact },
];

export const ScrollLayout = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionContentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    // Check if the gtag function exists (it should after the script loads)
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-NE4H7HRMHF', { // Replace with YOUR Measurement ID
        page_path: location.pathname + location.search,
        page_title: document.title // Use the current document title
      });
      console.log(`GA PageView sent for: ${location.pathname}`); // Optional: for debugging
    }
  }, [location]); // Re-run this effect whenever the location changes

  useEffect(() => {
    sectionContentRefs.current = sectionContentRefs.current.slice(0, sections.length);
 }, [sections.length]);

  useEffect(() => {
    const sectionIndex = sections.findIndex((s) => s.path === location.pathname);
    if (sectionIndex !== -1 && sectionIndex !== currentSection) {
      setCurrentSection(sectionIndex);
    }
  }, [location.pathname]);

  useEffect(() => {
    navigate(sections[currentSection].path, { replace: true });
  }, [currentSection, navigate]);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length && !isScrolling) {
      setIsScrolling(true);
      setCurrentSection(index);
      setTimeout(() => setIsScrolling(false), 1000); // 1-second cooldown
    }
  };

// Replace the existing useEffect for handleWheel
useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault(); // Prevent any scrolling during section transition
        return;
      }

      const currentScrollableElement = sectionContentRefs.current[currentSection];
      // If ref is missing for some reason, fallback to original page scroll behavior
      if (!currentScrollableElement) {
        e.preventDefault();
        scrollToSection(currentSection + Math.sign(e.deltaY));
        return;
      }

      const { scrollTop, scrollHeight, clientHeight } = currentScrollableElement;
      const tolerance = 1; // Use tolerance for floating point comparisons
      const isAtTop = scrollTop <= tolerance;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - tolerance;
      const scrollDirection = Math.sign(e.deltaY); // 1 for down, -1 for up

      // Check if attempting to scroll past the boundaries
      if ((scrollDirection > 0 && isAtBottom) || // Scrolling down when at the bottom
          (scrollDirection < 0 && isAtTop)) {    // Scrolling up when at the top
          // At a boundary and scrolling away from content: trigger section scroll
          e.preventDefault(); // Prevent default browser scroll jump
          scrollToSection(currentSection + scrollDirection);
      }
      // Otherwise (not at a boundary, or scrolling towards content while at boundary):
      // Allow the browser's default internal scroll behavior (DO NOT preventDefault).
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false }); // Needs false for preventDefault
    }
    return () => element?.removeEventListener('wheel', handleWheel);
  }, [currentSection, isScrolling, scrollToSection]); // Keep dependencies the same
  
  // Replace the existing useEffect for touch handlers
  useEffect(() => {
    let touchStartY = 0;
    let touchMoved = false;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1 && !isScrolling) {
          touchStartY = e.touches[0].clientY;
          touchMoved = false;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling || touchStartY === 0 || e.touches.length !== 1) return;

      const currentScrollableElement = sectionContentRefs.current[currentSection];
      if (!currentScrollableElement) return;

      const { scrollTop, scrollHeight, clientHeight } = currentScrollableElement;
      const tolerance = 1;
      const isAtTop = scrollTop <= tolerance;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - tolerance;
      const touchCurrentY = e.touches[0].clientY;
      const deltaY = touchStartY - touchCurrentY; // Positive = swiping screen UP (scrolling content DOWN)

      if (!touchMoved && Math.abs(deltaY) > 5) touchMoved = true;

      // Prevent default browser scroll ONLY if trying to swipe *past* a boundary
      if ((isAtTop && deltaY < 0) || // Swiping screen DOWN (scroll up) when at the content top
          (isAtBottom && deltaY > 0)) { // Swiping screen UP (scroll down) when at the content bottom
        e.preventDefault();
      }
      // Allow default internal scrolling otherwise.
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchMoved || isScrolling || touchStartY === 0 || e.changedTouches.length !== 1) {
        touchStartY = 0;
        touchMoved = false;
        return;
      }

      const currentScrollableElement = sectionContentRefs.current[currentSection];
      if (!currentScrollableElement) return;

      const { scrollTop, scrollHeight, clientHeight } = currentScrollableElement;
      const tolerance = 1;
      const isAtTop = scrollTop <= tolerance;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - tolerance;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY; // Positive diff = swipe screen UP
      const threshold = 50; // Minimum distance for a valid swipe

      // Check if swipe distance is sufficient AND we are at the correct boundary
      if (Math.abs(diff) > threshold) {
        if (diff > 0 && isAtBottom) { // Swiped UP screen AND at the content bottom
          scrollToSection(currentSection + 1); // Go to next section
        } else if (diff < 0 && isAtTop) { // Swiped DOWN screen AND at the content top
          scrollToSection(currentSection - 1); // Go to previous section
        }
      }

      touchStartY = 0;
      touchMoved = false;
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('touchstart', handleTouchStart, { passive: true });
      element.addEventListener('touchmove', handleTouchMove, { passive: false }); // Needs false for preventDefault
      element.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    return () => {
      element?.removeEventListener('touchstart', handleTouchStart);
      element?.removeEventListener('touchmove', handleTouchMove);
      element?.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling, scrollToSection]); // Keep dependencies the same

// Replace the existing useEffect for handleKeyDown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return; // Ignore during animation

      const currentScrollableElement = sectionContentRefs.current[currentSection];
      // If ref is missing, prevent section change for safety but allow other keys
      if (!currentScrollableElement && (e.key === "ArrowDown" || e.key === "PageDown" || e.key === "ArrowUp" || e.key === "PageUp" || e.key === "Home" || e.key === "End")) {
         e.preventDefault();
         return;
      }

      let targetSection = currentSection;
      let shouldPreventDefault = false; // Flag to prevent default only when changing sections or definitely at boundary scroll

      // Check scroll position only if element exists
      if(currentScrollableElement){
         const { scrollTop, scrollHeight, clientHeight } = currentScrollableElement;
         const tolerance = 1;
         const isAtTop = scrollTop <= tolerance;
         const isAtBottom = scrollTop + clientHeight >= scrollHeight - tolerance;

         if (e.key === "ArrowDown" || e.key === "PageDown") {
             if (isAtBottom) { // If at bottom, prepare to go to next section
                 targetSection = currentSection + 1;
                 shouldPreventDefault = true; // Prevent default page jump
             }
             // else: Not at bottom, allow default internal scroll down (don't prevent default)
         } else if (e.key === "ArrowUp" || e.key === "PageUp") {
             if (isAtTop) { // If at top, prepare to go to previous section
                 targetSection = currentSection - 1;
                 shouldPreventDefault = true; // Prevent default page jump
             }
             // else: Not at top, allow default internal scroll up (don't prevent default)
         }
      }

      // Handle Home/End unconditionally for section change
      if (e.key === "Home") {
        targetSection = 0;
        shouldPreventDefault = true; // Always prevent default for Home/End
      } else if (e.key === "End") {
        targetSection = sections.length - 1;
        shouldPreventDefault = true; // Always prevent default for Home/End
      }

      // Determine if any scroll-related key was pressed
      const requiresScrollAction = (e.key === "ArrowDown" || e.key === "PageDown" || e.key === "ArrowUp" || e.key === "PageUp" || e.key === "Home" || e.key === "End");


      // If a section change is intended and valid
      if (requiresScrollAction && targetSection !== currentSection && targetSection >= 0 && targetSection < sections.length) {
        // We are changing sections, prevent default and scroll
        e.preventDefault();
        scrollToSection(targetSection);
      }
      // If no section change, BUT we were at a boundary and shouldPreventDefault was flagged
      // (meaning ArrowUp/Down at Top/Bottom), prevent the default small jump.
      else if (requiresScrollAction && shouldPreventDefault) {
         e.preventDefault();
      }
      // Otherwise (not a scroll key, or not at boundary), allow default key behavior.
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, isScrolling, scrollToSection, sections.length]); // Keep dependencies the same

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black text-white font-orbitron"
    >
      <BackgroundOverlay />
      <Header onNavigate={scrollToSection} currentSection={currentSection} />

      <main className="relative z-20 h-full w-full">
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <motion.div
              key={section.id}
              className="absolute inset-0 w-full h-full"
              initial={false}
              animate={{
                y: `${(index - currentSection) * 100}%`,
                opacity: index === currentSection ? 1 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              {/* This inner div allows scrolling *within* a page if the content is too long */}
              <div
              // ref={el => sectionContentRefs.current[index] = el}
              ref={(el) => { sectionContentRefs.current[index] = el; }}
              className="scrollable-content h-full w-full overflow-y-auto overflow-x-hidden p-4 md:p-8 pt-[70px] pb-16 box-border">
                <Component />
              </div>
            </motion.div>
          );
        })}
      </main>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection
                ? "bg-blue-400 scale-125"
                : "bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Go to ${section.id}`}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};