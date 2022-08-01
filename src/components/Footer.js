import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hunterGreen h-16 flex items-center justify-center md:justify-between">
      <span className="text-eggShell text-sm md:ml-4">
        © {currentYear}{" "}
        <Link className="border-b border-b-eggShell hover:text-white hover:border-b-white" to="/sobre-nosotros">
          Grupo 2.
        </Link>{" "}
        Devlights Bootcamp.
      </span>
    </footer>
  );
};
