import React from 'react';
import demo_1 from '../../../../assets/demo_1.jpg'; 
import demo_2 from '../../../../assets/demo_2.webp'; 

const demoPlaces = [
    {
        id: 1,
        title: 'Santorini, Greece',
        image: demo_1, // Local image
    },
    {
        id: 2,
        title: 'Kyoto, Japan',
        image: demo_2, // Local image
    },
];

const DemoPlace = () => {
    return (
        <div className="w-11/12 mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Demo Places</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {demoPlaces.map((place) => (
                    <div key={place?.id} className="relative rounded-2xl overflow-hidden shadow-lg group h-64">
                        <img
                            src={place?.image}
                            alt={place?.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-2xl font-semibold mb-2">{place?.title}</h3>
                            <button className="px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-yellow-400 transition duration-300">
                                Bonus
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DemoPlace;
