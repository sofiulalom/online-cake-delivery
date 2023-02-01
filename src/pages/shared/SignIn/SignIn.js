import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignIn = () => {
    const {Login}=useContext(AuthContext);
    const [error, setError]=useState()
    const handleSignInSubmit=event=>{
         event.preventDefault();
         const form=event.target;
         const email=form.email.value;
         const password=form.password.value;
         console.log(email, password)
         Login(email, password)
         .then(result=> {
            const user=result.user;
            console.log(user);
            form.reset()
         })
         .catch(e => {
            console.error(e);
            setError(e.message)
         })
    }
    return (
        <div className='mt-5'>
        <div className='text-center'>
        <form onSubmit={handleSignInSubmit} className='bg-white rounded-sm drop-shadow-2xl m-auto w-80 p-8'>
            <h1 className='text-4xl text-indigo-600 mb-4'>Sign-In</h1>
        <input name='email' type="email" placeholder="Your Email" className="input  input-info w-full max-w-xs mb-3" required/>
        <br />
        <input name='password' type="password" placeholder="Your Password" className="input  input-info w-full max-w-xs mb-3" required />
        <br />
        <input className='btn btn-primary w-full max-w-xs  mb-2' type="submit" value="Sign-In" />
        <small className='text-red-600 '>
            {error}
        </small>
        </form>
        </div>
    </div>
    );
};

export default SignIn;