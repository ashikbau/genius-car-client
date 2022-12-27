// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { authContext } from '../../contexts/AuthProvider/AuthProvider';

// const PrivateRoute = ({children}) => {
//     const {user, loading} = useContext(authContext);
//     const location  = useLocation();

//     if(loading) {
//         return <h1 className='text-5xl'>Loading...</h1>
//     }

//     if(user){
//         return children;
//     }

//     return <Navigate to="/login" state={{from: location}} replace></Navigate>;
// };

// export default PrivateRoute;

import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(authContext);
    const location = useLocation();
    
    if(loading) {
        return <h1 className='text-5xl'>Loading...</h1>
    }
        if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};


export default PrivateRoute;