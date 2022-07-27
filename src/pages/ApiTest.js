import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getFirestore } from '../firebase'

const ApiTest = () => {
    
  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    
    const db = getFirestore()
    const cardsCollection = db.collection('cards')

    const getDataFromFirestore = async () => {

      setIsLoading(true)

      try{
      const response = await cardsCollection.get()
      if(response.empty) { 
        console.log('No hay cartas')
      }
      setData( response.docs.map((doc) => ({ ...doc.data(), id: doc.id })) )
      
      } catch (err) {
        setError(err)
      }finally{
        setIsLoading(false)
      }

    }

    console.log(data[getRandomInt(52)])
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    } 
    
    getDataFromFirestore()        

  }, [])

  if( isLoading ) {
    return <p>Cargando</p>
  } else if ( error ) {
    return <p>Ha habido un error {error.message}</p>
  }else{
  return (

    <div className='grid grid-rows-6 grid-flow-col gap-4'>

        {data.map((card) => {

          return <div className=''>
          
          <body>
            <div className="container mx-auto ">
                <div className="flex items-center justify-center mt-5">
                    <div className="bg-white p-6 rounded-2xl">
                                                
                        <div className="flex flex-col">

                            <div>
                                <h2 className="font-bold text-gray-600 text-center">{card.id}</h2>
                            </div>

                            <div className="">
                                <div className="flex flex-row space-x-4 items-center">
                                    <div>
                                        <span>
                                          <img src={card.image} alt="" className='w-20 fill-stroke'/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
          </body>

          </div>

        })  }
        
    </div>

  )
  }    

}

export default ApiTest