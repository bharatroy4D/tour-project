import React from 'react';
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
// Mapping string names to actual icon components
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
    return (
        <div className='bg-base-300'>
            {/* // Destination category  */}
            <div className='flex flex-wrap justify-center gap-6 p-5'>
                {category.map(item => {
                    const IconComponent = icons[item.icon];
                    return (
                        <div key={item.id} className='flex items-center gap-3 px-5 py-2 shadow rounded bg-white group hover:bg-blue-700 transition'>
                            <IconComponent className='text-2xl text-purple-600 group-hover:text-white' />
                            <span className='capitalize font-medium text-purple-600 group-hover:text-white'>
                                {item.name}
                            </span>
                        </div>
                    );
                })}
            </div>


            {/* Destination searchCard */}
            <div>
                <div className='w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-10'>

                    {/* Card 1: From */}
                    <div className='bg-gradient-to-br from-white to-purple-50 shadow p-6 rounded border border-base-300 hover:shadow-xl transition duration-300'>
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

                    {/* Card 2: To */}
                    <div className='bg-gradient-to-br from-white to-purple-50 shadow p-6 rounded border border-base-300 hover:shadow-xl transition duration-300'>
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

                    {/* Card 3: Date */}
                    <div className='bg-gradient-to-br from-white to-purple-50 shadow p-6 rounded border border-base-300 hover:shadow-xl transition duration-300'>
                        <div className='flex justify-between items-center mb-4 text-purple-700'>
                            <h2 className='font-bold text-lg'>Date</h2>
                        </div>
                        <input
                            type="date"
                            className='w-full bg-gray-100 text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400'
                        />
                        <p className='mt-3 text-gray-500 text-sm'>When are you going?</p>
                    </div>

                    {/* Button below all cards, centered */}
                    <div className='md:col-span-3 flex justify-center items-center'>
                        <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300'>
                            Search
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Destination;