
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const location = useLocation()
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <div className="w-25 mx-auto text-center" style={{ height: '60vh' }}><Spinner className="my-5 " animation="border" variant="success" /></div>
    }

    if (user.email || admin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;