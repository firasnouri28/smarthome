import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase'

const ForgetPassword = props => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState();
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);


    const handleSubmit = e => {
        e.preventDefault();
        firebase.passwordReset(email)
            .then(() => {
                setError(null);
                setSuccess(`Consultez votre ${email} pour changer de mot de passe`);
                setEmail('');
                setTimeout(() => {
                    props.history.push('/login');
                }, 4000)
            })
            .catch(error => {
                setError(error);
                setEmail('');
            })
    }
    const disabled = email === '';
    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-md-6 d-none d-md-flex bg-image"></div>
                <div className="col-md-6 bg-light">
                    <div className="forget d-flex align-items-center py-5">

                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-10 col-xl-7 mx-auto'>
                                    {
                                        success && <span style={{
                                            border: '1px solid green',
                                            background: 'green',
                                            color: '#ffffff'
                                        }}
                                        >
                                            {success}
                                        </span>}

                                    {error && <span>{error.message}</span>}
                                    <h2 className='display-4'>Mot de passe oublié?</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-3">
                                            <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required placeholder='Adresse mail'
                                                className='form-control rounded-pill border-0 shadow-sm px-4'
                                            />

                                        </div>
                                        <button disabled={disabled} className='btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm'>Récupérez</button>
                                    </form>
                                    <div className="linkContainer">
                                        <Link className="simpleLink" to="/login">Déjà inscrit? Connectez-vous.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
