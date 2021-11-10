import { Link, useHistory } from "react-router-dom";
import LayoutContainer from "../../components/LayoutContainer";

const Home = () => {
  const history = useHistory();

  return (
    <LayoutContainer>
      Home aaa
      <Link to="/login"> Ir para o login </Link>
      <Link to="/users"> Ir para a listagem de usuários </Link>
      <Link to="/signup"> Ir para o cadastro </Link>
      <button onClick={() => history.push("/login")}>
        Ir para o login (usando history)
      </button>
    </LayoutContainer>
  );
};

export default Home;
