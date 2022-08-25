import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Form from './Components/Form';
import Search from './Components/Search';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import Ranking from './Components/Ranking';
// import SongCard from './SongCard'

function App() {

  let [songs, setSongs] = useState([])

  
  useEffect(() => {
    fetch("http://localhost:8004/songs")
    .then(response => response.json())
    .then(data => setSongs(data))
  }, [])

  // const rankUp = (song) => {
  //   const index = officialRanking.findIndex(object => {
  //     return object.id === song.id;
  //   });

  //   const newIndex = index - 1
  //   const lowerSong = songs[newIndex]

  //   console.log(lowerSong)
    
    
  //   const newRank = song.ranking - 1
  //   console.log(newRank)
    
  // fetch(`http://localhost:8004/songs/${song.id}`, {
  //   method: "PATCH",
  //   headers: {
  //       "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //       ranking: newRank,
  //   })
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  
    
  // }
  
  // let officialRanking = songs.slice().sort( (a, b) => {
  //   if (a.ranking < b.ranking) return -1
  //   if (a.ranking > b.ranking) return 1
  //   return 0
  // }
  // )

 

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home songs={songs}/>
          </Route>
          <Route path="/form">
            <Form songs={songs} setSongs={setSongs}/>
          </Route>
          <Route path="/search">
            <Search songs={songs}/>
          </Route>
          {/* <Route path="/ranking">
            <Ranking songs={officialRanking} setSongs={setSongs} rankUp={rankUp} />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
