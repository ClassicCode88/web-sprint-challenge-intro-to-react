import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  const [characterData, setCharacterData] = useState([])
  // learners.forEach((learner) => {
  //   const newLearner = {
  //     ...learner,
  //     mentors: learner.mentors.map((id) => {
  //       let mentor = mentors.find((mentorObject) => id === mentorObject.id);
  //       return mentor
  //         ? mentor.firstName + " " + mentor.lastName
  //         : "Unknown Mentor"; // Handle case if mentor isn't found
  //     }),
  //   };
  useEffect(() => {
    async function getCharacters(){
      const[planets, people] = await Promise.all([
        axios.get(urlPlanets),
        axios.get(urlPeople)

      ])
      let characters = people.data.map((person) => {
      const newPeople = {
        ...person,
        homeworld: planets.data.find((homeworldObject) => person.homeworld === homeworldObject.id)
      }
      return newPeople 
      })
      setCharacterData(characters)
      console.log(people);
      console.log(planets);
    }
    getCharacters();
      
  },[])
  console.log(characterData)
  return (
    <div>
      <h2>Star Wars Characters</h2>
      {characterData.map((singleCharacterObject) => (
        <Character key= {singleCharacterObject.id} data ={singleCharacterObject}/> 
       // console.log(singleCharacterObject)
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
