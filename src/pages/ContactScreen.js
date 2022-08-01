import { useState } from "react";

export const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabledInput, setDisabledInput] = useState(false);
  const [showSuccesSendMessage, setShowSuccesSendMessage] = useState(false);

  function onNameChange(event) {
    setName(event.target.value);
  }
  function onEmailChange(event) {
    setEmail(event.target.value);
  }
  function onMessageChange(event) {
    setMessage(event.target.value);
  }
  function handleClickSubmit(event) {
    event.preventDefault();
    const templateId = "template_zc5le4r";
    const serviceId = "default_service";
    if (message !== "" && name !== "" && email !== "") {
      sendMessage(serviceId, templateId, { message: message, from_name: name, reply_to: email });
    } else {
      console.log("Debes completar todos los campos");
    }
  }

  function sendMessage(serviceId, templateId, variables) {
    if (window.emailjs) {
      window.emailjs
        .send(serviceId, templateId, variables, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        .then((res) => {
          console.log("Email enviado correctamente");
          setDisabledInput(true);
          setShowSuccesSendMessage(true);
        })
        .catch((err) => console.error("Se ha producido el siguiente error: ", err));
    } else {
      console.log("No se pudo acceder a window.emailjs");
    }
  }

  return (
    <div className="flex min-h-[90vh] items-center bg-gray-800 text-gray-100">
      <div className="bg-hunterGreen mx-auto max-w-lg p-5 rounded">
        <h1 className="text-4xl font-medium">Ponte en contacto con nosotros</h1>
        <p className="mt-3">Completa los siguientes datos:</p>

        <form className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                className="peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent py-2.5 px-0 text-sm text-gray-300 focus:text-white focus:border-white focus:outline-none focus:ring-0 disabled:opacity-75"
                type="text"
                name="name"
                id="name"
                placeholder=" "
                disabled={disabledInput}
                onChange={onNameChange}
              />
              <label
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white"
                htmlFor="name"
              >
                Tu nombre
              </label>
            </div>
            <div className="relative z-0">
              <input
                className="peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent py-2.5 px-0 text-sm text-gray-300 focus:text-white focus:border-white focus:outline-none focus:ring-0"
                type="text"
                name="email"
                id="email"
                placeholder=" "
                disabled={disabledInput}
                onChange={onEmailChange}
              />
              <label
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white"
                htmlFor="email"
              >
                Tu e-mail
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                className="peer block w-full appearance-none border-0 border-b border-gray-400 bg-transparent py-2.5 px-0 text-sm text-gray-300 focus:text-white focus:border-white focus:outline-none focus:ring-0 resize-none"
                name="message"
                id="message"
                rows="5"
                placeholder=" "
                disabled={disabledInput}
                onChange={onMessageChange}
              ></textarea>
              <label
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-white peer-focus:dark:text-white"
                htmlFor="message"
              >
                Tu mensaje
              </label>
            </div>
          </div>

          <div
            className={`bg-green-100 rounded-lg py-5 px-6 my-3 text-base text-green-700 inline-flex items-center w-full ${
              !showSuccesSendMessage && "hidden"
            }`}
            role="alert"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check-circle"
              className="w-4 h-4 mr-2 fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
              ></path>
            </svg>
            Tu mensaje se ha enviado correctamente, recibirás respuesta a la brevedad.
          </div>

          <div className="flex justify-end mt-5">
            <button
              type="submit"
              className="bg-black text-eggShell hover:text-white rounded-md px-10 py-2"
              onClick={handleClickSubmit}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
