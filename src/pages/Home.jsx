import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Buttons } from '../utils/Buttons';

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeDiv>
      <LogoDiv>
        <Logo src='https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png' />
        <Buttons
          style={{ width: '12em', height: '3em' }}
          onClick={() => {
            navigate('/dex');
          }}
        >
          포켓몬 도감 시작하기
        </Buttons>
      </LogoDiv>
    </HomeDiv>
  );
};

export default Home;
const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const Logo = styled.img`
  width: 40%;
  height: 20%;
`;
const HomeDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2d73dbd;
`;
