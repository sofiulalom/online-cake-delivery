import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const Services = () => {

    const [services, setServices]=useState();
    useEffect(()=> {
         fetch('http://localhost:5000/services')
         .then(res => res.json())
         .then(data => {
          
           setServices(data)
        })
    },[])
    return (
        <div>
           <div className='text-center mt-5'>
           <h1 className='text-3xl '>Our service</h1>
           <p className='w-96 text-center m-auto mt-1 '>Hey friends, this cake service is just for you, you will always get our service and you can see our food in a very good way.</p>
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
