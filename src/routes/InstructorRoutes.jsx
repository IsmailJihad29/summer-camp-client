import React from 'react';
import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const InstructorRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if(loading || isInstructorLoading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor || user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoutes;