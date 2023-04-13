import React from 'react';
import './MiCuenta.css';
import { useAuth0 } from '@auth0/auth0-react';

export default function MiCuenta(){

    const { user, isAuthenticated, isLoading} = useAuth0();
    console.log(user)

    if(isLoading){
        return <div>Is loading...</div>
    }

    return(
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    )
}