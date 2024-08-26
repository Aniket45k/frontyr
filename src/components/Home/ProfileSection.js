import React from "react";

function ProfileSection() {
  return (
    <div className="flex flex-col items-center ">
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full h-24 w-24 object-cover mb-2"
      />

      {/* Name */}
      <h1 className="text-2xl font-bold text-blue-600 mb-1">John Doe</h1>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-500 mb-1">
        Software Developer
      </h2>

      {/* Username */}
      <a href="./profile/username">
        <p className="text-sm text-gray-500 hover:text-blue-400 cursor-pointer">
          @johndoe
        </p>
      </a>
    </div>
  );
}

export default ProfileSection;
