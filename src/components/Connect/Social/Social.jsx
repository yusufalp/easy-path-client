import PropTypes from "prop-types";

import { capitalize } from "../../../utils";

function Social({ media }) {
  const handleSocialSignup = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/auth/${media}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      onClick={handleSocialSignup}
      className="w-96 bg-red-500 hover:bg-red-600 border-2 text-white text-lg py-2 px-4 rounded-md shadow-sm"
    >
      Continue with {capitalize(media)}
    </button>
  );
}

Social.propTypes = {
  media: PropTypes.string.isRequired,
};

export default Social;
