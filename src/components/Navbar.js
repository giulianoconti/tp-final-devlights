import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className="h-16">
      <nav className="fixed z-50 h-16 w-full bg-hunterGreen text-eggShell items-center py-3">
        <div className="flex flex-wrap justify-between items-center">
          <Link className="flex items-center pl-4 md:w-36" to="/">
            <img src="logo192.png" className="mr-3 h-9 w-9" alt="Logo" />
            <span className="text-xl font-semibold">Blackjack</span>
          </Link>

          <div className="flex h-6 pr-4 md:hidden">
            <button
              data-collapse-toggle="mobile-menu-3"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
              onClick={handleMenu}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`justify-end items-center bg-hunterGreen mt-3 w-full md:w-2/3 md:pr-4 md:mt-0 md:flex ${
              !openMenu && "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li onClick={closeMenu}>
                <NavLink to="/" className="block py-2 px-4 md:p-0 hover:text-white">
                  Inicio
                </NavLink>
              </li>
              <li onClick={closeMenu}>
                <NavLink to="/aprender-a-jugar" className="block py-2 px-4 md:p-0 hover:text-white">
                  Aprender a jugar
                </NavLink>
              </li>
              <li onClick={closeMenu}>
                <NavLink to="/juego" className="block py-2 px-4 md:p-0 hover:text-white">
                  Jugar
                </NavLink>
              </li>
              <li onClick={closeMenu}>
                <NavLink to="/contacto" className="block py-2 px-4 md:p-0 hover:text-white">
                  Contacto
                </NavLink>
              </li>
              <li onClick={closeMenu}>
                <NavLink to="/sobre-nosotros" className="block py-2 px-4 md:p-0 hover:text-white">
                  Sobre Nosotros
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
