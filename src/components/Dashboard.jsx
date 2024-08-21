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
const PokeballDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Pokeball = styled.img`
  background-color: white;
  padding: 0.5em;
  width: 10%;
  height: 10%;
  margin-bottom: 0.5em;
  margin: 0px 10px 10px 10px;
  border-radius: 8px;
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
      <PokeballDiv>
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
      </PokeballDiv>
    </DashboardDiv>
  );
};

export default Dashboard;
