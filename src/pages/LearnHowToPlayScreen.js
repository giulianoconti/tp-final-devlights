export const LearnHowToPlayScreen = () => {
  const InformationBoxes = [
    {
      id: 1,
      svgPath:
        "M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z",
      title: "Pedir",
      description:
        "Puedes solicitar cartas extra para mejorar tu mano. Las cartas se pueden pedir de a una hasta que el valor total de la mano sea 21.",
    },
    {
      id: 2,
      svgPath:
        "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm96 328c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v160z",
      title: "Plantarse",
      description:
        "Puedes elegir plantarte y no arriesgar las posibilidades de que tu mano supere los 21 en valor total.",
    },
    {
      id: 3,
      svgPath:
        "M224 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm0-192c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.65-64 64 28.65 64 64 64zm192 48H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
      title: "Dividir",
      description:
        "En ciertas variantes, cuando tus primeras dos cartas tienen el mismo valor (ocho-ocho jota-diez,etc.), puedes realizar apuestas adicionales (igual a la apuesta inicial) y crear una segunda mano con la que jugar contra la banca.",
    },
    {
      id: 4,
      svgPath:
        "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
      title: "Doblar",
      description:
        "Puedes colocar una apuesta extra, igual a la apuesta inicial, recibirás una carta más para tu mano, después de la cual te plantarás automáticamente.",
    },
    {
      id: 5,
      svgPath:
        "M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z",
      title: "Rendirse",
      description:
        "En ciertas variantes del juego, puedes abandonar la mitad de una apuesta y finalizar la mano inmediatamente.",
    },
    {
      id: 6,
      svgPath:
        "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z",
      title: "Seguro",
      description:
        "En ciertas variantes del juego, cuando la primera carta de la banca es un as, puedes apostar la mitad de tu apuesta original y recibir un pago de 2 a 1 si la banca tiene blackjack. Si la banca tiene blackjack, empatarán la mano.",
    },
    {
      id: 7,
      svgPath:
        "M416 192c0-88.37-93.12-160-208-160S0 103.63 0 192c0 34.27 14.13 65.95 37.97 91.98C24.61 314.22 2.52 338.16 2.2 338.5A7.995 7.995 0 0 0 8 352c36.58 0 66.93-12.25 88.73-24.98C128.93 342.76 167.02 352 208 352c114.88 0 208-71.63 208-160zm-224 96v-16.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V96c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v16.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07V288c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8zm346.01 123.99C561.87 385.96 576 354.27 576 320c0-66.94-53.49-124.2-129.33-148.07.86 6.6 1.33 13.29 1.33 20.07 0 105.87-107.66 192-240 192-10.78 0-21.32-.77-31.73-1.88C207.8 439.63 281.77 480 368 480c40.98 0 79.07-9.24 111.27-24.98C501.07 467.75 531.42 480 568 480c3.2 0 6.09-1.91 7.34-4.84 1.27-2.94.66-6.34-1.55-8.67-.31-.33-22.42-24.24-35.78-54.5z",
      title: "Cobrar 1 a 1",
      description:
        "En ciertas variantes del juego, puedes abandonar la mitad de una apuesta y finalizar la mano inmediatamente.",
    },
  ];
  const svgCheck = (
    <svg
      className="inline h-5 w-5 fill-green-500 mx-2"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 405.272 405.272"
    >
      <path
        d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836
  c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064
  c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"
      />
    </svg>
  );
  const svgCross = (
    <svg
      className="inline h-5 w-5 fill-red-500 mx-2"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 460.775 460.775"
    >
      <path
        d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
      />
    </svg>
  );

  return (
    <>
      <div className="bg-gray-800 flex flex-col min-h-screen items-center justify-start">
        <div className="container">
          <div className="p-2">
            <h3 className="font-medium leading-tight text-3xl my-2 text-bittersweetShimmer">Reglas del blackjack</h3>
            <p className="text-base font-light leading-relaxed mt-0 mb-4 text-eggShell">
              Las reglas del blackjack pueden comprenderse en minutos. Sin embargo, dependiendo de la variante que se
              esté jugando, las reglas de la mesa y las opciones de apuestas pueden diferir. Existe una gran variedad de
              juegos de blackjack y nosotros ofrecemos la versión más simple.
            </p>
            <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-bittersweetShimmer">
              Reglas generales del juego
            </h3>
            <p className="text-base font-light leading-relaxed mt-0 mb-4 text-eggShell">
              En cada ronda de blackjack pueden elegir la apuesta haciendo clic en el icono de la ficha que representa
              el valor correcto de una apuesta deseada. Después de colocar todas las apuestas, recibirás dos cartas. El
              objetivo de cualquier mano de blackjack es derrotar a la banca. Para esto, debes tener una mano que puntúe
              más alto que la mano de la banca, pero que no supere los 21 puntos en valor total. O bien, puedes ganar
              con una puntuación inferior a 22 cuando la mano de la banca supera los 21 puntos. Cuando el valor total de
              tu mano es de 22 o más, esto se conoce comúnmente como "bancarrota", y automáticamente perderás cualquier
              dinero apostado. Cuando se te indique, puedes pedir cartas para tu mano para incrementar el valor total.
              Cuando hayas terminado de agregar cartas a tu mano, la banca completará su mano. Estas son reglas
              estrictas de cómo hacerlo, que varían según la variante de blackjack que estés jugando. La mejor mano del
              juego ("blackjack") está compuesta por un as y cualquier carta con un valor de diez, incluyendo cualquier
              jota, reina, rey o diez. El blackjack debe repartirse en las dos primeras cartas para ser válido y es
              invencible. Sin embargo, puede empatarse si la banca también tiene blackjack. En el blackjack, las cartas
              de dieces, jotas, reinas y reyes tienen un valor de 10 cada una. Los ases pueden tener dos valores
              diferentes: uno u once (puedes elegir cuál). Por ejemplo, cuando combinas un as y un cuatro, la mano puede
              valer 5 o 15. Cada vez que un as esté valorado como 11, el total superior siempre se refiere como total
              "blando", por lo que en el ejemplo, el 15 sería un "15 blando". Los jugadores pueden solicitar una carta
              extra, o "pedir carta", o doblar una mano blanda sin riesgo a quedar en bancarrota. Sin embargo, una mano
              blanda no es garantía de mejora después de pedir carta. Las manos ganadoras en el blackjack generalmente
              otorgan premios en una proporción 1 a 1 (1:1, también conocida como "cobrar 1 a 1"). Por lo tanto, si
              apuestas 20 fichas y ganas tu mano, normalmente recibirás 20 fichas en ganancias además de tu apuesta
              original. Cuando tu mano empata con la banca, se conoce como "empate". En este caso, se te devolverá tu
              apuesta, pero no ganarás dinero extra. Si pierdes una mano, perderás tu apuesta con la casa. En todos los
              juegos de blackjack, la banca deberá conseguir ya sea una mano dura o blanda con un total de al menos 17.
            </p>

            <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-bittersweetShimmer">
              Cómo dividir, doblar y rendirse
            </h3>
            <p className="text-base font-light leading-relaxed mt-0 mb-4 text-eggShell">
              Tus acciones en el blackjack no se limitan solamente a pedir cartas o quedarte con lo que se te repartió
              inicialmente. En ciertas circunstancias, se te presentarán varias opciones adicionales. Estas opciones
              dependen de las dos cartas iniciales que se te repartieron. Estas opciones incluyen:
            </p>

            <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-bittersweetShimmer">Dividir</h3>
            <p className="text-base font-light leading-relaxed mt-0 mb-4 text-eggShell">
              En esencia, dividir convierte una mano en dos, lo que te brinda más oportunidades de ganar. Cada vez que
              divides una mano, puedes hacer una apuesta adicional en la segunda mano recién creada, de igual valor a la
              apuesta original. La acción de dividir puede realizarse en las siguientes situaciones: Se te reparten dos
              cartas iniciales de igual valor (diez-rey, seis-seis, etc.). Ambas manos se jugarán de manera
              independiente y ganarán, perderán o empatarán con la banca por su propio mérito.
            </p>
            <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-bittersweetShimmer">Doblar</h3>
            <p className="text-base font-light leading-relaxed mt-0 mb-4 text-eggShell">
              La opción de doblar te permite doblar tu apuesta inicial, pero solo en algunas circunstancias: Una vez
              repartidas las dos primeras cartas, puedes realizar una apuesta adicional (igual a la apuesta original) y
              después recibirás una carta extra para completar tu mano. Todos nuestros juegos de blackjack te permiten
              doblar sean cuales sean tus primeras dos cartas.
            </p>
            <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-bittersweetShimmer">Rendirse</h3>
            <p className="text-base font-light leading-relaxed mt-0 mb-4 text-eggShell">
              En algunos juegos de blackjack, rendirte te permite abandonar tu mano y llevarte el 50 % de tu apuesta
              original si crees que vas a perder contra la banca, siempre que esté permitido en la variante que estás
              jugando.
            </p>

            <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-bittersweetShimmer">Opciones de juego</h3>
            <p className="text-base font-light leading-relaxed mt-0 mb-4 text-eggShell">
              Deberás tomar una serie de decisiones durante cada ronda de blackjack. Las decisiones que se te presenten
              dependerán de las cartas que recibas y la variante en la que estés jugando. Las opciones que tienen un
              {svgCheck} están disponibles en nuestro blackjack las otras opciones {svgCross} no están disponibles.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {InformationBoxes.map((box) => {
              let svgCheckOrCross = <svg></svg>;
              let borderColor = "";
              if (box.id > 4) {
                svgCheckOrCross = svgCross;
                borderColor = "border-red-500";
              } else {
                svgCheckOrCross = svgCheck;
                borderColor = "border-green-500";
              }
              return (
                <div
                  className={`bg-white sm:rounded sm:border-4 flex flex-col p-4 h-64 max-w-[384px] my-2 sm:m-2 ${borderColor}`}
                  key={box.id}
                >
                  <div className="flex items-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="cat"
                      className="w-12 h-8"
                      role="img"
                    >
                      <path d={box.svgPath} />
                    </svg>
                    <h2 className="text-gray-900 text-xl leading-tight font-medium ml-2">{box.title}</h2>
                    {svgCheckOrCross}
                  </div>
                  <p className="text-gray-700 text-base mb-4">{box.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
