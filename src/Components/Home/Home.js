import React, { useContext } from 'react';
import { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import menPic from '../../Assests/img/men.jpeg'
import { AuthContext } from '../../Context/AllContext';

const Home = () => {

    useEffect(() => {
        document.title = 'YouFashion'
    }, [])

    // context
    const { user } = useContext(AuthContext);

    const HomePage = () => {
        if (user) {
            return (
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="pt-5 mt-4">
                        <div className="card-body text-start home pb-5">
                            <h5 className="card-title pb-4">Welcome to <br /> You<span>Fashion</span></h5>
                            <p className="card-text pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sit dolores nulla et, corrupti iste! Excepturi quasi modi aperiam doloribus mollitia illo? Quibusdam soluta reprehenderit quos dolores, tempore perferendis necessitatibus dolor tenetur sunt numquam optio, repudiandae, nesciunt nobis officia. Necessitatibus magnam reiciendis inciduntdi aut tempora cupiditate minus quibusdam saepe praesentium porro culpa inventore dolor? Illo iusto harum, recusandae aut nihil dolore labore?</p>
                            <Link className='btn-registration-home' to='/product'>Shop Now</Link>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="pt-5 mt-4">
                        <div className="card-body text-start home pb-5">
                            <h5 className="card-title pb-4">Welcome to <br /> You<span>Fashion</span></h5>
                            <p className="card-text pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sit dolores nulla et, corrupti iste! Excepturi quasi modi aperiam doloribus mollitia illo? Quibusdam soluta reprehenderit quos dolores, tempore perferendis necessitatibus dolor tenetur sunt numquam optio, repudiandae, nesciunt nobis officia. Necessitatibus magnam reiciendis inciduntdi aut tempora cupiditate minus quibusdam saepe praesentium porro culpa inventore dolor? Illo iusto harum, recusandae aut nihil dolore labore?</p>
                            <Link className='btn-registration-home' to='/registration'>Register Now</Link>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='container pt-5 mt-5'>
            <div className="row">
                {
                    HomePage()
                }
                <div className="col-sm-6">
                    <div className="card-body menpic">
                        <img src={menPic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;