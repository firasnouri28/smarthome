import React, { useState, Fragment, useContext, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import Navigation from '../Navigation';

const Welcome = props => {
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

        <div className='home'>
            <Navigation />
            <div className='homeContent'>
                <div className='content'>
                    <h1>Smart_home device</h1>
                    <h2>Smart home, quand rien d'autre ne fait l'affaire</h2>
                    <div className='pdf'>
                        <a href='./media/CV.pdf' target='_blank'>Telecharger Votre Contrat</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;