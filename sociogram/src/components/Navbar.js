import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4"> 
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#" className="text-xl font-bold">My App</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search" className="px-3 py-2 pr-8 rounded-full bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-300" />
            <button className="absolute top-0 right-0 mt-2 mr-3 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m0 0l-5-5m5 5-5-5m5 5H5M12 12a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
            </button>
          </div>
          {/* Toggle user profile and sign-out links when logged in */}
          {/* Toggle sign-in and sign-up links when logged out */}
          <div className="space-x-2">
            {/* Logged in */}
            {/* <a href="#" className="text-white">Profile</a> */}
            {/* <a href="#" className="text-white">Sign Out</a> */}

            {/* Logged out */}
            <a href="#" className="text-white">Sign In</a>
            <a href="#" className="text-white">Sign Up</a>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-400 hover:text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;