import styled, { css } from "styled-components";

const Input = styled.img`
  width: ${({ small }) => (small ? "1.5rem" : "2rem")};
  margin: 0 0.5rem;

  ${({ active }) =>
    active &&
    css`
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    `};
`;

export default Input;
