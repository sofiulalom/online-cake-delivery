import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Title/useTitle';

const ServiceAllCart = ({service}) => {
    const {_id,image, title, details}=service;
     useTitle('seeAll')
    return (
        <div className="card card-compact w-76 bg-gray-500 text-gray-100 shadow-xl">
            
        <figure>
        <img src={image} className='h-60 w-full ' alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title} </h2>
            {
                details.length > 200?

                <p>
                    {details.slice(0, 100) +"..."} <Link to={`/cartService/${_id}`}>Red more</Link>
                </p>
                :
                <p>
                    {details}
                </p>
            }
            <div className="card-actions justify-end">
            <Link to={`/chackOut/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default ServiceAllCart;