import styled from 'styled-components';

const Buttons = styled.button`
  padding: 0.3em;
  width: 50px;
  border: none;
  background-color: crimson;
  color: white;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: black;
    transition: 0.5s;
  }
`;
export { Buttons };
