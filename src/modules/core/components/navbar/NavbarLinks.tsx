import { NavLink } from "react-router-dom";
import { NavLinksProps } from "@/constants/index";

export const NavbarLinks = () => {
  return (
    <nav>
      <ul className=" hidden gap-10 lg:flex">
        {NavLinksProps.links.map(({ href, name }) => (
          <li key={name} className="relative h-full">
            {href ? (
              <NavLink to={href} end>
                {({ isActive }) => (
                  <>
                    <span
                      className={`text-sm font-medium transition ${
                        isActive
                          ? "text-[#D0021B] font-semibold"
                          : "text-[#373737] hover:text-neutral-700"
                      }`}
                    >
                      {name}
                    </span>

                    <span
                      className={`absolute left-0 -bottom-5 h-1 w-full bg-red-600 z-10 transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ) : (
              <span className="text-sm font-semibold text-[#373737] cursor-default">
                {name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
