import { useForm } from "react-hook-form";
import LayoutContainer from "../../components/LayoutContainer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from 'react-router-dom'

import { Form } from "./styles";
import api from "../../services/api";

const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory()

  const handleSubmitNosso = (data) => {
    // fazer a requisição com os dados recebidos api.post("/users", data).then, e no .then() usar um history.push()
    // ou seja = requisição deu certo, envia o usuario para outra pagina.
    api
      .post("/users", data)
      .then((response) => {
        console.log(response.data);

        history.push("/login")
      })
      .catch((err) => console.log(err));
  };

  return (
    <LayoutContainer>
      Signup
      <Form onSubmit={handleSubmit(handleSubmitNosso)}>
        <input placeholder="Seu nome" {...register("name")} />
        <p> {errors.name?.message} </p>
        <input placeholder="Email" type="email" {...register("email")} />
        <p> {errors.email?.message} </p>
        <input placeholder="Senha" type="password" {...register("password")} />
        <p> {errors.password?.message} </p>
        <input
          placeholder="Confirmar senha"
          type="password"
          {...register("confirm_password")}
        />
        <p> {errors.confirm_password?.message} </p>
        <input
          placeholder="Descreva um pouco de si mesmo"
          {...register("bio")}
        />
        <p> {errors.bio?.message} </p>
        <input
          placeholder="Contato (linkedin, telefone etc)"
          {...register("contact")}
        />
        <p> {errors.contact?.message} </p>
        <input placeholder="Módulo do curso" {...register("course_module")} />
        <p> {errors.course_module?.message} </p>
        <button type="submit">Enviar</button>
      </Form>
    </LayoutContainer>
  );
};

export default Signup;
