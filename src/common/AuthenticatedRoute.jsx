import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const AuthenticatedRoute = React.forwardRef(({ ...props}, ref) => {
  const isAuth = useAuth();

  return isAuth 
    ? props.children
    : <Navigate to='/'/>
});

export default AuthenticatedRoute;
