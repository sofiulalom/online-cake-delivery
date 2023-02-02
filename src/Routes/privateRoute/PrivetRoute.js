import React, { useContext } from 'react';
import { AuthContext } from '../../pages/AuthProvider/AuthProvider';
import { Navigate, useLocation} from 'react-router-dom'
const PrivetRoute = (children) => {
   const {user,loading}=useContext(AuthContext)
   const location =useLocation()
   if(loading){
      return <h3 className='text-2xl'>Loading....</h3>
   }
   if(!user){
      return children;
   }
   return <Navigate to='/' state={{form: location}} replace></Navigate>
};

export default PrivetRoute;