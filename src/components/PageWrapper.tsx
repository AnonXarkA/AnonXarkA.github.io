// src/components/PageWrapper.tsx
// --- CORRECTED IMPORTS ---
import { BackgroundOverlay } from "./BackgroundOverlay.tsx";
import { MainContent } from "./MainContent.tsx";
// -------------------------

export const PageWrapper = () => {
  return (
    <div className="relative box-border caret-transparent h-full w-full overflow-hidden">
      <main className="relative box-border caret-transparent h-full w-full left-0 top-0">
        <BackgroundOverlay />
        <MainContent />
      </main>
    </div>
  );
};