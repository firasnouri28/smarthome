import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (props) => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();

        firebase.loginUser(email, password)
            .then(user => {
                setEmail('');
                setPassword('');
                props.history.push('/welcome');
            })
            .catch(error => {
                setError(error);
                setEmail('');
                setPassword('');
            })

    }

    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-md-6 d-none d-md-flex bg-image"></div>
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-10 col-xl-7 mx-auto'>

                                    {error !== '' && <span>{error.message}</span>}

                                    <h2 className='display-4'>Connexion</h2>
                                    <form onSubmit={handleSubmit}>

                                        <div className="form-group mb-3">
                                            <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required className="form-control rounded-pill border-0 shadow-sm px-4" placeholder='E-mail' />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required className='form-control rounded-pill border-0 shadow-sm px-4 text-primary' placeholder='Mot de passe'
                                            />

                                        </div>

                                        {btn ? <button className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm'>Connexion</button> : <button className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm' disabled>Connexion</button>}

                                    </form>
                                </div>
                            </div>
                            <div className="linkContainer" style={{ textAlign: 'center' }}>
                                <Link className="simpleLink" to="/signup">Nouveau sur la plateforme ? Inscrivez-vous maintenant.</Link>
                                <br />
                                <Link className="simpleLink" to="/forgetpassword">Mot de passe oublié? Récupérez-le ici.</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login