import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

import { ROLES } from "../../../utils/constants";
import { capitalize } from "../../../utils";

function Signup() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSignupForm = async (e) => {
    e.preventDefault();

    const body = {
      first,
      last,
      email,
      password,
      role,
    };

    try {
      const response = await fetch(`http://localhost:8080/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error.message);
      }

      history.push("/login");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto rounded-lg shadow-lg px-8 py-12 my-12 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8">Create an Account</h1>
      <form onSubmit={handleSignupForm} className="w-96 flex flex-col gap-4">
        <div className="flex flex-start flex-col justify-start">
          <label htmlFor="first" className="text-lg mb-2">
            First Name
          </label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Enter your first name"
            required
            autoComplete="on"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            className="p-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-start flex-col justify-start">
          <label htmlFor="last" className="text-lg mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="last"
            name="last"
            placeholder="Enter your last name"
            autoComplete="on"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            className="p-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-start flex-col justify-start">
          <label htmlFor="email" className="text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
            autoComplete="on"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-start flex-col justify-start">
          <label htmlFor="password" className="text-lg mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter a strong password"
            required
            autoComplete="on"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-start flex-col justify-start">
          <label htmlFor="role" className="text-lg mb-2">
            Role
          </label>
          <select
            name="role"
            id="role"
            required
            className="p-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Please select an option</option>
            {ROLES.map(
              (role) =>
                role !== "admin" && (
                  <option key={role} value={role}>
                    {capitalize(role)}
                  </option>
                )
            )}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg mt-4 py-2 px-4 rounded-md shadow-sm"
        >
          Sign up
        </button>
        {errorMessage && <p className="text-lg text-red-500">{errorMessage}</p>}
        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="underline hover:no-underline text-blue-500 hover:text-blue-600"
            >
              Log in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
