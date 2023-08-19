import './App.css'

import React from 'react'
import nbaData from './nbainfo.json'
import Main from './Components/Main'

const App = () => {
  return (
    <div className="App">
      <h1 className="Title">
        {' '}
        <strong>
          National Basketball Association
          <br />
          <img
            src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png&w=64&h=64&scale=crop&cquality=40&location=origin"
            alt="NBA Logo"
          />
        </strong>
      </h1>{' '}
      <br />
      {nbaData.map((data) => {
        return (
          <div className="city" key={data.id}>
            <img src={data.logo} alt="logos" /> <br />
            <strong>
              {data.city} {data.team}
            </strong>
            <br />
            {data.players.map((player) => {
              return (
                <div className="players" key={data.id}>
                  Player for the {data.team}:<div>{player.name}</div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default App
