import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceAllCart from './ServiceAllCart';

const ServiceAll = () => {
    const [services, setServices]=useState();
    useEffect(()=> {
        fetch('https://cake-service-server.vercel.app/servicess')
        .then(res => res.json())
        .then(data => {
           console.log(data);
          setServices(data)
       })
   },[])
    return (
        <div>
            <div className='text-center mt-5 text-gray-100'>
            <h1 className='text-3xl font-bold '>Our service</h1>
           <p className='w-96 text-center m-auto mt-1 mb-4'>Hey friends, this cake service is just for you, you will always get our service and you can see our food in a very good way.</p>
           <div className='lg:m-auto  md:m-auto sm:m-auto '>
             <Link to='/'><button className='btn btn-primary '>Backe</button></Link>
             </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-5 mt-5'>
                {
                    services?.map(service => <ServiceAllCart
                    key={service._id}
                    service={service}
                    
                    ></ServiceAllCart>)
                }
            </div>
        </div>
    );
};

export default ServiceAll;