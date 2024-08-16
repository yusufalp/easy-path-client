function StudentInformation() {
  return (
    <>
      <p className="text-center text-2xl">Personal Information</p>
      <ul className="text-gray-600 shadow-sm px-2">
        <li className="border-b border-gray-400 text-lg my-1 flex justify-between items-center">
          <span>Grade</span>
          <span>12</span>
        </li>
        <li className="border-b border-gray-400 text-lg my-1 flex justify-between items-center">
          <span>Email:</span>
          <span>thisisalongemailhandle@email.com</span>
        </li>
        <li className="border-b border-gray-400 text-lg my-1 flex justify-between items-center">
          <span>Phone:</span>
          <span>555-123-4567</span>
        </li>
        <li className="border-b border-gray-400 text-lg my-1 flex justify-between items-center">
          <span>Gender:</span>
          <span>Female</span>
        </li>
        <li className="border-b border-gray-400 text-lg my-1 flex justify-between items-center">
          <span>Address:</span>
          <div className="flex flex-col">
            <span className="flex justify-end">123 Nowhere St.</span>
            <span className="flex justify-end">Remote City, CA, 99999</span>
          </div>
        </li>
      </ul>
    </>
  );
}

export default StudentInformation;
