import React from "react";

const AnswerPage = () => {
  const answers = [
    {
      id: 1,
      user: {
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      likes: 10,
      isAccepted: false,
    },
    {
      id: 2,
      user: {
        name: "Jane Doe",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      answer:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likes: 5,
      isAccepted: true,
    },
    {
      id: 3,
      user: {
        name: "Bob Smith",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      likes: 2,
      isAccepted: false,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <svg
                  className="h-8 w-auto sm:h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5v3m0 0v3m0-3h3m-3 0H9m11-3a9 9 0 00-9 9c0 1.081.194 2.107.548 3.068M7.451 
                 15.533A9 9 0 0112 7h0a9 9 0 019 8.155M12 7v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </a>
            </div>
            <div className="flex justify-end">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-gray-200 border rounded-full px-4 py-2 flex-1 mr-2"
                />
                <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {answers.map((answer) => (
            <div
              key={answer.id}
              className="bg-white overflow-hidden shadow rounded-lg mb-4"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src={answer.user.avatar}
                      alt={`${answer.user.name}'s avatar`}
                    />
                    <h3 className="text-lg font-medium">{answer.user.name}</h3>
                    <span className="text-gray-500 ml-2">
                      {/* {formatDate(answer.date)} */}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">
                      {answer.likes} Likes
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 leading-7">{answer.content}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-300 focus:outline-none"
                    //   onClick={() => handleLike(answer.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5v3m0 0v3m0-3h3m-3 0H9m11-3a9 9 0 00-9 9c0 1.081.194 2.107.548 3.068M7.451 
                      15.932A9 9 0 0112 7h0a9 9 0 014.549 8.932l-.038.141A4.002 4.002 0 0116 19H8a4.002 
                      4.002 0 01-3.511-5.927l.038-.141z"
                        />
                      </svg>
                      <span>{answer.likes}</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-300 focus:outline-none"
                    //   onClick={() => handleUnlike(answer.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5v3m0 0v3m0-3h3m-3 0H9m11-3a9 9 0 00-9 9c0 1.081.194 2.107.548 3.068M7.451 
                      15.932A9 9 0 0112 7h0a9 9 0 014.549 8.932l-.038.141A4.002 4.002 0 0116 19H8a4.002 
                      4.002 M5 15l7-7 7 7"
                        />
                      </svg>
                      <span className="ml-1">{answer.unlikes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnswerPage;
