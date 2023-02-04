import React from 'react';

const ServiceCart = ({service}) => {
    const {image, title, details}=service;
    
    return (
        <div className="card card-compact w-76 bg-base-100 shadow-xl">
        <figure><img src={image} className='h-60 w-full ' alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title} </h2>
            <p>{details} </p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default ServiceCart;