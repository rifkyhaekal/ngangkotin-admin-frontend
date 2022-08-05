import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';

const AdminPrivateRoute = ({ ...rest }) => {
  return <Route {...rest} render={(props, location) => (localStorage.getItem('accessToken') ? <Home {...props} /> : <Navigate to={{ pathname: '/login', state: { from: location } }} />)} />;
};

export default AdminPrivateRoute;
