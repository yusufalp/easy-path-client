import { Link } from "react-router-dom";

function CounselorDashboard() {
  const studentId = 1;
  return (
    // Statistics
    <>
      <div className="bg-gray-200 m-2 rounded-2xl">
        <div className="w-full h-auto py-4 flex flex-row justify-between divide-x divide-solid divide-gray-500">
          <div className="relative flex flex-col flex-1 gap-2 px-4">
            <p className="text-gray-800 text-base font-semibold tracking-wider">
              Total Students
            </p>
            <p className="text-green-800 text-4xl font-bold">13</p>
          </div>
          <div className="relative flex flex-col flex-1 gap-2 px-4">
            <p className="text-gray-800 text-base font-semibold tracking-wider">
              Total Colleges Applied
            </p>
            <p className="text-green-800 text-4xl font-bold">132</p>
          </div>
          <div className="relative flex flex-col flex-1 gap-2 px-4">
            <p className="text-gray-800 text-base font-semibold tracking-wider">
              Total Scholarships Received
            </p>
            <p className="text-green-800 text-4xl font-bold">4.5M</p>
          </div>
        </div>
      </div>

      <div className="m-2 rounded-2xl">
        <table
          role="table"
          className="relative w-full my-8 bg-gray-100 rounded-2xl"
        >
          <thead className="h-16 border-b-2 border-gray-600">
            <tr role="row" className="flex px-4">
              <th
                colSpan="1"
                role="columnheader"
                title="Toggle SortBy"
                className="flex-2"
              >
                <div className="flex items-center justify-between pb-2 pt-4 uppercase tracking-wider text-gray-800">
                  Name
                </div>
              </th>
              <th
                colSpan="1"
                role="columnheader"
                title="Toggle SortBy"
                className="flex-2"
              >
                <div className="flex items-center justify-between pb-2 pt-4 uppercase tracking-wide text-gray-600">
                  High School
                </div>
              </th>
              <th
                colSpan="1"
                role="columnheader"
                title="Toggle SortBy"
                className="flex-1"
              >
                <div className="flex items-center justify-between pb-2 pt-4 uppercase tracking-wide text-gray-600">
                  Grade
                </div>
              </th>
              <th
                colSpan="1"
                role="columnheader"
                title="Toggle SortBy"
                className="flex-1"
              >
                <div className="flex items-center justify-between pb-2 pt-4 uppercase tracking-wide text-gray-600">
                  Status
                </div>
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row" className="flex px-4">
              <td className="flex-2 py-3 text-lg" role="cell">
                <Link to={`students/${studentId}`}>
                  <div className="flex items-center gap-2">
                    <div className="h-[64px] w-[64px]">
                      <img
                        src="https://i.pravatar.cc/150?img=12"
                        className="h-full w-full rounded-full"
                        alt=""
                      />
                    </div>
                    <p className="font-medium text-lg text-gray-600">
                      John Doe
                    </p>
                  </div>
                </Link>
              </td>
              <td
                className="flex flex-2 items-center py-3 font-medium text-lg text-gray-600"
                role="cell"
              >
                <p>Campolindo High School</p>
              </td>
              <td
                className="flex flex-1 items-center py-3 font-medium text-lg text-gray-600"
                role="cell"
              >
                <p>12</p>
              </td>
              <td
                className="flex flex-1 items-center py-3 font-medium text-lg text-gray-600"
                role="cell"
              >
                <div className="group relative">
                  <p className="w-8 h-8 bg-green-400 rounded-full">
                    <span className="absolute left-12 bg-gray-600 text-white border rounded-[10%] px-2 opacity-0 group-hover:opacity-100">
                      Graduated
                    </span>
                  </p>
                </div>
              </td>
            </tr>
            <tr role="row" className="flex px-4">
              <td className="flex-2 py-3 text-lg" role="cell">
                <Link to={`students/${studentId}`}>
                  <div className="flex items-center gap-2">
                    <div className="h-[64px] w-[64px] rounded-full">
                      <img
                        src="https://i.pravatar.cc/150?img=47"
                        className="h-full w-full rounded-full"
                        alt=""
                      />
                    </div>
                    <p className="font-medium text-lg text-gray-600">
                      Jane Doe
                    </p>
                  </div>
                </Link>
              </td>
              <td
                className="flex flex-2 items-center py-3 font-medium text-lg text-gray-600"
                role="cell"
              >
                <p>Campolindo High School</p>
              </td>
              <td
                className="flex flex-1 items-center py-3 font-medium text-lg text-gray-600"
                role="cell"
              >
                <p>12</p>
              </td>
              <td
                className="flex flex-1 items-center py-3 font-medium text-lg text-gray-600"
                role="cell"
              >
                <div className="group relative">
                  <p className="w-8 h-8 bg-blue-300 rounded-full">
                    <span className="absolute left-12 bg-gray-600 text-white border rounded-[10%] px-2 opacity-0 group-hover:opacity-100">
                      Active
                    </span>
                  </p>
                </div>
              </td>
            </tr>
            <tr role="row" className="flex px-4">
              <td className="flex-2 py-3 text-lg" role="cell">
                <Link to={`students/${studentId}`}>
                  <div className="flex items-center gap-2">
                    <div className="h-[64px] w-[64px] rounded-full">
                      <img
                        src="https://i.pravatar.cc/150?img=35"
                        className="h-full w-full rounded-full"
                        alt=""
                      />
                    </div>
                    <p className="font-medium text-lg text-gray-600">
                      Jin Doe
                    </p>
                  </div>
                </Link>
              </td>
              <td
                className="flex flex-2 items-center py-3 font-medium text-lg text-gray-600"
                role="cell"
              >
                <p>Campolindo High School</p>
              </td>
              <td
                className="flex flex-1 items-center py-3 font-medium text-lg text-gray-600"
                role="cell"
              >
                <p>10</p>
              </td>
              <td
                className="flex flex-1 items-center py-3 font-medium text-lg text-gray-600"
                role="cell"
              >
                <div className="group relative">
                  <p className="w-8 h-8 bg-gray-300 rounded-full">
                    <span className="absolute left-12 bg-gray-600 text-white border rounded-[10%] px-2 opacity-0 group-hover:opacity-100">
                      Inactive
                    </span>
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CounselorDashboard;
