import { createSlice } from '@reduxjs/toolkit';
import MOCK_DATA from '../mock';

const initialState = MOCK_DATA;

export const pokemonDataSlice = createSlice({
  name: 'pokemonData',
  initialState,
  slicers: {},
});

export const MOCK_DATA_Pokemon = (state) => state.pokemonData;
export default pokemonDataSlice.reducer;
