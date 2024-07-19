import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./shared/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Connect/Login/Login";
import Signup from "./components/Connect/Signup/Signup";
import CounselorDashboard from "./components/Dashboard/CounselorDashboard";
import StudentProfile from "./components/Profile/StudentProfile";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/:counselorId" element={<CounselorDashboard />} />
        <Route
          path="/dashboard/:counselorId/students/:studentId"
          element={<StudentProfile />}
        />
      </Routes>
    </>
  );
}

export default App;
