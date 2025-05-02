import React from 'react';

function Navbar() {
  return (
    <nav className='px-4 py-4 md:px-20 mt-4'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-xl md:text-2xl font-bold'>FASHION</h1>
        </div>
        <div className='hidden md:block'>
          <ul className='flex gap-6 md:gap-10 text-sm'>
            <li>CATALOGUE</li>
            <li>FASHION</li>
            <li>FAVOURITE</li>
            <li>LIFESTYLE</li>
            <li>SIGN UP</li>
          </ul>
        </div>
        {/* Mobile Menu (You'll likely want to add interactive elements here) */}
        <div className='md:hidden'>
          {/* Example: Hamburger menu icon */}
          <button className='outline-none focus:outline-none'>
            <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;