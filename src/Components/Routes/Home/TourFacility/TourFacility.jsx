import React from 'react';
import { FaGlobeAmericas, FaMapSigns, FaBus } from 'react-icons/fa';

const TourFacility = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="w-11/12 mx-auto px-6 ">
                <h2 className="text-4xl font-semibold text-center mb-12 text-purple-600">Our Tour Facilities</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Global Tour */}
                    <div className="bg-white shadow-md p-6 rounded text-center hover:shadow-xl transition-all">
                        <FaGlobeAmericas className="text-4xl text-purple-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-purple-600 mb-2">Global Tours</h3>
                        <p className="text-sm text-gray-600">Explore the world with our global tours. Visit famous landmarks and immerse yourself in different cultures.</p>
                    </div>

                    {/* Card 2: Guided Tours */}
                    <div className="bg-white shadow-md p-6 rounded text-center hover:shadow-xl transition-all">
                        <FaMapSigns className="text-4xl text-purple-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-purple-600 mb-2">Guided Tours</h3>
                        <p className="text-sm text-gray-600">Our expert guides will ensure you have an amazing experience with insider knowledge and unique stories.</p>
                    </div>

                    {/* Card 3: Travel Transportation */}
                    <div className="bg-white shadow-md p-6 rounded-xl text-center hover:shadow-xl transition-all">
                        <FaBus className="text-4xl text-purple-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-purple-600 mb-2">Travel Transportation</h3>
                        <p className="text-sm text-gray-600">Comfortable and convenient transportation throughout the tour, ensuring a smooth journey every step of the way.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourFacility;
