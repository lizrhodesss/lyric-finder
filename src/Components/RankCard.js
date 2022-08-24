import React, { useState } from "react"

function SongCard ({song, rankUp}) {

    let [songRank, setSongRank] = useState(0)
    

    // const rankUp = () => {
    //     setSongRank(songRank + 1)
    //     console.log(songRank)
    // }

    // const rankDown = () => {
    //     setSongRank(songRank - 1)
    //     console.log(songRank)
    // }

  


    


return (
    <li className="rankedTitles">
        {song.title}<br></br>
        <button className='rankedButtonUp' onClick={rankUp}>Up</button> 
         <button className='rankedButtonDown' >Down</button> 
    </li>
)
}




export default SongCard
