import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = ({service}) => {
    const {_id,image, title, details}=service;
    
    return (
        <div className="card card-compact w-76 bg-base-100 shadow-xl">
        <figure><img src={image} className='h-60 w-full ' alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title} </h2>
            <p>{details} </p>
            <div className="card-actions justify-end">
            <Link to={`/chackOut/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default ServiceCart;