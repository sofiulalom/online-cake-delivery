import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CartService = () => {
    const {image, title, details}=useLoaderData()
    return (
        <div className="card card-compact w-96  m-auto mt-5 bg-base-100 shadow-xl">
        <figure><img src={image} className='h-60 w-full ' alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title} </h2>
            <p> {details}</p>
            <div className="card-actions justify-end">
            <Link to='/'>
            <button className="btn btn-primary">home</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default CartService;