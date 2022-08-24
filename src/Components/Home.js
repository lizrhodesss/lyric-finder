import React from "react";
import SongCard from "./SongCard";


function Home({songs}) {
    return (
        <div>
            <h1 className="header">Lyric Finder</h1>
            {songs.map(song => (<SongCard song={song} key={song.id} />))}
        </div>
    )

}

export default Home