import styled from "styled-components";

const Button = styled.button`
  width: 10rem;
  height: 4rem;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.btn};
  color: ${({ theme }) => theme.basic};
  margin: 1rem;
`;

export default Button;
