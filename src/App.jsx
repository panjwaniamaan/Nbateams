import './App.css'

import React from 'react'
import nbaData from './nbainfo.json'
import Main from './Components/Main'
import Footer from './Components/Footer'
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
        <h1 className="champ">Championships</h1>
        <img
          className="nbatrophy"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/NBA_Finals_logo_%282022%29.svg/1200px-NBA_Finals_logo_%282022%29.svg.png"
          alt="nba trophy"
        />
        {nbaData.map((data) => {
          return (
            <div className="trophies" key={data.id}>
              {data.team} : {data.trophies}
            </div>
          )
        })}
      </h3>
      <h4 className="drclass">
        <br />
        <br />
        <img
          className="draftimage"
          src="https://s7d2.scene7.com/is/image/TWCNews/nba_draft_2023_logo_fl_062023"
          alt="draft image"
        />
        <br />
        <br />
        <br />
        {nbaData.map((data) => {
          return (
            <div className="draft" key={data.id}>
              The {data.team} drafted <strong>{data.draftpick}</strong>!
            </div>
          )
        })}
      </h4>
      <h3 className="price">
        <h1 className="tix">Ticket Prices</h1>
        <img
          className="seatgeek"
          src="https://thumbs.bfldr.com/at/o2cit2-35k4jr-gdzpua?expiry=1693181056&fit=bounds&height=800&sig=ODY5MmI2MTNjMzk4MzY1NzM1ZTZlYzAzMzE5MDU5YjY3MjEwZTYzMQ%3D%3D&width=1100"
          alt="seatgeek"
        />
        <h2>Cheapest : Average : Highest</h2>
        {nbaData.map((data) => {
          return (
            <div className="tickets" key={data.id}>
              {data.team} = ${data.cheapesttix} : ${data.averagetix} : $
              {data.expensivetix}
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
                    <br />
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
