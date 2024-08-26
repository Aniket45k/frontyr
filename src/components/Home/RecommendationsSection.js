import { useState } from "react";
import { Tags } from "../../components";
import { useGetRecommendations } from '../../hooks/recommendations.hook';

function RecommendationsSection() {
  const { isLoading, data } = useGetRecommendations()
  const [isChatting, setIsChatting] = useState(false);

  const handleButtonClick = () => {
    setIsChatting((prevState) => !prevState);
  }

  return (
    <div className="relative">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        People You May Know
      </h3>
      <div className="grid grid-cols-1 gap-4  overflow-y-scroll h-[90vh] relative">
        {!isLoading ? data.data.map(recommendation => (
          <div
            key={recommendation.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            {/* Image */}
            <img
              src='https://source.unsplash.com/random/400x400'
              alt={recommendation.user.first_name + " " + recommendation.user.last_name}
              className="rounded-full h-20 w-20 object-cover mb-2"
            />
            <button
              onClick={handleButtonClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded absolute right-4"
            >
              {isChatting ? "Request to Chat" : "Chat"}
            </button>

            {/* Name */}
            <h4 className="text-base font-semibold text-gray-800 mb-1">
              {recommendation.user.first_name + " " + recommendation.user.last_name}
            </h4>

            {/* Skills */}
            <p className="flex text-sm text-gray-700 w-full font-semibold">
              <span className="mt-3 pl-3">Skills :</span>
              <span className="text-gray-500 font-normal">
                <Tags tags={recommendation.skills} />
              </span>
            </p>
          </div>
        )) : (
          <div className="text-center text-gray-500 text-xl font-bold">
            Loading...
          </div>
        )}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default RecommendationsSection;