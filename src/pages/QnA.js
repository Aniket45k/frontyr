import { useState } from "react";

function QnA() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "How do I center a div in CSS?",
      body: "I'm having trouble centering a div horizontally and vertically in CSS. Can someone please help?",
      tags: ["css", "html"],
      upvotes: 20,
      views: 150,
      answers: [
        {
          id: 1,
          author: "John Doe",
          body: "You can center a div using the `display: flex` and `justify-content: center` properties.",
        },
        {
          id: 2,
          author: "Jane Smith",
          body: "Another way to center a div is to use the `text-align: center` property on the parent element.",
        },
      ],
    },
    {
      id: 2,
      title: "What's the difference between JavaScript and Java?",
      body: "I'm new to programming and I'm wondering what the difference is between JavaScript and Java.",
      tags: ["javascript", "java"],
      upvotes: 10,
      views: 100,
      answers: [
        {
          id: 1,
          author: "Bob Johnson",
          body: "JavaScript is a scripting language used primarily for web development, while Java is a programming language used for a wide variety of applications.",
        },
        {
          id: 2,
          author: "Alice Lee",
          body: "JavaScript is based on ECMAScript, while Java is based on the Java Virtual Machine (JVM).",
        },
      ],
    },
  ]);

  return (
    <div className="bg-blue-100 min-h-screen">
      {/* <nav className="bg-blue-100 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="/" className="text-white text-2xl font-bold">
            Q&A Overflow
          </a>
          <div className="flex items-center">
            <a href="/" className="text-white mr-6">
              Home
            </a>
            <a href="/" className="text-white mr-6">
              Questions
            </a>
            <a href="/" className="text-white mr-6">
              Ask a Question
            </a>
            <a href="/" className="text-white">
              Log In
            </a>
          </div>
        </div>
      </nav> */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-3xl font-bold">Recent Questions</h1>
          <div className="flex items-center">
            <span className="text-white mr-2">Sort by:</span>
            <select className="border rounded-full px-4 py-2 bg-white text-blue-500 mr-4">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="votes">Votes</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full px-4 py-2 flex-1 mr-2"
            />
            <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-full">
              Search
            </button>
          </div>
        </div>
        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-white rounded-lg shadow-md p-6 mb-8"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt=""
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold">{question.title}</h2>
                  <p className="text-gray-500">{question.tags.join(", ")}</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <span className="text-gray-500 mr-4">
                  {question.answers.length}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5v3m0 0v3m0-3h3m-3 0H9m11-3a9 9 0 00-9 9c0 1.081.194 2.107.548 3.068M7.451 18.932A9 9 0 0112 6a9 9 0 018 8.932c-.354-.961-.548-1.987-.548-3.068a9 9 0 00-8-8.932"
                  />
                </svg>
                <span className="text-gray-500">{question.upvotes}</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{question.body}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt=""
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="text-gray-500">{question.answers[0].author}</p>
                
              </div>
              <div className="text-gray-500">{question.answers[0].body}</div>
              <div className="text-gray-500">
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QnA;

