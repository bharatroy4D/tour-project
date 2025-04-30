import React from 'react';
import Top from '../Top/Top';
import Header from '../Header';
import hero_img from '../../../assets/hero-5.jpg';

const HomePage = () => {
    return (
        <div className='relative'>
            {/* Background Image */}
            <div
                className='absolute inset-0 z-0 bg-cover bg-center'
                style={{ backgroundImage: `url(${hero_img})` }}
            ></div>

            {/* Top and Header (z-10 to stay above image) */}
            <div className='relative z-10'>
                <Top />
                <Header />
            </div>

            {/* You can place hero text or button here */}
            <div className='relative z-10 h-[500px] flex flex-col items-center justify-center text-white'>
                <h1 className='text-4xl font-bold'>Explore the world Together</h1>
            </div>
        </div>
    );
};

export default HomePage;
