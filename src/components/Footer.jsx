import React from 'react';

function Footer() {
  return (
    <footer className='bg-black text-white py-8 md:py-12 px-4 md:px-20'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-16'>
        <div className=' md:text-left'>
          <h1 className='text-xl md:text-2xl font-bold mb-2'>Fashion</h1>
          <h2 className='text-sm md:text-base text-gray-400'>Complete your style with awesome clothes from us.</h2>
        </div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-32 md:text-left'>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Company</h3>
            <ul className='text-sm text-gray-400 space-y-1'>
              <li>About</li>
              <li>Contact Us</li>
              <li>Support</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Quick Link</h3>
            <ul className='text-sm text-gray-400 space-y-1'>
              <li>Share Location</li>
              <li>Orders Tracking</li>
              <li>Size Guide</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Legal</h3>
            <ul className='text-sm text-gray-400 space-y-1'>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center text-xs text-gray-500'>
        <p>&copy; {new Date().getFullYear()} Fashion. All rights reserved. Created With ❤️ By @KetanKumar.</p>
      </div>
    </footer>
  );
}

export default Footer;