import React, { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

export const PublicRoutes = ({ Component }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('userToken')){
            navigate('/dash')
        }
    });

    return <Component />
}