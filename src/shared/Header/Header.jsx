import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ user }) {
  const [menuToggle, setMenuToggle] = useState(true);

  const handleToggleMenu = () => {
    setMenuToggle((prevState) => !prevState);
  };

  const handleLogout = () => {
    console.log("logout :>> ");
  };

  return (
    <header className="w-full border-b-2 border-gray-500">
      <nav>
        <ul className="flex flex-row justify-end">
          {!user ? (
            <li className="w-40">
              <Link
                to="/login"
                className="flex justify-center py-6 text-lg text-black-500 border-b-2 border-transparent hover:bg-gray-100 hover:text-blue-700 hover:border-blue-700 transition duration-150 ease-in-out"
              >
                Login
              </Link>
            </li>
          ) : (
            <li className="relative">
              <div
                aria-label="dropdown"
                onClick={handleToggleMenu}
                className="flex justify-center w-40 py-6 text-lg text-black-500 border-b-2 border-transparent hover:bg-gray-100 hover:text-blue-700 hover:border-blue-700 hover:cursor-pointer"
              >
                {user.name.first}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={`${
                      menuToggle
                        ? "m19.5 8.25-7.5 7.5-7.5-7.5"
                        : "m4.5 15.75 7.5-7.5 7.5 7.5"
                    }`}
                  />
                </svg>
              </div>
              <ul
                onClick={handleToggleMenu}
                className={`w-40 bg-white border absolute right-0 shadow-xl top-0 mt-16 ${
                  menuToggle && "hidden"
                }`}
              >
                <li className="flex items-center cursor-pointer text-gray-600 text-lg border-b-2 border-transparent focus:text-indigo-700 focus:outline-none hover:bg-gray-100 hover:text-blue-700 hover:border-blue-700 hover:cursor-pointer">
                  <Link
                    to="/dashboard"
                    className="flex items-center w-full py-2 focus:underline focus:text-indigo-700 focus:outline-none"
                  >
                    <span className="ml-2">Dashboard</span>
                  </Link>
                </li>
                <li className="flex items-center cursor-pointer text-gray-600 text-lg border-b-2 border-transparent focus:text-indigo-700 focus:outline-none hover:bg-gray-100 hover:text-blue-700 hover:border-blue-700 hover:cursor-pointer">
                  <Link
                    to="/profile"
                    className="flex items-center w-full py-2 focus:underline focus:text-indigo-700 focus:outline-none"
                  >
                    <span className="ml-2">Profile</span>
                  </Link>
                </li>
                <li className="flex items-center cursor-pointer text-gray-600 text-lg border-b-2 border-transparent focus:text-indigo-700 focus:outline-none hover:bg-gray-100 hover:text-blue-700 hover:border-blue-700 hover:cursor-pointer">
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full py-2 focus:underline focus:text-indigo-700 focus:outline-none"
                  >
                    <span className="ml-2">Logout</span>
                  </button>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
