import React from 'react';
import Tour from './Tour';
const Tours = ({tour, removeTour}) => {
  return <>
  <section>
  <Tour key = {tour.id} {...tour} removeTour = {removeTour}/>
  </section>

    
  </>
}; 

export default Tours;
 