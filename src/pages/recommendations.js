import React from 'react'
import {Tags} from '../components';
function Recommendations() {
    // const { name, image, skills } = props.recommendation;
    const data = [
      {
        name: "John Doe",
        image:
          "https://media.licdn.com/dms/image/D4D35AQG0He9fFObhKQ/profile-framedphoto-shrink_400_400/0/1675693716777?e=1679731200&v=beta&t=eVjsi_mZUYabCL8ylN8K-k46bE-87swVjX_ra0b7iog",
        skills: ["Web", "Web Developer", "Web Developer"],
        year: "First",
        college: "Pune Institute of Computer Technology",
      },
      {
        name: "John Doe",
        image:
          "https://media.licdn.com/dms/image/D4D35AQG0He9fFObhKQ/profile-framedphoto-shrink_400_400/0/1675693716777?e=1679731200&v=beta&t=eVjsi_mZUYabCL8ylN8K-k46bE-87swVjX_ra0b7iog",
        skills: [
          "Web Developer",
          "Web Developer",
          "Web Developer",
          "Web Developer",
          
        ],
        year: "First",
        college: "Pune Institute of Computer Technology",
      },
      {
        name: "John Doe",
        image:
          "https://media.licdn.com/dms/image/D4D35AQG0He9fFObhKQ/profile-framedphoto-shrink_400_400/0/1675693716777?e=1679731200&v=beta&t=eVjsi_mZUYabCL8ylN8K-k46bE-87swVjX_ra0b7iog",
        skills: ["Web Developer", "Web Developer", "Web Developer"],
        year: "First",
        college: "Pune Institute of Computer Technology",
      },
      {
        name: "John Doe",
        image:
          "https://media.licdn.com/dms/image/D4D35AQG0He9fFObhKQ/profile-framedphoto-shrink_400_400/0/1675693716777?e=1679731200&v=beta&t=eVjsi_mZUYabCL8ylN8K-k46bE-87swVjX_ra0b7iog",
        skills: ["Web Developer", "Web Developer", "Web Developer"],
        year: "First",
        college: "Pune Institute of Computer Technology",
      },
    ];
  return (
    <div className="justify-center items-center mt-32 ]">
      <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map(({ image, name, skills, year, college }) => (
          <div className="w-80 mx-auto mt-4 mb-8 rounded-lg flex flex-col bg-gray-100 shadow-lg px-2 pt-5 pb-5 transition ease-in-out hover:scale-105 transform translate-y-2">
            <div className="w-full pt-1 ">
              <div className="overflow-hidden rounded-full border-4 border-full transition duration-300 ease-in-out transform hover:scale-110 border-yellow-400 w-24 h-24 -mt-16 mx-auto shadow-lg">
                <img src={image} alt={name} />
              </div>
            </div>

            <div className="w-full  mt-2  ">
              <p className="text-xl font-primary text-blue-500 font-bold text-center">
                {name}
              </p>
              <p className="text-xs font-secondary text-gray-500 text-center ">
                ({year} Year)
              </p>
              <p className="text-md font-secondary text-gray-500 text-center overflow-y-scroll max-h-36 block h-56">
                <p className="font-bold">Skills:</p> <Tags tags={skills} />
              </p>
              <p className="text-xs font-secondary text-gray-500 text-center align-bottom justify-end font-bold ">
                {college}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations