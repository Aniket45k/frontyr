import { useState } from "react";
import { useGetPosts, useGetPostsComments } from "../../hooks/posts.hook";
import PostModal from "../Post/Modal";

function PostFeedSection() {
  const { isLoading, data } = useGetPosts()
  const [isFavorite, setIsFavorite] = useState([])
  const [comments, setComments] = useState([])
  const [openComment, setOpenComment] = useState('')
  const { isLoading: isCommentsLoading, data: commentsData, refetch } = useGetPostsComments(openComment)

  const handleFavoriteClick = (index) => {
    setIsFavorite(prevIndex => prevIndex.includes(index) ? prevIndex.filter(item => item !== index) : [...prevIndex, index]);
  }

  function handlePostComment(post) {

  }

  return (
    <div className="">
      <PostModal />
      {/* Title */}
      <h3 className="text-lg font-semibold text-blue-600 mb-4">Your Feed</h3>

      {/* Post Cards */}
      <div className="grid grid-cols-1 gap-4 overflow-y-scroll h-[90vh]  ">
        {!isLoading ? data?.data?.map((post, index) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center mb-4 w-full">
              {/* Profile Image */}
              <img
                src="https://via.placeholder.com/150"
                alt={post.student.user.first_name + " " + post.student.user.last_name}
                className="rounded-full h-8 w-8 object-cover mr-2"
              />

              {/* Name and Title */}
              <div>
                <h4 className="text-base font-semibold text-gray-600">
                  {post.student.user.first_name + " " + post.student.user.last_name}
                </h4>
                <p className="text-sm text-gray-500">{post.student.title}</p>
              </div>
              <date className='flex-1 text-right text-gray-600 mr-3'>{post.created_at.split('T')[0]}</date>
            </div>

            {/* Post Title */}
            <h5 className="text-base font-semibold text-gray-700 mb-2">
              {post.title}
            </h5>

            {/* Post Description */}
            <p className="text-sm text-gray-600 mb-4">{post.description}</p>

            {/* Likes and Comments */}
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">
                <button onClick={() => handleFavoriteClick(index)} className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={isFavorite.includes(index) || post.isLikedByCurrentUser ? "#e71f1f" : "#d7d2dd"}
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />{" "}
                  </svg>

                  {post.likes.length}
                </button>
              </span>
              <span onClick={() => {
                setOpenComment(post.id)
                // refetch()
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  fill="currentColor"
                  className="bi bi-chat"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />{" "}
                </svg>
                {post.comments}
              </span>
            </div>

            {/* Comment Section */}
            <div className="mt-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10">
                  <img
                    src="https://source.unsplash.com/random/400x400"
                    alt="User"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="Write a comment..."
                    className="w-full border border-gray-200 rounded-md p-2"
                    value={comments[index]}
                    onChange={(e, index) => setComments(prevComments => {
                      const newComments = { ...prevComments }
                      newComments[index] = e.target.value
                      return newComments;
                    })}
                  ></textarea>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handlePostComment(post.id)}>
                  Post
                </button>
              </div>
              {openComment === post.id && <div className="mt-4 space-y-4">
                {isCommentsLoading ? (
                  <div className="text-center text-gray-500 text-xl font-bold">Loading...</div>
                ) :
                  (commentsData && commentsData.data.map(comment => (
                    <div className="flex space-x-4">
                      <div className="w-10 h-10">
                        <img
                          src="https://source.unsplash.com/random/401x401"
                          alt="User"
                          className="w-full h-full rounded-full"
                        />
                      </div>
                      <div className="flex-1 p-2 bg-gray-100 rounded-md">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-gray-600">{comment.student.user.first_name + ' ' + comment.student.user.last_name}</span>
                          {/* <span className="text-gray-700 text-xs">2 hours ago</span> */}
                        </div>
                        <p className="text-sm text-gray-500">{comment.content}</p>
                      </div>
                    </div>)))}
              </div>}
            </div>
          </div>
        )) : (
          <div className="text-center text-gray-500 text-xl font-bold">
            Loading...
          </div>
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

export default PostFeedSection;