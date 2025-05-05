import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import hero_logo from '../../assets/hero_logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-blue-600 shadow-md' : 'lg:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-10 lg:px-20 ">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <img src={hero_logo} alt="Logo" className="w-40 flex-shrink-0" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 text-lg text-white">
            <NavLink to="/" className="hover:text-yellow-300">
              Home
            </NavLink>
            <NavLink to="/category" className="hover:text-yellow-300">
              Category
            </NavLink>
            <NavLink to="/pages" className="hover:text-yellow-300">
              Pages
            </NavLink>
            <NavLink to="/dashboard" className="hover:text-yellow-300">
              Dashboard
            </NavLink>
            <NavLink to="/contact" className="hover:text-yellow-300">
              Contact
            </NavLink>
          </nav>

          {/* Right - Search & Button */}
          <div className="hidden lg:flex items-center gap-4 text-white">
            <IoIosSearch className="text-2xl cursor-pointer" />
            <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition">
              Become a Partner
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden text-white">
            <button onClick={toggleMenu}>
              {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-4 text-center overflow-x-hidden">
          <NavLink to="/" onClick={toggleMenu} className="block hover:text-purple-400">
            Home
          </NavLink>
          <NavLink to="/category" onClick={toggleMenu} className="block hover:text-purple-400">
            Category
          </NavLink>
          <NavLink to="/pages" onClick={toggleMenu} className="block hover:text-purple-400">
            Pages
          </NavLink>
          <NavLink to="/dashboard" onClick={toggleMenu} className="block hover:text-purple-400">
            Dashboard
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className="block hover:text-purple-400">
            Contact
          </NavLink>
          <div className="flex justify-center items-center gap-4 pt-4">
            <IoIosSearch className="text-2xl cursor-pointer" />
            <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition">
              Become a Partner
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
