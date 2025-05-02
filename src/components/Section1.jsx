import React from 'react';
import Card from './Card';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';

function Section1() {
  return (
    <div className='my-16 px-4 md:px-20'>
      <h1 className='font-black text-xl md:text-2xl pl-2'>NEW ARRIVALS</h1>
      <div className='flex flex-col md:flex-row gap-6 md:gap-10 mt-6'>
        <Card image={image7} text1="Hoodies & Sweetshirt" />
        <Card image={image8} text1="Coats & Parkas" />
        <Card image={image9} text1="Tees & T-Shirt" />
      </div>
    </div>
  );
}

export default Section1;