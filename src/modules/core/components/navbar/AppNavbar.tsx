import Logo from "../logo/Logo";
import { NavbarLinks } from "./NavbarLinks";
import { TextAlignJustify } from "lucide-react";

type AppNavbarProps = {
  onOpenSidebar: () => void;
};

export const AppNavbar = ({ onOpenSidebar }: AppNavbarProps) => {
  return (
    <header className="border-b">
      <div className="flex items-center px-3.75 py-3.75">
        <div className="flex items-center sm:gap-52">
          <Logo />
          <NavbarLinks />
        </div>

        <div className="flex-1" />

        <button
          onClick={onOpenSidebar}
          className="text-2xl flex items-center font-normal text-[14px] gap-3"
          aria-label="Abrir menú"
        >
          Menú
          <TextAlignJustify />
        </button>
      </div>
    </header>
  );
};

export default AppNavbar;
