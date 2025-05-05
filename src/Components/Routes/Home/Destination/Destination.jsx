import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPlaneDeparture, FaSearch } from 'react-icons/fa';
import {
    FaPlane,
    FaMapMarkedAlt,
    FaHotel,
    FaPassport,
    FaBuilding,
    FaBus,
    FaShip
} from 'react-icons/fa';
import { PiAirplaneLandingFill } from 'react-icons/pi';

const category = [
    { id: 1, name: "flight", icon: "FaPlane" },
    { id: 2, name: "tour", icon: "FaMapMarkedAlt" },
    { id: 3, name: "hotel", icon: "FaHotel" },
    { id: 4, name: "visa", icon: "FaPassport" },
    { id: 5, name: "apartments", icon: "FaBuilding" },
    { id: 6, name: "bus", icon: "FaBus" },
    { id: 7, name: "cruise", icon: "FaShip" }
];

// Map icon names to components
const icons = {
    FaPlane,
    FaMapMarkedAlt,
    FaHotel,
    FaPassport,
    FaBuilding,
    FaBus,
    FaShip
};

const Destination = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='
        
     w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 bg-base-300' data-aos="fade-up">
            
            {/* Destination Categories */}
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6 py-6'>
                {category.map(item => {
                    const IconComponent = icons[item.icon];
                    return (
                        <div
                            key={item.id}
                            className='flex items-center gap-2 md:gap-3 px-4 py-2 shadow rounded bg-white group hover:bg-blue-700 transition whitespace-nowrap'
                        >
                            <IconComponent className='text-xl md:text-2xl text-purple-600 group-hover:text-white' />
                            <span className='capitalize font-medium text-sm md:text-base text-purple-600 group-hover:text-white'>
                                {item.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Search Cards Section */}
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-10'>
                {/* From */}
                <div className='bg-gradient-to-br from-white to-purple-50 shadow p-6 rounded-xl border border-base-300 hover:shadow-xl transition duration-300'>
                    <div className='flex justify-between items-center mb-4 text-purple-700'>
                        <h2 className='font-bold text-lg'>From</h2>
                        <FaPlaneDeparture className='text-2xl' />
                    </div>
                    <input
                        type="text"
                        placeholder="Enter departure city"
                        className='w-full bg-gray-100 text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400'
                    />
                    <p className='mt-3 text-gray-500 text-sm'>Where are you flying from?</p>
                </div>

                {/* To */}
                <div className='bg-gradient-to-br from-white to-purple-50 shadow p-6 rounded-xl border border-base-300 hover:shadow-xl transition duration-300'>
                    <div className='flex justify-between items-center mb-4 text-purple-700'>
                        <h2 className='font-bold text-lg'>To</h2>
                        <PiAirplaneLandingFill className='text-2xl' />
                    </div>
                    <input
                        type="text"
                        placeholder="Enter destination"
                        className='w-full bg-gray-100 text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400'
                    />
                    <p className='mt-3 text-gray-500 text-sm'>Choose your destination</p>
                </div>

                {/* Date */}
                <div className='bg-gradient-to-br from-white to-purple-50 shadow p-6 rounded-xl border border-base-300 hover:shadow-xl transition duration-300'>
                    <div className='flex justify-between items-center mb-4 text-purple-700'>
                        <h2 className='font-bold text-lg'>Date</h2>
                    </div>
                    <input
                        type="date"
                        className='w-full bg-gray-100 text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400'
                    />
                    <p className='mt-3 text-gray-500 text-sm'>When are you going?</p>
                </div>

                {/* Search Button */}
                <div className='md:col-span-3 flex justify-center items-center mt-4'>
                    <button className='flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300'>
                        <FaSearch className='text-sm' />
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Destination;


