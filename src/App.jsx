import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Connect/Login/Login";
import Signup from "./components/Connect/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
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
  );
}

export default App;
