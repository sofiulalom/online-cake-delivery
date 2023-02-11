import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import {  FaGoogle } from 'react-icons/fa'
import { SetToken } from '../../../setToken/SetToken';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const GoogleLogin = () => {
    const {googleProvider}=useContext(AuthContext)
    
    const handleGoogle=()=>{
        const providergoogle=new GoogleAuthProvider()
         googleProvider(providergoogle)
        .then(result=> {
            const user =result.user;
            
            SetToken(user)
        })
        .catch(e => console.error(e))
    }

    return (
        <div>
            <button onClick={handleGoogle} className='btn btn-outline btn-primary mr-1'><FaGoogle className='mr-1 text-red-500  text-3xl'/>  Google with continew</button>
        </div>
    );
};

export default GoogleLogin;