import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <NavLink to="/" className="block py-2 pr-4 pl-3 text-white md:p-0 hover:text-white" aria-current="page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/learn-how-to-play" className="block py-2 pr-4 pl-3 text-white md:p-0 hover:text-white">
                Learn how to play
              </NavLink>
            </li>

            <li>
              <NavLink to="/game" className="block py-2 pr-4 pl-3 text-white md:p-0 hover:text-white">
                Play
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block py-2 pr-4 pl-3 text-white md:p-0 hover:text-white">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="block py-2 pr-4 pl-3 text-white md:p-0 hover:text-white">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/asd123" className="block py-2 pr-4 pl-3 text-white md:p-0 hover:text-white">
                Error
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
