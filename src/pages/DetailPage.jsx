import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FormatId } from '../utils/FormatId';
import { Buttons } from '../utils/Buttons';
import MOCK_DATA from '../mock';

const DetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(location);
  const queryParameter = new URLSearchParams(location.search);
  const id = queryParameter.get('id');
  const clickedPokemon = MOCK_DATA.find((data) => {
    if (data.id === Number(id)) {
      return true;
    }
  });
  const handleBack = () => {
    navigate('/dex');
  };
  return (
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
        <Buttons onClick={handleBack} style={{ width: '8em', height: '2em' }}>
          뒤로 가기
        </Buttons>
      </div>
    </DetailWrap>
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
