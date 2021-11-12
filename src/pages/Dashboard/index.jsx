import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";

const Dashboard = ({ auth, setAuth }) => {
  const [user] = useState(
    JSON.parse(localStorage.getItem("@NomeDaAplicação:user")) || {}
  );

  const [token] = useState(
    localStorage.getItem("@NomeDaAplicação:token") || ""
  );

  const history = useHistory();

  useEffect(() => {
    // Primeiro parametro, endpoint. Segundo body, terceiro cabeçalho

    if (auth) {
      api
        .get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => toast.success(`Bem vindo, ${response.data.name}`));
    }
  }, []);

  if (!auth) {
    return <Redirect to="/login" />;
  }

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    history.push("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
