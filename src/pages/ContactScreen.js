import { useState } from "react";

export const ContactScreen = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
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
    const templateId = 'template_zc5le4r';
    const serviceId = 'default_service';
    if (message !="" && name !="" && email !="" ) {
      sendMessage(serviceId, templateId, {message: message, from_name: name, reply_to: email})  
    } else {
      console.log("Debes completar todos los campos");
    }
  }

  function sendMessage(serviceId, templateId, variables) {
    if (window.emailjs) {
      window.emailjs.send(
        serviceId,
        templateId,
        variables,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ).then(res => {
        console.log('Email enviado correctamente')
      })
      .catch(err => console.error('Se ha producido el siguiente error: ', err))  
    }else{
      console.log('No se pudo acceder a window.emailjs');
    }    
  }

  return <>
    <div className="flex min-h-screen items-center justify-start bg-hunterGreen h-screen text-gray-100">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-4xl font-medium">Ponte en contacto con nosotros</h1>
        <p className="mt-3">Completa los siguientes datos:</p>

        <form className="mt-10" >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " onChange={onNameChange}/>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu nombre</label>
            </div>
            <div className="relative z-0">
              <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " onChange={onEmailChange}/>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu e-mail</label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " onChange={onMessageChange}></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu mensaje</label>
            </div>
          </div>
          <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white" onClick={handleClickSubmit}>Enviar</button>
        </form>
        
      </div>
    </div>  
  </>

};
