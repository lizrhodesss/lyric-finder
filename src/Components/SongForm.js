import React from "react";
import "../App.css"

function SongForm() {
    return (
        <form>
        <div className="main">
          <div className="sub-main">
            <div>
            <div className="imgs">
                <div className="container-image">
                    <img src="https://img.freepik.com/free-vector/music-note-icon-vector-illustration-design_9999-2183.jpg?size=338&ext=jpg" alt="Profile" className="profile"/>
                </div>
            </div>
            <div>
                <h1>Add a Song</h1>
                <div>
                    <input type="text" placeholder="Title" className="title"/>
                </div>
                <div className="second-input">
                    <input type="text" placeholder="Artist" className="title"/>
                </div>
                <div className="second-input">
                    <input type="text" placeholder="Album Url" className="title"/>
                </div>
                <div className="second-input">
                    <input type="text" placeholder="Lyrics" className="title"/>
                </div>
                <div className="submit-button">
                    <button>Submit</button>
                </div>
            </div>
            </div>
          </div>
        </div>
        </form>
      );
    }
 export default SongForm