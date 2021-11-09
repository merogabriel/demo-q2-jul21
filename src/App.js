import "./app.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Profile from "./pages/Profile";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
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
}

export default App;
