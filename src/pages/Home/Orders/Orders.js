import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OrdersData from './OrdersData';

const Orders = () => {
    const {user, LogOut}=useContext(AuthContext);
    const [orders, setOrders]=useState([])
    useEffect(()=>{
          fetch(`https://cake-service-server.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('cake-token')}`
            }
          })
          .then(res =>{
            if(res.status === 401 || res.status === 403){
              return LogOut()
            }
           return res.json()
            })
          .then(data => setOrders(data))
    },[user?.email, LogOut])

    const handleDelete=id=>{
          fetch(`https://cake-service-server.vercel.app/orders/${id}`, {
            method:'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('cake-token')}`
            }
          })
            .then(res =>  res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('you are sure orderd deleted')
                    const remaning=orders.filter(ord => ord._id !== id);
                    setOrders(remaning)
                    
                }
            })

    }

    const handleUpdateStatus=id=>{
        fetch(`https://cake-service-server.vercel.app/orders/${id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('cake-token')}`
            },
            body: JSON.stringify({status:'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount >0){
                alert('your order update successfully')
                const remaning=orders.filter(ord  => ord._id !== id);
                const approving=orders.find(ord => ord._id === id);
                approving.status= 'Approved';
                const newOreders=[approving,...remaning];
                setOrders(newOreders)
            }
        })
    }
    return (
        <div>
        
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {
                    orders?.map(order => <OrdersData 
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                        handleUpdateStatus={handleUpdateStatus}
                        ></OrdersData>)
                }
            </div>
        </div>
    );
};

export default Orders;