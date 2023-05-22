import React, { useContext, useEffect } from 'react';
import './Forget.css';
import { AuthContext } from '../../Context/AllContext';

const Forget = () => {

    useEffect(() => {
        document.title = 'Forget password'
    }, [])

    const { handleOnReset, setUserEmail } = useContext(AuthContext);

    const handleOnBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }
    handleOnReset()

    return (
        <div className='container pt-5 mt-5 d-flex justify-content-center'>
            <form onSubmit={handleOnReset} className='shadow p-4 mb-5 bg-body-tertiary rounded'>
                <div className="mb-3 forget-msz">
                    <p><span className='fw-bold'>Note:</span> Enter your email to retrieve your forgotten password. When you are writing your mail then click anywhere to forget your password</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address <span className='text-danger'>*</span></label>
                    <input onBlur={handleOnBlur} name='email' type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter email' aria-describedby="emailHelp" required />
                </div>
            </form>
        </div>
    );
};

export default Forget;