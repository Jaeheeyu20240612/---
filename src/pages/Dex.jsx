import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../mock';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PokemonProvider } from '../context/Context';
const MainButton = styled.button`
  background-color: green;
  border: none;
  color: white;
  position: absolute;
  padding: 1em;
  border-radius: 9px;
  top: 3em;
  left: 3em;
  cursor: pointer;
`;
const Dex = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Dashboard />
      <PokemonList MOCK_DATA={MOCK_DATA} />;
      <MainButton
        onClick={() => {
          navigate('/');
        }}
      >
        HOME
      </MainButton>
    </div>
  );
};

export default Dex;
