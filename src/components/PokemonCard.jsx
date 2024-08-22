import React from 'react';
import { CardDiv } from '../utils/CardDiv';
import { Buttons } from '../utils/Buttons';
import { useNavigate } from 'react-router-dom';
import { FormatId } from '../utils/FormatId';
import Swal from 'sweetalert2';

const PokemonCard = ({ pokemon, handleAddPokemon }) => {
  const navigate = useNavigate();

  return (
    <CardDiv
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
          handleAddPokemon(pokemon);
        }}
      >
        추가
      </Buttons>
    </CardDiv>
  );
};
export default PokemonCard;
