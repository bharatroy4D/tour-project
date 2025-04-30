import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Popular = ({ popular }) => {
  const { name, price, rating, image } = popular;

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-200">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

        {/* ⭐ Easy Dynamic Star Rating */}
        <div className="flex items-center text-yellow-500 mb-2">
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

        <div className="text-lg font-bold text-blue-600 mb-3">${price}</div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          View
        </button>
      </div>
    </div>
  );
};

export default Popular;
