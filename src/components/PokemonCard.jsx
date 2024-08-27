// import React, { useContext } from 'react';
// import { PokemonContext } from '../context/Context';
import { CardDiv } from '../utils/CardDiv';
import { Buttons } from '../utils/Buttons';
import { useNavigate } from 'react-router-dom';
import { FormatId } from '../utils/FormatId';
import { useDispatch } from 'react-redux';
import { handleAddPokemon } from '../slices/pokemonSlice';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { handleAddPokemon } = useContext(PokemonContext);
  return (
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
          dispatch(handleAddPokemon(pokemon));
        }}
      >
        추가
      </Buttons>
    </CardDiv>
  );
};
export default PokemonCard;
