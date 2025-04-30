import React from 'react';
import { NavLink } from 'react-router-dom';
import hero_logo from '../../assets/hero_logo.png';
import { IoIosSearch } from 'react-icons/io';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center py-5'>
            {/* Logo */}
            <img src={hero_logo} alt="Logo" className='w-40 mb-4 md:mb-0' />

            {/* Navigation */}
            <div className='flex gap-6 text-lg text-white flex-wrap justify-center mb-4 md:mb-0'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/category'>Category</NavLink>
                <NavLink to='/pages'>Pages</NavLink>
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>

            {/* Search & CTA */}
            <div className='flex items-center gap-4'>
                <IoIosSearch className='text-2xl text-white cursor-pointer' />
                <button className='bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition'>
                    Become a Partner
                </button>
            </div>
        </div>
    );
};

export default Header;
