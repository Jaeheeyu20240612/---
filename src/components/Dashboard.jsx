import React from 'react';
import styled from 'styled-components';
import { CardDiv } from '../utils/CardDiv';
const DashboardDiv = styled.div`
  width: 80%;
  height: 30%;
  background-color: gold;
  margin: auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
`;

const Pokeball = styled.img`
  width: 6em;
  height: 6em;
  margin-bottom: 0.5em;
`;
const Dashboard = ({ selectedPokemon }) => {
  return (
    <DashboardDiv>
      <h1 style={{ fontSize: '1.5em', marginTop: '1em', marginBottom: '.5em' }}>
        나만의 포켓몬
      </h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {selectedPokemon.length === 0
          ? Array.from({ length: 6 }).map((_, index) => {
              return (
                <Pokeball
                  key={index}
                  src='https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png'
                />
              );
            })
          : selectedPokemon.map((p) => {
              return (
                <CardDiv
                  style={{
                    width: '130px',
                    marginRight: '1em',
                    marginBottom: '10px',
                  }}
                >
                  <img src={p.img} alt='' />
                  <p>{p.name}</p>
                </CardDiv>
              );
            })}
        {/* {Array.from({ length: 6 }).map((_, index) => {
          return (
            <Pokeball
              key={index}
              src='https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png'
            />
          );
        })} */}
      </div>
    </DashboardDiv>
  );
};

export default Dashboard;
