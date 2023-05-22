import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container pt-5 mt-5 d-flex justify-content-center'>
            <div className='shadow box-width p-4 mb-5 bg-body-tertiary rounded'>
                <form className='w-100 input-focus'>
                    <div className="mb-3">
                        <div className="row g-3">
                            <div className="col">
                                <label htmlFor="exampleInputText1" className="form-label">First Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" required placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <label htmlFor="exampleInputText1" className="form-label">Last Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" required placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row g-3">
                            <div className="col">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" required placeholder="Enter email" aria-label="First name" />
                            </div>
                            <div className="col">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password <span className="text-danger">*</span></label>
                                <input type="password" className="form-control" required placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label">Subject <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder='Enter subject' required id="exampleInputText1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message <span className="text-danger">*</span></label>
                        <textarea className="form-control" placeholder='Type your message...' id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="send-btn">Send</button>
                </form>
            </div>

        </div>
    );
};

export default Contact;