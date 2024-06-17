import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import kakaoLogo from './kakaologin.png';
import naverLogo from './naverlogin.png'





const LoginText = styled.div`
`

const BtnWrapper = styled.div`
  display:flex;
  justify-content : space-between;
  margin : 30px;

  img{
    width: 50px;
    height : 50px;
  }

`

const LoginBtn = styled.div`
  text-align : center;
`

const LoginModal = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(`/main`);
  };

  //카카오 로그인 
  const REST_API_KEY= '20483329cf0b7ad5c283f195f697d397'
  const REDIRECT_URL = 'http://43.200.247.44/login/oauth2/code/kakao' //Redirect URI
      // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`

      
  const handleKakaoLoginClick = () =>{
    window.location.href = kakaoURL
  }

  return (
    <div>
      <LoginText>
        <div>WORAVEL</div>
        <div>제주도에서 <span>WORK</span>와 <span>TRAVEL</span>을 동시에! </div>
        <div>디지털 노마드의 삶을 응원합니다! </div>

      </LoginText>

      <BtnWrapper>
        <LoginBtn onClick={handleKakaoLoginClick}>
          <img src = {kakaoLogo} alt = "카카오 로그인"/>
          <div>카카오 로그인  </div>
        </LoginBtn>
        <LoginBtn >
          <img src = {naverLogo} alt = "네이버 로그인"/>
          <div>네이버 로그인</div>
        </LoginBtn>
        <LoginBtn>
          <button onClick={handleLoginClick}>No Login </button>
          <div>로그인 없이<br/> 둘러볼게요!</div>
        </LoginBtn>
      </BtnWrapper>
      
      
    </div> 
  );
};

export default LoginModal;