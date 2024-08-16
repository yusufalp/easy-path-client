import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/features/authSlice";

function Header() {
  const user = useSelector((state) => state.auth.user);

  const [menuToggle, setMenuToggle] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setMenuToggle((prevState) => !prevState);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error.message);
      }

      dispatch(logout({ user: null, token: null }));

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="w-full h-[80px] flex justify-between border-b-2 border-gray-500">
      <img src="src/assets/placeholder-logo.png" alt="" className="h-[78px]" />
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
                className={`w-40 bg-white border absolute right-0 shadow-xl top-0 mt-16 z-10 ${
                  menuToggle && "hidden"
                }`}
              >
                <li className="flex items-center cursor-pointer text-gray-600 text-lg border-b-2 border-transparent focus:text-indigo-700 focus:outline-none hover:bg-gray-100 hover:text-blue-700 hover:border-blue-700 hover:cursor-pointer">
                  <Link
                    to="/dashboard/:userId"
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

export default Header;
