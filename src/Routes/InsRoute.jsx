import React from 'react';
import useAuth from '../hooks/useAuth';
import useIns from '../hooks/useIns';
import { Navigate, useLocation } from 'react-router-dom';

const InsRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useIns()

    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InsRoute;