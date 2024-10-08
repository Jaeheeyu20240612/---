import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FormatId } from '../utils/FormatId';
import { Buttons } from '../utils/Buttons';
import { handleAddPokemon } from '../slices/pokemonSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MOCK_DATA_Pokemon } from '../slices/pokemonDataSlice';

const DetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const pokemonData = useSelector(MOCK_DATA_Pokemon);

  const queryParameter = new URLSearchParams(location.search);
  const id = queryParameter.get('id');
  const clickedPokemon = pokemonData.find((data) => {
    if (data.id === Number(id)) {
      return true;
    }
  });
  const handleBack = () => {
    navigate('/dex');
  };
  return (
    <DetailDiv>
      <DetailWrap>
        <div key={clickedPokemon.id}>
          <img
            style={{ width: '200px', height: '200px' }}
            src={clickedPokemon.img_url}
            alt=''
          />
          <Name>{clickedPokemon.korean_name}</Name>
          <TagP>{FormatId(clickedPokemon)}</TagP>
          <TagP>{clickedPokemon.description}</TagP>
          <BtnDiv>
            <Buttons
              onClick={() => {
                const updatedPokemon = {
                  ...clickedPokemon,
                  img: clickedPokemon.img_url,
                  name: clickedPokemon.korean_name,
                };
                dispatch(handleAddPokemon(updatedPokemon));
              }}
              style={{ width: '7em', height: '2em' }}
            >
              추가
            </Buttons>
            <Buttons
              onClick={handleBack}
              style={{ width: '7em', height: '2em' }}
            >
              뒤로 가기
            </Buttons>
          </BtnDiv>
        </div>
      </DetailWrap>
    </DetailDiv>
  );
};

export default DetailPage;
const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Name = styled.h1`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 10px;
`;

const TagP = styled.p`
  margin-bottom: 10px;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const DetailDiv = styled.div``;
