import styled from 'styled-components';

const CardDiv = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  gap: 0.5em;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 8px;
  margin-bottom: 10px;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.2s, box-shadow 0.2s;
  }
`;

export { CardDiv };
