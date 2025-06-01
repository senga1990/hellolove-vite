import React, { useState, useEffect } from 'react';

// Тестова логіка для "AI-рекомендацій"
const likedTags = ['музика', 'спорт'];

const allProfiles = [
  { id: 1, name: 'Emily 🎵', tags: ['музика', 'подорожі'], age: 25 },
  { id: 2, name: 'Daniel 🏀', tags: ['спорт', 'відеоігри'], age: 28 },
  { id: 3, name: 'Anna 📚', tags: ['читання', 'йога'], age: 24 },
];

const SmartMatch = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const recommended = allProfiles.filter(profile =>
      profile.tags.some(tag => likedTags.includes(tag))
    );
    setMatches(recommended);
  }, []);

  return (
    <div className="bg-white shadow-lg p-4 mt-6 rounded-xl">
      <h2 className="text-xl font-bold mb-2">🧠 Рекомендовані профілі (AI Match)</h2>
      <p className="text-sm text-gray-500 mb-3">На основі ваших інтересів</p>
      {matches.length === 0 && <p className="text-gray-400">Немає збігів 😢</p>}
      <div className="space-y-3">
        {matches.map(user => (
          <div key={user.id} className="border p-3 rounded-lg">
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">Вік: {user.age}</p>
            <p className="text-xs text-gray-400">Інтереси: {user.tags.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartMatch;
