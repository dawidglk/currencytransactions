import styled from "styled-components";

const Row = styled.div`
  background-color: ${({ theme }) => theme.basic};
  border-radius: 10px;
  padding: 20px;
  max-width: 1000px;
  margin: 20px auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export default Row;
