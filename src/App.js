import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Form from './Components/Form';
import Search from './Components/Search';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  let [songs, setSongs] = useState([])

  useEffect(() => {
    fetch("http://localhost:8004/songs")
    .then(response => response.json())
    .then(songs => setSongs(songs))
  }, [])

  console.log(songs)

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form">
            <Form songs={songs} setSongs={setSongs}/>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
