import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OrdersData from './OrdersData';

const Orders = () => {
    const {user}=useContext(AuthContext);
    const [orders, setOrders]=useState()
    useEffect(()=>{
          fetch(`http://localhost:5000/orders?email=${user?.email}`)
          .then(res => res.json())
          .then(data => setOrders(data))
    },[user?.email])

    const handleDelete=id=>{
          fetch(`http://localhost:5000/orders/${id}`, {
            method:'DELETE',
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
        fetch(`http://localhost:5000/orders/${id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
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
            <h1>order data :{orders?.length} </h1>
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