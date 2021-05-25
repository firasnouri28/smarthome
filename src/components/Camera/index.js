import React from 'react'
import ReactPlayer from 'react-player'
const Camera = () => {
    return (
        <div className='camera'>
            <h3 style={{textAlign:'center'}}>Access à la Camera</h3>
            {/* <video controls muted>
                <source src='http://169.254.111.226:5000/video_feed' ></source>
          <img src="{{url_for('http://169.254.111.226:5000/video_feed') }}"/> 
            </video> */}
            {/* <ReactPlayer url='http://169.254.111.226:5000/video_feed' /> */}
        </div>
    )
}

export default Camera;
