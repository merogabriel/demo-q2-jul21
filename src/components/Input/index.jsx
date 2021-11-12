import { Container, InputContainer } from "./styles";

const Input = ({ register, name, error, ...rest }) => {
  return (
    <Container>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </InputContainer>
      {error && <span>{error} </span>}
    </Container>
  );
};

export default Input;
