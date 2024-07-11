import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./shared/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Connect/Login/Login";
import Signup from "./components/Connect/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <Header user={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
