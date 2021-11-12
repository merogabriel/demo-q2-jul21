import styled, { css } from "styled-components";

export const Container = styled.div`
  span {
    color: #ff3e41;
    font-size: 16px;
  }
`;

export const InputContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #121212;
  color: #121212;
  padding: 12px;
  width: 100%;
  display: flex;

  transition: 0.5s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #ff3e41;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #300eff;

    &::placeholder {
      color: #555;
    }
  }
`;
