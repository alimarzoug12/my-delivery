import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

    
    if (!isLoggedIn) {
        return <Navigate to="/signin" replace />;
    }

    
    return children;
};

export default ProtectedRoute;
