import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, how are you?",
      sender: "John",
      time: "10:00 AM",
    },
    {
      id: 2,
      text: "I'm doing well, thanks. How about you?",
      sender: "Jane",
      time: "10:05 AM",
    },
    {
      id: 3,
      text: "I'm good. How's your project coming along?",
      sender: "John",
      time: "10:10 AM",
    },
  ]);

  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "Jane",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMessage]);
    setInputText("");
  };

  return (
    <div className="flex flex-col h-screen">
      <h3 className="text-lg font-semibold text-blue-600 mb-2 mt-4">Inbox</h3>

      <div className="bg-gray-100 border border-gray-200 shadow-md shadow-gray-300 flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://source.unsplash.com/random/100x100"
            alt="Receiver's image"
          />
          <div>
            <h2 className="font-bold text-lg">Jane Doe</h2>
            <p className="text-gray-500">Software Engineer at ABC Company</p>
          </div>
        </div>
        <button className="rounded-full bg-gray-200 w-8 h-8 flex justify-center items-center">
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`px-4 py-2 ${
              message.sender === "John" ? "text-right" : ""
            }`}
          >
            <div className="bg-white rounded-lg inline-block py-2 px-4">
              <div className="text-gray-600 font-semibold">
                {message.sender}
              </div>
              <div>{message.text}</div>
            </div>
            <div className="text-gray-500 text-sm mt-1">{message.time}</div>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="bg-gray-100  border-gray-200 px-4 py-2"
      >
        <div className="flex ">
          <input
            type="text"
            placeholder="Type a message"
            value={inputText}
            onChange={handleInputChange}
            className="w-full p-2 mr-3 text-gray-600 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 shadow-md shadow-gray-300"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold rounded-md px-4 py-2 shadow-md shadow-gray-300 hover:bg-blue-400"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
