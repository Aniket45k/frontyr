import React from "react";

const Card = ({ name, college, imageUrl }) => {
  return (
    <div className="flex items-center border rounded-lg p-4 my-2">
      <div className="flex-shrink-0">
        <img
          className="h-16 w-16 rounded-full"
          src="https://via.placeholder.com/150"
          alt={name}
        />
      </div>
      <div className="ml-4">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-gray-600 text-xs">{college}</p>
      </div>
      <div className="ml-auto flex items-center">
        <button className="px-2 py-1 bg-green-500 text-white rounded-md mr-2 hover:bg-green-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check-circle w-5 h-5"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </button>
        <button className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x-circle w-5 h-5"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
