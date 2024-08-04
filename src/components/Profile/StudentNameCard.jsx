import PropTypes from "prop-types";

function StudentNameCard({ setCurrentSection }) {
  return (
    <div className="w-64 h-64 bg-white py-2 mt-4 mx-4 border border-t-8 border-blue-300 rounded-t-lg shadow-lg">
      <div className="flex items-center justify-center">
        <img
          src="https://i.pravatar.cc/150?img=47"
          className="h-32 w-32 rounded-full"
          alt=""
        />
      </div>
      <h1
        className="text-gray-700 text-2xl text-center font-bold leading-8 my-4 hover:underline hover:cursor-pointer"
        onClick={() => setCurrentSection("")}
      >
        Jane Doe
      </h1>
      <p className="text-center text-gray-500 hover:underline hover:cursor-pointer">
        Campolindo High School
      </p>
    </div>
  );
}

StudentNameCard.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default StudentNameCard;
