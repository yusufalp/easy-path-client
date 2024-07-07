import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginForm = async (e) => {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    try {
      const response = await fetch(`http://localhost:8080/api/auth/login`, {
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

      console.log("result :>> ", result);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto rounded-lg shadow-lg px-8 py-12 my-12 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8">Log in</h1>
      <form onSubmit={handleLoginForm} className="w-96 flex flex-col gap-4">
        <div className="flex flex-start flex-col justify-start">
          <label htmlFor="email" className="text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email here"
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
        <div>
          <a
            href="/reset-password"
            className="mb-2 text-sm text-grey-600 hover:text-blue-600 flex justify-end"
          >
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg mt-4 py-2 px-4 rounded-md shadow-sm"
        >
          Log in
        </button>
        {errorMessage && <p className="text-lg text-red-500">{errorMessage}</p>}
        <div className="mt-4 text-center">
          <p>
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="underline hover:no-underline text-blue-500 hover:text-blue-600"
            >
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
