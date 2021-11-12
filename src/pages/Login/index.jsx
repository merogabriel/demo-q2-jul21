import { Link } from "react-router-dom";
import LayoutContainer from "../../components/LayoutContainer";
import Input from "../../components/Input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory, Redirect } from "react-router-dom";

import api from "../../services/api";
import { toast } from "react-hot-toast";

const Login = ({ auth, setAuth }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Minímo 6 digítos")
      .required("Campo obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  const handleSignIn = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;

        localStorage.setItem("@NomeDaAplicação:token", token);
        localStorage.setItem("@NomeDaAplicação:user", JSON.stringify(user));

        toast.success("Login feito com sucesso!");
        history.push("/dashboard");

        setAuth(true);
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  return (
    <LayoutContainer>
      Login
      <Link to="/"> Ir para a home </Link>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <Input
          placeholder="Seu email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          placeholder="Sua senha"
          register={register}
          name="password"
          type="password"
          error={errors.password?.message}
        />
        <button type="submit">Login</button>
      </form>
    </LayoutContainer>
  );
};

export default Login;
