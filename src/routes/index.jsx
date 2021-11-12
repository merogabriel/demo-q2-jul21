import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@NomeDaAplicação:token");

    if (token) {
      return setAuth(true);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home auth={auth} />
      </Route>

      <Route path="/login">
        <Login auth={auth} setAuth={setAuth} />
      </Route>

      <Route path="/signup">
        <Signup auth={auth} />
      </Route>

      <Route path="/dashboard">
        <Dashboard auth={auth} setAuth={setAuth} />
      </Route>

      {/* Listagem de usuários */}
      <Route exact path="/users">
        <Users />
      </Route>

      {/* Perfil do usuário */}
      <Route path="/users/:id">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
