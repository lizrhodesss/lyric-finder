import React from 'react';
import '../App.css';

function Search({search, setSearch}) {

  const onSearch = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <h1>Search Lyrics to Find a Song</h1>
      <input className="title" type="text" placeholder='Search Lyrics...' onChange={(e) => onSearch(e)} />
    </div>
  );
}

export default Search;