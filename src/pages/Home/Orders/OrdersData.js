import React, { useEffect, useState } from 'react';

const OrdersData = ({order,handleDelete}) => {
    const {_id,servicename, phone, price ,customaraname,email, service }=order;
      const [oerderService, setOrderService]=useState({})
      useEffect(()=>{
             fetch(`http://localhost:5000/services/${service}`)
             .then(res => res.json())
             .then(data => setOrderService(data))
      },[service])
    
     

    return (
     <div className="card card-side w-full bg-base-100 shadow-xl ">
        <figure>
            
            {   oerderService?.image &&
            <img src={oerderService?.image} alt=""/>}
            </figure>
        <div className="card-body">
            <h2 className="card-title">{servicename} </h2>
            <h3>{customaraname} </h3>
            <p>price {price}</p>
             <p>email:{email} </p>
            <p>Phone: {phone} </p>
             
            <div className="card-actions justify-end">
            <button onClick={()=> handleDelete(_id)} className="btn btn-primary">delete</button>
            </div>
        </div>
        </div>
    );
};

export default OrdersData;