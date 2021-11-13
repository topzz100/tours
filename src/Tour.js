import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, removeTour}) => {
   const [readMore, setReadMore] = useState(false)
  return <>
    
  <div className = "single-tour">
    <img src = {image} alt = {name}/>
    <div className = "tour-info">
      <h4>{name}</h4>
      <h4 className = "tour-price">{price}</h4>
    </div>
    <p>{readMore? info : info.substring(0, 200)} 
    <button onClick = {() => { setReadMore(!readMore)}}>{readMore? 'show less' : 'show more'}</button>
    </p>
    
    <div className= "footer" > 
    <button className = "delete-btn" onClick = {() => { removeTour(id)}}>remove tour</button>
    </div>
    

  </div>
  
  </>;
};

export default Tour;
