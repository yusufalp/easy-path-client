function StudentStatistics() {
  return (
    <div>
      <p className="text-center text-2xl pt-4">Statistics</p>
      <div className="flex divide-x divide-solid divide-gray-500 bg-gray-100 m-2 p-4 rounded-2xl">
        <div className="flex flex-col flex-1 gap-2 px-4">
          <p className="text-gray-800 text-base font-semibold tracking-wider">
            Total Colleges Applied
          </p>
          <p className="text-green-800 text-4xl font-bold">19</p>
        </div>
        <div className="flex flex-col flex-1 gap-2 px-4">
          <p className="text-gray-800 text-base font-semibold tracking-wider">
            Total Scholarships Received
          </p>
          <p className="text-green-800 text-4xl font-bold">12K</p>
        </div>
      </div>
    </div>
  );
}

export default StudentStatistics;
