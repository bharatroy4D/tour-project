import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const Tour = ({ tour }) => {
    const { name, price, rating, image, description } = tour;

    return (
        <motion.div
            className="max-w-xs"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div data-aos="fade-up" className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:border-blue-400 transition-all duration-500">
                {/* Image */}
                <motion.img
                    className="w-full h-40 object-cover"
                    src={image}
                    alt={name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
                {/* Content */}
                <div className="p-3">
                    <h2 className="text-lg font-medium text-gray-800 mb-1">{name}</h2>

                    {/* Dynamic Stars */}
                    <div className="flex items-center text-yellow-500 mb-1">
                        {[...Array(5)].map((_, i) => {
                            const rate = i + 1;
                            return (
                                <span key={i}>
                                    {rating >= rate ? (
                                        <FaStar />
                                    ) : rating >= rate - 0.5 ? (
                                        <FaStarHalfAlt />
                                    ) : (
                                        <FaRegStar />
                                    )}
                                </span>
                            );
                        })}
                        <span className="ml-2 text-sm text-gray-500">({rating})</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                        {description}
                    </p>

                    {/* Price */}
                    <div className="text-base font-semibold text-blue-600 mb-2">${price}</div>

                    {/* Location & Button Row */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-600 text-sm gap-1">
                            <FaMapMarkerAlt className="text-blue-500" />
                            <span>View on Map</span>
                        </div>

                        <motion.button
                            className="bg-blue-600 text-white text-sm px-3 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                            whileTap={{ scale: 0.95 }}
                        >
                            View Details
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Tour;
