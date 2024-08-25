import React from "react";

const messages = [
  {
    id: 1,
    name: "John Doe",
    date: "5 hours ago",
    message: "Hi, how are you?",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    date: "1 day ago",
    message: "I'm doing well, thanks. How about you?",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Bob Smith",
    date: "2 days ago",
    message: "I'm good. How's your project coming along?",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const MessageList = () => {
  return (
    <div className="divide-y">
      <h3 className="text-lg font-semibold text-blue-600 mb-2 mt-4">Messages</h3>

      {messages.map((message) => (
        <div key={message.id} className="flex items-center py-2">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src={message.imageUrl}
              alt={message.name}
            />
          </div>
          <div className="ml-4 flex-1">
            <div className="font-bold">{message.name}</div>
            <div className="text-gray-500 text-sm">{message.message}</div>
          </div>
          <div className="text-gray-500 text-sm">{message.date}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
