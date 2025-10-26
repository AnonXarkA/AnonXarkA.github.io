// --- CORRECTED IMPORT PATH ---
import { MenuButton } from "./components/MenuButton.tsx";

export const Header = () => {
  return (
    <header className="fixed items-center box-border caret-transparent flex h-[50px] w-full z-[100] pl-[18.75px] left-0 top-0 md:pl-16">
      <MenuButton />
    </header>
  );
};