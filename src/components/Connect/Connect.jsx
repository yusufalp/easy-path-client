import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Connect() {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleGoogle = () => {};
  return (
    <div className="max-w-lg mx-auto rounded-lg shadow-lg px-8 py-12 my-12 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold mb-8">Happy to see you...</h1>
      <button
        onClick={handleLogin}
        className="w-96 bg-blue-500 hover:bg-blue-600 text-white text-lg py-2 px-4 rounded-md shadow-sm"
      >
        Login with Email
      </button>
      <div className="w-80 relative flex items-center">
        <div className="flex-grow border-t border-gray-500"></div>
        <span className="flex-shrink mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-500"></div>
      </div>
      <button
        onClick={handleGoogle}
        className="w-96 bg-red-500 hover:bg-red-600 border-2 text-white text-lg py-2 px-4 rounded-md shadow-sm"
      >
        Continue with Google
      </button>
    </div>
  );
}

export default Connect;
