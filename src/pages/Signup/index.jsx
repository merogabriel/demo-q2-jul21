import { useForm } from "react-hook-form";
import LayoutContainer from "../../components/LayoutContainer";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Form } from "./styles";
import api from "../../services/api";

import Input from "../../components/Input";

const Signup = ({ setUser }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Minímo 6 digítos")
      .required("Campo obrigatório"),
    /*.matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter uma letra maiúscula, minúscula, números e caracter especial"
      ),*/
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    // acceptTerms: yup.bool().oneOf([true], "Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleSubmitNosso = (data) => {
    // fazer a requisição com os dados recebidos api.post("/users", data).then, e no .then() usar um history.push()
    // ou seja = requisição deu certo, envia o usuario para outra pagina.

    delete data.confirm_password;

    api
      .post("/users", data)
      .then((response) => {
        toast.success("Usuário cadastrado com sucesso");
        reset(); // limpa os campos

        setUser(response.data);
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Email duplicado, tente com outro email");
      });
  };

  const options = ["1 modulo", "2 Modulo", "3 Modulo", "4 Modulo"];

  return (
    <LayoutContainer>
      Signup
      <Form onSubmit={handleSubmit(handleSubmitNosso)}>
        <Input
          placeholder="Seu nome"
          register={register}
          name="name"
          error={errors.name?.message}
        />
        <Input
          placeholder="Seu email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          placeholder="Senha"
          register={register}
          name="password"
          type="password"
          error={errors.password?.message}
        />
        <Input
          placeholder="Confirme sua senha"
          register={register}
          type="password"
          name="confirm_password"
          error={errors.confirm_password?.message}
        />

        <Input
          placeholder="Diga um pouco sobre vc"
          register={register}
          name="bio"
          error={errors.bio?.message}
        />
        <Input
          placeholder="Seu nome"
          register={register}
          name="contact"
          error={errors.contact?.message}
        />

        <Input
          placeholder="Seu nome"
          register={register}
          name="course_module"
          error={errors.course_module?.message}
        />

        <button type="submit">Enviar</button>
      </Form>
    </LayoutContainer>
  );
};

export default Signup;
