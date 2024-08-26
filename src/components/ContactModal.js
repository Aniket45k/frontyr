import { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
const ContactModal = ({ isOpen, onClose }) => {
  const [postType, setPostType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = { postType, title, description, tags };
    setPostType("");
    setTitle("");
    setDescription("");
    setTags("");
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
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Contact
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm leading-5 text-gray-500">
                      Email I'd: <span className="text-blue-500">yashpande2002@gmail.com</span>
                    </p>
                    <p className="text-sm leading-5 text-gray-500">
                      Phone No.: <span className="text-blue-500">9579345348</span>
                    </p>
                    <p className="text-sm leading-5 text-gray-500">City: {" "}<span className="text-blue-500">Pune</span>}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
