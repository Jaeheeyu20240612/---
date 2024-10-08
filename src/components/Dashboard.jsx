import React, { useContext } from 'react';
import styled from 'styled-components';
import { CardDiv } from '../utils/CardDiv';
import { Buttons } from '../utils/Buttons';
import { useNavigate } from 'react-router-dom';
import { FormatId } from '../utils/FormatId';
import { useDispatch, useSelector } from 'react-redux';
// import { PokemonContext } from '../context/Context';
import { handleDeletePokemon } from '../slices/pokemonSlice';
const Dashboard = () => {
  const navigate = useNavigate();
  // const { selectedPokemon, handleDeletePokemon } = useContext(PokemonContext);
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemon);
  return (
    <DashboardDiv>
      <Title>나만의 포켓몬 </Title>
      <PokeballDiv>
        {Array.from({ length: 6 }).map((_, index) => {
          const pokemon = selectedPokemon[index];
          return pokemon ? (
            <CardDiv
              key={pokemon.id}
              onClick={() => {
                navigate(`/detail?id=${pokemon.id}`);
              }}
            >
              <img src={pokemon.img} alt='pokemon.name' />
              <p>{pokemon.name}</p>
              <p>{FormatId(pokemon)}</p>
              <Buttons
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(handleDeletePokemon(pokemon));
                }}
              >
                삭제
              </Buttons>
            </CardDiv>
          ) : (
            <Pokeball src='https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png' />
          );
        })}
      </PokeballDiv>
    </DashboardDiv>
  );
};

export default Dashboard;

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
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  border-radius: 8px;
  gap: 0.5em;
  margin-top: 20px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;
const Pokeball = styled.img`
  background-color: white;
  padding: 5px;
  width: 14%;
  height: 190px;
  margin-bottom: 0.5em;
  margin: 0px 5px 10px 5px;
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
