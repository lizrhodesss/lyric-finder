import React, { useState } from "react"

function SongCard ({song}) {
    const [showLyrics, setShowLyrics] = useState(false)
    const [likeToggle, setLikeToggle] = useState(true)

    const handleLyrics= () => {
        setShowLyrics(showLyrics => !showLyrics)
    }
    const handleToggle = (e) => {
        setLikeToggle(likeToggle => !likeToggle)
        console.log('hey there')
    }

return (
    <div>
        <div className="image">
            <img onClick={handleLyrics} alt="album" src={song.image}/>
        </div>
        <div className="content">
           <div className="header">{song.title} </div>
           <div className="header">{song.artist}</div>
           <div>{showLyrics ? song.lyrics : null}</div>
         </div> 
         <div className="lyrics">
        </div> 
        <div>
        {showLyrics ? (
        <button onClick={handleToggle} className="likeToggle" >I dig it!</button>
        ) : (
        <button onClick={handleToggle} className="dislikeToggle" >Not for me, NEXT!</button>
        )}
        </div>  
    </div>
)
}






export default SongCard
