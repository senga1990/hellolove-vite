import { useState } from 'react';

export default function UserProfile() {
  const [name, setName] = useState('Misha');
  const [age, setAge] = useState(30);
  const [bio, setBio] = useState('I love traveling and music!');
  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          {editing ? (
            <>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-xl p-2 mb-2"
              />
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full border rounded-xl p-2 mb-2"
              />
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full border rounded-xl p-2 mb-2"
              />
              <button
                onClick={() => setEditing(false)}
                className="bg-green-500 text-white px-4 py-2 rounded-xl mt-2"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold">{name}, {age}</h2>
              <p className="text-gray-600 text-sm text-center mt-2">{bio}</p>
              <button
                onClick={() => setEditing(true)}
                className="mt-4 text-pink-600 font-semibold hover:underline"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
