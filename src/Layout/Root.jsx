import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import HomePage from '../Components/Header/HomePage/HomePage';
import Top from '../Components/Header/Top/Top';
import Header from '../Components/Header/Header';

const Root = () => {
    return (
        <div>      
            <HomePage></HomePage>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;