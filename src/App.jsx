import { Switch, Route } from "react-router-dom/cjs/react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Connect/Login/Login";
import Signup from "./components/Connect/Signup/Signup";

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
    </Switch>
  );
}

export default App;
