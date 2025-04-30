import React, { useEffect, useState } from 'react';
import Tour from './Tour';

const Tourplace = () => {
    const [tourCategory, setTourCategory] = useState([]);
    const [tourPlace, setTourplace] = useState([]);

    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setTourCategory(data))
            .catch(err => console.error("Error loading category data:", err));
    }, []);

    useEffect(() => {
        fetch('/place.json')
            .then(res => res.json())
            .then(data => setTourplace(data))
            .catch(err => console.error("Error loading place data:", err));
    }, []);

    return (
        <div className='w-11/12 mx-auto py-10'>
            {/* travel category */}
            <div className='flex justify-between items-center flex-wrap gap-4 mb-8'>
                <h1 className='text-3xl font-bold'>Travel Places</h1>
                <div className='flex flex-wrap gap-4'>
                    {
                        tourCategory.map(tour => (
                            <div
                                key={tour.id}
                                className='font-semibold border px-4 py-1 rounded-full border-blue-500 hover:bg-blue-100 cursor-pointer transition duration-200'
                            >
                                {tour.name}
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* travel places list */}
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6'>
                {
                    tourPlace.map(tour => <Tour key={tour.id} tour={tour} />)
                }
            </div>
        </div>
    );
};

export default Tourplace;
