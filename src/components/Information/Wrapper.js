import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 1rem;
  border: 0.1rem solid #345ae0;
  position: fixed;
  background: #fff;
  transition: all 0.4s ease-in-out;
  right: ${({ show }) => (show ? "2px" : "-550px")};
  z-index: 3;
  width: 55rem;

  .handle {
    position: absolute;
    transform: rotate(90deg);
    left: -6.6rem;
    top: 50%;
    background: blue;
    width: 10rem;
    color: #fff;
    text-align: center;
    padding: 0.4rem;
    cursor: pointer;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  p {
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;
  }

  .marker {
    background: #f3f5ff;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #000;
    margin: 0.4rem;
    display: inline-flex;
  }
`;

export default Wrapper;
