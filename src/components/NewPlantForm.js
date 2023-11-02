import React, { useState } from "react";

function NewPlantForm({handleSubmit}) {
  const [formDeets, setFormDeets] = useState({
    name:'',
    image:'',
    price:0

  })
  const handleChange = (e) => {
    const{name, value} = e.target
    setFormDeets({...formDeets,[name] : value})
  }
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e)=>handleSubmit(e, formDeets)}>
        <input value={formDeets.name} onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input value={formDeets.image} onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input value={formDeets.price} onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
