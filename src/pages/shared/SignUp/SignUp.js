import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
     const {userSignUp}=useContext(AuthContext);
     const [error, setError]=useState(true)
      const handleSignUpSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name, email, password)
        userSignUp(email, password)
        .then(result=> {
             const user=result.user;
             console.log(user)
             form.reset()
        })
        .catch(e=> {
            console.error(e);
            setError(e.message)
        })
      }
    return (
        <div className='mt-5'>
            <div className='text-center'>
            <form onSubmit={handleSignUpSubmit} className='bg-white rounded-sm drop-shadow-2xl m-auto w-80 p-8'>
                <h1 className='text-4xl text-indigo-600 mb-4'>Sign-Up</h1>
            <input name='name'  type="text" placeholder="Your name" className="input input-info w-full max-w-xs mb-3" />
            <br />
            <input name='email' type="email" placeholder="Your Email" className="input  input-info w-full max-w-xs mb-3" required/>
            <br />
            <input name='password' type="password" placeholder="Your password" className="input  input-info w-full max-w-xs mb-3" required />
            <br />
            <input className='btn btn-primary w-full max-w-xs mb-2' type="submit" value="Sign-Up" />
             
            <small className='text-red-600 p-1'>
                {error}
              </small>
            </form>
              
            </div>
        </div>
    );
};

export default SignUp;