const handleRemoveFighter = (team, idx) => {
    const newTeamArray = { team }.filter((fighter)=> fighter[idx] !== idx)
    setTeam(newTeamArray)
    setMoney(money - fighter.price)
    setStrength(totalStrength + fighter.strength)
    setAgility(totalAgility + fighter.agility)
  }

const TeamRoster = ( {team} ) => {
  return (
  <div className="fighter-container">
      {team.map((fighter, idx) => (
        <div className="fighterSpecs" key={idx}>
          <ul>
            <li><img src={fighter.img} /></li>
            <li>{fighter.name}</li>
            <li>Price: {fighter.price}</li>
            <li>Strength: {fighter.strength}</li>
            <li>Agility: {fighter.agility}</li>
          </ul>
          <button onClick={() => { handleRemoveFighter(team, idx) }}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default TeamRoster