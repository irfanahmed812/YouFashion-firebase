import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import payment from '../../Assests/img/payment.png';

const Footer = () => {

    const handleSubscribe = () => {
        alert('Subscribe successfully')
    }

    return (
        <div className='pt-5'>
            <footer className='pt-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="logo-footer">
                                <Link className="navbar-brand" to="/">You<span>Fashion</span></Link>
                            </div>
                            <div className="pt-2">
                                <p className='text-start text-white-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi harum consequatur deserunt suscipit esse laborum et nobis in eius enim quia tempora maiores pariatur iure repudiandae</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-link">
                            <h4>QUICK LINK</h4>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/product'>Product</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='#'>About</Link></li>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-follow">
                            <h4>FOLLOW ON</h4>
                            <div className="pt-3">
                                <Link to='https://www.facebook.com/irfanahmed812i' target='__blank'><i className="fa-brands fa-facebook"></i></Link>
                                <Link to='#'><i className="fa-brands fa-twitter"></i></Link>
                                <Link to='#'><i className="fa-brands fa-youtube"></i></Link>
                                <Link to='#'><i className="fa-brands fa-linkedin"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-link">
                            <h4>NEWSLETTER</h4>
                            <p className='text-start text-white-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In a rem, eius Lorem ipsum dolor sit amet Ipsam iste iusto in. </p>
                            <div className="input-group mb-3 pt-3">
                                <input type="email" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn-subscribe" type="button" id="button-addon2" onClick={handleSubscribe}>SUBSCRIBE</button>
                            </div>
                            <div className='payment pt-2'>
                                <img src={payment} alt="" />
                            </div>
                        </div>
                        <div className="pt-4 copyright">
                            <p className='text-white-50'>© 2023 Copyright all right reserved. Developed by <Link to='https://www.facebook.com/irfanahmed812i' target='__blank'>Irfan Ahmed</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;