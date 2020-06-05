import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    div {
      flex-direction: row;
    }
  }
`;

export default Wrapper;
