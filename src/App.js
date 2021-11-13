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
      setLoading(false)
      setTours(data)
      
    }catch(error){

    }
  }
   useEffect(() => {
        fetchTours()
         setLoading(false)

      }, [])

       const removeTour = (id) =>{
       const newTours = tours.filter(tour => tour.id !==id)
        setTours(newTours)
  }
      
  if(loading){
    return <Loading/>
  }
  if(tours.length == 0){
    return<main>
      <div className = "title">
        <h3>No tours</h3>
        <button className = "btn" onClick = { () => {
          fetchTours()
        }}>refresh</button>

      </div>
    </main>
  }
 return <>
  <main>
    <Tours tours = {tours} removeTour = {removeTour}/>
  </main>
    </>

}

export default App
