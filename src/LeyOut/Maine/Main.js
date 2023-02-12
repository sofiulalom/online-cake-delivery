import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../../pages/Home/Headers/Headers';
import Footer from '../../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;