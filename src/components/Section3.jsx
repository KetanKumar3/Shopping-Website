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

      <div className="bg-[#F0F0F0] px-4 md:px-20 py-10 mt-10 mb-10 rounded-xl flex flex-col md:flex-row gap-8 md:gap-10 items-center">
      <div className='w-1/2 md:w-auto'>
          <img className='w-full h-auto max-w-md' src={image3} alt="Mobile App" />
        </div>
        <div className='space-y-4 md:space-y-5'>
          <h1 className='text-lg md:text-xl font-bold pl-2'>DOWNLOAD APP & GET THE VOUCHER!</h1>
          <h3 className='text-sm md:text-base text-gray-700'>
            Get 30% off for your first transaction using the Rondovision mobile app now.
          </h3>
          <div className='flex gap-3'>
            <img className='w-32 md:w-40 h-10 md:h-12' src={image4} alt="Google Play Store" />
            <img className='w-32 md:w-40 h-10 md:h-12' src={image5} alt="App Store" />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Section3;