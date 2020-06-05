import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  min-width: 12.2rem;
  display: flex;
  align-items: center;
`;

export default Paragraph;
