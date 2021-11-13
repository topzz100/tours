import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const[tours, setTours] = useState([])
 

  const fetchTours = async() =>{
    setLoading(true)
    try{
      const result = await fetch(url)
      const data = await result.json()
      setTours(data)
    }catch(error){

    }
  }
   useEffect(() => {
        fetchTours()
         setLoading(false)

      }, [])

       const removeTour = (id) =>{
        tours.filter(tour => tour.id !==id)
  }
      
  if(loading){
    return <Loading/>
  }
 return <>{
    tours.map((tour) => {
    return<main> <Tours  tour = {tour} removeTour = {removeTour}/></main> 
    })
}    </>

}

export default App
