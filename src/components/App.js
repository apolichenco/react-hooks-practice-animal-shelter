import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");
  
  function fetchFilteredPets() {
    if (filters === "all") {
      fetch("http://localhost:3001/pets")
      .then((r) => r.json())
      .then((data) => setPets(data))
    }
    else {
      fetch(`http://localhost:3001/pets?type=${filters}`)
      .then((r) => r.json())
      .then((data) => setPets(data))
    }
  }

  function adoptTrue(id) {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isAdopted: true,
      }),
    })
    .then((r) => r.json())
    .then((data) => console.log(data))
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={setFilters} onFindPetsClick={fetchFilteredPets}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={adoptTrue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
