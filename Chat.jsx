import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input, fromMe: true }]);
    setInput('');
    // Відповідь бота (тимчасово)
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Hello! 👋", fromMe: false }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-pink-50 p-4">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xs p-3 rounded-xl ${
              msg.fromMe
                ? 'bg-pink-500 text-white self-end ml-auto'
                : 'bg-gray-200 text-gray-800 self-start mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-3 rounded-xl border focus:outline-pink-400"
        />
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 rounded-xl"
        >
          Send
        </button>
      </form>
    </div>
  );
}
