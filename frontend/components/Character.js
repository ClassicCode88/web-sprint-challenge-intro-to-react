import React, {useState} from 'react'

function Character({character}) { 
  const [showHomeWorld, setShowHomeWorld] = useState(false)
  const togglePlanet = () => {
    setShowHomeWorld(!showHomeWorld)
  }
console.log(character)
  // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className= 'character-card' onClick={togglePlanet}> 
      <h3 className = "character-name"> {character.name}</h3>
    {showHomeWorld && (
      <p>Planet:{" "}
        <span className = "character-planet" >{character.homeworld.name}</span>
      </p>
    )}
    </div>
  )
}

export default Character
