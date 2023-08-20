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
      <h2 className="info">
        <img
          id="lebron"
          src="https://www.pngarts.com/files/5/LeBron-James-Free-PNG-Image.png"
          alt="lebron picture"
        />
        This website provides you with helpful information about all NBA teams.
        <img
          id="mj"
          src="https://freepngimg.com/thumb/michael_jordan/29875-2-michael-jordan.png"
          alt="MJ pic"
        />
      </h2>
      <h3 className="championships">
        <h1>Championships</h1> <br />
        {nbaData.map((data) => {
          return (
            <div className="trophies" key={data.id}>
              {data.team} : {data.trophies}
            </div>
          )
        })}
      </h3>
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
                  Player for the {data.team}:
                  <div className="player">
                    {' '}
                    <strong>{player.name}</strong>
                  </div>
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
