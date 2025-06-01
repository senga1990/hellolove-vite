import React, { useState } from 'react';

const stories = [
  { id: 1, video: 'https://www.w3schools.com/html/mov_bbb.mp4', user: 'Anna' },
  { id: 2, video: 'https://www.w3schools.com/html/movie.mp4', user: 'John' },
  { id: 3, video: 'https://www.w3schools.com/html/mov_bbb.mp4', user: 'Lina' }
];

const StoriesFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  return (
    <div className="relative max-w-md mx-auto shadow-lg rounded-xl overflow-hidden">
      <video
        src={stories[currentIndex].video}
        controls
        autoPlay
        className="w-full h-80 object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
        <span>{stories[currentIndex].user}</span>
        <button onClick={nextStory} className="bg-white text-black px-3 py-1 rounded">Next</button>
      </div>
    </div>
  );
};

export default StoriesFeed;
