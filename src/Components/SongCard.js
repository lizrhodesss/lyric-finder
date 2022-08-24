import React, { useState } from "react"

function SongCard ({song}) {
    const [showLyrics, setShowLyrics] = useState(false)
    const [likeToggle, setLikeToggle] = useState(true)

    const handleLyrics= () => {
        setShowLyrics(showLyrics => !showLyrics)
    }
    const handleToggle = (e) => {
        setLikeToggle(likeToggle => !likeToggle)
    }

return (
    <div>
        <br></br>
        <br></br>
        <div className="image" onMouseLeave={handleLyrics}>
            <img onMouseEnter={handleLyrics} alt="album" src={song.image}/>
        </div>
        <div>
        {likeToggle ? (
        <button onClick={handleToggle} className="likeToggle" >I dig it!</button>
        ) : (
        <button onClick={handleToggle} className="likeToggle" >Not for me, NEXT!</button>
        )}
        </div>  
        <br></br>
           <div className="title">{song.title} </div>
           <div className="artist">{song.artist}</div>
           <p className="lyrics">{showLyrics ? song.lyrics : null}</p>
        <br></br>
    </div>
)
}






export default SongCard
