import Divider from "../../shared/Divider/Divider";

function StudentColleges() {
  return (
    <div className="m-2 flex flex-wrap gap-4 justify-between">
      <div className="w-full flex justify-between p-4">
        <div className="flex gap-4">
          <div>
            <img
              src="https://www.collegeadvisor.com/wp-content/uploads/2021/08/UCBerkeleyCampus-scaled.jpg"
              alt=""
              className="w-48 h-24"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">University of California - Berkeley</p>
            <p>
              Application Deadline: <span>11/1/2024</span>
            </p>
            <p>
              Status: <span className="text-green-600">In progress</span>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="https://gisgeography.com/wp-content/uploads/2020/04/California-Outline-Map.jpg"
            alt=""
            className="w-24 h-24"
          />
        </div>
      </div>
      <Divider message={" / / / "} />
      <div className="w-full flex justify-between p-4">
        <div className="flex gap-4">
          <div>
            <img
              src="https://images.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg"
              alt=""
              className="w-48 h-24"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Harvard University</p>
            <p>
              Application Deadline: <span>2/15/2025</span>
            </p>
            <p>
              Status: <span className="text-red-600">Not started</span>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="https://gisgeography.com/wp-content/uploads/2020/03/Massachusetts-Outline-Map.jpg"
            alt=""
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
}

export default StudentColleges;
