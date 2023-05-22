import React, { useContext, useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../Context/AllContext';

const Login = () => {
    useEffect(() => {
        document.title = 'Login'
    }, [])

    // context
    const { signIn } = useContext(AuthContext);

    const [success, setSuccess] = useState(false);

    const handleOnLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // form reset
                form.reset()
                // success
                setSuccess(user)
            })
            .catch(error => {
                console.log('Error: ', error);
            })
    }

    return (
        <div className='container d-flex justify-content-center pt-login'>
            <form onSubmit={handleOnLogin} className='shadow p-4 mb-5 bg-body-tertiary rounded login-foucs'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className='text-danger'>*</span></label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" placeholder='Enter email' aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password <span className='text-danger'>*</span></label>
                    <input name='password' type="password" className="form-control" placeholder='Enter password' id="exampleInputPassword1" required />
                </div>
                <div className="d-flex justify-content-between">
                    <div className="form-check form-check-text">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                    </div>
                    <div className="forget">
                        <p><Link to='/forget-password'>Forget password?</Link></p>
                    </div>
                </div>
                {
                    success && <p className='text-success text-center'>Login successfully</p> && <Navigate to='/product'></Navigate>
                }
                <div className="d-flex justify-content-center pb-2">
                    <button type="submit" className="signin-btn">Sign In</button>
                </div>
                <div className="pt-2 already">
                    <p>You don't have any account <Link to='/registration'>Create an account</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;