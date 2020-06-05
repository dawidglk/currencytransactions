import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 400px;
  overflow-y: scroll;

  &&::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &&::-webkit-scrollbar {
    width: 5px;
    background-color: #345ae0;
  }

  &&::-webkit-scrollbar-thumb {
    background-color: #000000;
    border: 1px solid #345ae0;
  }

  li {
    background: #f3f5ff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 1rem;
    padding: 1rem;
    margin: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      @media (min-width: 768px) {
        width: 14rem;
      }
      &:nth-of-type(1) {
        border: 1px solid grey;
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        border-radius: 50%;
      }
    }
  }
`;

export default Wrapper;
