import { useState } from 'react';
import { WithContext as ReactTags } from "react-tag-input";
const PostModal = ({ isOpen, onClose }) => {
  const [postType, setPostType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([])  ;

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { postType, title, description, tags };
    setPostType('');
    setTitle('');
    setDescription('');
    setTags('');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={() => onClose((prevState) => !prevState)}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Create a Post
                  </h3>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label
                          htmlFor="postType"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Type
                        </label>
                        <select
                          id="postType"
                          name="postType"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          value={postType}
                          onChange={(e) => setPostType(e.target.value)}
                          required
                        >
                          <option value="">Select post type</option>
                          <option value="hackathon">Hackathon</option>
                          <option value="project">Project</option>
                        </select>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="mt-1 block w-full border-gray-300 px-3 py-2 rounded-md shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                          placeholder="Enter Title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Brief Description
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          className="block w-full  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="Enter brief description"
                          rows="3"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="tags"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Tags
                        </label>
                        <ReactTags
                          placeholder="Add skills"
                          tags={tags}
                          handleAddition={(tag) => setTags([...tags, tag])}
                          handleDelete={(i) =>
                            setTags(tags.filter((tag, index) => index !== i))
                          }
                          delimiters={[188, 13]}
                          classNames={{
                            tagInputField:
                              " block w-full  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                            tag: "bg-indigo-600  text-white font-medium py-2 px-3 rounded-md mr-2  ",
                            remove:
                              "text-white bg-gray-200 bg-opacity-40 px-[5px] text-sm mb-4 ml-2 hover:text-red-600 hover:bg-gray-100 hover:bg-opacity-90 rounded-full",
                          }}
                        />
                      </div>

                      <div className="mt-6">
                        <button
                          type="submit"
                          className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                          // onClick={handleCreatePost}
                        >
                          Create Post
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostModal;