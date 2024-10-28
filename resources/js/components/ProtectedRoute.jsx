import React from 'react';
import { usePage } from '@inertiajs/react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { props } = usePage();
    const { auth } = props;

    if (!auth.user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
