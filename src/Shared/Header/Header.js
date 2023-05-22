import React, { useContext } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AllContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
    }
    const NavberMenuAll = () => {
        if (user) {
            return (
                <>
                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/product">Product</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    <div className='user-img'>
                        <div className="dropdown">
                            <img src={user?.photoURL} className="dropdown-toggle" title={user?.displayName} id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false" />
                            <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenu2">
                                <li><h6>{user?.displayName}</h6></li>
                                <li><h6 style={{ fontSize: '12px' }}>{user?.email}</h6></li>
                                <span className='user-sp'></span>
                                <li><Link className="dropdown-item" to="#profile"><i className="fa-solid fa-user"></i> Profile</Link></li>
                                <li><Link className="dropdown-item" to="#settings"><i className="fa-sharp fa-solid fa-gear"></i> Settings</Link></li>
                                <li><Link className="dropdown-item" onClick={handleSignOut}>Logout <i className="fa-solid fa-right-from-bracket mx-1"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/product">Product</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    <div className="sm-pb">
                        <NavLink to='/registration' className='nav-link btn-signup mx-2'>Sign Up</NavLink>
                    </div>
                    <NavLink to='/signin' className='nav-link btn-signin'>Sign In</NavLink>
                </>
            )
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-color fixed-top">
                <div className="container">
                    <div className="logo">
                        <Link className="navbar-brand" to="/">You<span>Fashion</span></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                NavberMenuAll()
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;