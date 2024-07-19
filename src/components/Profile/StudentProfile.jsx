import StudentInformation from "./StudentInformation";
import StudentNameCard from "./StudentNameCard";
import StudentNavigationMenu from "./StudentNavigationMenu";
import StudentStatistics from "./StudentStatistics";

function StudentProfile() {
  return (
    <div className="h-[calc(100vh-80px)] flex">
      <div className="flex flex-col">
        <StudentNameCard />
        <StudentNavigationMenu />
      </div>
      <div className="bg-white py-2 mt-4 mx-4 flex-10 border border-t-8 border-blue-300 rounded-t-lg">
        <StudentInformation />
        <StudentStatistics />
      </div>
    </div>
  );
}

export default StudentProfile;
