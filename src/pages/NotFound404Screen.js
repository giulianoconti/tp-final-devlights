import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404Screen = () => {
  return (
    
    <main className="h-screen w-full flex flex-col justify-center items-center bg-hunterGreen ">
      <img className='w-20 mb-10' src="https://deckofcardsapi.com/static/img/0C.png" alt="card" />
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-bittersweetShimmer px-2 text-sm rounded rotate-12 absolute text-eggShell">
            Page Not Found
        </div>

        <button className="mt-10">
          <div
              className="relative inline-block text-sm font-medium text-eggShell group active:text-orange-500 focus:outline-none focus:ring"
          >
              <span
              className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-eggShell group-hover:translate-y-0 group-hover:translate-x-0"
              ></span>

              <span className="relative block px-8 py-3 bg-hunterGreen border border-current ">
              
              <Link to={"/"} className="text-eggShell">Go Home</Link>
              </span>
          </div>            
        </button>
    </main>

  )
}

export default NotFound404Screen