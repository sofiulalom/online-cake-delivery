import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../../Title/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const ReviewCart = () => {
    const {user}=useContext(AuthContext)
    useTitle('myReview')
    return (
        <div>
          
        <div className="hero bg-gray-500 mt-10 mb-36">
           
        <div className="hero-content flex-col lg:flex-row">
          
        {
        user?.photoURL?
        <>
         <img src={user?.photoURL} alt="" className='w-10 h-8 rounded-full sm:mt-2  ' />
        </>
        :
        <>
          <FaUserAlt></FaUserAlt>
        </>
       }
            <div>
            <h1 className="text-2xl font-bold">
                {
                    user?.displayName?
                    <>
                    {user?.displayName}
                    </>
                    :
                    <>
                        unnwonName
                    </>
                }
            </h1>
           
            <p className="py-6">{user?.email} </p>
            <Link to='/'><button className="btn btn-primary">Backe</button></Link>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ReviewCart;