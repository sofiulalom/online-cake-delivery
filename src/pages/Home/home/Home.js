import React from 'react';
import useTitle from '../../../Title/useTitle';
import SectionOne from '../../shared/section/SectionOne';
import SectionTow from '../../shared/section/SectionTow';
import Banner from '../banner.js/Banner';

import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div className='bg-black'>
             <Banner></Banner>
             <SectionTow></SectionTow>
             <Services></Services>
             <SectionOne></SectionOne>
             
     </div>
    );
};

export default Home;