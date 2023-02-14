import React, { useContext, useState } from 'react';
import { SetToken } from '../../../setToken/SetToken';
import useTitle from '../../../Title/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import GoogleLogin from '../googleLogin/GoogleLogin';

const SignUp = () => {
     const {userSignUp,  profileUpdateUser}=useContext(AuthContext);
     const [error, setError]=useState(true)
     useTitle('sign-Up')
      const handleSignUpSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const photoURL=form.photoURL.value;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photoURL, email, password)
        
        userSignUp(email, password)
        .then(result=> {
             const user=result.user;
             SetToken(user)
             form.reset()
             handleUpdateProfile(name, photoURL)
        })
        .catch(e=> {
            console.error(e);
            setError(e.message)
        })
      }

      const handleUpdateProfile=(displayName, photoURL)=>{
          const Profile={
             displayName: displayName,
             photoURL: photoURL,
          }
          profileUpdateUser(Profile)
          .then(()=> {})
          .then(e => console.error(e))
      }
    return (
        <div className='mt-5'>
            <div className='text-center'>
            <form onSubmit={handleSignUpSubmit} className='bg-white rounded-sm drop-shadow-2xl m-auto w-80 p-8'>
                <h1 className='text-4xl text-indigo-600 mb-4'>Sign-Up</h1>
            <input name='photoURL'  type="text" placeholder="Photo URL" className="input input-info w-full max-w-xs mb-3" />
            <br />
            <input name='name'  type="text" placeholder="Your name" className="input input-info w-full max-w-xs mb-3" />
            <br />
            <input name='email' type="email" placeholder="Your Email" className="input  input-info w-full max-w-xs mb-3" required/>
            <br />
            <input name='password' type="password" placeholder="Your password" className="input  input-info w-full max-w-xs mb-3" required />
            <br />
            <input className='btn btn-primary w-full max-w-xs mb-2' type="submit" value="Sign-Up" />
             <GoogleLogin></GoogleLogin>
            <small className='text-red-600 p-1'>
                {error}
              </small>
            </form>
              
            </div>
        </div>
    );
};

export default SignUp;