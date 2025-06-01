import React from 'react';
import SwipeGame from './SwipeGame';
import SmartMatch from './SmartMatch';
import LocationFilter from './LocationFilter';
import GiftsReactions from './GiftsReactions';
import NotificationHandler from './NotificationHandler';
import SwipeDeck from './SwipeDeck';
import AIProfileSummary from './AIProfileSummary';

function App() {
  return (
    <div className="p-4 space-y-6">
      <NotificationHandler />
      <h1 className="text-2xl font-bold text-center">👋 Welcome to HelloLove!</h1>
      <SwipeGame />
      <SmartMatch />
      <LocationFilter />
      <GiftsReactions />
      <SwipeDeck />
      <AIProfileSummary
        profile={{
          name: 'Emily',
          age: 27,
          interests: ['йога', 'подорожі', 'музика'],
          goal: 'серйозні стосунки',
          traits: ['добра', 'весела', 'цілеспрямована']
        }}
      />
    </div>
  );
}

export default App;
