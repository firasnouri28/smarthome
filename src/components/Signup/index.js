import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'

const Signup = (props) => {
    console.log(props);
    const firebase = useContext(FirebaseContext);

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password, pseudo } = loginData;
        firebase.signupUser(email, password)
            .then(authUser => {
                return firebase.user(authUser.user.uid).set({
                    pseudo,
                    email
                })
            })
            .then(() => {
                setLoginData({ ...data });
                props.history.push('/login');
            })
            .catch(error => {
                setError(error);
                setLoginData({ ...data });
            })
    }

    const { pseudo, email, password, confirmPassword } = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
        ? <button disabled className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm'>Inscription</button> : <button className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm'>Inscription</button>

    // gestion erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>;

    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-md-6 d-none d-md-flex bg-image"></div>

                <div className="col-md-6 bg-light">
                    <div className="signup d-flex align-items-center py-5">

                        {errorMsg}
                        <div className='container'>
                            <div className='row'>

                                <div className='col-lg-10 col-xl-7 mx-auto'>
                                    <h2 className='display-4'>Inscription</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="inputBox" className='form-group mb-3'>
                                            <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required placeholder='pseudo'
                                                className='form-control rounded-pill border-0 shadow-sm px-4'
                                            />
                                        </div>

                                        <div className="inputBox" className='form-group mb-3'>
                                            <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required placeholder='Adresse mail'
                                                className='form-control rounded-pill border-0 shadow-sm px-4' autofocus=""
                                            />
                                        </div>

                                        <div className="inputBox" className='form-group mb-3'>
                                            <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required placeholder='Mot de passe'
                                                className='form-control rounded-pill border-0 shadow-sm px-4 text-primary'
                                            />
                                        </div>

                                        <div className="inputBox" className='form-group mb-3'>
                                            <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required placeholder='Confirmer mot de passe'
                                                className='form-control rounded-pill border-0 shadow-sm px-4 text-primary'
                                            />
                                        </div>

                                        {btn}
                                    </form>
                                </div>
                            </div>


                            <div className="linkContainer" style={{ textAlign: 'center' }}>
                                <Link className="simpleLink" to="/login">Déjà inscrit? Connectez-vous.</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup