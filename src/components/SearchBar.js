import React from 'react';

const SearchBar = () => {
  return (
    <div className="container mx-auto mt-6">
      <p className="mb-4 font-semibold">About 159 Trademarks found for "nike"</p> {/* Increased bottom margin */}
      
      <hr className="my-4" /> {/* Added margin for spacing */}

      <span className="mr-4 font-semibold">Also try searching for</span> {/* Convert p to span and add margin-right */}

      {/* Button container */}
        <button className="border border-orange-500 bg-orange-100 text-orange-500 px-4 py-2 rounded-xl mx-5">
          nike"
        </button>
        <button className="border border-orange-500 bg-orange-100 text-orange-500 px-4 py-2 rounded-xl">
          "like
        </button>
    </div>
  );
};

export default SearchBar;
