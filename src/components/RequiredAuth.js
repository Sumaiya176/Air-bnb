import React, { useContext } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { loginContext } from '../App';
import Login from './Home/FirebaseLogin/Login';


const RequiredAuth = () => {

    
    const [isLogedin] = useContext(loginContext);
    
    return  isLogedin ? <Outlet /> : <Login />

};

export default RequiredAuth;