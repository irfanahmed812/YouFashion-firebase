import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AllContext';
import Loading from '../Loading/Loading';
import { Navigate } from 'react-router-dom';
import './PrivateRoute.css';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    // loading
    if (loading) {
        return <Loading></Loading>
    }

    // user
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/registration'></Navigate>

};

export default PrivateRoute;