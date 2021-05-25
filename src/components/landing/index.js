import React,{useEffect,useState} from 'react';
import { Button } from 'react-bootstrap';
import {Video} from 'react-video-stream';
import socketIOClient from "socket.io-client";
import io from "socket.io-client/dist/socket.io";
const Landing = () => {
    
    return (
        <main className='welcomePage' >
            <div className='leftBox'>
                <Button variant="outline-secondary" href='/signup'>Inscription</Button>
            </div>
            <div className='rightBox'>
                <Button variant="outline-info" href='/login'>Connexion</Button>
            </div>
            {/* <p>
                It's <time dateTime={response}>{response}</time>
            </p> */}




 

  

       {/* <Video
        controls={true}
        autoPlay={true}
        options={options}
        remoteUrl={'http://169.254.111.226:5000/video_feed'}
      /> */}
            {/* <img src="{{url_for('http://169.254.111.226:5000/video_feed') }}"/> */}
        </main>
    )
}

export default Landing;
