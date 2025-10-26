import { Header } from "../../sections/Header/index.tsx";
import { HeroSection } from "../../sections/HeroSection/index.tsx"; // Note: This assumes you have an 'index.tsx' in 'src/sections/HeroSection/' that exports 'HeroSection'

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent">
      <Header />
      <HeroSection />
    </div>
  );
};