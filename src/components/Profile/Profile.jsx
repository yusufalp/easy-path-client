function Profile() {
  return (
    <div className="max-w-lg mx-auto rounded-lg shadow-lg px-8 py-12 my-12 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8">Complete your profile</h1>
      <form className="w-96 flex flex-col gap-4">
        <div className="flex flex-start flex-col justify-start">
          <label htmlFor="street" className="text-lg mb-2">
            Address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            className="p-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-start flex-col justify-start">
          <label htmlFor="city" className="text-lg mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="p-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-start flex-col justify-start">
          <label htmlFor="state" className="text-lg mb-2">
            State
          </label>
          <select
            name="state"
            id="state"
            required
            className="p-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="" disabled selected>
              Select a state
            </option>
          </select>
        </div>
        <div className="flex flex-start flex-col justify-start">
          <label htmlFor="zip" className="text-lg mb-2">
            Zip
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            required
            pattern="[0-9]{5}"
            className="p-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex flex-start flex-col justify-start">
          <label htmlFor="birth" className="text-lg mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="birth"
            name="birth"
            required
            className="p-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg mt-4 py-2 px-4 rounded-md shadow-sm">
          Next
        </button>
      </form>
    </div>
  );
}

export default Profile;
