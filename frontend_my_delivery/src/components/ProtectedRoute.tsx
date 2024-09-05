import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

    // If the user is not logged in, navigate to the signin page
    if (!isLoggedIn) {
        return <Navigate to="/signin" replace />;
    }

    // If the user is logged in, render the children components
    return children;
};

export default ProtectedRoute;
