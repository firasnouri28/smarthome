import React, { useState, Fragment, useContext, useEffect } from 'react';
import Camera from '../Camera';
import Door from '../Door';
import { FirebaseContext } from '../Firebase';
import Lights from '../Lights';
import Navigation from '../Navigation';
import Temperature from '../Temperature';

const Options = props => {
    const [userSession, setUserSession] = useState(null);


    const firebase = useContext(FirebaseContext);
    useEffect(() => {
        let listener= firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.histoty.push('/');
        })
        return () => {
            listener()
        }
    }, [])

    return userSession === null ? (
        <Fragment>
            <div className='loader' ></div>
            <p className='loaderText'>loading...</p>
        </Fragment>
    ) : (
        <div className='knowledges'>
            <Navigation/>
            <div className='knowledgesContent'>
                <Temperature/>
                <Lights/>
                <Camera/>
                <Door/>
            </div>
        </div>
    );
};

export default Options;