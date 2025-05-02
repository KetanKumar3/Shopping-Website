import React from 'react';
import image10 from '../assets/image10.png';

function Card({ image, text1 }) {
  return (
    <div className='w-full md:w-1/3 mb-8 md:mb-0'>
      <div className='relative overflow-hidden rounded-lg'>
        <img className='w-full h-auto object-cover transition-transform duration-300 hover:scale-105' src={image} alt={text1} />
      </div>
      <div className='flex justify-between mt-3'>
        <h2 className='text-lg md:text-xl font-bold'>{text1}</h2>
        <img className='w-5 h-3 md:w-6 md:h-4 mt-3' src={image10} alt="Arrow" />
      </div>
      <h2 className='text-sm md:text-md text-gray-600 mt-1'>Explore Now</h2>
    </div>
  );
}

export default Card