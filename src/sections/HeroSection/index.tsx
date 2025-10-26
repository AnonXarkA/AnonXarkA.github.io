// --- CORRECTED IMPORT PATH ---
import { HeroContent } from "./components/HeroContent.tsx";

export const HeroSection = () => {
  return (
    <section className="box-border caret-transparent">
      <HeroContent />
      <div className="absolute bg-white box-border caret-transparent h-[56.25px] w-[56.25px] right-[18.75px] bottom-[100px] md:h-48 md:w-48 md:right-16"></div>
    </section>
  );
};