import { useState } from "react";
import { ROLES } from "../../utils/constants";
import { capitalize } from "../../utils";

function Role() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  console.log("selectedRole :>> ", selectedRole);

  return (
    <div className="max-w-lg mx-auto rounded-lg shadow-lg px-8 py-12 my-12 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8">What is your role?</h1>
      <form className="w-96 flex flex-col gap-4">
        <div className="flex flex-start flex-col justify-start">
          <select
            name="role"
            id="role"
            required
            className="p-2 rounded-md border-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onChange={handleRoleChange}
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
        <button className="w-96 bg-blue-500 hover:bg-blue-600 text-white text-lg mt-4 py-2 px-4 rounded-md shadow-sm">
          Next
        </button>
      </form>
    </div>
  );
}

export default Role;
