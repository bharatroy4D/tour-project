import React, { useEffect, useState } from 'react';
import Popular from './Popular/popular';
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow Component
const CustomNextArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute z-10 right-0 translate-x-1/2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white text-gray-600 hover:text-blue-500 p-3 rounded-full shadow-md hover:shadow-lg transition"
    >
        <FaChevronRight size={20} />
    </div>
);

// Custom Prev Arrow Component
const CustomPrevArrow = ({ onClick }) => (
    <div
        onClick={onClick}
        className="absolute z-10 left-0 -translate-x-1/2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white text-gray-600 hover:text-blue-500 p-3 rounded-full shadow-md hover:shadow-lg transition"
    >
        <FaChevronLeft size={20} />
    </div>
);

const Populars = () => {
    const [populars, setPopulars] = useState([]);

    useEffect(() => {
        fetch('place.json')
            .then(res => res.json())
            .then(data => setPopulars(data));
    }, []);

    const filterPlace = populars.filter(popular => popular.category === "Historical");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // nextArrow: <CustomNextArrow />,
        // prevArrow: <CustomPrevArrow />,
    };

    return (
        <div className='b max-w-sm md:max-w-md lg:max-w-7xl px-5 md:px-10 lg:px-20  py-10 '>
            <h1 className='text-3xl font-bold mb-6'>Popular Destination</h1>
            <Slider {...settings}>
                {filterPlace.map(popular => (
                    <div key={popular.id} className="px-2">
                        <Popular popular={popular} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Populars;