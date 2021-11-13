import React, { useState } from 'react';

const Tour = ({id, name, info, image, price}) => {
  // const {id, name, info, image, price} = tour
  return <>
    
  <div className = "single-tour">
    <img src = {image} alt = {name}/>
    <div className = "tour-info">
      <h4>{name}</h4>
      <h4 className = "tour-price">{price}</h4>
    </div>
    <p>{info}</p>
    <div className= "footer" > 
    <button className = "delete-btn" >remove tour</button>
    </div>
    

  </div>
  
  </>;
};

export default Tour;
