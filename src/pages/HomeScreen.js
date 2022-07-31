import React from 'react'
import { useNavigate } from "react-router-dom"

const HomeScreen = () => {

    const navigate = useNavigate()
    function onClick(){
        navigate("/learn-how-to-play")    
    }

  return (

    <section className="homescreen m-0 flex flex-col w-screen justify-center bg-hunterGreen h-screen text-gray-100 ">
        <nav>
            <ul className="flex justify-between text-xl py-8 px-8 md:px-48 ">
            <li>
                <img className='w-24' src="https://deckofcardsapi.com/static/img/0C.png" alt="card" />
            </li>
            <li className="text-eggShell	">
                <li className='text-right'>Integrantes: Giuliano Conti</li>
                <li className='text-right'>Martin Rotelli</li>
                <li className='text-right'>Juan Fernandez</li>                
            </li>
            </ul>
        </nav>

        <h1 className="text-6xl my-auto mx-24 md:mx-48 text-bittersweetShimmer">
            <span className='font-semibold'>Grupo 2 - Blackjack App</span><br />
            <span className="text-4xl text-eggShell">Para este proyecto creamos un juego de <span className="font-semibold">Blackjack.</span><br />
                Para obtener las cartas utilizamos nuestra propia API cargada en Firebase<br />
                Para los estilos usamos Tailwind <br />
                Otra informacion relevante <br />
            </span>
        </h1>

        <button className="text-5xl underline hover:underline-offset-4 my-10 mx-10 md:mx-48 justify-center text-bittersweetShimmer	font-medium" onClick={onClick}>ENTRAR</button>

        <div className="flex justify-end mr-8 mb-4">     
            <button className="rounded px-3 py-2 m-1  shadow-lg bg-bittersweetShimmer " href="" onClick={()=> window.open("https://github.com/GiuliannT/tp-final-devlights", "_blank")}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-800 fill-current text-center">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            </button>
        </div>

    </section>

  )
}

export default HomeScreen