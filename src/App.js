import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import TrademarkList from './components/TrademarkList';
import FilterSidebar from './components/FilterSidebar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <div className="container mx-auto px-0 md:flex mt-6">
        <div className="md:w-3/4">
          <TrademarkList />
        </div>
        <div className="md:w-1/4 mt-6 md:mt-0">
          <FilterSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
