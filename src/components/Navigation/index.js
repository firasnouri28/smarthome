import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../Logout';

const Navigation = () => {

    return (
        <div className='sidebar'>

            <div className='id'>
                <div className='idContent'>
                    <img src=".\media\logo.png" alt="profile_pic"></img>
                </div>
                <h3>Bonjour</h3>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact to='/welcome' activeClassName='navActive'>
                            <i className="fas fa-home"></i>
                            <span>Acceuil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/options' activeClassName='navActive'>
                            <i className="fas fa-mountain"></i>
                            <span>Options</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/reclamation' activeClassName='navActive'>
                            <i className="fas fa-address-book"></i>
                            <span>Réclamation</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href="https://google.com" target="blank" rel="noopener noreferrer">
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="blank" rel="noopener noreferrer">
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="blank" rel="noopener noreferrer">
                            <i className='fab fa-facebook'></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="blank" rel="noopener noreferrer">
                            <i className='fab fa-instagram'></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <Logout />
            </div>
        </div>
    );
};

export default Navigation;