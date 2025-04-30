import React, { useEffect, useState } from 'react';
import Tour from './Tour';

const Tourplace = () => {
    const [tourCategory, setTourCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [tourPlace, setTourPlace] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setTourCategory(data))
            .catch(err => console.error("Error loading category data:", err));
    }, []);

    useEffect(() => {
        fetch('/place.json')
            .then(res => res.json())
            .then(data => setTourPlace(data))
            .catch(err => console.error("Error loading place data:", err));
    }, []);

    const handleCategory = (categoryName) => {
        setSelectedCategory(categoryName);
        setCurrentPage(1); // Reset to first page on category change
    };

    const filteredPlaces = selectedCategory
        ? tourPlace.filter(place => place.category === selectedCategory)
        : tourPlace;

    // Pagination logic
    const totalPages = Math.ceil(filteredPlaces.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredPlaces.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='w-11/12 mx-auto py-10'>
            {/* travel category */}
            <div className='flex justify-between items-center flex-wrap gap-4 mb-8'>
                <h1 className='text-3xl font-bold'>Travel Places</h1>
                <div className='flex flex-wrap gap-4'>
                    <div
                        onClick={() => {
                            setSelectedCategory(null);
                            setCurrentPage(1);
                        }}
                        className={`font-semibold border px-4 py-1 rounded-full cursor-pointer transition duration-200 
                            ${!selectedCategory ? 'bg-blue-500 text-white' : 'border-blue-500 hover:bg-blue-500 hover:text-white'}`}
                    >
                        All
                    </div>
                    {
                        tourCategory.map(tour => (
                            <div
                                onClick={() => handleCategory(tour.name)}
                                key={tour.id}
                                className={`font-semibold border px-4 py-1 rounded-full cursor-pointer transition duration-200 
                                    ${selectedCategory === tour.name ? 'bg-blue-500 text-white' : 'border-blue-500 hover:bg-blue-500 hover:text-white'}`}
                            >
                                {tour.name}
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* travel places list */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10'>
                {
                    currentItems.length > 0 ? (
                        currentItems.map(tour => <Tour key={tour.id} tour={tour} />)
                    ) : (
                        <p className="text-center col-span-full text-gray-500">No places found in this category.</p>
                    )
                }
            </div>

            {/* Pagination */}
            {
                totalPages > 1 && (
                    <div className="flex justify-center">
                        <div className="join">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`join-item btn btn-sm ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Tourplace;
