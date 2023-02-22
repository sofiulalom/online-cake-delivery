import React, { useEffect, useState } from 'react';
import useTitle from '../../../Title/useTitle';


const OrdersData = ({order,handleDelete,handleUpdateStatus}) => {
    const {_id,servicename,message, phone, price ,customaraname,email, service,status }=order;
      const [oerderService, setOrderService]=useState({})
      useTitle('Order')
      useEffect(()=>{
             fetch(`https://cake-service-server.vercel.app/services/${service}`)
             .then(res => res.json())
             .then(data => setOrderService(data))
      },[service])
    
     

    return (
        <div>
     <div className="card card-side w-full mt-5 bg-gray-500 text-gray-100 shadow-xl ml-3">
        <figure>
            
            {   oerderService?.image &&
            <img className='w-96 h-60' src={oerderService?.image} alt=""/>}
            </figure>
        <div className="card-body">
            <h2 className="card-title">{servicename} </h2>
            <h3>{customaraname} </h3>
            <p>price {price}</p>
             <p>email:{email} </p>
            <p>Phone: {phone} </p>
            <p>Review: {message}</p>
             
            <div className="card-actions justify-end">
            <button onClick={()=> handleDelete(_id)} className="btn btn-primary">delete</button>
            <button onClick={()=> handleUpdateStatus(_id)} className="btn btn-ghost">{status ? status :'panding'}</button>
            </div>
        </div>
        </div>
        
        </div>
    );
};

export default OrdersData;