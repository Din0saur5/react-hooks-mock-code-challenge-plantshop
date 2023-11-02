import React, { useState } from "react";


function PlantCard({plant}) {
  const [inStock, setInStock]= useState(true)
  const {id, name, image, price} = plant
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={()=>{setInStock(false)}} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
