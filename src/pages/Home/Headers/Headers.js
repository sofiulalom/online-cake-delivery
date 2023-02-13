import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import {Link} from 'react-router-dom'
import logo from  '../../../../src/assest/Logo/logo.jpg'
const Headers = () => {
   const {user, LogOut}=useContext(AuthContext);
   const handleLogOutbtn=()=> {
        LogOut()
        .then(()=> {})
        .catch(e => console.log(e))
   }
    const menuItems=<>
      
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
       {user?.uid?
       <>
         <li><Link to='/orders'>Order</Link></li>
         <button onClick={handleLogOutbtn} className='btn btn-primary'>Loguot</button>
          
          <img src={user?.photoURL} alt="" className='w-10 ml-40 rounded-full '/>
          
       </> 
        
        :
       <>
       
       <li><Link to='/signUp'>Sign-Up</Link></li>
      <li><Link to='/signin'>Sign-In</Link></li>
       
       </>
  
       
       }
      
    
    </>
    return (
        <div className="navbar bg-base-100 mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns='' className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost ml-8  pxy-0">
      <img src={logo} alt="" className='w-14 rounded-full' />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {menuItems}
    </ul>
  </div>
 
</div>
    );
};

export default Headers;