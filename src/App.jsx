// src/App.jsx
import { useState, Fragment } from 'react'
import './App.css'
import TeamRoster from './TeamRoster.jsx'

const App = () => {

  const [team, setTeam] = useState([])
  const [totalStrength, setStrength] = useState(0)
  const [totalAgility, setAgility] = useState(0)
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])


  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money')
    } else {
      const newTeamArray = [...team, fighter]
      setTeam(newTeamArray)
      setMoney(money - fighter.price)
      setStrength(totalStrength + fighter.strength)
      setAgility(totalAgility + fighter.agility)
    }
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team: </h2>
      {team.length === 0 ? <p>Pick some team members!</p> : <TeamRoster team={ team } /> }
      <h2>Fighters</h2>
      <div className="fighter-container">
        {zombieFighters.map((fighter, idx) => (
          <div className="fighterSpecs" key={idx}>
            <ul>
              <li><img src={fighter.img} /></li>
              <li>{fighter.name}</li>
              <li>Price: {fighter.price}</li>
              <li>Strength: {fighter.strength}</li>
              <li>Agility: {fighter.agility}</li>
            </ul>
            <button onClick={() => { handleAddFighter(fighter) }}>Add</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App
