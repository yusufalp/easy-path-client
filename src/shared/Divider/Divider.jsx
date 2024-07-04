import PropTypes from "prop-types";

function Divider({ message }) {
  return (
    <div className="w-80 relative flex my-4 items-center">
      <div className="flex-grow border-t border-gray-500"></div>
      {message && (
        <>
          <span className="flex-shrink mx-4 text-gray-500">{message}</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </>
      )}
    </div>
  );
}

Divider.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Divider;
