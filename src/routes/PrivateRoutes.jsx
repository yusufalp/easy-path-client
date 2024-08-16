import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoutes() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
