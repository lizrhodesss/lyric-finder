import React, { useState, setState } from "react";
import RankCard from "./RankCard";


function Ranking({songs, setSongs, rankUp}) {
    
    return (
        <ol className="rankedNumbers">
            {songs.map(song => (<RankCard song={song} songs={songs} rankUp={rankUp} key={song.id} />))}
        </ol>
    )

}

export default Ranking