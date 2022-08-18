import React, {useState} from "react";

function Pet({pet, onAdoptPet}) {
  const [adopted, setAdopted] = useState(pet.isAdopted)
  
  function toAdoptAPet() {
    onAdoptPet(pet.id)
    setAdopted(true)
  }

  let petGender = ""
  if (pet.gender === "female")
  {petGender = '♀'} 
  else {petGender = '♂'}

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {petGender} 
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        { adopted ? 
        <button className="ui disabled button">Already adopted</button> 
        :
        <button className="ui primary button" onClick={toAdoptAPet}>Adopt pet</button>
        }
      </div>
    </div>
  );
}

export default Pet;
