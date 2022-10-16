import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {

  const displayPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase())).map(plant => {
    return <PlantCard key={plant.id} plant={plant}/>
  })
  
  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
