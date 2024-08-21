import React from 'react';
import { useLocation } from 'react-router-dom';
import MOCK_DATA from '../mock';
const DetailPage = () => {
  const location = useLocation();
  //   console.log(location);
  const queryParameter = new URLSearchParams(location.search);
  const id = queryParameter.get('id');
  console.log(id);
  //   const pokemonDatas = MOCK_DATA.map((data) => {
  //     if (data.id === Number(id)) {
  //       const poke = {
  //         img: data.img_url,
  //       };
  //     }
  //     return pokemonDatas;
  //   });

  const clickedPokemonId = MOCK_DATA.find((data) => {
    if (data.id === id) {
      return clickedPokemonId;
    }
  });
  return (
    <div>
      {MOCK_DATA.map((p) => {
        return (
          <div key={clickedPokemonId}>
            <p>{p.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DetailPage;
