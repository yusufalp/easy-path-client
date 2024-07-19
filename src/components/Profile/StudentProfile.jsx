import { useState } from "react";

import StudentInformation from "./StudentInformation";
import StudentNameCard from "./StudentNameCard";
import StudentNavigationMenu from "./StudentNavigationMenu";
import StudentStatistics from "./StudentStatistics";
import StudentColleges from "./StudentColleges";
import StudentScholarships from "./StudentScholarships";
import StudentExams from "./StudentExams";
import StudentDocuments from "./StudentDocuments";
import StudentReferences from "./StudentReferences";

function StudentProfile() {
  const [currentSection, setCurrentSection] = useState("default");

  return (
    <div className="h-[calc(100vh-80px)] flex">
      <div className="flex flex-col">
        <StudentNameCard setCurrentSection={setCurrentSection} />
        <StudentNavigationMenu setCurrentSection={setCurrentSection} />
      </div>
      <div className="bg-white py-2 mt-4 mx-4 flex-10 border border-t-8 border-blue-300 rounded-t-lg">
        {currentSection === "default" ? (
          <>
            <StudentInformation />
            <StudentStatistics />
          </>
        ) : currentSection === "Colleges" ? (
          <StudentColleges />
        ) : currentSection === "Scholarships" ? (
          <StudentScholarships />
        ) : currentSection === "Exams" ? (
          <StudentExams />
        ) : currentSection === "Documents" ? (
          <StudentDocuments />
        ) : (
          <StudentReferences />
        )}
      </div>
    </div>
  );
}

export default StudentProfile;
