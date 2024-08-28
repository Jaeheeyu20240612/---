/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import { MOCK_DATA_Pokemon } from '../slices/pokemonDataSlice';

const PokemonList = ({ MOCK_DATA }) => {
  const pokemonData = useSelector(MOCK_DATA_Pokemon);
  return (
    <CardListDiv>
      {pokemonData.map((data) => {
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
const CardListDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  margin: auto;
  background-color: gold;
  border-radius: 8px;
`;
