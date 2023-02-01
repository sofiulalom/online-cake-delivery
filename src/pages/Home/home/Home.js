import React from 'react';
import useTitle from '../../../Title/useTitle';

const Home = () => {
     useTitle('Home')
    return (
        <div>
            <h1 className='5xl'> hi home component</h1>
        </div>
    );
};

export default Home;