import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [displayPlants, setDisplayPlants] = useState([])

  useEffect(()=>{fetch('http://localhost:6001/plants')
  .then(resp=>resp.json())
  .then(data=>{setPlants(data); setDisplayPlants(data)})
},[])

let filteredPlants = plants

const handleSearch = (search) => {
  
  console.log(search)
  if(search.length ===0)
 {filteredPlants = plants}
 else{
  filteredPlants = plants.filter(plant=>{
  return plant.name.toLowerCase().includes(search.toLowerCase())
  })
}
  setDisplayPlants(filteredPlants)
  console.log(displayPlants)
}

const handleSubmit = (e,newPlant) => {
  e.preventDefault()
  let newList = [...plants, newPlant]
  console.log(newList)
  setPlants(newList)
  setDisplayPlants([...filteredPlants,newPlant])
}



  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit}/>
      <Search handleSearch={handleSearch} />
      <PlantList plants={displayPlants}/>
    </main>
  );
}

export default PlantPage;
