import React from 'react';
import ExploreFeed from './ExploreFeed';
import SmartMatch from './SmartMatch';
import LocationFilter from './LocationFilter';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">HelloLove App</h1>
      
      <ExploreFeed />
      <SmartMatch />
      <LocationFilter />
    </div>
  );
}

export default App;
