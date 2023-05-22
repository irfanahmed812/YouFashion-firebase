import React, { useContext, useEffect, useState } from 'react';
import './Register.css';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AllContext';
import { signInWithPopup } from 'firebase/auth';

const Register = () => {

    // website title
    useEffect(() => {
        document.title = 'Registration'
    }, [])

    const [success, setSuccess] = useState(false);
    const [errorPassword, setErrorPassword] = useState('');

    // context
    const { createUser, updateUserName, verifyEmail, googleSignIn, githubProvider, auth, handleFacebookLogin } = useContext(AuthContext)

    const handleOnSubmit = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password, name);

        // password validation
        if (!/(?=.*[A-Z],*[A-Z])/.test(password)) {
            setErrorPassword('Please provide at lest two uppercase');
            return
        }
        if (password.length < 8) {
            setErrorPassword('Please provide at lest 8 digit');
            return
        }
        if (!/(?=.*[!@#$?&*])/.test(password)) {
            setErrorPassword('Please provide special chareter');
            return
        }

        // empty password
        setErrorPassword('');

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // succesfuly registred
                setSuccess(user);
                // verify email
                verifyEmail()
                // form reset
                form.reset()
                // update user
                updateUserName(name)
            })
            .catch(error => {
                console.log('Error:', error);
                setErrorPassword(error.message)
            })
    }

    // google login
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setSuccess(user)
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // github login
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                setSuccess(user)
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // handle checked
    const [accept, setAccept] = useState(false);

    const handleChecked = (event) => {
        setAccept(event.target.checked)
    }

    return (
        <div className='container pt-5 mt-5 d-flex justify-content-center'>
            <div className='shadow box-width pad-form mb-5 bg-body-tertiary rounded'>
                <form onSubmit={handleOnSubmit} className='w-100 register-focus'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName1" className="form-label">Your Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder='Enter name' name='name' required id="exampleInputName1" aria-describedby="NameHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" placeholder='Enter email' name='email' required id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" placeholder='Enter password' name='password' required id="exampleInputPassword1" />
                    </div>
                    <div className="mb-4">
                        <div className="form-check form-check-acpt" onClick={handleChecked}>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Accept <span className="text-primary text-decoration-underline">terms</span> and <span className="text-primary text-decoration-underline">conditions</span>
                            </label>
                        </div>
                    </div>
                    {
                        <p className='text-danger my-2'>{errorPassword}</p>
                    }
                    {
                        success && <p className='text-success'>Registerd successfully</p> && <Navigate to='/product'></Navigate>
                    }
                    <button type="submit" disabled={!accept} className="register-btn">Register</button>
                </form>
                {/* already have account */}
                <div className="already">
                    <p>You already have an account <Link to='/signin'>Login</Link></p>
                </div>
                {/* or */}
                <div className="line-arrow py-2">
                    <p><span>or</span></p>
                </div>
                <div className="pt-2 pb-2 login-button">
                    <button onClick={handleGoogleLogin} className='login-with-google-btn'><span><i className="fa-brands fa-google"></i> Google</span></button>
                    {
                        success && <Navigate to='/product'></Navigate>
                    }
                    <button onClick={handleGithubLogin} className='login-with-github-btn'><span><i className="fa-brands fa-github"></i> Github</span></button>
                    {
                        success && <Navigate to='/product'></Navigate>
                    }
                </div>
                <button onClick={handleFacebookLogin} className='login-with-facebook-btn'><span><i className="fa-brands fa-facebook"></i> Facebook</span></button>
            </div>

        </div>
    );
};

export default Register;