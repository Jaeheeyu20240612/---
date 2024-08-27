// import React, { createContext, useContext, useState } from 'react';
// import Swal from 'sweetalert2';

// export const PokemonContext = createContext(null);

// export function usePokemon() {
//   return useContext(PokemonContext);
// }

// export function PokemonProvider({ children }) {
//   const [selectedPokemon, setSelectedPokemon] = useState([]);

//   // 포켓몬 추가
//   const handleAddPokemon = (pokemon) => {
//     const addedPokemon = selectedPokemon.find((p) => p.id === pokemon.id);
//     if (addedPokemon) {
//       return Swal.fire('이미 추가된 포켓몬이에요');
//     }
//     if (selectedPokemon.length >= 6) {
//       return Swal.fire(`포켓몬은 최대 6마리까지
//         추가할 수 있어요`);
//     }
//     setSelectedPokemon([...selectedPokemon, pokemon]);
//     Swal.fire(`${pokemon.name} 포켓몬이 추가됐습니다!`);
//   };

//   // 포켓몬 삭제
//   const handleDeletePokemon = (pokemon) => {
//     const filteredPokemon = selectedPokemon.filter((p) => p.id !== pokemon.id);
//     setSelectedPokemon(filteredPokemon);
//   };

//   return (
//     <PokemonContext.Provider
//       value={{
//         selectedPokemon,
//         handleAddPokemon,
//         handleDeletePokemon,
//       }}
//     >
//       {children}
//     </PokemonContext.Provider>
//   );
// }
