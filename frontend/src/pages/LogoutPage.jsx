import React from 'react'
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth.jsx';

const LogoutPage = () => {

    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        logoutUser();
        localStorage.removeItem("token");
    }, [ logoutUser ]);

  return <Navigate to="/login" />;
}

export default LogoutPage
