import React, { useState } from 'react';

const reactions = ['❤️', '🔥', '😂', '😍', '🎁'];

const GiftsReactions = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mt-6">
      <h2 className="text-xl font-bold mb-2">🎁 Подарунки та реакції</h2>
      <p className="text-sm text-gray-500 mb-3">Вибери реакцію для профілю:</p>
      <div className="flex space-x-4">
        {reactions.map((emoji, index) => (
          <button
            key={index}
            className={`text-2xl px-3 py-1 rounded-full border ${
              selected === emoji ? 'bg-yellow-100 border-yellow-400' : 'border-gray-300'
            }`}
            onClick={() => setSelected(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
      {selected && (
        <p className="mt-4 text-md text-green-700">
          Ви вибрали реакцію: <span className="text-2xl">{selected}</span>
        </p>
      )}
    </div>
  );
};

export default GiftsReactions;
