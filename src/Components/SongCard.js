
import React, { useState } from "react"

function SongCard ({song}) {
    const [showLyrics, setShowLyrics] = useState(false)

   const handleLyrics= () => {
        setShowLyrics(showLyrics => !showLyrics)
    }

return (
    <li>
        <div onClick={handleLyrics} className="image">
            <img alt="album" src={song.image}/>
        </div>
        <div className="content">
           <div className="header">{song.title} </div>
           <div className="header">{song.artist}</div>
           <div>{showLyrics ? song.lyrics : null}</div>
         </div> 
         <div className="lyrics">
        </div> 
    </li>
)
}





export default SongCard
