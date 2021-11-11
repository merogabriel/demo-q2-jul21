import { Link } from "react-router-dom";
import LayoutContainer from "../../components/LayoutContainer";

const Login = ({ user }) => {
  return (
    <LayoutContainer>
      Login - {user.name}
      <Link to="/"> Ir para a home </Link>
    </LayoutContainer>
  );
};

export default Login;
