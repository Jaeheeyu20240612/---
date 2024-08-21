import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
const Home = () => {
  const navigate = useNavigate();
  return (
    <LogoDiv>
      <Logo src='https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png' />
      <button
        onClick={() => {
          navigate('/dex');
        }}
      >
        포켓몬 도감 시작하기
      </button>
    </LogoDiv>
  );
};

export default Home;
