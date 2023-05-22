import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import notFound from '../../Assests/img/not-found.png';
import './NotFound.css';

const NotFoud = () => {
    return (
        <div>
            <Header></Header>
            <div className="not-found">
                <img src={notFound} alt="" />
                <h4>&#9888; Please go to home page &#9888;</h4>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFoud;