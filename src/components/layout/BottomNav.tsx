import React, { useState } from "react";

const BottomNavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed md:hidden bottom-0 left-0 w-full flex items-center justify-around space-x-4 p-4 shadow-lg">
      <a href="#" className="bg-white rounded-full p-3 shadow-lg">
        <svg
          className="w-6 h-6 text-gray-500 hover:text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18L15 12L9 6" />
        </svg>
      </a>

      <a href="#" className="bg-white rounded-full p-3 shadow-lg">
        <svg
          className="w-6 h-6 text-gray-500 hover:text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17L12 12L2 17Z" />
        </svg>
      </a>
      <div className="relative">
        <button
          className="relative bg-white rounded-full p-3 shadow-lg"
          onClick={toggleDropdown}
        >
          <svg
            className="w-6 h-6 text-gray-500 hover:text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 6H3V2H21V6ZM21 14H3V10H21V14ZM21 22H3V18H21V22Z" />
          </svg>
          {isDropdownOpen && (
            <div className="origin-bottom absolute right-0 bottom-full mb-4 w-40  rounded shadow-lg transition ease-out duration-300 transform scale-100">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-100 animate-slide-up">
                  <a href="#">Option 1</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 animate-slide-up">
                  <a href="#">Option 2</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 animate-slide-up">
                  <a href="#">Option 3</a>
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default BottomNavBar;
