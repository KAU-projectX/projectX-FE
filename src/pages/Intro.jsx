import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import bg1 from '../assets/img/Intro1.jpeg';
import bg2 from '../assets/img/Intro2.jpeg';
import bg3 from '../assets/img/Intro3.png';
import logo from '../assets/img/woravel_logo.svg'; // 로고 이미지 경로
import { useNavigate } from 'react-router-dom';

// 이미지 배열
const images = [bg1, bg2, bg3];

// 키프레임 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex; 
  justify-content: center; 
  align-items: center;
`;

const BackgroundImage = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.bgimage})`
  }
}))`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.isActive ? 1 : 0)};
  animation: ${props => (props.isActive ? css`${fadeIn} 1.5s ease-in-out` : css`${fadeOut} 1.5s ease-in-out`)};
  transition: opacity 1.5s ease-in-out;
  z-index: 1; /* Background images are in the background */
`;

const IntroDiv = styled.div`
  position: relative;
  z-index: 2; 
  background-color: #3DB5FF;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroImg = styled.div`
  position: absolute;
  z-index: 3;
  background-image: url(${logo}); /* 예시로 bg2를 사용 */
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Intro() {

  const navigate = useNavigate()

  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLogin=()=>{
    navigate('/login');
    
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImage((prevImage) => (prevImage + 1) % images.length);
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setIsTransitioning(false);
      }, 1500); // 이미지 전환 시간을 고려하여 타이머 설정
    }, 5000); // 5초마다 이미지 전환

    return () => clearInterval(interval);
  }, [currentImage]);




  return (
    <BackgroundWrapper>
      <BackgroundImage bgimage={images[currentImage]} isActive={!isTransitioning} />
      <BackgroundImage bgimage={images[nextImage]} isActive={isTransitioning} />
      <IntroDiv>
        
      </IntroDiv>
      <IntroImg onClick={handleLogin} />
    </BackgroundWrapper>
  );
}
