import { useNavigate } from "react-router-dom";
import ProfileSection from "../components/Home/ProfileSection";
import PostFeedSection from "../components/Home/PostFeedSection";
import RecommendationsSection from "../components/Home/RecommendationsSection";
import { useLocalStorageState } from "../hooks/auth.hook";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorageState('access', false)
  const navigate = useNavigate()

  return (
    <div className="flex flex-row">
      {/* Profile Section on the left */}
      <div className="md:w-1/4 bg-white p-4 hidden md:block mt-4">
        {isLoggedIn ? <ProfileSection /> : <h2 className='text-2xl cursor-pointer underline' onClick={navigate('/auth')}>Please Login</h2>}
      </div>

      {/* Post and Feed Section in the center */}
      <div className="w-full md:w-1/2 bg-gray-100 p-4 mt-2">
        <PostFeedSection />
      </div>

      {/* Recommendations Section on the right */}
      <div className="md:w-1/4 bg-white p-4 hidden md:block mt-4">
        {isLoggedIn ? <RecommendationsSection /> : <h2 className='text-2xl cursor-pointer underline' onClick={navigate('/auth')}>Please Login</h2>}
      </div>
    </div>
  );
}

export default Home;
