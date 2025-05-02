import React from 'react';
import image from '../assets/image11.png';

function Section2() {
  return (
    <div className='bg-[#F9DF56] flex flex-col md:flex-row w-full md:h-3/4'>
      <div className='w-full md:w-1/2'>
        <img className='w-full h-full object-cover' src={image} alt="Payday Sale" />
      </div>

      <div className='space-y-4 md:space-y-5 mx-auto my-8 md:my-auto w-full md:w-1/2 px-6 md:px-8 text-center md:text-left'>
        <h1 className='font-black text-5xl md:text-6xl pl-2 py-1 md:py-2 pr-5 md:pr-10 bg-white inline-block'>PAYDAY</h1>
        <h1 className='font-black text-5xl md:text-6xl pl-2'>SALE NOW</h1>
        <h1 className='font-black text-xl md:text-2xl pl-2 py-1 md:py-2 pr-5 inline-block'>Spend minimal $100 get 30% off
          voucher code for your next purchase</h1>
        <h1 className='font-black text-lg md:text-xl pl-2'>1 June - 10 June 2021</h1>
        <h3 className='text-base md:text-lg pl-2 text-gray-700'>Live for Influential and Innovative fashion!</h3>
        <div className='mt-4 md:mt-0 flex justify-center md:justify-start'>
          <button className='px-5 py-2 md:px-6 md:py-3 bg-black text-white rounded-md text-base md:text-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50'>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Section2;