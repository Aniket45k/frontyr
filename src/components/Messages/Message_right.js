import React from "react";
import Card from "../requestcard"; // assuming Card component is defined in Card.js

const sampleData = [
  {
    id: 1,
    name: "John Doe",
    college: "Pune Institute of Computer Technology",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    college: "XYZ University",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 3,
    name: "Bob Smith",
    college: "PQR University",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const MRight = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-semibold text-blue-600 mb-2 mt-4">
        Pending Requests
      </h3>

      {sampleData.map((data) => (
        <div key={data.id} className="w-full">
          <Card {...data} />
        </div>
      ))}
    </div>
  );
};

export default MRight;
