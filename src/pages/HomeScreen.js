import { Link } from "react-router-dom";
import svgQR from "../images/QR.svg";

export const HomeScreen = () => {
  return (
    <section className="bg-gray-800 flex flex-col min-h-[90vh]">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between mt-6">
          <div className="flex mx-auto sm:mx-0 sm:mr-16">
            <div className="flex ml-16">
              <div className="-ml-16">
                <img
                  className="bg-black h-40 w-[115.16px] rounded-lg"
                  src="https://deckofcardsapi.com/static/img/AH.png"
                  alt="ACE OF HEARTS"
                />
              </div>
              <div className="-ml-16">
                <img
                  className="bg-black h-40 w-[115.16px] rounded-lg"
                  src="https://deckofcardsapi.com/static/img/JS.png"
                  alt="JACK OF SPADES"
                />
              </div>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <img className="w-64 h-[325.7px] mx-auto mt-6 sm:mt-0" src={svgQR} alt="QR" />
          </div>
        </div>

        <div className="mb-16 sm:mb-28 md:mb-32 mt-8">
          <h2 className="text-bittersweetShimmer text-center sm:text-left text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
            Grupo 2 - Blackjack App
          </h2>
          <div className="text-eggShell text-center sm:text-left text-2xl sm:text-3xl md:text-4xl">
            <p className="mb-2">
              Para este proyecto creamos un juego de <span className="font-semibold">Blackjack.</span>
            </p>
            <p className="mb-2">Para obtener las cartas utilizamos nuestra propia API cargada en Firebase</p>
            <p className="mb-2">Para los estilos usamos Tailwind</p>
          </div>
        </div>

        <div className="flex justify-center text-center text-4xl sm:text-5xl my-10">
          <Link
            className="text-bittersweetShimmer hover:text-red-500 underline hover:underline-offset-4 font-medium"
            to="/aprender-a-jugar"
          >
            APRENDER A JUGAR
          </Link>
        </div>

        <div className="flex justify-end mb-4 mr-4">
          <a
            className="rounded px-3 py-2 m-1 shadow-lg bg-bittersweetShimmer hover:bg-red-500"
            aria-label="Ir a GitHub"
            href="https://github.com/GiuliannT/tp-final-devlights"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              role="img"
              name="GitHub"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-800 fill-current text-center"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
