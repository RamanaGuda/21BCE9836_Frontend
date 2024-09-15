import React from 'react';
import logo from '../images/Logo.png'; // Import the logo

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
      <a href="/" className="text-xl font-bold text-gray-800">
          <img src={logo} alt="Trademarkia Logo" className="h-5" /> {/* Use the logo */}
        </a>
        <form className="flex">
          <input 
            type="text" 
            placeholder="Search Trademark" 
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
