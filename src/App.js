import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Form from './Components/Form';
import Search from './Components/Search';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
// import SongCard from './SongCard'

function App() {

  let [songs, setSongs] = useState([])



  useEffect(() => {
    fetch("http://localhost:8004/songs")
    .then(response => response.json())
    .then(data => setSongs(data))
  }, [])
 

  console.log(songs)

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
