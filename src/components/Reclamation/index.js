import React, { useState, Fragment, useContext, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import Navigation from '../Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Reclamation = props => {
    const [userSession, setUserSession] = useState(null);


    const firebase = useContext(FirebaseContext);
    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
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
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Carte Vis à vis </h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>32 bloc Campus Universitaire de la Manouba</span>
                        </li>
                        <li>
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text='+21652262772'>
                                <span
                                    className='clickInput'
                                    onClick={() => { alert('Téléphone copié !'); }}
                                >
                                    +216 52 262 772</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className='far fa-envelope'></i>
                            <CopyToClipboard text='mail_agent@gmail.com'>
                                <span
                                    className='clickInput'
                                    onClick={() => { alert('E-mail copié !'); }}
                                >
                                    mail_agent@gmail.com
                                    </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href="https://google.com" target="blank" rel="noopener noreferrer">
                            <h4>inkedin</h4>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="blank" rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="blank" rel="noopener noreferrer">
                            <h4>Facebook</h4>
                            <i className='fab fa-facebook'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="blank" rel="noopener noreferrer">
                            <h4>Instagram</h4>
                            <i className='fab fa-instagram'></i>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Reclamation;