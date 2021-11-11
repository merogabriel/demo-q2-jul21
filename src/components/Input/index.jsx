import { Container, InputContainer } from "./styles";

const Input = ({ register, name, error, ...rest }) => {
  console.log(rest);

  return (
    <Container>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputContainer>

      <div>{error && <span>{error} </span>}</div>
    </Container>
  );
};

export default Input;
