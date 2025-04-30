import React, { useEffect, useState } from 'react';
import Popular from './Popular/popular';

const Populars = () => {
    const [populars, setPopulars] = useState([]);

    useEffect(() => {
        fetch('place.json')
            .then(res => res.json())
            .then(data => setPopulars(data))
    }, [])
    return (
        <div className='w-11/12 mx-auto py-10'>
            <h1 className='text-3xl font-medium '>Popular Destination</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto py-7'>
                {
                    populars.map(popular => <Popular key={popular.id} popular={popular}></Popular>)
                }
            </div>
        </div>
    );
};

export default Populars;