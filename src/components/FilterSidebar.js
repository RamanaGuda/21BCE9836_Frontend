import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg w-94 mx-2">
      {/* Filter and Icons */}
      <div className="flex justify-between mb-6">
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <i className="fas fa-filter"></i> {/* FontAwesome Filter Icon */}
        </button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <i className="fas fa-share-alt"></i> {/* FontAwesome Share Icon */}
        </button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
          <i className="fas fa-sort"></i> {/* FontAwesome Sort Icon */}
        </button>
      </div>

      {/* Status Section */}
      <div className="mb-6">
        <h6 className="font-bold mb-4">Status</h6>
        <div className="flex flex-wrap gap-2">
          <button className="py-1 px-3 rounded-full border border-gray-300 text-sm bg-gray-100">All</button>
          <button className="py-1 px-3 rounded-full border border-green-300 text-sm text-green-700 bg-green-100">Registered</button>
          <button className="py-1 px-3 rounded-full border border-yellow-300 text-sm text-yellow-700 bg-yellow-100">Pending</button>
          <button className="py-1 px-3 rounded-full border border-red-300 text-sm text-red-700 bg-red-100">Abandoned</button>
          <button className="py-1 px-3 rounded-full border border-gray-300 text-sm text-gray-700 bg-gray-100">Others</button>
        </div>
      </div>

      {/* Owners Section */}
      <div className="mb-6">
        <div className="flex justify-start space-x-4 border-b mb-2">
          <button className="font-semibold pb-1 border-b-2 border-black">Owners</button>
          <button className="font-semibold pb-1 text-gray-500">Law Firms</button>
          <button className="font-semibold pb-1 text-gray-500">Attorneys</button>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Owners"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
        </div>
        <ul className="space-y-2">
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 rounded border-gray-300" /> Tesla, Inc.
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 rounded border-gray-300" /> SpaceX, Inc.
            </label>
          </li>
        </ul>
      </div>

      {/* Display Section */}
      <div>
        <h6 className="font-bold mb-4">Display</h6>
        <div className="flex space-x-2">
          <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
            Grid View
          </button>
          <button className="w-full py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200">
            List View
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
