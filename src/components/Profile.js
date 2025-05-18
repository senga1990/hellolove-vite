import React from 'react';

export default function Profile() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">Your Profile</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="number" placeholder="Age" className="w-full p-2 border rounded" />
        <select className="w-full p-2 border rounded">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <textarea placeholder="About you" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Interests (comma separated)" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700">Save</button>
      </form>
    </div>
  );
}