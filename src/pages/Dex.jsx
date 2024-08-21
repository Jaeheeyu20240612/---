import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../mock';
const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const handleAddPokemon = (pokemon) => {
    const addedPokemon = selectedPokemon.find((p) => p.id === pokemon.id);
    if (addedPokemon) {
      return alert('이미 추가된 포켓몬이에요');
    }
    if (selectedPokemon.length >= 6) {
      return alert('포켓몬은 최대 6마리까지 추가할 수 있어요');
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const handleDeletePokemon = (pokemon) => {
    const filteredPokemon = selectedPokemon.filter((p) => p.id !== pokemon.id);
    if (filteredPokemon) {
      setSelectedPokemon(filteredPokemon);
    }
  };
  return (
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        handleDeletePokemon={handleDeletePokemon}
      />
      <PokemonList MOCK_DATA={MOCK_DATA} handleAddPokemon={handleAddPokemon} />;
    </div>
  );
};

export default Dex;
