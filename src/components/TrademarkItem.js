import React from 'react';
import ImgUna from '../images/ImgUna.png'; // Import the image

const TrademarkItem = ({ trademark }) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center mb-4">
      {/* Mark - Image */}
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center" style={{ width: '140px', height: '100px' }}>
        {trademark.image ? (
            <img src={trademark.image} alt={trademark.name} className="w-12 h-12" />
        ) : (
            <img src={ImgUna} alt="Trademark Default" className="w-12 h-12" />
        )}
        </div>


      {/* Details - Name and Owner */}
<div>
  <h3 className="text-lg font-medium">{trademark.name}</h3>
  <p className="text-gray-500">{trademark.owner}</p>

  {/* Add margin to create space and reduce font size */}
  <h4 className="text-sm font-medium mt-4">88713620</h4> {/* Reduced size and added margin */}
  <p className="text-sm text-gray-500 mb-2">26th Jan 2020</p> {/* Reduced size */}
</div>


{/* Status */}
<div>
  <div className="flex items-center">
    {/* Green dot */}
    <span className="h-2 w-2 bg-green-700 rounded-full mr-2"></span>
    <p className={`text-${trademark.status === 'Live/Registered' ? 'green-700' : 'red-700'} font-medium`}>
      {trademark.status}
    </p>
  </div>
  
  <p className="text-gray-500">on 26 Jun 2000</p>

  {/* New line with margin and reload icon */}
  <div className="flex items-center mt-4 text-sm">
    <i className="fas fa-sync-alt mr-2 text-gray-500"></i> {/* Reload icon */}
    <p className="text-gray-500">26 Dec 2027</p>
  </div>
</div>




      {/* Class/Description */}
<div>
  {/* New lines for services */}
  <p className="text-gray-600">Computer services, Social Media,</p>
  <p className="text-gray-600">Networking, Virtual Communities, Community</p>

  {/* Classes with flask icon and three-dot icon */}
  <div className="flex items-center mt-2 text-sm">
    <i className="fas fa-flask mr-2 text-gray-600"></i> {/* Flask icon */}
    <p className="text-gray-600 mr-4">Class 45</p>

    <i className="fas fa-flask mr-2 text-gray-600"></i> {/* Flask icon */}
    <p className="text-gray-600 mr-4">Class 8</p>

    <i className="fas fa-ellipsis-h text-gray-600"></i> {/* Three-dot icon */}
  </div>
</div>


</div>

    
  );
};

export default TrademarkItem;
