import styled from "styled-components";

const Input = styled.input`
  height: 4rem;
  border-radius: 0.4rem;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: 0.1rem solid ${({ theme }) => theme.btn};
  padding: 0 1rem;
  margin: 1rem;
`;

export default Input;
