import React, { useState } from 'react'



const VideoBox = (props) => {
    console.log(props.name);
  return (
   < div className="grid-item"> 
        <video 
            src
            poster={props.poster}
            desc
            className="home-video"
        ></video>
        
        <span style={{color: 'yellow'}}>{props.name}</span>
    </div>
  )
}

export default VideoBox