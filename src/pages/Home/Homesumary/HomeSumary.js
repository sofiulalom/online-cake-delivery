import React from 'react';

const HomeSumary = ({service}) => {
    const {title,image, details}=service;
    return (
        
        <div className="card w-90 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={image} alt="Shoes"  className="rounded-xl h-60" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{details} </p>
            <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        
    );
};

export default HomeSumary;