import React from 'react';
import styled from 'styled-components';
import { CardDiv } from '../utils/CardDiv';
import { Buttons } from '../utils/Buttons';
import { useNavigate } from 'react-router-dom';
import { FormatId } from '../utils/FormatId';
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
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

const Pokeball = styled.img`
  width: 6em;
  height: 6em;
  margin-bottom: 0.5em;
  margin-right: 1em;
`;

const Title = styled.h1`
  @font-face {
    font-family: 'EF_jejudoldam';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2')
      format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'EF_jejudoldam';
  letter-spacing: 5px;
  color: white;
  text-shadow: 1px 2px 2px crimson;
  font-size: 2em;
  margin-top: 1em;
  margin-bottom: 0.5em;
  font-weight: 900;
`;

const Dashboard = ({ selectedPokemon, handleDeletePokemon }) => {
  const navigate = useNavigate();
  return (
    <DashboardDiv>
      <Title>나만의 포켓몬 </Title>
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
                  onClick={() => {
                    navigate(`/detail?id=${p.id}`);
                  }}
                  key={p.id}
                  style={{
                    width: '130px',
                    marginRight: '1em',
                    marginBottom: '10px',
                  }}
                >
                  <img src={p.img} alt='' />
                  <p>{p.name}</p>
                  <p>{FormatId(p)}</p>
                  <Buttons
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeletePokemon(p);
                    }}
                  >
                    삭제
                  </Buttons>
                </CardDiv>
              );
            })}
      </div>
    </DashboardDiv>
  );
};

export default Dashboard;
