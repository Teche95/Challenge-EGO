import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SectionItem = {
  label: string;
  to?: string;
};

const SECTIONS: SectionItem[][] = [
  [
    { label: "Modelos", to: "/" },
    { label: "Servicios y Accesorios" },
    { label: "Financiación" },
    { label: "Reviews y Comunidad" },
  ],
  [
    { label: "Toyota Mobility Service" },
    { label: "Toyota Gazoo Racing" },
    { label: "Toyota Híbridos" },
  ],
  [{ label: "Concesionarios" }, { label: "Test Drive" }, { label: "Contacto" }],
  [
    { label: "Actividades" },
    { label: "Servicios al Cliente" },
    { label: "Ventas Especiales" },
    { label: "Innovación" },
    { label: "Prensa" },
    { label: "Acerca de..." },
  ],
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-40 transition-opacity ",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-93.75 bg-white shadow-xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className=" h-14 px-5 flex justify-end items-center gap-2  border-b text-right">
          <span className="text-sm">Cerrar</span>
          <button onClick={onClose} aria-label="Cerrar menú">
            <X size={20} />
          </button>
        </div>

        <nav className="px-12 py-6 space-y-10 text-sm text-right ">
          {SECTIONS.map((section, index) => (
            <div
              key={index}
              className={cn(
                "py-1 lg:py-5",
                index === SECTIONS.length - 1 && "bg-gray-100 -mx-12 px-12"
              )}
            >
              <ul key={index} className="space-y-3">
                {section.map((item) => (
                  <li key={item.label} className="text-[20px] hover:underline">
                    {item.to ? (
                      <Link
                        to={item.to}
                        onClick={onClose}
                        className="block cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="cursor-pointer" onClick={onClose}>
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};
