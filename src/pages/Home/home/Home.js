import React, { useEffect, useState } from 'react';
import useTitle from '../../../Title/useTitle';
import HomeSumary from '../Homesumary/HomeSumary';

const Home = () => {
    const [services, setServices]=useState();
     useTitle('Home');
     useEffect(()=>{
          fetch('http://localhost:5000/services')
          .then(res => res.json())
          .then(data => setServices(data))
     },[])
    return (
        <div>
           
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                services?.map(service => <HomeSumary 
                    key={service._id}
                     service={service}
                
                ></HomeSumary>)
            }
           </div>
            
        </div>
    );
};

export default Home;