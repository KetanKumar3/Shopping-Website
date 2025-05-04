import React from 'react';
import Card from './Card';
import image1 from '../assets/image12.png';
import image2 from '../assets/image13.png';
import image3 from '../assets/Mobileapp.png';
import image4 from '../assets/googleplay.png';
import image5 from '../assets/appstore.png';

function Section3() {
  return (
    <>
      <div className='my-16 px-4 md:px-20'>
        <h1 className='font-black text-3xl md:text-4xl pl-2'>Young's Favourite</h1>
        <div className='flex flex-col md:flex-row gap-6 md:gap-10 mt-6 mb-12'>
          <Card image={image1} text1="Trending on instagram" />
          <Card image={image2} text1="All under $40" />
          <Card image={image1} text1="Grab Now" />
        </div>
      </div>

      <div className="bg-[#F0F0F0] px-4 md:px-20 py-8 mt-8  rounded-xl flex flex-col md:flex-row gap-16 md:gap-10 items-center">
  <div className='w-full md:w-1/2 order-first md:order-last'>
    <img className='w-full h-auto max-w-md md:mx-0' src={image3} alt="Mobile App" />
  </div>
  <div className='space-y-4 md:space-y-5 text-center md:text-left'>
    <h1 className='text-xl md:text-2xl font-bold pl-2'>DOWNLOAD APP & GET THE VOUCHER!</h1>
    <h3 className='text-base md:text-lg text-gray-700'>
      Get 30% off for your first transaction using the Rondovision mobile app now.
    </h3>
    <div className='flex justify-center md:justify-start gap-3'>
      <img className='w-32 md:w-40 h-10 md:h-12' src={image4} alt="Google Play Store" />
      <img className='w-32 md:w-40 h-10 md:h-12' src={image5} alt="App Store" />
    </div>
  </div>
</div>


      <div className='bg-[#F9DF56] flex flex-col justify-center items-center py-12 md:py-20 gap-4 px-4 md:px-0'>
  <h1 className='text-2xl md:text-4xl text-white font-bold text-center'>
    JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
  </h1>
  <h2 className='text-lg md:text-2xl text-white font-semibold text-center'>
    Type your email down below and be young wild generation
  </h2>
  <div className='bg-white w-full sm:w-96 md:w-72 px-3 py-1 md:px-6 md:py-2 flex justify-between rounded-md shadow-md'>
    <input
      type='email' // Changed to email for better input type
      placeholder='Add your email here'
      className='w-full text-gray-700 focus:outline-none' // Basic input styling
    />
    <button className='bg-black text-white px-3 py-1 md:px-4 text-xs md:text-sm rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50'>
      SEND
    </button>
  </div>
</div>
    </>
  );
}

export default Section3;