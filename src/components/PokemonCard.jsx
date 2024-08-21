import React from 'react';
import { CardDiv } from '../utils/CardDiv';

const PokemonCard = ({ pokemon, handleAddPokemon }) => {
  return (
    <CardDiv>
      <img src={pokemon.img} alt='pokemon.name' />
      <p>{pokemon.name}</p>
      <p>{pokemon.id}</p>
      <button
        onClick={() => {
          handleAddPokemon(pokemon);
        }}
      >
        추가
      </button>
    </CardDiv>
  );
};

export default PokemonCard;
