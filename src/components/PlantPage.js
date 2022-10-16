import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plantEls => setPlants(plantEls))
  }, [])

  function handleSearchPlants(e) {
    setSearch(e.target.value)
  }

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search plants={plants} setPlants={setPlants} onHandleSearch={handleSearchPlants}/>
      <PlantList plants={plants} setPlants={setPlants} search={search}/>
    </main>
  );
}

export default PlantPage;
