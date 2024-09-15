import React from 'react';
import TrademarkItem from './TrademarkItem';

const TrademarkList = () => {
  const trademarks = [
    {
      name: 'Meta Logo',
      owner: 'Facebook Inc.',
      status: 'Live/Registered',
      description: 'Computer services, Social Media...',
      image: null, // Add the image URL or leave as null
    },
    // Add more trademark items here
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mx-0">
      {/* Table Headings */}
      <div className="grid grid-cols-4 gap-4 mb-6 font-semibold text-gray-700">
        <div>Mark</div>
        <div>Details</div>
        <div>Status</div>
        <div>Class/Description</div>
      </div>

      {/* Trademark Items */}
      {trademarks.map((trademark, index) => (
        <TrademarkItem key={index} trademark={trademark} />
      ))}
      {trademarks.map((trademark, index) => (
        <TrademarkItem key={index} trademark={trademark} />
      ))}
      {trademarks.map((trademark, index) => (
        <TrademarkItem key={index} trademark={trademark} />
      ))}
      {trademarks.map((trademark, index) => (
        <TrademarkItem key={index} trademark={trademark} />
      ))}
      {trademarks.map((trademark, index) => (
        <TrademarkItem key={index} trademark={trademark} />
      ))}

      {/* ----
       */}

       {trademarks.map((trademark, index) => (
        <TrademarkItem key={index} trademark={trademark} />
      ))}
      {trademarks.map((trademark, index) => (
        <TrademarkItem key={index} trademark={trademark} />
      ))}
      {trademarks.map((trademark, index) => (
        <TrademarkItem key={index} trademark={trademark} />
      ))}
      {trademarks.map((trademark, index) => (
        <TrademarkItem key={index} trademark={trademark} />
      ))}
      {trademarks.map((trademark, index) => (
        <TrademarkItem key={index} trademark={trademark} />
      ))}
    </div>
  );
};

export default TrademarkList;
