import React, { useState } from "react"

function SongCard ({song}) {
    const [showLyrics, setShowLyrics] = useState(false)
    const [likeToggle, setLikeToggle] = useState(false)

    const handleLyrics= () => {
        setShowLyrics(showLyrics => !showLyrics)
    }
    const handleToggle = () => {
        setLikeToggle(likeToggle => !likeToggle)
        console.log('hey there')
    }

return (
    <div>
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
        {showLyrics ? (
        <button onClick={handleToggle} className="likeToggle" >I dig it!</button>
        ) : (
        <button onClick={handleToggle}>Not for me, NEXT!</button>
        )}  
    </div>
)
}






export default SongCard
