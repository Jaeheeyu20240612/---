import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
/* eslint-disable no-unused-vars */
const initialState = [];

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    handleAddPokemon: (state, action) => {
      const addedPokemon = state.find((p) => p.id === action.payload.id);
      if (addedPokemon) {
        Swal.fire('이미 추가된 포켓몬이에요');
        return;
      }
      if (state.length >= 6) {
        Swal.fire(`포켓몬은 최대 6마리까지
          추가할 수 있어요`);
        return;
      }
      state.push(action.payload);
      Swal.fire(`${action.payload.name} 포켓몬이 추가됐습니다!`);
    },
    handleDeletePokemon: (state, action) => {
      return state.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { handleAddPokemon, handleDeletePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
