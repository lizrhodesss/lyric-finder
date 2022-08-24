import React, { useState } from 'react';
import '../App.css';
import SongCard from './SongCard';

function Search({songs}) {

  const [search, setSearch] = useState("")

  let filteredSongs = songs.filter(song => {
    return song.lyrics.toLowerCase().includes(search.toLowerCase())
  })

  const onSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <h1>Search Lyrics to Find a Song</h1>
      <input className="title" type="text" placeholder='Search Lyrics...' onChange={(e) => onSearch(e)} />
      {filteredSongs.map(song => (<SongCard song={song} setSearch={setSearch} search={search} key={song.id} />))}
    </div>
  );
}

export default Search;