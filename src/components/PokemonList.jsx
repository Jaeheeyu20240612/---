import React, { useContext } from 'react';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';

const CardListDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 1em;
  margin: auto;
  background-color: gold;
  border-radius: 8px;
`;
const PokemonList = ({ MOCK_DATA }) => {
  return (
    <CardListDiv>
      {MOCK_DATA.map((data) => {
        const pokemon = {
          id: data.id,
          img: data.img_url,
          name: data.korean_name,
          types: data.types,
          desc: data.dscription,
        };

        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </CardListDiv>
  );
};

export default PokemonList;
