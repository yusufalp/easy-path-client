function Login() {
  return (
    <div className="max-w-lg mx-auto rounded-lg shadow-lg px-8 py-12 my-12 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8">Welcome Back</h1>
      <form className="w-full flex flex-col gap-4">
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
