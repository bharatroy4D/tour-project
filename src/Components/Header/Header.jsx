import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/category'>Category</NavLink>
            <NavLink to='/pages'>Pages</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    );
};

export default Header;