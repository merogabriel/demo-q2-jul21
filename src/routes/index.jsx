import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import { useState } from "react";

const Routes = () => {
  const [user, setUser] = useState({});

  console.log(user);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login user={user} />
      </Route>

      <Route path="/signup">
        <Signup setUser={setUser} />
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
