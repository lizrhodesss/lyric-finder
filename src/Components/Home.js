import React from "react";
import SongCard from "./SongCard";


function Home({songs}) {
    return (
        <div>
            <h1>Lyric Finder</h1>
            {songs.map(song => (<SongCard song={song} key={song.id} />))}
            console.log(song)
        </div>
    )

}

export default Home