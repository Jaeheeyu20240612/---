import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../slices/pokemonSlice'; // 리듀서 전체를 가져옴
import pokemonDataReducer from '../slices/pokemonDataSlice'; // 리듀서 전체를 가져옴

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    pokemonData: pokemonDataReducer, // 상태의 키를 'pokemon'으로 설정
  },
});
