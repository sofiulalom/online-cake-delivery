import React from 'react';
import useTitle from '../../../Title/useTitle';
import SectionOne from '../../shared/section/SectionOne';
import Banner from '../banner.js/Banner';

import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
             <Banner></Banner>
            <Services></Services>
             <SectionOne></SectionOne>
        </div>
    );
};

export default Home;