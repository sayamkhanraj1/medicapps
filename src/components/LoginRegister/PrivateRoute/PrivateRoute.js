import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className="w-25 mx-auto text-center" style={{ height: '60vh' }}><Spinner className="my-5 " animation="border" variant="success" /></div>
    }
    if (user?.email) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;