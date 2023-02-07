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
    return (
        <div>
            <h1>order data :{orders?.length} </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {
                    orders?.map(order => <OrdersData 
                        key={order._id}
                        order={order}
                        ></OrdersData>)
                }
            </div>
        </div>
    );
};

export default Orders;