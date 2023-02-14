import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SetToken } from '../../../setToken/SetToken';
import useTitle from '../../../Title/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import GoogleLogin from '../googleLogin/GoogleLogin';

const SignIn = () => {
    const {Login}=useContext(AuthContext);
    const [error, setError]=useState()
    useTitle('sign-in')
    const location=useLocation();
    const navigate=useNavigate();
    const from= location.state?.from?.pathname || '/';
    const handleSignInSubmit=event=>{
         event.preventDefault();
         const form=event.target;
         const email=form.email.value;
         const password=form.password.value;
         
         Login(email, password)
         .then(result=> {
            const user=result.user;
            SetToken(user)
             form.reset()
            navigate(from, {replace:true})
            

         })
         .catch(e => {
            console.error(e);
            setError(e.message)
         })
    }
    return (
        <div className=' bg-black '>
        <div className='text-center'>
        <form onSubmit={handleSignInSubmit} className='bg-white rounded-sm mb-5 drop-shadow-2xl m-auto w-80 p-8'>
            <h1 className='text-4xl text-indigo-600 mb-4'>Sign-In</h1>
        <input name='email' type="email" placeholder="Your Email" className="input  input-info w-full max-w-xs mb-3" required/>
        <br />
        <input name='password' type="password" placeholder="Your Password" className="input  input-info w-full max-w-xs mb-3" required />
        <br />
        <input className='btn btn-primary w-full max-w-xs  mb-2' type="submit" value="Sign-In" />
        <GoogleLogin></GoogleLogin>
        <small className='text-red-600 '>
            {error}
        </small>
        </form>
        </div>
    </div>
    );
};

export default SignIn;