import React from 'react';
import image from '../assets/image.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

function Home() {
  return (
    <>
      <div className="bg-[#E7E6E6] px-4 md:px-20 py-8 mt-8 md:mt-20 mb-6 md:mb-10 rounded-xl flex flex-col md:flex-row gap-8 md:gap-10 items-center">
      <div className='w-full md:w-1/2'>
          <img className='w-full rounded-md' src={image} alt="Unique Clothes" />
        </div>
        
        <div className='space-y-4 md:space-y-5 text-center md:text-left'>
          <h1 className='font-black text-4xl md:text-6xl pl-2 py-1 md:py-2 pr-5 md:pr-10 bg-white inline-block'>LET'S</h1>
          <h1 className='font-black text-4xl md:text-6xl pl-2'>EXPLORE</h1>
          <h1 className='font-black text-4xl md:text-6xl pl-2 py-1 md:py-2 pr-5 md:pr-10 bg-[#EBD96B] inline-block'>UNIQUE</h1>
          <h1 className='font-black text-4xl md:text-6xl pl-2'>CLOTHES.</h1>
          <h3 className='text-lg pl-2 text-gray-700'>Live for Influential and Innovative fashion!</h3>
          <button className='ml-2 px-6 py-3 bg-black text-white rounded-md text-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50'>Shop Now</button>
        </div>
        
      </div>

      <div className='bg-[#EBD96B] flex flex-wrap justify-around items-center px-4 py-4 md:px-10 md:py-6 mb-6 md:mb-10'>
        <div className='mb-4 md:mb-0'>
          <img className='w-16 md:w-20 h-auto' src={image1} alt="Brand Logo 1" />
        </div>
        <div className='mb-4 md:mb-0'>
          <img className='w-24 md:w-40 h-auto' src={image2} alt="Brand Logo 2" />
        </div>
        <div className='mb-4 md:mb-0'>
          <img className='w-24 md:w-40 h-auto' src={image3} alt="Brand Logo 3" />
        </div>
        <div className='mb-4 md:mb-0'>
          <img className='w-16 md:w-25 h-auto' src={image4} alt="Brand Logo 4" />
        </div>
        <div className='mb-4 md:mb-0'>
          <img className='w-24 md:w-40 h-auto' src={image5} alt="Brand Logo 5" />
        </div>
        <div className='mb-4 md:mb-0'>
          <img className='w-24 md:w-40 h-auto' src={image6} alt="Brand Logo 6" />
        </div>
      </div>
    </>
  );
}

export default Home;