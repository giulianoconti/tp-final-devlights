import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-hunterGreen">
      <span className="text-white text-sm sm:text-center">
        © {currentYear} <Link className="border-b" to="/about-us">Grupo 2.</Link> Devlights Bootcamp.
      </span>
    </footer>
  );
};
