import React, { useState, useEffect,Headers } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Temperature = () => {
    const [currenthumidty, setCurrenthumidty] = useState(0);
    const [currenttemp,settemp]=useState(0);
    useEffect(() => {
      fetch('http://169.254.111.226:5000/sensors').then(res => res.json()).then(data => {
        setCurrenthumidty(data.humiduty);
        settemp(data.temperature);
        console.log(data)

        
        
        
      });
    }, []);
    return (
        <div>
            <div className='temperature'>
                <h3 style={{ textAlign: 'center' }}>humudité</h3>
                <span style={{ textAlign: 'center' }}>Récuperation de l'humidité ambinante</span>
                <div style={{ width: '155px', height: '155px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <CircularProgressbarWithChildren value={69} >
                        <div style={{ fontSize: 24, marginTop: -5 }}>
                            <strong>{69}<i class="fas fa-tint"></i></strong> 
                    </div>
                    </CircularProgressbarWithChildren>
                </div>

            </div>

            <div className='temperature'>
                <h3 style={{ textAlign: 'center' }}>Temperature</h3>
                <span style={{ textAlign: 'center' }}>Récuperation de l'humidité ambinante</span>
                {/* <CircularProgressbar style={{ width: 20, height: 20 }}  value={percentage} text={`${percentage}%`} />; */}
                <div style={{ width: '155px', height: '155px', marginLeft: 'auto', marginRight: 'auto', }}>
                    <CircularProgressbarWithChildren value={currenttemp} >
                        <div style={{ fontSize: 24, marginTop: -5 }}>
                            <strong>{currenttemp} <i class="fas fa-thermometer-three-quarters"></i> </strong>
                        </div>
                    </CircularProgressbarWithChildren>                </div>

            </div>
        </div>
    )
}

export default Temperature
