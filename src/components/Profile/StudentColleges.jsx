function StudentColleges() {
  return (
    <div className="m-2 flex flex-wrap gap-4 justify-center">
      <div className="w-64 flex-col bg-white border shadow-sm rounded-xl">
        <img
          className="w-full h-auto rounded-t-xl"
          src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
          alt="Card Image"
        />
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800">Name</h3>
          <p className="mt-1 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
          <p className="mt-5 text-s">
            Deadline: <span className="text-gray-500">11/1/2025</span>
          </p>
          <div className="flex justify-between">
            <p className="mt-5 text-s">
              Status: <span className="text-gray-500">In progress</span>
            </p>
            <p className="mt-5 text-s hover:text-blue-700 hover:underline">
              <a href="#">Details</a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-64 flex-col bg-white border shadow-sm rounded-xl">
        <img
          className="w-full h-auto rounded-t-xl"
          src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
          alt="Card Image"
        />
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800">Name</h3>
          <p className="mt-1 text-gray-500">
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </p>
          <p className="mt-5 text-s">
            Deadline: <span className="text-gray-500">11/1/2025</span>
          </p>
          <div className="flex justify-between">
            <p className="mt-5 text-s">
              Status: <span className="text-gray-500">In progress</span>
            </p>
            <p className="mt-5 text-s hover:text-blue-700 hover:underline">
              <a href="#">Details</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentColleges;
