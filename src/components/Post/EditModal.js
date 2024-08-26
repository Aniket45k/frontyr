import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "../../components";
import { useSignUpUser } from "../../hooks/auth.hook";
import AddSkills from "../../pages/login/skillCheckbox";

function EditModal({ isOpen, onClose, id }) {
  const [title, setTitle] = useState("");
  const [about_me, setAbout] = useState("");
  const [phone, setPhone] = useState("");
  const [birth_date, setDob] = useState("");
  const [college, setCollege] = useState("");
  const [college_city, setCollegeCity] = useState("");
  const [current_year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [openChat, setOpenChat] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const signUpUserMutation = useSignUpUser(2);
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle((title) => {
      if (title.length < 100) return event.target.value;
      toast.warn("Title cannot be more than 100 characters");
      return title;
    });
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const handleCollegeNameChange = (event) => {
    setCollege(event.target.value);
  };

  const handleCollegeCityChange = (event) => {
    setCollegeCity(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // const handleSkillsChange = (event) => {
  //   setSkills(
  //     Array.from(event.target.selectedOptions, (option) => option.value)
  //   );
  // };

  const handleOpenChatChange = (event) => {
    setOpenChat(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skills.length > 0) {
      setIsFormValid(true);
      const tempSkills = skills.map((skill) => skill.text);
      signUpUserMutation.mutate(
        {
          title,
          about_me,
          birth_date,
          college,
          college_city,
          current_year,
          gender,
          phone,
          branch,
          skills: tempSkills,
          isRestricted: openChat,
          user: id,
        },
        {
          onSuccess: () => {
            toast.success(
              "User created successfully! Login to start using the portal",
              { autoClose: 5000 }
            );
            navigate("/auth");
          },
        }
      );
    } else {
      toast.warn("Please select at least one skill");
      setIsFormValid(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-scroll">
          <div className="flex items-center justify-center min-h-screen mt-8 pt-16 px-4 pb-20 text-center sm:block sm:p-0">
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

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="">
               
                <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center my-2  w-full mx-auto  bg-gray-200 bg-opacity-80 p-4 text-left rounded-md"
    >
      <label className="text-gray-600 font-semibold text-left ">Title:</label>
      <input
        type="text"
        onChange={handleTitleChange}
        value={title}
        required
        className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />

      <label className="text-gray-600 font-semibold">About me:</label>
      <textarea
        onChange={handleAboutChange}
        value={about_me}
        required
        className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />

      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:w-1/2 sm:mr-2">
          <label className="text-gray-600 font-semibold">Phone No.:</label>
          <input
            type="text"
            onChange={handlePhoneChange}
            value={phone}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <AddSkills skills={skills} setSkills={setSkills} />
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:w-1/2 sm:mr-2">
          <label className="text-gray-600 font-semibold">College Name:</label>
          <input
            type="text"
            onChange={handleCollegeNameChange}
            value={college}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-gray-600 font-semibold">College City:</label>
          <input
            type="text"
            onChange={handleCollegeCityChange}
            value={college_city}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:w-1/2 sm:mr-2">
          <label className="text-gray-600 font-semibold">Current year:</label>
          <select
            onChange={handleYearChange}
            value={current_year}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>
              Select year
            </option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            <option value="Fourth">Fourth</option>
          </select>
        </div>
        <div className="w-full sm:w-1/2">
          <label className="text-gray-600 font-semibold">Branch:</label>
          <select
            onChange={handleBranchChange}
            value={branch}
            required
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>
              Select branch
            </option>
            <option value="Aerospace Engineering">Aerospace Engineering</option>
            <option value="Agricultural Engineering">
              Agricultural Engineering
            </option>
            <option value="Automobile Engineering">
              Automobile Engineering
            </option>
            <option value="Biomedical Engineering">
              Biomedical Engineering
            </option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Computer Science Engineering">
              Computer Science Engineering
            </option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Electronics and Communication Engineering">
              Electronics and Communication Engineering
            </option>
            <option value="Environmental Engineering">
              Environmental Engineering
            </option>
            <option value="Geological Engineering">
              Geological Engineering
            </option>
            <option value="Industrial Engineering">
              Industrial Engineering
            </option>
            <option value="Instrumentation Engineering">
              Instrumentation Engineering
            </option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Marine Engineering">Marine Engineering</option>
            <option value="Materials Engineering">Materials Engineering</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Mining Engineering">Mining Engineering</option>
            <option value="Nuclear Engineering">Nuclear Engineering</option>
            <option value="Petroleum Engineering">Petroleum Engineering</option>
            <option value="Production Engineering">
              Production Engineering
            </option>
            <option value="Textile Engineering">Textile Engineering</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
          Submit
        </button>
      </div>
    </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditModal;
