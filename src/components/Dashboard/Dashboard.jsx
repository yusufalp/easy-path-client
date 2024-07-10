import { useSelector } from "react-redux";
import Role from "../Profile/Role";

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  return <div>{user && user.roles.length ? <h1>Hello</h1> : <Role />}</div>;
}

export default Dashboard;
