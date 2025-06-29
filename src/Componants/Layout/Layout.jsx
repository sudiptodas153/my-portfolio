import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Shared/Footer/Footer';

const Layout = () => {
const location = useLocation()
const hideNav = location.pathname.includes('/details')

    return (
        <div>
            {!hideNav && (
                <div className='sticky top-0 z-50'>
                    <Navbar />
                </div>
            )}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;