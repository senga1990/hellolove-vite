import React, { useState, useEffect } from 'react';

const mockProfiles = [
  { id: 1, name: 'Emily, 26', img: 'https://randomuser.me/api/portraits/women/65.jpg', description: 'Loves hiking and dogs 🐕' },
  { id: 2, name: 'Jake, 30', img: 'https://randomuser.me/api/portraits/men/34.jpg', description: 'Coffee and books ☕📚' },
  { id: 3, name: 'Sophie, 23', img: 'https://randomuser.me/api/portraits/women/78.jpg', description: 'Dancer, traveler ✈️💃' },
];

const ExploreFeed = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Поки без бекенду, беремо фейкові дані
    setProfiles(mockProfiles);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {profiles.map((profile) => (
        <div key={profile.id} className="bg-white rounded-2xl shadow p-4">
          <img src={profile.img} alt={profile.name} className="w-full h-48 object-cover rounded-xl mb-3" />
          <h3 className="text-lg font-semibold">{profile.name}</h3>
          <p className="text-sm text-gray-600">{profile.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExploreFeed;
