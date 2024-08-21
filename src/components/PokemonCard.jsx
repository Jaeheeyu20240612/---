import React from 'react';
import { CardDiv } from '../utils/CardDiv';
import { Buttons } from '../utils/Buttons';

const PokemonCard = ({ pokemon, handleAddPokemon }) => {
  return (
    <CardDiv>
      <img src={pokemon.img} alt='pokemon.name' />
      <p>{pokemon.name}</p>
      <p>{pokemon.id}</p>
      <Buttons
        onClick={() => {
          handleAddPokemon(pokemon);
        }}
      >
        추가
      </Buttons>
    </CardDiv>
  );
};
export default PokemonCard;
