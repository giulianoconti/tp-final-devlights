import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";

export const AboutUsScreen = () => {
  return (
    <div className="relative pt-20 pb-8 md:pt-16 bg-gray-800 min-h-[90vh] flex flex-col justify-center">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-eggShell">
            <span className="font-light">Nuestro</span> Equipo
          </h2>
        </header>

        {/* Team section  */}
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          <div className="bg-hunterGreen m-2 py-4 rounded flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div className="relative overflow-hidde mb-12 hover-grayscale-0 wow fadeInUp">
              <div className="relative overflow-hidden px-6">
                <img className="w-32 h-32 rounded-full mx-auto bg-bittersweetShimmer" src={avatar1} alt="avatar1" />
              </div>

              <div className="pt-6 text-center">
                <p className="text-eggShell text-xl leading-normal font-bold mb-1">Giuliano Conti</p>
                <p className="text-eggShell leading-relaxed">Web Developer</p>

                <div className="flex justify-center mt-2 mb-5 space-x-2">
                  <a
                    className="rounded px-3 py-2 m-1 shadow-lg bg-bittersweetShimmer hover:bg-red-500"
                    aria-label="Ir a GitHub de Giuliano Conti"
                    href="https://github.com/giulianoconti"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5 text-eggShell fill-current text-center"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>

                  <a
                    className="rounded px-3 py-2 m-1 shadow-lg bg-bittersweetShimmer hover:bg-red-500"
                    aria-label="Ir a LinkedIn de Giuliano Conti"
                    href="https://www.linkedin.com/in/giulianoconti/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-eggShell"
                      role="img"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-hunterGreen m-2 py-4 rounded flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div className="relative overflow-hidde mb-12 hover-grayscale-0 wow fadeInUp">
              <div className="relative overflow-hidden px-6">
                <img className="w-32 h-32 rounded-full mx-auto bg-bittersweetShimmer" src={avatar2} alt="avatar2" />
              </div>

              <div className="pt-6 text-center">
                <p className="text-eggShell text-xl leading-normal font-bold mb-1">Martin Rotelli</p>
                <p className="text-eggShell leading-relaxed">Web Developer</p>

                <div className="flex justify-center mt-2 mb-5 space-x-2">
                  <a
                    className="rounded px-3 py-2 m-1 shadow-lg bg-bittersweetShimmer hover:bg-red-500"
                    aria-label="Ir a GitHub de Martin Rotelli"
                    href="https://github.com/MartinRot/Pokedex"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-eggShell fill-current text-center"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>

                  <a
                    className="rounded px-3 py-2 m-1  shadow-lg bg-bittersweetShimmer hover:bg-red-500"
                    aria-label="Ir a Linkedin de Martin Rotelli"
                    href="https://www.linkedin.com/in/martin-rotelli/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-eggShell"
                      role="img"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-hunterGreen m-2 py-4 rounded flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div className="relative overflow-hidde mb-12 hover-grayscale-0 wow fadeInUp">
              <div className="relative overflow-hidden px-6">
                <img className="w-32 h-32 rounded-full mx-auto bg-bittersweetShimmer" src={avatar3} alt="avatar3" />
              </div>

              <div className="pt-6 text-center">
                <p className="text-eggShell text-xl leading-normal font-bold mb-1">Juan Fernandez</p>
                <p className="text-eggShell leading-relaxed">Web Developer</p>

                <div className="flex justify-center mt-2 mb-5 space-x-2">
                  <a
                    className="rounded px-3 py-2 m-1 shadow-lg bg-bittersweetShimmer hover:bg-red-500"
                    aria-label="Ir a Github de Juan Fernandez"
                    href="https://github.com/juanmfernandez"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-eggShell fill-current text-center"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>

                  <a
                    className="rounded px-3 py-2 m-1  shadow-lg bg-bittersweetShimmer hover:bg-red-500"
                    aria-label="Ir a Linkedin de Juan Fernandez"
                    href="https://www.linkedin.com/in/juan-manuel-fernandez-4b701629/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-eggShell"
                      role="img"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fin team section */}
      </div>
    </div>
  );
};
