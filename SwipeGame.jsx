import React, { useState } from 'react';

const profiles = [
  { id: 1, name: 'Emily 💃', emoji: '💖' },
  { id: 2, name: 'James 🚀', emoji: '🔥' },
  { id: 3, name: 'Sofia 🎨', emoji: '🎯' },
];

const SwipeGame = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  const handleSwipe = (type) => {
    const profile = profiles[index];
    let points = 0;

    if (type === 'like') points = 10;
    if (type === 'super') points = 25;
    if (type === 'skip') points = 0;

    setScore(score + points);
    setHistory([...history, { ...profile, type, points }]);
    setIndex((prev) => (prev + 1) % profiles.length);
  };

  return (
    <div className="bg-white shadow-lg p-4 rounded-xl mt-4 text-center">
      <h2 className="text-xl font-bold mb-3">🎮 Swipe Game</h2>
      <p className="mb-2 text-gray-700">Очки: <strong>{score}</strong></p>
      <div className="border p-4 rounded-lg mb-3">
        <p className="text-lg">{profiles[index].name}</p>
        <p className="text-3xl">{profiles[index].emoji}</p>
      </div>
      <div className="flex justify-center space-x-3">
        <button onClick={() => handleSwipe('skip')} className="px-3 py-1 bg-gray-300 rounded">⏭ Пропустити</button>
        <button onClick={() => handleSwipe('like')} className="px-3 py-1 bg-blue-500 text-white rounded">👍 Лайк</button>
        <button onClick={() => handleSwipe('super')} className="px-3 py-1 bg-yellow-400 text-white rounded">🌟 Супер</button>
      </div>
      <div className="mt-4 text-left text-sm text-gray-600">
        <p className="font-semibold mb-1">Історія свайпів:</p>
        <ul>
          {history.map((h, idx) => (
            <li key={idx}>👉 {h.name} — {h.type} (+{h.points})</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SwipeGame;
