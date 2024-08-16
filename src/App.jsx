import { Routes, Route } from "react-router-dom";

import Header from "./shared/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Connect/Login/Login";
import Signup from "./components/Connect/Signup/Signup";
import CounselorDashboard from "./components/Dashboard/CounselorDashboard";
import StudentProfile from "./components/Profile/StudentProfile";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route
            path="/dashboard/:counselorId"
            element={<CounselorDashboard />}
          />
          <Route
            path="/dashboard/:counselorId/students/:studentId"
            element={<StudentProfile />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
