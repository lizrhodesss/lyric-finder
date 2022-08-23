
import React, { useState } from "react"

function SongCard ({song}) {
    const [showLyrics, setShowLyrics] = useState(true)
console.log(song)

return (
    <li>
        <div className="image">
            <img alt="album" src={song.image}/>
        </div>
        <div className="content">
           <div className="header">{song.title}</div>
         </div> 
         <div className="lyrics">
        </div> 
    </li>
)
}




export default SongCard
