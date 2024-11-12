import React from 'react';
import logo from 'https://png.pngtree.com/element_our/sm/20180411/sm_5ace0628840fa.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img src={logo} alt="AgroConnect" className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold text-green-700">AgroConnect</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-700">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-700">Experts</a>
            <a href="#" className="text-gray-700 hover:text-green-700">Community</a>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Join Network
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;