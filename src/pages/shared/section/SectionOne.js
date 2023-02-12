import React from 'react';
import { Link } from 'react-router-dom';
import img3 from '../../../../src/assest/bannerItems/3.jpg';
const SectionOne = () => {
    return (
        <div className="hero mt-5 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img3} alt='' className="max-w-sm rounded-lg shadow-2xl w-86" />
            <div>
            <h1 className="text-5xl font-bold">Hello cake</h1>
            <p className="py-6 text-justify w-96">Hey friends, this cake service is just for you, you will always get our service and you can see our food in a very good way.</p>
            <Link to='/'><button  className="btn btn-primary">Get Started</button></Link>
            </div>
        </div>
        </div>

    );
};

export default SectionOne;