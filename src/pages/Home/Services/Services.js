import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCart from './ServiceCart';

const Services = () => {

    const [services, setServices]=useState();
    useEffect(()=> {
         fetch('https://cake-service-server.vercel.app/services')
         .then(res => res.json())
         .then(data => {
          
           setServices(data)
        })
    },[])
    return (
        <div>
           <div className='text-center mt-5 bg-black text-white'>
           <h1 className='text-3xl font-bold '>Our service</h1>
           <p className='w-96 text-center m-auto mt-1 mb-4'>Hey friends, this cake service is just for you, you will always get our service and you can see our food in a very good way.</p>
           <div className='lg:m-auto  md:m-auto sm:m-auto '>
             <Link to='/seeall'><button className='btn btn-primary '>See All</button></Link>
             </div>
           </div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-5 mt-5'>
             {
                services?.map(service => <ServiceCart 
                    key={service._id}
                    service={service}
                    ></ServiceCart>)
             }
             
            </div>
        </div>
    );
};

export default Services;
